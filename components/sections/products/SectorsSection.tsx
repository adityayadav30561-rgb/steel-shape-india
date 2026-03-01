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
    <section className="w-full bg-[#000000] py-32">

      <Container>

        {/* HEADER */}
        <div className="text-center mb-20 relative">

          <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
            Industry Partnerships
          </p>

          <h2 className="text-5xl font-extrabold text-[#f3f4f6] mb-8">
            Sectors We Serve
          </h2>

          {/* Accent line (left aligned style look) */}
          <div className="w-20 h-[3px] bg-[#636AE8] absolute left-0 top-[60px]" />

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28">

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
        <div className="relative rounded-[20px] bg-gradient-to-r from-[#8f92ff] to-[#7f82dc] px-16 py-20 overflow-hidden">

          {/* Bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#8f92ff] blur-[80px] opacity-40" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT TEXT */}
            <div>
              <h3 className="text-black font-extrabold text-4xl leading-[1.1] mb-6">
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
            <div className="flex gap-6">

              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all">
                Request for Quote →
              </button>

              <button className="bg-[#6f73c8] text-black px-8 py-4 rounded-xl font-semibold border border-black/20 hover:scale-[1.02] transition-all">
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
    <div className="border border-white/10 bg-[#000000] h-[140px] flex flex-col items-center justify-center gap-4 hover:border-[#636AE8]/50 transition-all duration-300">

      <div className="text-[#8f92ff]">
        {icon}
      </div>

      <p className="text-[#f3f4f6] text-sm tracking-widest uppercase">
        {title}
      </p>

    </div>
  );
}