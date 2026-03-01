import Container from "@/components/ui/Container";
import {
  Anchor,
  Boxes,
  HardHat,
  Globe,
  SlidersHorizontal,
  Layers,
  Flame,
  Microscope,
} from "lucide-react";

export default function SectorsSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-32">

      <Container>

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20 relative">

          <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
            Industry Partnerships
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-8">
            Sectors We Serve
          </h2>

          {/* Accent line (left aligned style look) */}
          <div className="hidden md:block w-20 h-[3px] bg-[#636AE8] absolute left-0 top-[60px]" />

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mb-16 md:mb-28">

          <SectorCard icon={<Anchor size={28} />} title="Oil & Gas" />
          <SectorCard icon={<Boxes size={28} />} title="Pressure Vessels" />
          <SectorCard icon={<HardHat size={28} />} title="Cement & Mining" />
          <SectorCard icon={<Globe size={28} />} title="Wind Energy" />

          <SectorCard icon={<SlidersHorizontal size={28} />} title="Bearings" />
          <SectorCard icon={<Layers size={28} />} title="Gearboxes" />
          <SectorCard icon={<Flame size={28} />} title="Power Gen" />
          <SectorCard icon={<Microscope size={28} />} title="Heavy Equipment" />

        </div>

        {/* CTA BLOCK */}
        <div className="relative rounded-[20px] bg-gradient-to-r from-[#8f92ff] to-[#7f82dc] px-6 sm:px-10 md:px-16 py-12 md:py-20 overflow-hidden">

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#8f92ff] blur-[80px] opacity-40" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT TEXT */}
            <div>
              <h3 className="text-black font-extrabold text-3xl md:text-4xl leading-[1.1] mb-6">
                HAVE A DRAWING <br />
                OR <br />
                TECHNICAL <br />
                REQUIREMENT?
              </h3>

              <p className="text-black/80 max-w-md">
                Send us your specifications today for
                technical evaluation and quotation.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex w-full md:w-auto flex-col sm:flex-row gap-4 sm:gap-6">

              <button className="bg-white text-black px-6 sm:px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all w-full sm:w-auto">
                Request for Quote →
              </button>

              <button className="bg-[#6f73c8] text-black px-6 sm:px-8 py-4 rounded-xl font-semibold border border-black/20 hover:scale-[1.02] transition-all w-full sm:w-auto">
                ⬆ Upload Your Drawing
              </button>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}


function SectorCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="border border-white/10 bg-[#000000] h-[120px] md:h-[140px] flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-[#636AE8]/50 transition-all duration-300">

      <div className="text-[#8f92ff]">
        {icon}
      </div>

      <p className="text-[#f3f4f6] text-xs md:text-sm tracking-widest uppercase text-center px-2">
        {title}
      </p>

    </div>
  );
}

