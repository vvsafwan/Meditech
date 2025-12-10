import ConsultSection from "@/components/ConsultSection";
import DiagnosticSpecialties from "@/components/DiagnosticSpecialties";
import HeroSection from "@/components/HeroSection";
import OurBrands from "@/components/OurBrands";
import Loader from "@/components/Loader";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <OurBrands />
        <DiagnosticSpecialties />
        <WhyChooseUs />
        <ConsultSection />
        <Testimonials />
      </Suspense>
    </main>
  );
}
