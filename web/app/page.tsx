import { HeroSection } from "@/components/landing/Herosection";
import ServicesSection  from "@/components/landing/Features";
import { WhyMemphisSection } from "@/components/landing/Why";
import { ProcessSection } from "@/components/landing/Process";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <WhyMemphisSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
