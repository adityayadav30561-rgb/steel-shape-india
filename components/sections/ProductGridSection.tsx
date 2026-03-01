import Image from "next/image";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Forged Bars",
    image: "/bars.jpg",
    tags: ["Round", "Square", "Flat"],
  },
  {
    title: "Shafts & Drive Shafts",
    image: "/shafts.jpg",
    tags: ["Custom Dimensions", "Heavy Duty"],
  },
  {
    title: "Forged Rings",
    image: "/rings.jpg",
    tags: ["All Sizes", "Seamless"],
  },
  {
    title: "Discs & Hubs",
    image: "/discs.jpg",
    tags: ["Heavy Duty", "Structural"],
  },
  {
    title: "Hollow Forgings",
    image: "/hollow.jpg",
    tags: ["Complex Profiles", "Bores"],
  },
  {
    title: "Gear Blanks",
    image: "/gear-blanks.jpg",
    tags: ["Precision Grade", "High Strength"],
  },
  {
    title: "Gearbox Forgings",
    image: "/gearbox.jpg",
    tags: ["Industrial Grade", "Custom Alloys"],
  },
];

export default function ProductGridSection() {
  return (
    <section className="w-full bg-[#000000] py-16 sm:py-20 md:pb-28">
      <Container>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {products.map((product, index) => (
           <div
           key={index}
           className="bg-[#181b20] rounded-xl pt-4 sm:pt-6 px-4 sm:px-6 pb-6 sm:pb-8 border border-white/5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl min-w-0"
         >
         
           {/* IMAGE WRAPPER */}
           <div className="w-full aspect-square relative mb-6 rounded-lg overflow-hidden">
             <Image
               src={product.image}
               alt={product.title}
               fill
               className="object-cover"
             />
           </div>
         
           <h3 className="text-white font-semibold text-lg mb-4">
             {product.title}
           </h3>
         
           <div className="flex flex-wrap gap-2">
             {product.tags.map((tag, i) => (
               <span
                 key={i}
                 className="bg-[#1e2229] text-[#BDC1CA] text-xs px-3 py-1 rounded-md"
               >
                 {tag}
               </span>
             ))}
           </div>
         
         </div>
          ))}

        </div>

        {/* Bottom Line */}
        <div className="text-center mt-12 sm:mt-20">

          <p className="text-[#BDC1CA] italic mb-4 sm:mb-6 text-sm sm:text-base px-2">
            Custom dimensions and alloy grades available upon request.
          </p>

          <button className="text-[#636AE8] font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 text-sm sm:text-base px-2">
            View Detailed Technical Specifications
            <ArrowRight size={16} />
          </button>

        </div>

      </Container>
    </section>
  );
}
