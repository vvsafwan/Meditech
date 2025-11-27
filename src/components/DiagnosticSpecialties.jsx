"use client";
import Image from "next/image";

export default function DiagnosticSpecialties() {
  const items = [
    { icon: "/icons/cardiac.png", title: "Cardiac: TMT, ECHO" },
    { icon: "/icons/xray.png", title: "Digital X-Ray, ECG" },
    { icon: "/icons/liver.png", title: "Liver Elastography" },
    { icon: "/icons/brain.png", title: "Neurology : NCV, EEG" },
    { icon: "/icons/ultrasound.png", title: "Ultrasound Scan" },
    { icon: "/icons/xrayhome.png", title: "X-Ray at Home" },
    { icon: "/icons/blood.png", title: "Home Blood Collection" },
    { icon: "/icons/mammo.png", title: "Mammography, Breast Scan" },
    { icon: "/icons/pap.png", title: "Pap Smear" },
    { icon: "/icons/pft.png", title: "PFT" },
  ];

  return (
    <section className="px-4 py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-10 px-5">
        <h2 className="text-xl sm:text-4xl font-bold text-[#163c71]">
          EXPLORE OUR WIDE <br />
          <span className="text-[#609129]">RANGE OF DIAGNOSTIC SPECIALTIES</span>
        </h2>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden px-4 overflow-x-auto flex gap-4 snap-x snap-mandatory pb-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[160px]
              bg-[#163c71]
              shadow-md p-6 rounded-lg
              text-center snap-start
              transition-all duration-300 
              hover:shadow-[0_0_20px_#609129]
              hover:scale-105
            "
          >
            <div className="rounded-xl p-4 w-fit mx-auto mb-2">
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-white font-medium text-sm">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid container mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#163c71]
              shadow-md p-6 rounded-lg
              text-center cursor-pointer 
              transition-all duration-300 
              hover:shadow-[0_0_25px_#609129] 
              hover:scale-105
            "
          >
            <div className="rounded-xl p-5 w-fit mx-auto mb-3">
              <img
                src={item.icon}
                alt={item.title}
                className="w-8 h-8 object-contain"
              />
            </div>
            <h3 className="text-white font-medium text-sm sm:text-base">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
