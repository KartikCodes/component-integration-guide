import { Car, Trash2, ParkingSquare, CloudSun, Zap, type LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tone: "blue" | "green";
};

const features: Feature[] = [
  { icon: Car, title: "Traffic Intelligence", desc: "Real-time congestion monitoring and route optimization.", tone: "blue" },
  { icon: Trash2, title: "Waste Optimization", desc: "Smart bin tracking and efficient collection routes.", tone: "green" },
  { icon: ParkingSquare, title: "Smart Parking", desc: "Live parking availability and suggestions.", tone: "blue" },
  { icon: CloudSun, title: "Weather Monitoring", desc: "Environmental insights and air quality alerts.", tone: "green" },
  { icon: Zap, title: "Energy Management", desc: "Track usage and improve grid efficiency.", tone: "blue" },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28 border-t border-border/60">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Capabilities</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Five domains, one digital twin
          </h2>
          <p className="mt-3 text-muted-foreground">
            Connect every layer of the city — sensors, services, and citizens — into a single
            operational intelligence platform.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            const tone =
              f.tone === "blue" ? "text-[hsl(var(--brand-blue))]" : "text-[hsl(var(--brand-green))]";
            const bg =
              f.tone === "blue"
                ? "bg-[hsl(var(--brand-blue)/0.12)]"
                : "bg-[hsl(var(--brand-green)/0.12)]";
            // slight asymmetry: the third card spans wider on lg
            const span = i === 2 ? "lg:col-span-1" : "";
            return (
              <div
                key={f.title}
                className={`group rounded-xl border border-border/60 bg-card/60 p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-[hsl(var(--brand-blue)/0.08)] hover:border-border ${span}`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${bg}`}>
                  <Icon className={`h-5 w-5 ${tone}`} />
                </div>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
