import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-20 md:py-28 border-t border-border/60">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-[hsl(var(--brand-blue)/0.12)] via-card/60 to-[hsl(var(--brand-green)/0.12)] p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-grid-faint opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Experience the Future of Smart Cities
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              See CityMind AI in action with a live, interactive twin of a sample district.
            </p>
            <div className="mt-7">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://urban-pulse-ai-copy-46d36f85.base44.app" target="_blank" rel="noopener noreferrer">
                  Open Dashboard
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
