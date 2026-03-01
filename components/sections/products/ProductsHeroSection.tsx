import Container from "@/components/ui/Container";
import Image from "next/image";
import RequestQuoteModal from "@/components/shared/RequestQuoteModal";

export default function ProductsHeroSection() {
  const heroImagePlaceholder = "/hero-bg.jpg";

  return (
    <section className="relative w-full bg-[#000000] py-20 md:py-32 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src={heroImagePlaceholder}
          alt="Forging Furnace"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
              Est. 1989 · Ghaziabad, India
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8">
              <span className="text-[#f3f4f6] italic">
                OUR FORGED
              </span>
              <br />
              <span className="text-[#636AE8] italic">
                PRODUCTS
              </span>
            </h1>

            <div className="border-l-4 border-[#636AE8] pl-6 mb-10">
              <p className="text-[#BDC1CA] text-lg leading-relaxed">
                Engineered Open Die Forgings up to 5000 Kg.
                Bespoke components in Carbon, Alloy,
                Stainless, and Duplex steels.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <RequestQuoteModal triggerClassName="bg-gradient-to-r from-[#636AE8] to-[#7c82ff] text-white px-6 sm:px-8 py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg">
                Request a Quote →
              </RequestQuoteModal>

              <a
                href="tel:+919560516841"
                className="bg-[#1e2128] border border-white/10 text-[#f3f4f6] px-6 sm:px-8 py-4 rounded-xl font-semibold hover:border-[#636AE8] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 text-center"
              >
                CALL US DIRECTLY
              </a>
            </div>

          </div>

          {/* RIGHT GLASS CARD */}
          <div className="relative">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">

              <div className="flex items-center justify-between mb-6">
                <span className="text-[#636AE8] text-sm font-semibold">
                  ● Live Plant Telemetry
                </span>
                <span className="text-xs text-[#BDC1CA] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Node_RF3
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">

                <div>
                  <p className="text-xs text-[#BDC1CA] uppercase tracking-wider mb-2">
                    Furnace Core Temp
                  </p>
                  <p className="text-3xl font-extrabold text-[#f3f4f6]">
                    1,642°C
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#BDC1CA] uppercase tracking-wider mb-2">
                    Yield Efficiency
                  </p>
                  <p className="text-3xl font-extrabold text-[#f3f4f6]">
                    98.4%
                  </p>
                </div>

              </div>

              <div>
                <p className="text-xs text-[#BDC1CA] uppercase tracking-wider mb-2">
                  Active Load Capacity
                </p>

                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-[#636AE8] to-[#7c82ff] h-2 rounded-full w-[88%]" />
                </div>

                <div className="text-right text-xs text-[#BDC1CA]">
                  88%
                </div>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}



