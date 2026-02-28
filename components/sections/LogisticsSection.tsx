import Image from "next/image";
import Container from "../ui/Container";
import { Ship, Truck, ShieldCheck } from "lucide-react";

export default function LogisticsSection() {
  return (
    <section className="w-full bg-[#171a1f] py-16 sm:py-20 md:py-28">
      <Container>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="min-w-0">

            <div className="inline-block px-4 py-2 bg-[#636AE8]/10 border border-[#636AE8]/40 text-[#636AE8] text-xs tracking-widest uppercase mb-6">
              Strategic Reach
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6">
              Seamless Global Logistics
            </h2>

            <p className="text-[#BDC1CA] text-base sm:text-lg max-w-xl mb-8 sm:mb-10">
              Operating high-frequency trade routes between North America and Europe.
              Our precision delivery systems ensure just-in-time structural steel
              supply for world-class infrastructure.
            </p>

            {/* Maritime Freight */}
            <div className="bg-[#1e2128] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <div className="w-12 h-12 flex items-center justify-center bg-[#636AE8]/10 rounded-xl">
                <Ship className="text-[#636AE8]" size={22} />
              </div>
              <div>
                <p className="text-white font-semibold uppercase text-sm">
                  Maritime Freight
                </p>
                <p className="text-[#BDC1CA] text-xs">
                  Port-to-Port Hub Connectivity
                </p>
              </div>
            </div>

            {/* Overland Logistics */}
            <div className="bg-[#1e2128] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 flex items-center gap-4 sm:gap-5 mb-8 sm:mb-10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
              <div className="w-12 h-12 flex items-center justify-center bg-[#350816]/10 rounded-xl">
                <Truck className="text-[#E8618C]" size={22} />
              </div>
              <div>
                <p className="text-white font-semibold uppercase text-sm">
                  Overland Logistics
                </p>
                <p className="text-[#BDC1CA] text-xs">
                  Direct Jobsite Fulfillment
                </p>
              </div>
            </div>

            {/* Authorized Certificate Block */}
            <div className="bg-black border border-dashed border-white/20 rounded-2xl px-6 py-5 flex items-center gap-4">
              <ShieldCheck className="text-[#636AE8]" size={24} />
              <div>
                <p className="text-xs text-[#BDC1CA] uppercase tracking-wide">
                  Authorized Export Certificate
                </p>
                <p className="text-white font-medium">
                  #TS-INTL-2024-998
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="min-w-0 order-first lg:order-none">

            {/* MAP */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 mb-8 sm:mb-10 aspect-video min-h-[200px] sm:min-h-[280px] w-full">
              <Image
                src="/map.png.png"
                alt="Global Logistics Map"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-full object-cover opacity-80"
              />

              {/* Accent Points */}
              <div className="absolute top-[40%] left-[20%] w-3 h-3 bg-[#636AE8] rounded-full shadow-[0_0_20px_#636AE8]" />
              <div className="absolute top-[30%] left-[15%] w-3 h-3 bg-[#636AE8] rounded-full shadow-[0_0_20px_#636AE8]" />
              <div className="absolute top-[28%] left-[58%] w-3 h-3 bg-[#636AE8] rounded-full shadow-[0_0_20px_#636AE8]" />
            </div>

            {/* DISTRIBUTION CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

              <div className="bg-[#1e2128] p-6 rounded-2xl border border-white/5 text-center">
                <p className="text-[#BDC1CA] text-xs uppercase font-extrabold tracking-wide mb-2">
                  UNITED STATES
                </p>
                <p className="text-xl font-extrabold text-[#636AE8]">
                  12 Days
                </p>
                <p className="text-[#BDC1CA] text-xs mt-2">
                  Ocean / Flight Distribution
                </p>
              </div>

              <div className="bg-[#1e2128] p-6 rounded-2xl border border-white/5 text-center">
                <p className="text-[#BDC1CA] text-xs uppercase font-extrabold tracking-wide mb-2">
                  CANADA
                </p>
                <p className="text-xl font-extrabold text-[#636AE8]">
                  15 Days
                </p>
                <p className="text-[#BDC1CA] text-xs mt-2">
                  Ocean Distribution
                </p>
              </div>

              <div className="bg-[#1e2128] p-6 rounded-2xl border border-white/5 text-center">
                <p className="text-[#BDC1CA] text-xs uppercase font-extrabold tracking-wide mb-2">
                  EUROPEAN UNION
                </p>
                <p className="text-xl font-extrabold text-[#636AE8]">
                  18 Days
                </p>
                <p className="text-[#BDC1CA] text-xs mt-2">
                  Ocean Distribution
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}