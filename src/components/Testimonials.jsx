"use client";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Veena Arun",
      rating: 5,
      text: "Meditech Diagnostic Centre lab testing and their approach to customer was really great 👍",
    },
    {
      name: "Nancy Samuel",
      rating: 5,
      text: "I am truly impressed by your team, so today for the second time I opted your service. Your team came to our home for sample collection and I noticed that they are well aware of GLP (Good Laboratory Practices). Even the weather was not favourable, the staff arrived on time with smiling faces. They kept our spirit high. Incredible behavior & work. Your laboratory maintains good TAT. Reports sending method also well practiced. Overall Meditech team is highly recommended. Keep it up and continue your excellent work 👍👍",
    },
    {
      name: "Nithin VN",
      rating: 5,
      text: "Very good lab with very good staff and very accurate results when compared to other top labs across Kerala.",
    },
    {
      name: "Sujit Krl",
      rating: 5,
      text: "Excellent service, dedicated and friendly staff under an organised management.",
    },
    {
      name: "Deepu Pannakkal",
      rating: 5,
      text: "I had a great experience at Meditech Diagnostic Centre; the staff was professional and the service was prompt. Highly recommend them for their efficient and accurate diagnostic services.",
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="container mx-auto py-16 bg-[#f4f6f9] overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#163c71] uppercase">
          Hear From Our <br />
          <span className="text-[#609129]">Satisfied Patients</span>
        </h2>
        <div className="w-40 h-1 bg-[#609129] mx-auto mt-4 rounded-full shadow-[0_0_20px_#609129]"></div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {loopTestimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 18s linear infinite;
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

/* ---------- CARD COMPONENT ---------- */

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-6 bg-white shadow-lg rounded-xl border border-[#163c71]/20">
      {/* Stars */}
      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>

      {/* Review Text */}
      <p
        className={`text-gray-700 leading-relaxed min-h-[100px] text-sm ${
          !expanded ? "line-clamp-4" : ""
        }`}
      >
        {testimonial.text}
      </p>

      {testimonial.text.length > 200 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#163c71] font-semibold mt-2 text-sm hover:underline"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      )}

      {/* User Info */}
      <div className="flex items-center gap-3 border-t pt-4 mt-4">
        <div className="w-14 h-14 rounded-full bg-[#163c71] text-white flex items-center justify-center font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-[#163c71]">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">Verified Patient</p>
        </div>
      </div>
    </div>
  );
}
