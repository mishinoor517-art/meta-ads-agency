import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import CampaignResults from "@/components/CampaignResults";
import CaseStudies from "@/components/CaseStudies";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import ClientSuccessStories from "@/components/ClientSuccessStories";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import Expert from "@/components/Expert";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <CampaignResults />
      <CaseStudies />
      <PerformanceDashboard />
      <ClientSuccessStories />
      <ScreenshotGallery />
      <Expert />
      <About />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
