import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

export default function ConsultSection() {
  return (
    <section className="bg-[#163c71] text-white py-10 px-6 lg:px-20 relative my-0 md:mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-3/8 hidden md:flex md:justify-center">
          <Image
            src="/doctor.png"
            alt="Consultation"
            className="w-[300px] md:w-[350px] object-contain absolute bottom-0"
            width={350}
            height={400}
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-5/8">
          <h2 className="text-3xl md:text-2xl font-semibold mb-4 leading-snug">
            Consult the <span className="text-[#609129]">diagnostic services</span> you need now!
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
            Our certified experts ensure accurate test results backed by NABL, ISO, and ICMR standards. 
            With advanced technology and years of experience, we provide reliable diagnostics to support 
            better and faster medical decisions.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#609129]" />
              <span className="font-medium text-sm">NABL Certified Accuracy</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#609129]" />
              <span className="font-medium text-sm">Advanced Testing Technology</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#609129]" />
              <span className="font-medium text-sm">Trusted Since 2011</span>
            </div>

            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#609129]" />
              <span className="font-medium text-sm">Home Sample Collection Available</span>
            </div>
          </div>

          <PrimaryButton text="Book a Home Collection →" color={"bg-[#609129]"} pageLink={'/contact'} />
        </div>
      </div>
    </section>
  );
}
