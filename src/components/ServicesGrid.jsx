"use client";
import React from "react";
import { CalendarCheck, MapPin, BriefcaseMedical, TestTube, Waves, Home } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    { icon: <CalendarCheck size={60} color="#163c71" />, label: "Book An Appointment" },
    { icon: <MapPin size={60} color="#163c71" />, label: "Our Labs" },
    { icon: <BriefcaseMedical size={60} color="#163c71" />, label: "Health Packages" },
    { icon: <TestTube size={60} color="#163c71" />, label: "Available Tests" },
    { icon: <Waves size={60} color="#163c71" />, label: "Scanning" },
    { icon: <Home size={60} color="#163c71" />, label: "Home Visit" },
  ];

  return (
    <section className="container mx-auto w-full px-5 pt-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-white">
        {services.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-2 border-3 border-[#163c71] hover:bg-[#163c71]/20 hover:scale-105 transition-all duration-500"
          >
            <div className="mb-1">{item.icon}</div>
            <p className="font-semibold text-xs md:text-sm text-center text-[#163c71]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
