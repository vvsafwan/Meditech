import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#163c71] text-white pt-12 pb-6 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 border-b border-white/10 pb-10">

                {/* About Section (Wider) */}
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 text-[#609129]">Meditech Lab</h3>
                    <p className="text-sm leading-relaxed text-gray-200 max-w-[90%]">
                        NABL Certified Medical Laboratory offering accurate diagnostics,
                        home sample collection, RTPCR tests, and advanced scanning services.
                        Trusted healthcare diagnostics in Aluva with a focus on reliability
                        and patient convenience.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-5">
                        <a href="#" aria-label="Facebook" className="hover:text-[#609129]">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-[#609129]">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-[#609129]">
                            <FaLinkedinIn size={18} />
                        </a>
                        <a href="#" aria-label="Twitter" className="hover:text-[#609129]">
                            <FaTwitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#609129]">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">Home Collection</a></li>
                        <li><a href="#" className="hover:text-white">Packages</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#609129]">Our Services</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                        <li>Blood Tests</li>
                        <li>RTPCR & Antigen Test</li>
                        <li>Ultrasound Scan</li>
                        <li>Liver Elastography</li>
                        <li>X-Ray & ECG</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#609129]">Contact Us</h3>
                    <ul className="space-y-3 text-sm text-gray-200">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="mt-1 text-[#609129]" />
                            <span>Meditech Lab, Aluva, Kerala</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaPhoneAlt className="mt-1 text-[#609129]" />
                            <span>+91 98765 43210</span>
                        </li>

                        <li className="flex items-start gap-3">
                            <FaEnvelope className="mt-1 text-[#609129]" />
                            <span>support@meditechlab.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto text-center text-sm text-gray-300 mt-6">
                <p>© {new Date().getFullYear()} Meditech Lab. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
