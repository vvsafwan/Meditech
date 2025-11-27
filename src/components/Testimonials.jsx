"use client";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Their diagnostic accuracy and timely reporting make Meditech Lab a trusted choice. The team is highly professional and efficient.",
      name: "Dr. Parvathy Deth",
      role: "Gynaecologist, Devi Hospital",
      img: "/dp1.jpg",
    },
    {
      text: "Meditech Lab maintains excellent standards in diagnostics. Their commitment to quality and patient care is remarkable.",
      name: "Dr. Girish Parthan",
      role: "Endocrinologist, Lisie Hospital",
      img: "/dp2.jpg",
    },
    {
      text: "The staff is supportive and the testing process is smooth. Their consistency and accuracy make them stand out.",
      name: "Dr. Rojo Joy",
      role: "Paediatrician, Lourdes Hospital",
      img: "/dp3.jpg",
    },
  ];

  // Duplicate for infinite scroll
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="container mx-auto py-16 bg-[#f4f6f9] overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163c71] uppercase">
          Hear From Our <br />
          <span className="text-[#609129]">Satisfied Patients & Clients</span>
        </h2>

        <div className="w-40 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
      </div>

      {/* SCROLLER */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {loopTestimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-6 bg-[#f4f6f9] shadow-lg rounded-xl border border-[#163c71]/20"
            >
              <p className="text-gray-700 mb-6 leading-relaxed min-h-30">{t.text}</p>

              <div className="flex items-center gap-3 border-t pt-4">
                <Image
                  src={t.img}
                  width={500}
                  height={500}
                  alt={t.name}
                  className="rounded-full object-cover w-16 h-16"
                />
                <div>
                  <h4 className="font-semibold text-[#163c71]">{t.name}</h4>
                  <p className="text-sm text-[#609129]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS ANIMATION */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
