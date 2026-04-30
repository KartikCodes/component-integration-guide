import { SiteNav } from "@/components/landing/SiteNav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LiveInsights } from "@/components/landing/LiveInsights";
import { WhyCityMind } from "@/components/landing/WhyCityMind";
import { CTA } from "@/components/landing/CTA";
import { SiteFooter } from "@/components/landing/SiteFooter";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <SiteNav />
    <Hero />
    <Features />
    <HowItWorks />
    <LiveInsights />
    <WhyCityMind />
    <CTA />
    <SiteFooter />
  </main>
);

export default Index;
