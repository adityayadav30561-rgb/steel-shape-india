import React from "react";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-20">
      {children}
    </div>
  );
}