import React from "react";

export default function IEBadge({ size = "sm", className = "" }) {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-lg",
    lg: "w-24 h-24 text-3xl",
    xl: "w-32 h-32 text-4xl"
  };

  return (
    <div
      className={`rounded-full bg-[#6E7B48] flex items-center justify-center font-serif text-white tracking-wider ${sizeClasses[size]} ${className}`}
    >
      IE
    </div>
  );
}