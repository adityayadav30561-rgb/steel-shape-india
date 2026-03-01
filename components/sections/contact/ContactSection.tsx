import { CheckCircle, Phone, Mail, MapPin, Upload } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
              Contact Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] leading-tight mb-6">
              LET’S DISCUSS YOUR <br className="hidden sm:block" />
              <span className="text-[#636AE8] italic">
                FORGING REQUIREMENT
              </span>
            </h2>

            <p className="text-[#BDC1CA] text-lg mb-6 leading-relaxed">
              Whether you require standard components or fully customized
              open die forgings, our technical team is ready to evaluate
              your drawings and specifications.
            </p>

            <p className="text-[#BDC1CA] mb-12">
              We respond promptly with technical feasibility and
              competitive quotations.
            </p>

            {/* Why Work With Us */}
            <div className="bg-[#0f1115] border border-white/5 rounded-3xl p-6 md:p-8 mb-12">
              <h4 className="text-[#f3f4f6] font-bold uppercase mb-6">
                Why Work With Steel Shape India?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#BDC1CA]">
                {[
                  "Open Die Forgings up to 5000 Kg",
                  "5000 MT Annual Installed Capacity",
                  "In-House Heat Treatment & Machining",
                  "Destructive & NDT Testing Facilities",
                  "ISO 9001:2015 Certified",
                  "Third-Party Inspection Capability",
                  "Export Experience (USA, Canada, Europe)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-[#636AE8]" size={14} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Contact */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-sm text-[#BDC1CA]">
              <div>
                <p className="text-[#636AE8] uppercase tracking-wider mb-3">
                  Corporate Office & Manufacturing Unit
                </p>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-[#636AE8] shrink-0 mt-0.5" />
                  <span>
                    Plot No. 42, Industrial Area, Phase-1,
                    Ghaziabad, Uttar Pradesh, 201001, India
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[#636AE8] uppercase tracking-wider mb-3">
                  Contact Details
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Phone size={16} className="text-[#636AE8] shrink-0 mt-0.5" />
                    <span>+91 120 456 7890</span>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={16} className="text-[#636AE8] shrink-0 mt-0.5" />
                    <span>sales@steelshapeindia.com</span>
                  </div>
                  <p>Mon - Sat: 9:00 AM – 6:30 PM IST</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#1e2128] rounded-3xl p-6 md:p-10 border border-white/5">

            <h3 className="text-[#f3f4f6] font-bold text-lg mb-2 uppercase">
              Request for Quote (RFQ)
            </h3>

            <p className="text-[#636AE8] text-xs uppercase tracking-wider mb-8">
              Submit Your Technical Requirement
            </p>

            <form className="space-y-6">

              {/* Product */}
              <Input label="Product Description" placeholder="e.g. Forged Shaft / Flange / Ring" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input label="Material Grade" placeholder="e.g. AISI 4140, SS316" />
                <Input label="Quantity Required" placeholder="e.g. 50 Pcs" />
              </div>

              <Input label="Required Delivery Timeline" placeholder="e.g. 4-6 Weeks" />
              <Input label="Inspection Requirements" placeholder="" />

              {/* Special Specs */}
              <div>
                <label className="text-[#BDC1CA] text-xs uppercase tracking-widest mb-2 block">
                  Special Specifications
                </label>
                <textarea
                  rows={4}
                  placeholder="Heat treatment or machining specs..."
                  className="w-full bg-[#0f1115] border border-[#636AE8] rounded-xl p-4 text-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#636AE8]/40"
                />
              </div>

              {/* Upload */}
              <div className="border border-dashed border-[#636AE8]/40 rounded-2xl p-6 md:p-8 text-center bg-[#0f1115]">
                <Upload className="mx-auto text-[#636AE8] mb-4" />
                <p className="text-[#f3f4f6] text-sm font-semibold">
                  Drop PDF / DWG / STEP / JPG
                </p>
                <p className="text-[#BDC1CA] text-xs">
                  or click to browse files
                </p>
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full bg-gradient-to-r from-[#636AE8] to-[#7c82ff] text-white py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg"
              >
                Submit RFQ Now →
              </button>

              <p className="text-center text-[#BDC1CA] text-xs mt-3">
                Our engineering team will review your submission and respond at the earliest.
              </p>

            </form>

          </div>

        </div>
      </Container>
    </section>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-[#BDC1CA] text-xs uppercase tracking-widest mb-2 block">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full bg-[#0f1115] border border-white/10 rounded-xl p-4 text-[#f3f4f6] focus:outline-none focus:border-[#636AE8] focus:ring-2 focus:ring-[#636AE8]/30 transition-all"
      />
    </div>
  );
}


