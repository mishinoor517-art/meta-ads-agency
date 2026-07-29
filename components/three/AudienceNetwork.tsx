"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 90;
const CONNECT_DIST = 2.6;

function Network() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { viewport, pointer } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  const velocities = useMemo(() => {
    const arr = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 0.004;
    }
    return arr;
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(NODE_COUNT * NODE_COUNT * 6), 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    const posAttr = pointsRef.current?.geometry.attributes.position as THREE.BufferAttribute;
    if (!posAttr) return;

    for (let i = 0; i < NODE_COUNT; i++) {
      posAttr.array[i * 3] += velocities[i * 3];
      posAttr.array[i * 3 + 1] += velocities[i * 3 + 1];
      posAttr.array[i * 3 + 2] += velocities[i * 3 + 2];

      for (let a = 0; a < 3; a++) {
        const bound = a === 1 ? 4 : a === 2 ? 3 : 7;
        const idx = i * 3 + a;
        if (posAttr.array[idx] > bound || posAttr.array[idx] < -bound) {
          velocities[idx] *= -1;
        }
      }
    }
    posAttr.needsUpdate = true;

    // build connections
    const linePos = lineGeometry.attributes.position.array as Float32Array;
    let idx = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      const xi = posAttr.array[i * 3];
      const yi = posAttr.array[i * 3 + 1];
      const zi = posAttr.array[i * 3 + 2];
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const xj = posAttr.array[j * 3];
        const yj = posAttr.array[j * 3 + 1];
        const zj = posAttr.array[j * 3 + 2];
        const d = Math.sqrt((xi - xj) ** 2 + (yi - yj) ** 2 + (zi - zj) ** 2);
        if (d < CONNECT_DIST && idx < linePos.length - 6) {
          linePos[idx++] = xi;
          linePos[idx++] = yi;
          linePos[idx++] = zi;
          linePos[idx++] = xj;
          linePos[idx++] = yj;
          linePos[idx++] = zj;
        }
      }
    }
    lineGeometry.setDrawRange(0, idx / 3);
    lineGeometry.attributes.position.needsUpdate = true;

    // gentle mouse parallax + drift on the whole group
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.y = t * 0.02 + pointer.x * 0.15;
      groupRef.current.rotation.x = pointer.y * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#4c6fff" sizeAttenuation transparent opacity={0.9} />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#4c6fff" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export default function AudienceNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <Network />
    </Canvas>
  );
}
