import Container from "@/components/ui/Container";

export default function AboutTimelineSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-28">
      <Container>

        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-4 font-semibold">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#f3f4f6]">
            Three Decades of Growth
          </h2>
        </div>

        <div className="relative">

          {/* Center Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 md:-translate-x-1/2 w-[2px] h-full bg-[#1e2128]" />

          <div className="space-y-12 md:space-y-24">

            {/* 1989 */}
            <div className="relative grid md:grid-cols-2 items-start">
              <div className="pl-10 md:pl-0 md:pr-12">
                <div className="bg-[#171a1f] p-6 md:p-8 rounded-2xl border border-white/5">
                  <p className="text-[#636AE8] font-bold text-xl mb-2">1989</p>
                  <p className="text-[#f3f4f6] font-semibold uppercase text-sm mb-3">
                    Founded
                  </p>
                  <p className="text-[#BDC1CA] text-sm leading-relaxed">
                    Steel Shape India established by Late Shri Prithvi Raj Sharma in
                    Ghaziabad, NCR. A vision to redefine the local forging industry
                    with quality craftsmanship.
                  </p>
                </div>
              </div>

              <div />

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-[#000000]" />
            </div>

            {/* 1995 */}
            <div className="relative grid md:grid-cols-2 items-start">
              <div />

              <div className="pl-10 md:pl-12">
                <div className="bg-[#171a1f] p-6 md:p-8 rounded-2xl border border-white/5">
                  <p className="text-[#636AE8] font-bold text-xl mb-2">1995</p>
                  <p className="text-[#f3f4f6] font-semibold uppercase text-sm mb-3">
                    Expansion
                  </p>
                  <p className="text-[#BDC1CA] text-sm leading-relaxed">
                    Expanded forge shop capacity with additional open-die hydraulic
                    hammers. Significant investment in facility infrastructure to
                    handle larger industrial demands.
                  </p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-[#000000]" />
            </div>

            {/* 2005 */}
            <div className="relative grid md:grid-cols-2 items-start">
              <div className="pl-10 md:pl-0 md:pr-12">
                <div className="bg-[#171a1f] p-6 md:p-8 rounded-2xl border border-white/5">
                  <p className="text-[#636AE8] font-bold text-xl mb-2">2005</p>
                  <p className="text-[#f3f4f6] font-semibold uppercase text-sm mb-3">
                    Export Markets
                  </p>
                  <p className="text-[#BDC1CA] text-sm leading-relaxed">
                    Commenced exports to USA, Canada, and European markets.
                    Transformed from a domestic player to a globally recognized
                    supplier of precision forgings.
                  </p>
                </div>
              </div>

              <div />

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-[#000000]" />
            </div>

            {/* 2015 */}
            <div className="relative grid md:grid-cols-2 items-start">
              <div />

              <div className="pl-10 md:pl-12">
                <div className="bg-[#171a1f] p-6 md:p-8 rounded-2xl border border-white/5">
                  <p className="text-[#636AE8] font-bold text-xl mb-2">2015</p>
                  <p className="text-[#f3f4f6] font-semibold uppercase text-sm mb-3">
                    ISO Certified
                  </p>
                  <p className="text-[#BDC1CA] text-sm leading-relaxed">
                    Achieved ISO 9001 certification. Solidified commitment to
                    international quality management standards and process-driven excellence.
                  </p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-[#000000]" />
            </div>

            {/* Today */}
            <div className="relative grid md:grid-cols-2 items-start">
              <div className="pl-10 md:pl-0 md:pr-12">
                <div className="bg-[#171a1f] p-6 md:p-8 rounded-2xl border border-white/5">
                  <p className="text-[#636AE8] font-bold text-xl mb-2">Today</p>
                  <p className="text-[#f3f4f6] font-semibold uppercase text-sm mb-3">
                    Under Mr. Manoj Sharma
                  </p>
                  <p className="text-[#BDC1CA] text-sm leading-relaxed">
                    Operating with 5000 MT/year capacity, serving 4+ continents with
                    precision-engineered forgings. Continued leadership in heavy
                    industry innovation.
                  </p>
                </div>
              </div>

              <div />

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full border-4 border-[#000000]" />
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}
