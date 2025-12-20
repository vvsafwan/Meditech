"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    // { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/diagnostic", label: "Diagnostic Services" },
    { href: "/centers", label: "Centers" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-[#f4f6f9] shadow-md w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              className="mr-2 w-40"
              width={200}
              height={80}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-5 text-gray-800 font-semibold">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-[#163c71] text-sm transition-colors duration-200 ${isActive ? "text-[#609129]" : ""
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-[#f4f6f9] text-gray-800 font-medium flex flex-col items-center py-4 space-y-4 shadow-md">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href} onClick={() => setIsOpen(false)}>
                <Link
                  href={link.href}
                  className={`hover:text-[#163c71] transition-colors duration-200 ${isActive ? "text-[#163c71]" : ""
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
