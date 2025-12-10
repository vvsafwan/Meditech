import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[65vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        background: `linear-gradient(to right, #163c71 35%, rgba(25,74,154,0.45) 90%), url('/medherobg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
        <p className="bg-[#f4f6f9]/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4 border border-white/20">
          NABL Certified Medical Laboratory
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Diagnostic Centre In Kochi Accurate Diagnostics, Trusted Results
        </h1>

        {/* <p className="text-sm sm:text-base mb-6 text-gray-200">
          Experience accurate testing, fast reporting, and seamless home sample
          collection. From RTPCR and Antigen tests to complete medical
          diagnostics — we ensure dependable results for better health decisions.
        </p> */}

        <button className="bg-[#609129] hover:bg-[#609129]/90 text-white font-semibold py-3 px-7 transition-all duration-200">
          Book a Test Now →
        </button>
      </div>
    </section>
  );
}
