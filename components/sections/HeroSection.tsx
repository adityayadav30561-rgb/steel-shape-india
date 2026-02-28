import Image from "next/image";
import Button from "../ui/Button";
import GlassCard from "../ui/GlassCard";
import Container from "../ui/Container";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 backdrop-blur-[5px] bg-white/5" />

        <Image
          src="/hero-bg.jpg"
          alt="Open Die Forging Process"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 pt-20 sm:pt-24 md:pt-32 lg:pt-36 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="min-w-0">
            <div className="mb-4 sm:mb-6 text-xs sm:text-sm tracking-widest text-indigo-400 uppercase">
              EST. 1989 · Ghaziabad, India
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <span className="block text-white">CUSTOMIZED</span>
              <span className="block text-[#6469e5] italic font-black">
                OPEN DIE FORGINGS
              </span>
              <span className="block text-white italic font-black whitespace-nowrap">
                UPTO 5000KG
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-gray-300 max-w-xl text-base sm:text-lg">
              Steel Shape India is a leading manufacturer and exporter of bespoke
              open die forgings in Carbon, Alloy, Stainless and Duplex Stainless steels.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button variant="primary">
                REQUEST A QUOTE →
              </Button>

              <Button variant="glass">
                SEND YOUR REQUIREMENTS
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:block min-w-0">
            <GlassCard>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs tracking-widest text-gray-300 uppercase">
                  LIVE PLANT TELEMETRY
                </h3>

                <span className="text-[11px] px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                  NODE_B7_ID
                </span>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Furnace Core Temp
                  </p>
                  <p className="text-3xl font-black text-white">1,642°C</p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    Yield Efficiency
                  </p>
                  <p className="text-2xl font-semibold">98.4%</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
                  Active Load Capacity
                </p>

                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-2 bg-[#6469e5] rounded-full w-[88%]" />
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-xs text-gray-400">
                <div>
                  <p className="uppercase tracking-wide">Last Cast</p>
                  <p className="text-white">04:12:00 ago</p>
                </div>

                <div className="text-right">
                  <p className="uppercase tracking-wide">Alloy Grade</p>
                  <p className="text-white">X-750 Inconel</p>
                </div>
              </div>

            </GlassCard>
          </div>

        </div>
      </Container>

    </section>
  );
}