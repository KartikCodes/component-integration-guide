import { ArrowRight, Play, Activity, Trash2, ParkingSquare, CloudSun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Activity, label: "Traffic flow", value: "78%", trend: "+4%", tone: "blue" as const },
  { icon: Trash2, label: "Bins optimized", value: "412", trend: "Zone B", tone: "green" as const },
  { icon: ParkingSquare, label: "Free parking", value: "1,284", trend: "live", tone: "blue" as const },
  { icon: CloudSun, label: "Air quality", value: "Good", trend: "AQI 42", tone: "green" as const },
  { icon: Zap, label: "Energy load", value: "−12%", trend: "vs avg", tone: "green" as const },
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 bg-grid-faint opacity-[0.25] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[hsl(var(--brand-blue)/0.18)] blur-3xl" />
      <div className="absolute top-40 right-0 h-[300px] w-[400px] rounded-full bg-[hsl(var(--brand-green)/0.12)] blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-green))] animate-pulse-soft" />
            Live · Smart City Digital Twin
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight animate-fade-in">
            CityMind <span className="text-gradient-brand">AI</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-foreground/80 animate-fade-in">
            Smart Sustainable City Digital Twin Platform
          </p>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Monitor and optimize city operations in real-time using AI across traffic, waste,
            parking, weather, and energy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://tidy-urban-pulse-core.base44.app" target="_blank" rel="noopener noreferrer">
                Launch Dashboard
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border/70 bg-card/40 hover:bg-card">
              <Play className="mr-1.5 h-4 w-4" />
              View Demo
            </Button>
          </div>
        </div>

        {/* Mock dashboard preview */}
        <div className="mt-14 md:mt-20 mx-auto max-w-5xl animate-fade-in">
          <div className="rounded-xl border border-border/70 bg-card/70 backdrop-blur shadow-2xl shadow-[hsl(var(--brand-blue)/0.15)]">
            <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--brand-green))]/80" />
              </div>
              <div className="text-xs text-muted-foreground">citymind.ai / dashboard</div>
              <div className="text-xs text-muted-foreground hidden sm:block">v1.0 · Edge</div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 md:p-5">
              {stats.map((s) => {
                const Icon = s.icon;
                const tone = s.tone === "blue" ? "text-[hsl(var(--brand-blue))]" : "text-[hsl(var(--brand-green))]";
                return (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border/60 bg-background/60 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className={`h-4 w-4 ${tone}`} />
                      <span className="text-[10px] text-muted-foreground">{s.trend}</span>
                    </div>
                    <div className="mt-2 text-lg font-semibold">{s.value}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="px-4 md:px-5 pb-5">
              <div className="rounded-lg border border-border/60 bg-background/40 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium">City load · last 24h</div>
                  <div className="text-xs text-muted-foreground">updated just now</div>
                </div>
                <Sparkline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkline() {
  const points = [12, 18, 14, 22, 28, 24, 32, 30, 38, 34, 42, 36, 44, 40, 48, 46, 52, 49, 56, 60];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 100;
  const h = 28;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="w-full h-24">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--brand-blue))" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(var(--brand-blue))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g1)" />
      <path d={path} fill="none" stroke="hsl(var(--brand-blue))" strokeWidth="0.6" />
    </svg>
  );
}
