"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  GitBranch,
  LayoutGrid,
  BookOpen,
  Users,
  Mail,
  Layers,
  Cpu,
} from "lucide-react";

const navItems = [
  {
    label: "Product",
    href: "/marketing/product",
    icon: <Cpu className="w-4 h-4" />,
    description: "How agent orchestration works",
  },
  {
    label: "Features",
    href: "/marketing/features",
    icon: <Zap className="w-4 h-4" />,
    description: "Everything you get with OrchestraAI",
  },
  {
    label: "Use Cases",
    href: "/marketing/use-cases",
    icon: <LayoutGrid className="w-4 h-4" />,
    description: "Enterprise workflow templates",
  },
  {
    label: "Docs",
    href: "/marketing/docs",
    icon: <BookOpen className="w-4 h-4" />,
    description: "API references & guides",
  },
  {
    label: "About",
    href: "/marketing/about",
    icon: <Users className="w-4 h-4" />,
    description: "Our mission & team",
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/marketing/landing" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <GitBranch className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-700 text-lg text-foreground tracking-tight">
              Orchestra<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150",
                  pathname === item.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/marketing/contact">Sign in</Link>
            </Button>
            <Button variant="glow" size="sm" asChild>
              <Link href="/marketing/contact">
                Start free
                <Zap className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-primary">{item.icon}</span>
                {item.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/marketing/contact">Sign in</Link>
              </Button>
              <Button variant="glow" size="sm" className="w-full" asChild>
                <Link href="/marketing/contact">Start free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
