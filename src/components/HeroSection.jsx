"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    badge: "NABL Certified Medical Laboratory",
    title: "Diagnostic Centre In Kochi Accurate Diagnostics, Trusted Results",
    description:
      "Experience accurate testing, fast reporting, and seamless home sample collection. From RTPCR and Antigen tests to complete medical diagnostics — we ensure dependable results for better health decisions.",
    button: "Book a Test Now →",
    bg: "/medherobg.jpg",
  },
  {
    badge: "Advanced Diagnostic Technology",
    title: "State-of-the-Art Medical Testing Services",
    description:
      "Equipped with modern analyzers and automated systems to deliver precise and reliable lab results with international quality standards.",
    button: "View Our Services →",
    bg: "/medherobg2.jpg",
  },
  {
    badge: "Fast & Reliable Reports",
    title: "Same-Day Reports for Most Tests",
    description:
      "We value your time. Our optimized workflows ensure quick turnaround times without compromising accuracy or quality.",
    button: "Check Report Status →",
    bg: "/medherobg3.jpg",
  },
  {
    badge: "Home Sample Collection",
    title: "Convenient Doorstep Sample Collection",
    description:
      "Book a test from home and our trained professionals will collect samples safely and hygienically at your convenience.",
    button: "Schedule Home Collection →",
    bg: "/medherobg4.jpg",
  },
];

export default function HeroSection() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      allowSlideNext
      allowSlidePrev
      loop
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section
            className="relative w-full min-h-[65vh] flex items-center justify-center text-white overflow-hidden"
            style={{
              background: `linear-gradient(to right, #163c71 35%, rgba(25,74,154,0.45) 90%), url('${slide.bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
              <p className="bg-[#f4f6f9]/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4 border border-white/20">
                {slide.badge}
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                {slide.title}
              </h1>

              <p className="text-sm sm:text-base mb-6 text-gray-200">
                {slide.description}
              </p>

              <button className="bg-[#609129] hover:bg-[#609129]/90 text-white font-semibold py-3 px-7 transition-all duration-200">
                {slide.button}
              </button>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
