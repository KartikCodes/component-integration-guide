import { Brain } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid place-items-center h-7 w-7 rounded-md bg-gradient-to-br from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-green))]">
              <Brain className="h-4 w-4 text-background" />
            </span>
            CityMind AI
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Built by team <span className="text-foreground">Aura Farmer</span> · Hackathon project
          </p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
          <li><a href="#how" className="hover:text-foreground transition-colors">How it works</a></li>
          <li><a href="#insights" className="hover:text-foreground transition-colors">Insights</a></li>
          <li><a href="#why" className="hover:text-foreground transition-colors">Why us</a></li>
        </ul>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} CityMind AI</div>
      </div>
    </footer>
  );
}
