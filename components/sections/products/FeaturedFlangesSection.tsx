import Container from "@/components/ui/Container";
import Image from "next/image";

export default function FeaturedFlangesSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-28">
      <Container>
        <div className="rounded-[28px] md:rounded-[40px] bg-gradient-to-br from-[#1b1f8f] to-[#14186a] p-6 sm:p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* Badge */}
            <div className="inline-block bg-white/20 text-white text-xs px-4 py-1 rounded-full mb-8">
              Highlighted Capability
            </div>

            {/* Heading */}
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-[1.05] mb-8">
              HIGH-<br />
              PERFORMANCE<br />
              FORGED<br />
              FLANGES
            </h2>

            {/* Description */}
            <p className="text-white/80 leading-relaxed mb-10">
              Engineered for extreme environments. Our flanges meet
              the most demanding pressure ratings and dimensional
              tolerances required by global oil & gas leaders.
            </p>

            <div className="border-t border-white/20 mb-8" />

            {/* Specs */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-8">

              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                  Pressure Classes
                </p>
                <p className="text-white text-xl font-bold">
                  150# to 2500#
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-white/60 mb-2">
                  Maximum Size
                </p>
                <p className="text-white text-xl font-bold">
                  Up to 48" NPS
                </p>
              </div>

            </div>

            <div className="border-t border-white/20 mb-8" />

            {/* Standards */}
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-white/60 mb-4">
                Manufacturing Standards
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "ASME B16.5",
                  "B16.47",
                  "API 605",
                  "API 6A",
                  "DIN Standards",
                  "AWWA"
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#0e125e] text-white text-xs rounded-full border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="bg-[#8f92ff] hover:bg-[#7c80ff] text-black font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto">
              Enquire Now →
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full max-w-[360px] md:max-w-[420px] aspect-square relative">
            <div className="absolute inset-12 rounded-full bg-[#8f92ff]/25 blur-3xl" />
            <Image
              src="/flange.jpg"
              alt="Forged Flange"
              fill
              className="object-contain relative z-10"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}

