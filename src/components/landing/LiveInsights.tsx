import { Activity, Trash2, Zap, Wind, CloudRain } from "lucide-react";

const insights = [
  { icon: Activity, tone: "blue", text: "Traffic spike detected in Sector 5", time: "Updated 2 mins ago" },
  { icon: Trash2, tone: "green", text: "Waste pickup optimized for Zone B", time: "Updated 5 mins ago" },
  { icon: Zap, tone: "green", text: "Energy usage reduced by 12% downtown", time: "Updated 8 mins ago" },
  { icon: Wind, tone: "blue", text: "Air quality nominal across all districts", time: "Updated 12 mins ago" },
  { icon: CloudRain, tone: "blue", text: "Rain forecast — drainage crews on standby", time: "Updated 18 mins ago" },
];

export function LiveInsights() {
  return (
    <section id="insights" className="relative py-20 md:py-28 border-t border-border/60">
      <div className="container grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Live feed</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            What the city is telling us — right now
          </h2>
          <p className="mt-3 text-muted-foreground">
            A continuous stream of operational events, surfaced and ranked by impact so your team
            acts on what matters.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-green))] animate-pulse-soft" />
            Streaming events · last 24h
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="rounded-xl border border-border/60 bg-card/60 divide-y divide-border/60 overflow-hidden">
            {insights.map((i, idx) => {
              const Icon = i.icon;
              const tone =
                i.tone === "blue"
                  ? "text-[hsl(var(--brand-blue))] bg-[hsl(var(--brand-blue)/0.12)]"
                  : "text-[hsl(var(--brand-green))] bg-[hsl(var(--brand-green)/0.12)]";
              return (
                <li key={idx} className="flex items-start gap-3 p-4 hover:bg-background/40 transition-colors">
                  <span className={`mt-0.5 grid h-9 w-9 place-items-center rounded-md ${tone}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{i.text}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{i.time}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
