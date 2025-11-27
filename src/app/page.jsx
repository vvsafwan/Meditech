import ConsultSection from "@/components/ConsultSection";
import DiagnosticSpecialties from "@/components/DiagnosticSpecialties";
import HeroSection from "@/components/HeroSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import Loader from "@/components/Loader";
import OurBrands from "@/components/OurBrands";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <OurBrands />
        <ServicesGrid />
        <DiagnosticSpecialties />
        <HomeAboutSection />
        <ConsultSection />
        <Testimonials />
      </Suspense>
    </main>
  );
}
