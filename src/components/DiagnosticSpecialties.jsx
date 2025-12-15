"use client";

import React, { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

export default function DiagnosticSpecialties() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-12 bg-[#f4f6f9] px-6 lg:px-16 max-w-7xl">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2">
        
        <h5 className="text-[#609129] font-semibold uppercase text-xl tracking-widest mb-5">
          Brief overview of the company
        </h5>

        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
          MediTech Diagnostic Centre, established on <strong>July 11, 2011</strong>, is NABL Certified with ISO and ICMRE accreditations. 
          We ensure precision and reliability through advanced equipment, automated testing systems, 
          and highly experienced medical professionals. Our mission is to deliver accurate, timely, 
          and patient-centered diagnostic services to the community.
        </p>

        <div className="flex items-start gap-3 mb-3">
          <FaCheckCircle className="text-[#609129] mt-1 text-xl flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            NABL, ISO & ICMRE Accredited Laboratory
          </p>
        </div>

        <div className="flex items-start gap-3 mb-3">
          <FaCheckCircle className="text-[#609129] mt-1 text-xl flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            Fully Automated Testing – Hematology & Biochemistry
          </p>
        </div>

        <div className="flex items-start gap-3 mb-6">
          <FaCheckCircle className="text-[#609129] mt-1 text-xl flex-shrink-0" />
          <p className="text-gray-800 text-sm font-medium">
            Lab@Home Sample Collection by Trained Phlebotomists
          </p>
        </div>

        <PrimaryButton
          text="Learn More →"
          color={"bg-[#609129]"}
          hoverColor={"hover:bg-[#609129]/90"}
        />
      </div>

      <div className="relative w-full md:w-1/2 flex justify-center">

        <video
          ref={videoRef}
          src="/medvideo.mp4" // ← Replace with your actual video file
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-[center_35%] w-full h-[700px]"
        />

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition"
        >
          {isMuted ? <FaVolumeMute size={10} /> : <FaVolumeUp size={10} />}
        </button>
      </div>

    </section>
  );
}
