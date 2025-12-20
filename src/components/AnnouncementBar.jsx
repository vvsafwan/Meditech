import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#163c71] text-white text-xs sm:text-sm py-2 font-semibold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 px-4 text-center sm:text-left">

      {/* Mobile View: Email + Phone only */}
      <div className="flex sm:hidden flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <MdEmail className="text-[#609129]" />
          <a href="mailto:info@meditechlabs.in" className="hover:underline">
            info@meditechlabs.in
          </a>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-1">
          <FiPhone className="text-[#609129]" />
          <a href="tel:+919876543210" className="hover:underline">
            +91  9995912228
          </a>
        </div>
      </div>

      {/* Desktop View: Full Bar */}
      <div className="hidden sm:flex flex-wrap items-center justify-center gap-5">
        <div className="flex items-center gap-1">
          <MdLocationOn className="text-[#609129]" />
          <span>Aluva, Kerala</span>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-1">
          <MdEmail className="text-[#609129]" />
          <a href="mailto:info@meditechlabs.in" className="hover:underline">
            info@meditechlabs.in
          </a>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-1">
          <FiPhone className="text-[#609129]" />
          <a href="tel:+919876543210" className="hover:underline">
            +91  9995912228
          </a>
        </div>

        <div className="text-lg">|</div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/share/1CG7frQSu5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#609129] transition-colors"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/meditech_diagnosic_centre?igsh=MWU1N3E4MjR4YTF5dg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#609129] transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

      </div>
    </div>
  );
}
