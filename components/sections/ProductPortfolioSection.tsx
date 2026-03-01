import Image from "next/image";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

export default function ProductPortfolioSection() {
  return (
    <section className="w-full bg-[#000000] py-16 sm:py-20 md:py-28">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">

          <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 font-semibold">
            Precision Engineering
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-4 sm:mb-6 px-2">
            Our Product Portfolio
          </h2>

          <p className="text-[#BDC1CA] max-w-2xl mx-auto text-base sm:text-lg px-2">
            From complex profiles to heavy-duty industrial components, our forging capabilities
            encompass a wide array of specialized products designed for peak performance.
          </p>

        </div>

        {/* FEATURED PRODUCT CARD */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT IMAGE SIDE */}
          <div className="bg-[#141865] p-6 sm:p-10 flex items-center justify-center min-h-[240px] sm:min-h-[320px] order-2 lg:order-1">
            <Image
              src="/flange.jpg"
              alt="High Performance Flanges"
              width={500}
              height={500}
              className="rounded-xl object-contain w-full h-auto max-h-[280px] sm:max-h-[360px]"
            />
          </div>

          {/* RIGHT CONTENT SIDE */}
          <div className="bg-[#0e125e] p-6 sm:p-10 md:p-16 flex flex-col justify-center order-1 lg:order-2">

            <span className="bg-white/10 text-white text-xs px-4 py-2 rounded-full w-fit mb-6">
              Featured Capability
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              High-Performance <br /> Flanges
            </h3>

            <p className="text-[#BDC1CA] mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
              Engineered for extreme environments. Our flanges meet the most demanding pressure
              ratings and dimensional tolerances required by global oil & gas and petrochemical leaders.
            </p>

            <div className="flex flex-wrap gap-8 sm:gap-16 mb-8 sm:mb-10">

              <div>
                <p className="text-xs uppercase tracking-widest text-[#BDC1CA] mb-2">
                  Pressure Classes
                </p>
                <p className="text-white font-bold text-xl">
                  150# to 2500#
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#BDC1CA] mb-2">
                  Maximum Size
                </p>
                <p className="text-white font-bold text-xl">
                  Up to 48" NPS
                </p>
              </div>

            </div>

            <button className="bg-[#636AE8] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold w-full sm:w-fit flex items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95">
              Enquire Now
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* MANUFACTURING STANDARDS BAR */}
        <div className="mt-12 sm:mt-20 bg-[#060708] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">

          <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase font-semibold shrink-0">
            Manufacturing Standards
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4">

            {[
              "ASME/ANSI B16.5",
              "B16.47",
              "API 605",
              "API 6A",
              "DIN Standards",
              "AWWA Standards"
            ].map((standard) => (
              <span
                key={standard}
                className="px-4 py-1.5 sm:px-6 sm:py-2 bg-[#000000] border border-white/10 rounded-full text-xs sm:text-sm text-white"
              >
                {standard}
              </span>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}
