import React from "react";
import { cn } from "@/lib/utils";

const logos = [
  "OpenAI", "Anthropic", "Mistral", "Cohere", "Llama", "Gemini",
  "LangChain", "Pinecone", "Weaviate", "Qdrant", "Redis", "PostgreSQL",
];

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  speed?: number;
}

export function LogoMarquee({ className, reverse = false, speed = 40 }: MarqueeProps) {
  const items = [...logos, ...logos];

  return (
    <div
      className={cn("relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4",
          reverse ? "animate-marquee direction-reverse" : "animate-marquee"
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-muted-foreground text-sm font-medium whitespace-nowrap hover:text-foreground hover:border-border/80 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-primary/40 inline-block" />
            {logo}
          </div>
        ))}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4",
          reverse ? "animate-marquee direction-reverse" : "animate-marquee"
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
        aria-hidden
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-muted-foreground text-sm font-medium whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-primary/40 inline-block" />
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
