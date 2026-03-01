import Container from "@/components/ui/Container";
import { MessageSquare, Upload, Phone, Mail } from "lucide-react";
import RequestQuoteModal from "@/components/shared/RequestQuoteModal";

export default function ManufacturingCTASection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f1117] via-[#12131b] to-[#0f1117] py-16 md:py-24 lg:py-32">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <p className="text-[#7f82ff] text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-semibold mb-5 md:mb-6">
            Connect With Our Team
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#f3f4f6] leading-[1.1] mb-6">
            READY FOR YOUR NEXT <br />
            <span className="bg-gradient-to-r from-[#7f82ff] to-[#a0a3ff] bg-clip-text text-transparent">
              REQUIREMENT?
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#BDC1CA] text-base md:text-lg leading-relaxed mb-10 md:mb-12">
            Consult with our senior metallurgical engineers to discuss your specific
            technical drawings and lead-time requirements.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 md:mb-20">
            <a
              href="tel:+919560516841"
              className="flex items-center justify-center gap-3 bg-white text-black px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 w-full sm:w-auto"
            >
              <MessageSquare size={18} />
              Request Technical Discussion
            </a>

            <RequestQuoteModal triggerClassName="flex items-center justify-center gap-3 bg-transparent border border-white/10 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold hover:bg-[#1a1c25] transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
              <Upload size={18} />
              Send Your Drawing
            </RequestQuoteModal>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 mb-12" />

          {/* Contact Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 md:gap-16 text-[#f3f4f6] text-sm">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#7f82ff]" />
              +91 123 456 7890
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#7f82ff]" />
              SALES@STEELSHAPEINDIA.COM
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
