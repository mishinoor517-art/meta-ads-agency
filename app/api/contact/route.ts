import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  business?: string;
  budget?: string;
  goals?: string;
  message?: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const lead = {
    name,
    email,
    phone: (body.phone ?? "").toString().trim(),
    business: (body.business ?? "").toString().trim(),
    budget: (body.budget ?? "").toString().trim(),
    goals: (body.goals ?? "").toString().trim(),
    message: (body.message ?? "").toString().trim(),
    submittedAt: new Date().toISOString(),
  };

  // 1. Always persist the lead locally so nothing is lost even if no
  //    email service is configured yet.
  try {
    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });
    await fs.appendFile(
      path.join(dataDir, "leads.jsonl"),
      JSON.stringify(lead) + "\n",
      "utf8"
    );
  } catch (err) {
    console.error("Failed to persist lead to disk:", err);
  }

  // 2. Optionally forward the lead by email if RESEND_API_KEY and
  //    CONTACT_TO_EMAIL are set in the environment. Get a free key at
  //    https://resend.com if you want real email notifications.
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (resendKey && toEmail) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
          to: toEmail,
          subject: `New lead: ${lead.name}`,
          text: [
            `Name: ${lead.name}`,
            `Email: ${lead.email}`,
            `Phone: ${lead.phone || "-"}`,
            `Business: ${lead.business || "-"}`,
            `Monthly Ad Budget: ${lead.budget || "-"}`,
            `Goals: ${lead.goals || "-"}`,
            `Message: ${lead.message || "-"}`,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error("Failed to send lead notification email:", err);
    }
  } else {
    // No email service configured yet — the lead is still safely saved above.
    console.log("New lead received (no email service configured):", lead);
  }

  return NextResponse.json({ ok: true });
}
