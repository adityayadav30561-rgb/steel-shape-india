import Container from "@/components/ui/Container";
import Image from "next/image";
import { Zap } from "lucide-react";
import RequestQuoteModal from "@/components/shared/RequestQuoteModal";

export default function ManufacturingHeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#12155c] via-[#15186e] to-[#0f1250] py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Top badge */}
            <div className="inline-block bg-white/10 text-white text-xs px-4 py-1 rounded-full mb-6">
              Est. 1989 - NCR, India
            </div>

            {/* Heading */}
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.05] mb-6">
              FULLY <br />
              INTEGRATED <br />
              <span className="text-[#7f82ff] italic">OPEN DIE</span> <br />
              <span className="text-[#7f82ff] italic">FORGING</span> <br />
              <span className="text-[0.9em]">INFRASTRUCTURE</span>
            </h1>

            {/* Paragraph */}
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Steel Shape India operates a state-of-the-art manufacturing
              facility located in the National Capital Region (NCR),
              Ghaziabad, with an installed production capacity of
              5000 MT per year.
            </p>

            {/* Quote Box */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 mb-8 max-w-xl">
              <p className="text-white/70 italic text-sm leading-relaxed">
                Our facility integrates forging, heat treatment, and machining
                under one roof - ensuring strict quality control, faster turnaround,
                and complete process traceability.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="tel:+919560516841"
                className="bg-[#7f82ff] hover:bg-[#6f73f0] text-black px-5 sm:px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 text-center"
              >
                Request Discussion →
              </a>

              <RequestQuoteModal triggerClassName="bg-[#0f1118] border border-white/10 text-white px-5 sm:px-7 py-3.5 rounded-xl font-semibold hover:bg-[#161925] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95">
                Send Your Drawing
              </RequestQuoteModal>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE CARD */}
          <div className="relative w-full max-w-[500px] md:max-w-[540px] lg:max-w-[460px] xl:max-w-[500px] lg:ml-auto">
            <div className="relative rounded-[28px] overflow-hidden border border-white/10">
              <Image
                src="/manufacturing/furnace.jpg"
                alt="Manufacturing Facility"
                width={600}
                height={700}
                className="object-cover w-full h-[340px] sm:h-[430px] lg:h-[430px] xl:h-[520px]"
              />

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                <div className="flex items-center gap-3 text-white font-bold text-lg">
                  <Zap className="text-[#7f82ff]" size={22} />
                  5000 MT CAPACITY
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
