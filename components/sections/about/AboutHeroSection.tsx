import Container from "@/components/ui/Container";
import { CheckCircle } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
              About Steel Shape India
            </p>

            <h1 className="text-3xl md:text-5xl font-extrabold text-[#f3f4f6] mb-8 leading-tight">
              FORGING STRENGTH SINCE 1989
            </h1>

            <p className="text-[#BDC1CA] text-lg mb-6 leading-relaxed">
              <span className="text-[#f3f4f6] font-semibold">
                Steel Shape India (SSI)
              </span>{" "}
              is a leading manufacturer and exporter of bespoke open die
              forgings in Carbon, Alloy, Stainless, and Duplex Stainless steels.
            </p>

            <p className="text-[#BDC1CA] mb-6 leading-relaxed">
              Founded in 1989 by Late Shri Prithvi Raj Sharma, a respected name
              in the steel forging industry, the company was built on a
              foundation of technical integrity, quality commitment, and
              disciplined manufacturing practices. Today, under the leadership
              of Mr. Manoj Sharma, SSI continues to expand its capabilities
              while maintaining the core values that established its reputation.
            </p>

            <p className="text-[#BDC1CA] leading-relaxed">
              For over three decades, we have consistently supplied precision-forged
              components to demanding industries across India and international
              markets including the USA, Canada, and Europe.
            </p>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-[#1e2128] p-6 md:p-10 rounded-3xl border border-white/5 lg:mt-10">

            <h3 className="text-[#f3f4f6] font-bold text-lg mb-6 uppercase tracking-wide">
              A Trusted Industrial Partner
            </h3>

            <p className="text-[#BDC1CA] mb-8 leading-relaxed">
              Over the years, SSI has built long-term relationships with public
              and private sector organizations across diverse industries.
            </p>

            {/* 4 GRID COMPONENTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              <div className="bg-[#15171c] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-[#636AE8]" size={16} />
                <span className="text-[#BDC1CA] text-sm">
                  Consistent quality
                </span>
              </div>

              <div className="bg-[#15171c] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-[#636AE8]" size={16} />
                <span className="text-[#BDC1CA] text-sm">
                  Time-bound delivery
                </span>
              </div>

              <div className="bg-[#15171c] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-[#636AE8]" size={16} />
                <span className="text-[#BDC1CA] text-sm">
                  Technical responsiveness
                </span>
              </div>

              <div className="bg-[#15171c] border border-white/5 p-4 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-[#636AE8]" size={16} />
                <span className="text-[#BDC1CA] text-sm">
                  Long-term client partnerships
                </span>
              </div>

            </div>

            <p className="text-sm text-[#636AE8] font-semibold uppercase tracking-wide">
              We do not aim to be the largest forging company.
            </p>

            <p className="text-[#f3f4f6] font-bold uppercase tracking-wide">
              We aim to be the most dependable one.
            </p>

          </div>

        </div>
      </Container>
    </section>
  );
}
