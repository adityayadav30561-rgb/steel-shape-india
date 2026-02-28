import React from "react";

export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}