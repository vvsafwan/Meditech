import Loader from '@/components/Loader';
import React, { Suspense } from 'react';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function page() {
    return (
        <div>
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
                        Contact Meditech Diagnostics
                    </h1>

                    <p className="text-sm sm:text-base mb-6 text-gray-200">
                        <strong>Home</strong> &gt; Contact Us
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">
                        Get In <span className="text-[#609129]">Touch</span>
                    </h2>
                    <p className="text-gray-600 mt-2">
                        For test bookings, home sample collection or medical inquiries — our team is always here to assist you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <form className="bg-[#f4f6f9] shadow p-6 rounded-lg space-y-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center space-x-2 text-white py-2 rounded transition-colors duration-300"
                            style={{ backgroundColor: '#163c71' }}
                        >
                            <span>Send Message</span>
                            <FaPaperPlane />
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-start bg-[#f4f6f9] p-4 rounded-lg shadow space-x-4">
                            <div className="bg-purple-500 text-white p-3 rounded-full">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email Us</h4>
                                <p className="text-sm text-gray-600">For reports, test details & appointments</p>
                                <a href="mailto:meditechlabs@gmail.com" className="text-blue-500 text-sm">
                                    meditechlabs@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Call */}
                        <div className="flex items-start bg-[#f4f6f9] p-4 rounded-lg shadow space-x-4">
                            <div className="bg-orange-500 text-white p-3 rounded-full">
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className="font-semibold">Call Us</h4>
                                <p className="text-sm text-gray-600">For bookings & home collection</p>
                                <a href="tel:+918606330055" className="text-blue-500 text-sm">
                                    +91 86063 30055
                                </a>
                            </div>
                        </div>

                        {/* Visit */}
                        <div className="flex items-start bg-[#f4f6f9] p-4 rounded-lg shadow space-x-4">
                            <div className="bg-cyan-500 text-white p-3 rounded-full">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="font-semibold">Visit Us</h4>
                                <p className="text-sm text-gray-600">Meditech Diagnostics Center</p>
                                <address className="not-italic text-blue-500 text-sm">
                                    Aluva, Ernakulam, Kerala, India
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
