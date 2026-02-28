import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import LogisticsSection from "../components/sections/LogisticsSection";
import WhySection from "../components/sections/WhySection";
import CertificationSection from "../components/sections/CertificationSection";
import InspectionSection from "../components/sections/InspectionSection";
import ManufacturingSection from "../components/sections/ManufacturingSection";
import ProductPortfolioSection from "../components/sections/ProductPortfolioSection";
import ProductGridSection from "../components/sections/ProductGridSection";
import SourceMaterialsSection from "../components/sections/SourceMaterialsSection";
import SectorsSection from "../components/sections/SectorsSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LogisticsSection />
      <WhySection />
      <CertificationSection />
      <InspectionSection />
      <ManufacturingSection />
      <ProductPortfolioSection />
      <ProductGridSection />
      <SourceMaterialsSection />
      <SectorsSection />
    </main>
  );
}