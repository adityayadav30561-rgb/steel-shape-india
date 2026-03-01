import Container from "@/components/ui/Container";
import { Flame, SlidersHorizontal, Wrench } from "lucide-react";

export default function InfrastructureBreakdownSection() {
  return (
    <section className="w-full bg-[#0f1117] py-16 md:py-24 lg:py-32">
      <Container>

        {/* HEADER */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-5 md:mb-6">
            <div className="w-12 h-[3px] bg-[#7f82ff]" />
            <p className="text-[#7f82ff] text-xs tracking-[0.35em] uppercase font-semibold">
              End-to-End Control
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] uppercase leading-tight">
            Infrastructure Breakdown
          </h2>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-10">

          <Card
            icon={<Flame size={22} />}
            title="Forge Shop"
            subtitle="Open Die Forging up to 5000 Kg"
            points={[
              "Open-Die Hydraulic Hammers for complex forgings up to 5000 Kg",
              "Hydraulic Mobile Forging Manipulator for safe and efficient handling of hot forgings",
              "Natural Gas Fired Reheating Furnaces with digital temperature control for uniform and homogeneous heating",
            ]}
            footer="Integration ensures structural integrity and consistent metallurgical properties."
          />

          <Card
            icon={<SlidersHorizontal size={22} />}
            title="Heat Treatment"
            subtitle="In-House Thermal Processing Capabilities"
            points={[
              "Normalizing & Annealing",
              "ISO-Thermal Annealing",
              "Stress Relieving",
              "Quenching & Tempering",
              "Solution Annealing",
            ]}
            footer="Monitored cycles meeting strict international standards."
          />

          <Card
            icon={<Wrench size={22} />}
            title="Machining Facility"
            subtitle="Precision Machining to Drawing Specifications"
            points={[
              "Vertical Borers & Horizontal Turning Lathes",
              "Radial Drill Machines & Industrial Bandsaws",
              "Supply Conditions: As Forged, Proof Machined, Semi-Finished, Fully Finished",
            ]}
            footer="Reduced lead times and high dimensional accuracy."
          />

        </div>

      </Container>
    </section>
  );
}


function Card({
  icon,
  title,
  subtitle,
  points,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
  footer: string;
}) {
  return (
    <div className="bg-gradient-to-br from-[#171a21] to-[#1b1f27] border border-white/5 rounded-2xl p-6 md:p-8">

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-[#1e222b] rounded-xl mb-6 text-[#7f82ff]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-[#f3f4f6] text-lg md:text-xl font-bold uppercase mb-2">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-[#BDC1CA] text-sm mb-6 italic">
        {subtitle}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-3 md:space-y-4 mb-8">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm text-[#BDC1CA] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 bg-[#7f82ff] rounded-full flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="border-t border-white/5 pt-6">
        <p className="text-[#7f82ff] text-xs tracking-widest uppercase">
          {footer}
        </p>
      </div>

    </div>
  );
}
