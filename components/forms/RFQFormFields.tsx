"use client";

import { useMemo, useRef, useState } from "react";
import { RefreshCw, Upload, X } from "lucide-react";

type RFQFormFieldsProps = {
  submitLabel?: string;
};

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ALLOWED_EXTENSIONS = ["pdf", "dwg", "step", "stp", "jpg", "jpeg", "png"];

export default function RFQFormFields({
  submitLabel = "Submit RFQ Now ->",
}: RFQFormFieldsProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [captchaToken, setCaptchaToken] = useState(() => createCaptchaToken());
  const [captchaInput, setCaptchaInput] = useState("");

  const captchaPrompt = `${captchaToken.a} + ${captchaToken.b}`;
  const isCaptchaValid =
    Number.parseInt(captchaInput.trim(), 10) === captchaToken.answer;

  const uploadHint = useMemo(
    () =>
      `Allowed: PDF, DWG, STEP/STP, JPG/PNG • Max ${MAX_FILE_SIZE_MB}MB per file`,
    []
  );

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    const validFiles: File[] = [];
    let nextError = "";

    for (const file of files) {
      const extension = file.name.split(".").pop()?.toLowerCase() ?? "";

      if (!ALLOWED_EXTENSIONS.includes(extension)) {
        nextError = `Unsupported file type: ${file.name}`;
        continue;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        nextError = `${file.name} exceeds ${MAX_FILE_SIZE_MB}MB limit.`;
        continue;
      }

      validFiles.push(file);
    }

    if (validFiles.length) {
      setSelectedFiles((prev) => {
        const merged = [...prev, ...validFiles];
        const unique = new Map<string, File>();
        for (const file of merged) {
          unique.set(`${file.name}-${file.size}-${file.lastModified}`, file);
        }
        return Array.from(unique.values());
      });
    }

    setFileError(nextError);
    event.target.value = "";
  };

  const removeFile = (fileToRemove: File) => {
    setSelectedFiles((prev) =>
      prev.filter(
        (file) =>
          !(
            file.name === fileToRemove.name &&
            file.size === fileToRemove.size &&
            file.lastModified === fileToRemove.lastModified
          )
      )
    );
  };

  const resetCaptcha = () => {
    setCaptchaToken(createCaptchaToken());
    setCaptchaInput("");
  };

  return (
    <>
      <Input
        label="Product Description"
        placeholder="e.g. Forged Shaft / Flange / Ring"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input label="Material Grade" placeholder="e.g. AISI 4140, SS316" />
        <Input label="Quantity Required" placeholder="e.g. 50 Pcs" />
      </div>

      <Input label="Required Delivery Timeline" placeholder="e.g. 4-6 Weeks" />
      <Input label="Inspection Requirements" placeholder="" />

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

      <div className="border border-dashed border-[#636AE8]/40 rounded-2xl p-6 md:p-8 text-center bg-[#0f1115]">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.dwg,.step,.stp,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="inline-flex items-center gap-2 bg-[#1a1e27] border border-white/15 text-[#f3f4f6] px-4 py-2 rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95"
        >
          <Upload size={16} />
          Attach Files
        </button>

        <p className="text-[#f3f4f6] text-sm font-semibold mt-4">
          Drop PDF / DWG / STEP / JPG
        </p>
        <p className="text-[#BDC1CA] text-xs mt-1">{uploadHint}</p>

        {fileError && <p className="text-red-400 text-xs mt-3">{fileError}</p>}

        {!!selectedFiles.length && (
          <div className="mt-4 space-y-2 text-left">
            {selectedFiles.map((file) => (
              <div
                key={`${file.name}-${file.size}-${file.lastModified}`}
                className="flex items-center justify-between gap-3 text-xs text-[#f3f4f6] bg-[#161a22] border border-white/10 rounded-lg px-3 py-2"
              >
                <span className="truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(file)}
                  className="text-white/70 hover:text-white transition"
                  aria-label={`Remove ${file.name}`}
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-[#0f1115] border border-white/10 rounded-xl p-4">
        <div className="flex items-center justify-between gap-3 mb-3">
          <p className="text-[#BDC1CA] text-xs uppercase tracking-widest">
            Security Check
          </p>
          <button
            type="button"
            onClick={resetCaptcha}
            className="inline-flex items-center gap-1 text-[#636AE8] text-xs hover:text-white transition"
          >
            <RefreshCw size={12} />
            Refresh
          </button>
        </div>

        <label className="text-[#f3f4f6] text-sm block mb-2">
          Solve: {captchaPrompt}
        </label>
        <input
          value={captchaInput}
          onChange={(event) => setCaptchaInput(event.target.value)}
          inputMode="numeric"
          placeholder="Enter answer"
          className="w-full bg-[#11151d] border border-white/10 rounded-xl p-3 text-[#f3f4f6] focus:outline-none focus:border-[#636AE8] focus:ring-2 focus:ring-[#636AE8]/30 transition-all"
        />
      </div>

      <button
        type="button"
        disabled={!isCaptchaValid}
        className="w-full bg-gradient-to-r from-[#636AE8] to-[#7c82ff] text-white py-4 rounded-xl font-semibold transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
      >
        {submitLabel}
      </button>

      {!isCaptchaValid && (
        <p className="text-center text-[#BDC1CA] text-xs">
          Complete captcha to enable submit.
        </p>
      )}

      <p className="text-center text-[#BDC1CA] text-xs mt-1">
        Our engineering team will review your submission and respond at the
        earliest.
      </p>
    </>
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

function createCaptchaToken() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b, answer: a + b };
}
