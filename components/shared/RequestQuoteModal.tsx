"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import RFQFormFields from "@/components/forms/RFQFormFields";

type RequestQuoteModalProps = {
  children: React.ReactNode;
  triggerClassName: string;
};

export default function RequestQuoteModal({
  children,
  triggerClassName,
}: RequestQuoteModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className={triggerClassName} onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-[92vw] md:w-[60vw] md:h-[40vw] max-w-5xl max-h-[86vh] min-h-[420px] md:min-h-[520px] overflow-y-auto rounded-2xl border border-white/20 bg-[rgba(20,24,38,0.65)] backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-5 md:px-8 py-5 border-b border-white/10 bg-[rgba(20,24,38,0.75)] backdrop-blur-2xl">
              <div>
                <h3 className="text-[#f3f4f6] font-bold text-lg uppercase">
                  Request for Quote (RFQ)
                </h3>
                <p className="text-[#636AE8] text-xs uppercase tracking-wider mt-1">
                  Submit Your Technical Requirement
                </p>
              </div>

              <button
                type="button"
                aria-label="Close form"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-lg border border-white/15 text-white/80 hover:text-white hover:border-[#636AE8] transition flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </div>

            <form className="space-y-6 p-5 md:p-8">
              <RFQFormFields />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
