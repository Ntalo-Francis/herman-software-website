import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowWeWork } from "@/components/home/HowWeWork";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedSection><TrustBar /></AnimatedSection>
      <AnimatedSection delay={0.1}><ServicesGrid /></AnimatedSection>
      <AnimatedSection delay={0.1}><HowWeWork /></AnimatedSection>
      <AnimatedSection delay={0.1}><FeaturedWork /></AnimatedSection>
      <AnimatedSection delay={0.1}><Testimonials /></AnimatedSection>
      <AnimatedSection delay={0.1}><WhyChooseUs /></AnimatedSection>
      <AnimatedSection delay={0.1}><BlogPreview /></AnimatedSection>
      <AnimatedSection delay={0.1}><CTABanner /></AnimatedSection>
    </>
  );
}