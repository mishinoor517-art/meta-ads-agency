import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import CampaignResults from "@/components/CampaignResults";
import CaseStudies from "@/components/CaseStudies";
import PerformanceDashboard from "@/components/PerformanceDashboard";

import ScreenshotGallery from "@/components/ScreenshotGallery";
import Expert from "@/components/Expert";
import About from "@/components/About";
import Process from "@/components/Process";
import PortfolioPreview from "@/components/PortfolioPreview";
import SnapshotBlock from "@/components/SnapshotBlock";
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
      <SnapshotBlock />
      <ScreenshotGallery />
      <Expert />
      <About />
      <Process />
      <PortfolioPreview />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
