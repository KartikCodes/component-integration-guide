import { Gauge, Sparkles, Layers, WifiOff } from "lucide-react";

const reasons = [
  { icon: Gauge, title: "Real-time monitoring", desc: "Sub-second telemetry from every connected source." },
  { icon: Sparkles, title: "AI-powered insights", desc: "Forecasts and anomaly detection out of the box." },
  { icon: Layers, title: "Multi-domain integration", desc: "Traffic, waste, parking, weather, energy — unified." },
  { icon: WifiOff, title: "Edge Mode", desc: "Keeps working in low-connectivity environments." },
];

export function WhyCityMind() {
  return (
    <section id="why" className="relative py-20 md:py-28 border-t border-border/60 bg-card/30">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Why CityMind AI</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Built for cities that have to keep running
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="rounded-xl border border-border/60 bg-background/60 p-5 transition-all hover:border-border hover:shadow-lg hover:shadow-[hsl(var(--brand-green)/0.08)]"
              >
                <Icon className="h-5 w-5 text-[hsl(var(--brand-green))]" />
                <h3 className="mt-4 text-sm font-semibold">{r.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
