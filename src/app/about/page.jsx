import Loader from '@/components/Loader';
import PrimaryButton from '@/components/PrimaryButton';
import React, { Suspense } from 'react';
import { FaGlobe, FaCheckCircle, FaUserCheck, FaChartLine } from "react-icons/fa";

export default function About() {

    const features = [
        {
            title: 'NABL-Standard Processes',
            description:
                'Our laboratory follows strict quality-control protocols to ensure accurate, reliable, and consistent diagnostic reporting.',
            icon: <FaCheckCircle className="text-white text-xl" />,
            bgColor: 'bg-[#163c71]',
        },
        {
            title: 'Experienced Medical Professionals',
            description:
                'Our team includes certified pathologists, microbiologists, and trained technicians with years of diagnostic expertise.',
            icon: <FaUserCheck className="text-white text-xl" />,
            bgColor: 'bg-[#609129]',
        },
        {
            title: 'Advanced Diagnostic Technology',
            description:
                'We use next-generation lab equipment and automated technology to ensure precision and efficiency in every test.',
            icon: <FaChartLine className="text-white text-xl" />,
            bgColor: 'bg-[#163c71]',
        },
        {
            title: 'Serving Kerala & Beyond',
            description:
                'With our center located in Aluva, we proudly serve families, clinics, and hospitals across Kerala with trusted medical diagnostics.',
            icon: <FaGlobe className="text-white text-xl" />,
            bgColor: 'bg-[#609129]',
        },
    ];

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
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                            At Meditech, we are dedicated to providing accurate, reliable, and
                            affordable diagnostic services. Our mission is to make high-quality
                            healthcare accessible to every individual and family.
                        </p>
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

                        {/* Right: Text */}
                        <div className="md:w-1/2 text-gray-700 text-left">
                            <p className="mb-6 text-sm md:text-base">
                                Meditech Diagnostic Laboratory is an advanced medical testing center
                                offering a wide range of pathology, microbiology, biochemistry, and
                                molecular diagnostics. From routine blood tests to specialized
                                investigations, we are equipped to support patients, doctors, and
                                hospitals with precise results delivered on time.
                            </p>

                            <p className="mb-6 text-sm md:text-base">
                                Our facility combines skilled professionals, automated testing
                                systems, and strict quality protocols to maintain consistency and
                                accuracy. Whether it’s home sample collection, walk-in testing, or
                                hospital tie-ups, we ensure a smooth and comfortable experience for
                                every patient.
                            </p>

                            <PrimaryButton text="Contact Us" color="bg-[#163c71]" />
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-4xl font-bold text-center mb-4 text-[#163c71]">
                        Why Choose Us
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm">
                        Meditech stands for trust, accuracy, and patient-first care. Here’s why
                        families and hospitals prefer our diagnostic services.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div
                                        className={`w-12 h-12 flex items-center justify-center rounded-full ${feature.bgColor}`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-[#163c71]">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Suspense>
    );
}
