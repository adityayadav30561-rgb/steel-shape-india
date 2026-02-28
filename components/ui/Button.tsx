import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "glass";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {

  const base =
    "px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ease-out inline-flex items-center justify-center";

  const primary =
    "bg-[#6469e5] text-white shadow-md";

  const glass =
    "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-md";

  const hoverEffect =
    "hover:scale-105 hover:-translate-y-1 active:scale-95";

  return (
    <button
      className={`${base} ${variant === "primary" ? primary : glass} ${hoverEffect} ${className}`}
    >
      {children}
    </button>
  );
}