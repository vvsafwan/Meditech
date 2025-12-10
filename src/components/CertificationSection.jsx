import { FaFilePdf } from "react-icons/fa";
import { certifications } from "../data/data"; // contains PDF file paths
import Image from "next/image";

export default function CertificationSection() {
  return (
    <section className="py-16 px-5 bg-[#f4f6f9]">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase">
          <span className="text-[#609129]">CERTIFICATIONS</span>
        </h2>
        <div className="w-36 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
      </div>

      {/* PDF Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.file}        // PDF file link
            target="_blank"         // open in new tab
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center 
                       transition hover:scale-[1.05] hover:shadow-xl cursor-pointer group"
          >
            {/* Icon */}
            <Image
              src={cert.image}
              alt={cert.name}
              width={1200}
              height={900}
              className="mb-4"
            />

            {/* Hover underline */}
            <span className="block w-0 h-[2px] bg-[#609129] mt-2 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </section>
  );
}
