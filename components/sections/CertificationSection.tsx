import { Award, CheckCircle, FileText, ShieldCheck } from "lucide-react";
import Container from "../ui/Container";

export default function CertificationSection() {
  return (
    <section className="w-full bg-[#0b0c0f] py-16 sm:py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="min-w-0">

            <p className="text-[#636AE8] text-xs tracking-[0.3em] uppercase mb-6 font-semibold">
              Global Quality Assurance
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-6">
              Our Certifications
            </h2>

            <p className="text-[#BDC1CA] max-w-xl text-lg mb-12">
              Our commitment to quality isn't just a promise—it's documented and
              verified by the world's leading accreditation bodies. Every component
              leaving our facility adheres to rigorous international benchmarks.
            </p>

            {/* Tile 1 */}
            <div className="bg-[#1e2128] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 mb-4 sm:mb-6 flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#636AE8]/10 rounded-xl">
                <Award className="text-[#636AE8]" size={22} />
              </div>
              <div>
                <p className="text-[#f3f4f6] font-semibold">
                  ISO 9001:2015 Certified
                </p>
                <p className="text-[#BDC1CA] text-sm">
                  Certificate No: 85 100 001 18195
                </p>
              </div>
            </div>

            {/* Tile 2 */}
            <div className="bg-[#1e2128] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 mb-4 sm:mb-6 flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#636AE8]/10 rounded-xl">
                <CheckCircle className="text-[#636AE8]" size={22} />
              </div>
              <div>
                <p className="text-[#f3f4f6] font-semibold">
                  Scope of Operations
                </p>
                <p className="text-[#BDC1CA] text-sm">
                  Manufacture and Export of Steel Forging Components and Flanges
                </p>
              </div>
            </div>

            {/* Tile 3 */}
            <div className="bg-[#1e2128] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 flex items-center justify-center bg-[#636AE8]/10 rounded-xl">
                <FileText className="text-[#636AE8]" size={22} />
              </div>
              <div>
                <p className="text-[#f3f4f6] font-semibold">
                  Issued By
                </p>
                <p className="text-[#BDC1CA] text-sm">
                  TÜV Rheinland (India) Pvt. Ltd.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE — CERTIFICATE */}
          <div className="bg-[#1e2128] p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-[#636AE8]/20 relative overflow-hidden min-w-0">

            {/* Faint Background Shield (Right Side) */}
            <div className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 opacity-[0.3] blur-sm pointer-events-none hidden sm:block">
              <ShieldCheck className="text-[#636AE8]" size={90} />
            </div>

            <div className="flex flex-col items-center text-center relative z-10">

              {/* Medal with Glow */}
              <div className="relative mb-8">

                {/* Outer soft glow */}
                <div className="absolute inset-0 rounded-full bg-[#636AE8]/30 blur-[60px]" />

                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-[#636AE8]/20 blur-2xl" />

                {/* Medal circle */}
                <div className="relative w-20 h-20 rounded-full bg-[#636AE8]/15 flex items-center justify-center border border-[#636AE8]/30">
                  <Award className="text-[#636AE8]" size={36} />
                </div>

              </div>

              <h3 className="text-[#f3f4f6] font-extrabold text-xl tracking-wide mb-4">
                CERTIFICATE OF CONFORMITY
              </h3>

              <div className="w-16 h-[2px] bg-[#636AE8] mb-8" />

              {/* STANDARD TILE */}
              <div className="bg-[#21252c] border border-white/5 w-full rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <p className="text-[#BDC1CA] text-xs uppercase tracking-widest mb-2">
                  Standard
                </p>
                <p className="text-[#636AE8] font-bold text-lg">
                  ISO 9001:2015
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full mb-6 sm:mb-8">

                <div className="bg-[#21252c] border border-white/5 p-4 rounded-xl">
                  <p className="text-[#BDC1CA] text-xs uppercase tracking-widest mb-1">
                    Registration No.
                  </p>
                  <p className="text-[#f3f4f6] font-semibold">
                    8510000118195
                  </p>
                </div>

                <div className="bg-[#21252c] border border-white/5 p-4 rounded-xl">
                  <p className="text-[#BDC1CA] text-xs uppercase tracking-widest mb-1">
                    Accreditation
                  </p>
                  <p className="text-[#f3f4f6] font-semibold">
                    TÜV Rheinland
                  </p>
                </div>

              </div>

              <p className="text-[#BDC1CA] text-sm italic">
                "Setting the benchmark for steel forging manufacturing and
                international exports since inception."
              </p>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}