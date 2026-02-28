import { Flame, SlidersHorizontal, Microscope } from "lucide-react";
import Container from "../ui/Container";

export default function ManufacturingSection() {
  return (
    <section className="w-full bg-[#171a1f] py-16 sm:py-20 md:py-28">
      <Container>

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 sm:mb-16 gap-6 sm:gap-10">

          <div className="min-w-0">
            <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 font-semibold">
              Our Facility
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f3f4f6] mb-4 sm:mb-6 leading-tight">
              MANUFACTURING <br className="hidden sm:block" /> CAPABILITIES
            </h2>

            <p className="text-[#BDC1CA] text-base sm:text-lg">
              State-of-the-Art Forging Facility — 5000 MT/Year Installed Capacity
            </p>
          </div>

          <button className="bg-[#636AE8] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 w-full sm:w-auto shrink-0">
            Download Catalog
          </button>

        </div>

        {/* TILES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">

          {/* FORGE SHOP */}
          <div className="bg-[#1e2128] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5">

            <div className="w-14 h-14 flex items-center justify-center bg-[#636AE8]/10 rounded-xl mb-8">
              <Flame className="text-[#636AE8]" size={26} />
            </div>

            <h3 className="text-[#f3f4f6] font-bold text-xl mb-6">
              FORGE SHOP
            </h3>

            <ul className="text-[#BDC1CA] space-y-2 text-sm leading-relaxed">
              <li>Open-Die Hydraulic Hammers (up to 5000 Kg)</li>
              <li>Hydraulic Mobile Forging Manipulator</li>
              <li>Natural Gas Fired Digitally Controlled Reheating Furnaces</li>
            </ul>

            <p className="text-[#636AE8] text-xs tracking-widest uppercase mt-8 cursor-pointer">
              Technical Specs →
            </p>

          </div>

          {/* HEAT TREATMENT */}
          <div className="bg-[#1e2128] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5">

            <div className="w-14 h-14 flex items-center justify-center bg-[#636AE8]/10 rounded-xl mb-8">
              <SlidersHorizontal className="text-[#636AE8]" size={26} />
            </div>

            <h3 className="text-[#f3f4f6] font-bold text-xl mb-6">
              HEAT TREATMENT
            </h3>

            <ul className="text-[#BDC1CA] space-y-2 text-sm leading-relaxed">
              <li>Normalizing & Annealing</li>
              <li>ISO-thermal Annealing</li>
              <li>Stress Relieving</li>
              <li>Quenching & Tempering</li>
              <li>Solution Annealing</li>
            </ul>

            <p className="text-[#636AE8] text-xs tracking-widest uppercase mt-8 cursor-pointer">
              Technical Specs →
            </p>

          </div>

          {/* MACHINING */}
          <div className="bg-[#1e2128] p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-white/5">

            <div className="w-14 h-14 flex items-center justify-center bg-[#636AE8]/10 rounded-xl mb-8">
              <Microscope className="text-[#636AE8]" size={26} />
            </div>

            <h3 className="text-[#f3f4f6] font-bold text-xl mb-6">
              MACHINING
            </h3>

            <ul className="text-[#BDC1CA] space-y-2 text-sm leading-relaxed">
              <li>Vertical Borers</li>
              <li>Horizontal Lathes</li>
              <li>Radial Drill Machines</li>
              <li>Bandsaws</li>
              <li>Proof / Semi-Finished / Fully Finished</li>
            </ul>

            <p className="text-[#636AE8] text-xs tracking-widest uppercase mt-8 cursor-pointer">
              Technical Specs →
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}