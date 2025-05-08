import { HeroSection } from "@/components/landing/Herosection";
import ServicesSection from "@/components/landing/Features";
import { WhyMemphisSection } from "@/components/landing/Why";
import { ProcessSection } from "@/components/landing/Process";
import { CTASection } from "@/components/landing/CTASection";
import { CaseStudiesSection } from "@/components/landing/CaseStudies";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-black to-blue-950">
      {/* Premium background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[35rem] h-[35rem] rounded-full bg-blue-400/5 blur-[150px]" />
        
        {/* Gold accent lines */}
        <div className="absolute top-[5%] left-[5%] w-[1px] h-[300px] bg-gradient-to-b from-primary/70 to-transparent" />
        <div className="absolute top-[5%] left-[5%] w-[150px] h-[1px] bg-gradient-to-r from-primary/70 to-transparent" />
        
        <div className="absolute bottom-[10%] right-[5%] w-[1px] h-[200px] bg-gradient-to-t from-primary/70 to-transparent" />
        <div className="absolute bottom-[10%] right-[5%] w-[150px] h-[1px] bg-gradient-to-l from-primary/70 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-[60%] left-[20%] w-[200px] h-[200px] border border-primary/10 rounded-full" />
        <div className="absolute top-[25%] right-[15%] w-[300px] h-[300px] border border-blue-500/10 rounded-full" />
        <div className="absolute bottom-[30%] left-[40%] w-[150px] h-[150px] border border-primary/10 rounded-full opacity-30" />
      </div>

      {/* Main content sections */}
      <HeroSection />
      <ServicesSection />
      <WhyMemphisSection />
      <ProcessSection />
      <CaseStudiesSection />
      <div className="container mx-auto px-4 py-24">
        <CTASection />
      </div>
    </div>
  );
}
