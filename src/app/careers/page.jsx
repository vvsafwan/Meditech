'use client';
import Loader from '@/components/Loader';
import PrimaryButton from '@/components/PrimaryButton';
import React, { Suspense, useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaFilePdf, FaPen } from 'react-icons/fa';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        cv: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Suspense fallback={<Loader />}>
            <div>

                {/* ===================== HERO SECTION ===================== */}
          <section
                    className="relative w-full h-[200px] flex items-center justify-center text-white overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, #163c71 35%, rgba(25,74,154,0.45) 90%), url('/medherobg.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                            Careers at Meditech Diagnostics
                        </h1>

                        <p className="text-sm sm:text-base mb-6 text-gray-200">
                            <strong>Home</strong> &gt; Careers
                        </p>
                    </div>
                </section>
                {/* ===================== DESCRIPTION ===================== */}
                <div className="max-w-3xl mx-auto text-center px-6 mt-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#163c71] mb-3">
                        Join Our Team
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        At Meditech, we believe our employees are the backbone of our organization.
                        If you are passionate, skilled, and eager to grow in a professional environment,
                        we invite you to apply for suitable positions.
                    </p>
                </div>

                {/* ===================== FORM SECTION ===================== */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 container mx-auto max-w-3xl p-8 bg-white rounded-xl shadow-lg mt-10 mb-16 animate-slideUp"
                >

                    {/* NAME */}
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 text-sm hover:shadow-md transition">
                            <FaUser className="text-[#163c71] mr-3" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full outline-none text-gray-700"
                                required
                            />
                        </div>
                    </div>

                    {/* PHONE */}
                    <div>
                        <label className="block mb-1 font-medium">Phone</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 text-sm hover:shadow-md transition">
                            <FaPhone className="text-[#163c71] mr-3" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full outline-none text-gray-700"
                                required
                            />
                        </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 text-sm hover:shadow-md transition">
                            <FaEnvelope className="text-[#163c71] mr-3" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full outline-none text-gray-700"
                                required
                            />
                        </div>
                    </div>

                    {/* UPLOAD CV */}
                    <div>
                        <label className="block mb-1 font-medium">Upload CV (PDF only)</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 text-sm hover:shadow-md transition cursor-pointer">
                            <FaFilePdf className="text-[#609129] mr-3" />
                            <input
                                type="file"
                                name="cv"
                                accept=".pdf"
                                onChange={handleChange}
                                className="w-full"
                                required
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Maximum file size: 5MB</p>
                    </div>

                    {/* MESSAGE */}
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <div className="flex border rounded-lg px-3 py-3 text-sm hover:shadow-md transition">
                            <FaPen className="text-[#163c71] mr-3 mt-1" />
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Write your message or introduction"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full outline-none resize-none text-gray-700"
                            />
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="text-center pt-4">
                        <PrimaryButton text="Submit Application" color="bg-[#163c71]" />
                    </div>
                </form>
            </div>
        </Suspense>
    );
};

export default Careers;
