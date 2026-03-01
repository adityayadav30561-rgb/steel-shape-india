import Container from "../ui/Container";
import { ExternalLink } from "lucide-react";

export default function InspectionSection() {
  return (
    <section className="w-full bg-[#000000] py-16 sm:py-20 md:py-28">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">

          <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6 font-semibold">
            Industry Partnerships
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-4 sm:mb-6 px-2">
            Third-Party Inspection Agencies
          </h2>

          <p className="text-[#BDC1CA] max-w-2xl mx-auto text-base sm:text-lg px-2">
            Our products undergo rigorous evaluation by globally recognized inspection
            bodies to ensure absolute compliance with project specifications.
          </p>

        </div>

       {/* AGENCY TILES */}
<div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-20">

{["IBR", "Lloyds", "DNV", "SGS", "TUV", "BVIS", "H&G"].map(
  (agency) => (
    <div
      key={agency}
      className="
        px-6 py-4 sm:px-10 sm:py-6
        bg-[#0b0d0f]
        rounded-2xl
        border border-white/5
        text-[#f3f4f6]
        font-semibold
        tracking-wide
        transition-all duration-300 ease-out
        transform
        hover:scale-[1.04]
        hover:-translate-y-1
        hover:border-[#636AE8]/40
        hover:shadow-[0_20px_50px_rgba(99,106,232,0.15)]
      "
    >
      {agency}
    </div>
  )
)}

</div>

        {/* CTA BOX */}
        <div className="bg-[#0b0d0f] border border-[#636AE8]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <div className="min-w-0">
            <h3 className="text-[#f3f4f6] text-lg sm:text-xl font-semibold mb-2">
              Need detailed quality documentation?
            </h3>
            <p className="text-[#BDC1CA]">
              Request our full quality manual and previous inspection reports.
            </p>
          </div>

          <button className="bg-[#f3f4f6] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 shrink-0">
            Download Quality Profile
            <ExternalLink size={16} />
          </button>

        </div>

      </Container>
    </section>
  );
}
