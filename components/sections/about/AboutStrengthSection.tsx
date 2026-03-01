import { Factory, ShieldCheck, Settings } from "lucide-react";
import Container from "@/components/ui/Container";

export default function AboutStrengthSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-28">
      <Container>
        <div className="grid lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#171a1f] p-6 md:p-10 rounded-3xl border border-white/5">

            <div className="w-12 h-12 bg-[#636AE8]/10 rounded-xl flex items-center justify-center mb-6">
              <Factory className="text-[#636AE8]" size={22} />
            </div>

            <h3 className="text-[#f3f4f6] font-bold text-lg mb-4 uppercase leading-snug">
              Our Manufacturing Strength
            </h3>

            <p className="text-[#BDC1CA] text-sm mb-6 leading-relaxed">
              Our plant is strategically located in the National Capital Region (NCR), Ghaziabad, Uttar Pradesh,
              providing strong logistical connectivity for domestic and export shipments.
            </p>

            <ul className="space-y-3 text-sm text-[#BDC1CA] mb-6 list-disc list-inside marker:text-[#636AE8]">
              <li>Open die forging capacity from 50 Kg to 5000 Kg</li>
              <li>Installed capacity of 5000 MT per year</li>
              <li>In-house heat treatment</li>
              <li>In-house destructive and non-destructive testing</li>
            </ul>

            <div className="border-t border-white/5 pt-6">
              <p className="text-[#BDC1CA] text-sm leading-relaxed">
                Complete in-house control allows us to maintain strict quality standards,
                shorter lead times, and reliable delivery schedules.
              </p>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-[#171a1f] p-6 md:p-10 rounded-3xl border border-white/5">

            <div className="w-12 h-12 bg-[#636AE8]/10 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="text-[#636AE8]" size={22} />
            </div>

            <h3 className="text-[#f3f4f6] font-bold text-lg mb-4 uppercase leading-snug">
              Our Commitment to Quality
            </h3>

            <p className="text-[#BDC1CA] text-sm mb-6 leading-relaxed">
              Steel Shape India is an ISO 9001:2015 certified company with a structured
              Quality Management System.
            </p>

            <p className="text-[#BDC1CA] text-sm mb-6 italic leading-relaxed">
              In industries like Oil & Gas, Power Generation, and Heavy Equipment,
              failure is not an option. We emphasize:
            </p>

            <ul className="space-y-3 text-sm text-[#BDC1CA] mb-6 list-disc list-inside marker:text-[#636AE8]">
              <li>Strict process control</li>
              <li>Certified raw material sourcing</li>
              <li>Third-party inspections (IBR, Lloyds, DNV, SGS, TÜV)</li>
              <li>Full traceability and documentation</li>
            </ul>

            <div className="border-t border-white/5 pt-6">
              <p className="text-[#BDC1CA] text-sm leading-relaxed">
                Quality is embedded into every stage — from raw material selection
                to final dispatch.
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-[#171a1f] p-6 md:p-10 rounded-3xl border border-white/5">

            <div className="w-12 h-12 bg-[#636AE8]/10 rounded-xl flex items-center justify-center mb-6">
              <Settings className="text-[#636AE8]" size={22} />
            </div>

            <h3 className="text-[#f3f4f6] font-bold text-lg mb-4 uppercase leading-snug">
              Engineering Bespoke Forgings
            </h3>

            <p className="text-[#BDC1CA] text-sm mb-6 leading-relaxed">
              All our forgings are manufactured strictly as per customer drawings
              and international standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#BDC1CA] mb-6">
              <ul className="space-y-2 list-disc list-inside marker:text-[#636AE8]">
                <li>Forged Bars</li>
                <li>Forged Rings</li>
                <li>Hollow Forgings</li>
                <li>Gear Blanks</li>
              </ul>

              <ul className="space-y-2 list-disc list-inside marker:text-[#636AE8]">
                <li>Shafts</li>
                <li>Discs & Hubs</li>
                <li>Flanges</li>
                <li>Gearbox Forgings</li>
              </ul>
            </div>

            <div className="border-t border-white/5 pt-6">
              <p className="text-[#BDC1CA] text-sm leading-relaxed">
                Whether the requirement is small precision components or heavy
                single-piece forgings up to 5000 Kg, we provide engineered solutions.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
