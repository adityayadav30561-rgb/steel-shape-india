import Image from "next/image";
import Container from "../ui/Container";
import { CheckCircle, Box, Settings } from "lucide-react";

export default function SourceMaterialsSection() {
  return (
    <section className="w-full bg-[#171a1f] py-16 sm:py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="min-w-0">

            <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase mb-6 font-semibold">
              Raw Materials
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-4 sm:mb-6">
              Source Materials
            </h2>

            <p className="text-[#BDC1CA] max-w-xl text-base sm:text-lg mb-8 sm:mb-10">
              We source high-quality forging-grade ingots and concast billets/blooms
              from certified and regularly audited suppliers. Multiple grades and
              sizes maintained in stock for fast production cycles.
            </p>

            <div className="space-y-6 mb-12">

              <div className="flex items-center gap-4 text-[#BDC1CA]">
                <CheckCircle className="text-[#636AE8]" size={18} />
                Certified Audit-Ready Suppliers
              </div>

              <div className="flex items-center gap-4 text-[#BDC1CA]">
                <Box className="text-[#636AE8]" size={18} />
                High-Grade Concast Billets
              </div>

              <div className="flex items-center gap-4 text-[#BDC1CA]">
                <Settings className="text-[#636AE8]" size={18} />
                Multiple Size Variants in Stock
              </div>

            </div>

            {/* TRACEABILITY BLOCK */}
            <div className="bg-[#141732] border border-white/10 rounded-2xl p-6">
              <p className="text-[#BDC1CA] italic">
                "Total traceability of raw materials from the mill to the
                finished product is our guarantee for every batch."
              </p>
            </div>

          </div>

          {/* RIGHT SIDE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 min-w-0">

            {/* CARD 1 */}
            <div className="bg-[#1e2128] rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 relative">
              <Image
                src="/carbon-steel.png"
                alt="Carbon Steel"
                width={600}
                height={400}
                className="w-full h-44 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Carbon Steel
                </h3>
                <p className="text-xs tracking-widest text-[#BDC1CA] uppercase">
                  Forging Grade Certification
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#1e2128] rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 relative">
              <Image
                src="/alloy-steel.png"
                alt="Alloy Steel"
                width={600}
                height={400}
                className="w-full h-44 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Alloy Steel
                </h3>
                <p className="text-xs tracking-widest text-[#BDC1CA] uppercase">
                  Forging Grade Certification
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#1e2128] rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 relative">
              <Image
                src="/stainless-steel.png"
                alt="Stainless Steel"
                width={600}
                height={400}
                className="w-full h-44 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Stainless Steel
                </h3>
                <p className="text-xs tracking-widest text-[#BDC1CA] uppercase">
                  Forging Grade Certification
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#1e2128] rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 relative">
              <Image
                src="/duplex-stainless-steel.png"
                alt="Duplex Stainless Steel"
                width={600}
                height={400}
                className="w-full h-44 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-white font-semibold text-lg mb-2">
                  Duplex Stainless Steel
                </h3>
                <p className="text-xs tracking-widest text-[#BDC1CA] uppercase">
                  Forging Grade Certification
                </p>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}