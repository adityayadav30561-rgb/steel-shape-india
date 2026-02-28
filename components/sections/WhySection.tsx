import { Globe, Cog, Leaf, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";

export default function WhySection() {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-28 relative">

      {/* Top Thin Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#6469e5]/30" />

      <Container>

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">

          <p className="text-[#6469e5] text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 font-semibold">
            Unmatched Reliability
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 px-2">
            Why Steel Shape India?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-2">
            Since 1989, we've been the cornerstone of heavy industry, providing
            precision forgings that power global infrastructure.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {[
            {
              icon: Globe,
              title: "30+ Years of Forging Excellence",
              desc: "Established in 1989, SSI has built a strong reputation through consistent quality and dependable delivery across global markets.",
            },
            {
              icon: Cog,
              title: "50 Kg to 5000 Kg Capacity",
              desc: "From intricate small components to heavy-duty single-piece forgings, we handle the full spectrum with structural integrity.",
            },
            {
              icon: Leaf,
              title: "Fully Integrated Manufacturing",
              desc: "In-house heat treatment, machining, and destructive testing ensure total process control from raw steel to final dispatch.",
            },
            {
              icon: ShieldCheck,
              title: "Export-Ready Standards",
              desc: "Trusted by USA, Canada, and Europe. Compliant with IBR, Lloyds, DNV, SGS, and TUV international inspection protocols.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#1E2128] p-6 sm:p-8 md:p-10 rounded-xl border border-white/5 hover:border-[#6469e5]/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#6469e5]/10 rounded-2xl mb-6 sm:mb-8 mx-auto">
                  <Icon className="text-[#6469e5]" size={26} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base sm:text-lg text-center mb-3 sm:mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center font-bold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}