import CertificationSection from '@/components/CertificationSection';
import Loader from '@/components/Loader';
import PrimaryButton from '@/components/PrimaryButton';
import TeamSection from '@/components/TeamSection';
import React, { Suspense } from 'react';

export default function About() {

    return (
        <Suspense fallback={<Loader />}>
            <div>
                {/* HERO SECTION */}
                <section
                    className="relative w-full h-[200px] flex items-center justify-center text-white overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, #163c71 40%, rgba(22,60,113,0.5) 100%), url('/medherobg.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                            About Us
                        </h1>

                        <p className="text-sm sm:text-base text-gray-200">
                            Home &gt; About Us
                        </p>
                    </div>
                </section>

                {/* ABOUT CONTENT */}
                <section className="bg-[#f4f6f9] py-16 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#163c71]">
                            About Meditech Diagnostic Laboratory
                        </h2>
                        {/* <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                            At Meditech, we are dedicated to providing accurate, reliable, and
                            affordable diagnostic services. Our mission is to make high-quality
                            healthcare accessible to every individual and family.
                        </p> */}
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        {/* Left: Image */}
                        <div className="md:w-1/2">
                            <img
                                src="medicaltech.jpg"
                                alt="Meditech Laboratory Team"
                                className="w-full object-cover"
                            />
                        </div>

                        <div className="md:w-1/2 text-gray-700 text-left">
                            <p className="mb-6 text-sm md:text-base">
                                MediTech Diagnostic Centre, established in 2011, is a fully accredited
                                NABL, ISO, and ICMRE certified laboratory committed to delivering
                                accurate and dependable diagnostic services. With a focus on precision,
                                we utilize advanced automated analyzers and modern laboratory technology
                                to ensure fast and reliable results for every patient and healthcare provider.
                            </p>

                            <p className="mb-6 text-sm md:text-base">
                                Our team of experienced professionals follows strict quality and safety
                                protocols to maintain consistency across all tests—from routine health
                                checkups to specialized investigations. With services such as Lab@Home
                                sample collection, walk-in testing, and seamless support for clinics and
                                hospitals, we strive to offer a comfortable and trustworthy diagnostic
                                experience to the community.
                            </p>

                            <PrimaryButton text="Contact Us" color="bg-[#163c71]" />
                        </div>

                    </div>
                </section>

                {/* COMPANY OVERVIEW • MISSION • VISION */}
                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-4xl font-bold text-center mb-10 text-[#163c71]">
                        Company Overview
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Mission Card */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <p className="text-[#609129] font-semibold uppercase text-sm tracking-widest mb-2">
                                OUR MISSION
                            </p>
                            <p className="text-gray-600 text-sm">
                                To provide affordable and accurate
                                diagnostic services accessible to everyone.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <p className="text-[#609129] font-semibold uppercase text-sm tracking-widest mb-2">
                                OUR VISION
                            </p>
                            <p className="text-gray-600 text-sm">
                                To become the most trusted diagnostic
                                chain in Kerala.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                            <p className="text-[#609129] font-semibold uppercase text-sm tracking-widest mb-2">
                                OUR COMMITMENT
                            </p>
                            <p className="text-gray-600 text-sm">
                                To deliver precise, timely, and patient-centered diagnostic services.
                            </p>
                        </div>


                    </div>
                </section>

                <TeamSection />

                <CertificationSection />

            </div>
        </Suspense>
    );
}
