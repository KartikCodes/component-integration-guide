import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#insights", label: "Live insights" },
  { href: "#why", label: "Why CityMind" },
];

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/60">
      <nav className="container flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid place-items-center h-7 w-7 rounded-md bg-gradient-to-br from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-green))]">
            <Brain className="h-4 w-4 text-background" />
          </span>
          <span>CityMind AI</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="https://urban-pulse-ai-copy-46d36f85.base44.app" target="_blank" rel="noopener noreferrer">
            Launch
          </a>
        </Button>
      </nav>
    </header>
  );
}
