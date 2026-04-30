import { Radio, BrainCircuit, Settings2 } from "lucide-react";

const steps = [
  { icon: Radio, title: "Collect Data", desc: "IoT sensors stream signals from across the city." },
  { icon: BrainCircuit, title: "Analyze with AI", desc: "Models detect patterns, anomalies, and forecasts." },
  { icon: Settings2, title: "Optimize Systems", desc: "Decisions feed back to operations in real time." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 md:py-28 border-t border-border/60 bg-card/30">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">How it works</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              From signal to action in three steps
            </h2>
          </div>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={s.title}
                className="relative rounded-xl border border-border/60 bg-background/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md border border-border/60 text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                  <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
