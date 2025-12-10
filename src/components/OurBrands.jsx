"use client";
import React from "react";

export default function ScrollingText() {
  const texts = [
    "NABL Certified Laboratory",
    "Home Sample Collection Available",
    "RTPCR & Antigen Testing",
    "Accurate Diagnostic Reports",
    "Advanced Testing Equipment",
    "Fast & Reliable Results",
    "Located in Aluva"
  ];

  return (
    <section className="py-3 mt-10 overflow-hidden bg-[#609129]">
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-16 items-center whitespace-nowrap">
          {[...texts, ...texts].map((text, index) => (
            <span
              key={index}
              className="text-white"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{` 
        .animate-scroll {
          animation: scroll-left 20s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
