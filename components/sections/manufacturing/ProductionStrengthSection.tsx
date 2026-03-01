import Container from "@/components/ui/Container";
import { CheckCircle, Globe } from "lucide-react";

export default function ProductionStrengthSection() {
  return (
    <section className="w-full bg-[#0f1117] py-16 md:py-24 lg:py-32">
      <Container>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24">

          {/* ================= LEFT ================= */}
          <div>

            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-[#7f82ff]" />
              <p className="text-[#7f82ff] text-xs tracking-[0.35em] uppercase font-semibold">
                The SSI Edge
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] uppercase mb-8 md:mb-14 leading-tight">
              Manufacturing <br /> Advantage
            </h2>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">

              {[
                "Reduced Production Dependency",
                "Better Process Control",
                "Improved Quality Consistency",
                "Faster Project Execution",
                "Reliable On-Time Delivery",
                "Global Standard Compliance",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-xl px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4"
                >
                  <CheckCircle size={18} className="text-white/70" />
                  <p className="text-[#f3f4f6] text-xs sm:text-sm uppercase tracking-wide">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* Industries Served Card */}
            <div className="bg-gradient-to-br from-[#171a24] to-[#1b1f2a] border border-white/5 rounded-2xl p-6 md:p-8 flex gap-4 md:gap-6 items-start">

              <div className="w-12 h-12 bg-[#7f82ff] rounded-xl flex items-center justify-center">
                <Globe size={22} className="text-black" />
              </div>

              <div>
                <h3 className="text-[#f3f4f6] font-bold uppercase mb-2">
                  Industries Served
                </h3>
                <p className="text-[#BDC1CA] text-sm leading-relaxed">
                  Oil & Gas, Energy, Infrastructure, Cement, Mining,
                  and Heavy Industrial Equipment.
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT ================= */}
          <div>

            {/* Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[3px] bg-[#7f82ff]" />
              <p className="text-[#7f82ff] text-xs tracking-[0.35em] uppercase font-semibold">
                By The Numbers
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] uppercase mb-8 md:mb-14 leading-tight">
              Production <br /> Strength
            </h2>

            {/* Stat Card 1 */}
            <div className="bg-gradient-to-br from-[#171a24] to-[#1c202c] border border-white/5 rounded-2xl p-6 md:p-10 mb-6 md:mb-8">
              <p className="text-xs tracking-[0.35em] uppercase text-[#7f82ff] mb-4">
                Forging Capacity
              </p>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-2">
                5000 Kg
              </h3>
              <p className="text-[#BDC1CA] text-sm">
                Single-piece maximum forging capability
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gradient-to-br from-[#171a24] to-[#1c202c] border border-white/5 rounded-2xl p-6 md:p-10 mb-6 md:mb-8">
              <p className="text-xs tracking-[0.35em] uppercase text-[#7f82ff] mb-4">
                Annual Throughput
              </p>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-2">
                5000 MT
              </h3>
              <p className="text-[#BDC1CA] text-sm">
                Annual installed production capacity
              </p>
            </div>

            {/* Material Capability Card */}
            <div className="bg-gradient-to-br from-[#171a24] to-[#1c202c] border border-white/5 rounded-2xl p-6 md:p-8">
              <p className="text-xs tracking-[0.35em] uppercase text-[#7f82ff] mb-6">
                Material Capability
              </p>

              <ul className="space-y-4 text-sm text-[#f3f4f6]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Multi-grade production capability
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full" />
                  Flexible batch sizes for exports
                </li>
              </ul>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
