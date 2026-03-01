import ProductsHeroSection from "@/components/sections/products/ProductsHeroSection";
import CoreProductsSection from "@/components/sections/products/CoreProductsSection";
import FeaturedFlangesSection from "@/components/sections/products/FeaturedFlangesSection";
import SectorsSection from "@/components/sections/products/SectorsSection";
export default function ProductsPage() {
  return (
    <>
      <ProductsHeroSection />
      <CoreProductsSection />
      <FeaturedFlangesSection />
      <SectorsSection />
    </>
  );
}