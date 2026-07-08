import React from "react";

export default function SectionLabel({ children, className = "" }) {
  return (
    <span className={`uppercase text-xs tracking-ultra-wide font-sans font-medium text-brand-sage ${className}`}>
      {children}
    </span>
  );
}