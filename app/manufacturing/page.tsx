import ManufacturingHeroSection from "@/components/sections/manufacturing/ManufacturingHeroSection";
import InfrastructureBreakdownSection from "@/components/sections/manufacturing/InfrastructureBreakdownSection";
import ProductionStrengthSection from "@/components/sections/manufacturing/ProductionStrengthSection";
import ManufacturingCTASection from "@/components/sections/manufacturing/ManufacturingCTASection";
export default function ManufacturingPage() {
  return (
    <>
      <ManufacturingHeroSection />
      <InfrastructureBreakdownSection />
      <ProductionStrengthSection />
      <ManufacturingCTASection />
    </>
  );
}