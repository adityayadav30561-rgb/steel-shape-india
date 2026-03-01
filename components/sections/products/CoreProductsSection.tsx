import Container from "@/components/ui/Container";
import Image from "next/image";

export default function CoreProductsSection() {
  return (
    <section className="w-full bg-[#000000] py-20 md:py-32">
      <Container>

        {/* HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
            Manufacturing Excellence
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f3f4f6] mb-6">
            Industrial Forging Solutions
          </h2>

          <div className="w-16 h-[3px] bg-[#636AE8] mb-8" />

          <p className="text-[#BDC1CA] max-w-4xl text-base md:text-lg leading-relaxed">
            Steel Shape India manufactures bespoke open die forgings in Carbon,
            Alloy, Stainless, and Duplex Stainless steels. All components are
            produced strictly as per customer drawings, international standards,
            and third-party inspection requirements.{" "}
            <span className="text-[#f3f4f6] font-semibold">
              We specialize in precision-forged components for demanding industrial applications.
            </span>
          </p>
        </div>

        {/* CORE PRODUCT LINES */}
        <div className="mb-14 md:mb-20">
          <p className="text-[#636AE8] text-xs tracking-[0.35em] uppercase mb-6 font-semibold">
            Strategic Reach
          </p>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#f3f4f6] mb-6">
            Core Product Lines
          </h3>

          <div className="w-16 h-[3px] bg-[#636AE8] mb-12 md:mb-16" />
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">

          <ProductCard
            title="Forged Bars"
            description="Heavy-duty bars for structural and mechanical engineering with high fatigue resistance."
            image="/products/bars.jpg"
            specs={[
              ["Round Bars", "Ø100 mm to Ø500 mm"],
              ["Square Bars", "Up to 500×500 mm"],
              ["Flat Bars", "Up to 150×1000 mm"],
              ["Max Length", "5000 mm"],
              ["Max Weight", "5000 Kg"],
            ]}
            tags={["Round", "Square", "Flat"]}
          />

          <ProductCard
            title="Shafts & Drive Shafts"
            description="Engineered for high-torque power transmission in gearboxes, turbines, and rolling mills."
            image="/products/shafts.jpg"
            specs={[
              ["Barrel Dia", "Ø100 mm to Ø500 mm"],
              ["Max Length", "5000 mm"],
              ["Machining", "Proof / Fully Finished"],
              ["Max Weight", "5000 Kg"],
            ]}
            tags={["Custom Dimensions", "Heavy Duty"]}
          />

          <ProductCard
            title="Forged Rings"
            description="Precision seamless rings for bearing assemblies and critical rotating equipment."
            image="/products/rings.jpeg"
            specs={[
              ["Outer Dia", "Up to Ø2100 mm"],
              ["Thickness", "Up to 500 mm"],
              ["Concentricity", "As per ASTM/ASME"],
              ["Max Weight", "5000 Kg"],
            ]}
            tags={["Seamless", "Large OD"]}
          />

          <ProductCard
            title="Discs & Hubs"
            description="Structural accuracy for pressure-bearing applications and rotating mechanical systems."
            image="/products/discs.webp"
            specs={[
              ["Max Diameter", "Up to Ø2000 mm"],
              ["Max Thickness", "Up to 500 mm"],
              ["Forging Ratio", "3:1 Minimum"],
              ["Max Weight", "5000 Kg"],
            ]}
            tags={["Structural", "Pressure Grade"]}
          />

          <ProductCard
            title="Hollow Forgings"
            description="Custom cylindrical forgings for high-pressure and heavy-load industrial environments."
            image="/products/hollow.jfif"
            specs={[
              ["Inner Dia", "Up to Ø250 mm"],
              ["Max Length", "1500 mm"],
              ["Tolerance", "DIN / ASME Standards"],
              ["Max Weight", "5000 Kg"],
            ]}
            tags={["Complex Profiles", "Bores"]}
          />

          <ProductCard
            title="Gear Blanks"
            description="Large scale pinion and gear components designed for peak performance and durability."
            image="/products/gears.webp"
            specs={[
              ["Pinion Gears", "Heavy Duty Forged"],
              ["Output Shafts", "Integrated Forgings"],
              ["Torque Rating", "High-Load Capacity"],
              ["Max Weight", "5000 Kg"],
            ]}
            tags={["High Strength", "Industrial Grade"]}
          />

        </div>

      </Container>
    </section>
  );
}

function ProductCard({
  title,
  description,
  image,
  specs,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  specs: string[][];
  tags: string[];
}) {
  return (
    <div className="bg-[#0f1115] rounded-3xl border border-white/5 p-6 md:p-10 flex flex-col sm:flex-row justify-between sm:items-center gap-8 md:gap-10">

      {/* LEFT */}
      <div className="flex-1">

        <h4 className="text-[#f3f4f6] font-bold text-lg md:text-xl mb-4 uppercase">
          {title}
        </h4>

        <p className="text-[#BDC1CA] text-sm mb-8 leading-relaxed">
          {description}
        </p>

        <div className="space-y-4 text-sm mb-8">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-start justify-between gap-4 border-b border-white/5 pb-2">
              <span className="text-[#BDC1CA] uppercase tracking-wide text-xs">
                {spec[0]}
              </span>
              <span className="text-[#f3f4f6] font-semibold">
                {spec[1]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#BDC1CA]"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full sm:w-[160px] h-[220px] sm:h-[160px] relative shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

    </div>
  );
}
