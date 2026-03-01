import Container from "../ui/Container";
import { Droplet, Box, HardHat, Wind, Circle, Settings, Zap, Anchor, Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function SectorsSection() {
  const sectors = [
    { title: "Oil & Gas", icon: Droplet },
    { title: "Pressure Vessels & Heat Exchangers", icon: Box },
    { title: "Cement & Mining", icon: HardHat },
    { title: "Wind Energy", icon: Wind },
    { title: "Bearing Industry", icon: Circle },
    { title: "Gearbox Manufacturing", icon: Settings },
    { title: "Power Generation", icon: Zap },
    { title: "Heavy Industrial Equipment", icon: Anchor },
  ];

  return (
    <section className="w-full bg-[#000000] py-16 sm:py-20 md:py-28">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">

          <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 font-semibold">
            Industries We Serve
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-4 sm:mb-6 px-2">
            Sectors We Serve
          </h2>

          <p className="text-[#BDC1CA] max-w-2xl mx-auto text-base sm:text-lg px-2">
            Our forged components support mission-critical applications across demanding
            industrial sectors, ensuring reliability where failure is not an option.
          </p>

        </div>

        {/* SECTOR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">

          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="bg-[#1e2128] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-white/5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl min-w-0"
              >
                <div className="w-14 h-14 rounded-xl bg-[#636AE8]/10 flex items-center justify-center mb-6">
                  <Icon className="text-[#636AE8]" size={24} />
                </div>

                <h3 className="text-white font-semibold text-sm sm:text-lg leading-snug">
                  {sector.title}
                </h3>
              </div>
            );
          })}

        </div>

        {/* CUSTOM SOLUTION BAR */}
        <div className="bg-[#0c0f18] border border-[#636AE8]/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 text-center md:text-left">

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#636AE8]/15 flex items-center justify-center">
              <Shield className="text-[#636AE8]" size={22} />
            </div>

            <div>
              <p className="text-white font-semibold text-lg">
                Custom Sector Solutions
              </p>
              <p className="text-[#BDC1CA] text-sm">
                Need forgings for a specialized industry? Our engineering team provides custom solutions.
              </p>
            </div>
          </div>

          <button className="text-[#636AE8] font-semibold flex items-center gap-2 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95">
            Consult with Engineers
            <ArrowRight size={18} />
          </button>

        </div>

      </Container>
    </section>
  );
}
