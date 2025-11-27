import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

export default function HomeAboutSection() {
    return (
        <section className="flex flex-col md:flex-row items-start justify-between gap-10 py-8 bg-[#f4f6f9] px-6 lg:px-16 max-w-7xl mx-auto">

            {/* Left Content */}
            <div className="w-full md:w-1/2">
                <p className="text-[#609129] font-semibold uppercase text-sm tracking-widest mb-2">
                    Medical Center
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2 leading-10 md:leading-12">
                    NABL Certified <span className="text-[#609129]">Medical Laboratory</span> 🏅
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    We are a fully equipped and certified medical laboratory offering a wide
                    range of diagnostic services with high accuracy and reliability. Our team
                    ensures quality testing with fast reporting and excellent patient care.
                </p>

                {/* Bullet 1 */}
                <div className="flex items-start gap-3 mb-2">
                    <FaCheckCircle className="text-[#609129] mt-1 text-xl flex-shrink-0" />
                    <p className="text-gray-800 text-sm font-medium">
                        Home collection available for all lab tests
                    </p>
                </div>

                {/* Bullet 2 */}
                <div className="flex items-start gap-3 mb-2">
                    <FaCheckCircle className="text-[#609129] mt-1 text-xl flex-shrink-0" />
                    <p className="text-gray-800 text-sm font-medium">
                        RTPCR and Antigen Test Available
                    </p>
                </div>

                {/* Bullet 3 */}
                <div className="flex items-start gap-3 mb-6">
                    <FaCheckCircle className="text-[#609129] mt-1 text-xl flex-shrink-0" />
                    <p className="text-gray-800 text-sm font-medium">
                        Location: Aluva
                    </p>
                </div>

                <PrimaryButton
                    text="Book a Test →"
                    color={"bg-[#609129]"}
                    hoverColor={"hover:bg-[#609129]/90"}
                />
            </div>

            {/* Right Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
                <Image
                    src="/lab.jpg"
                    alt="Medical Laboratory"
                    width={500}
                    height={400}
                    className="shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
                />
            </div>

        </section>
    );
}
