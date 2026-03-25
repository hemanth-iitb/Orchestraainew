import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, GitBranch, Globe, Users, Target, Lightbulb,
  Heart, Zap, Shield, Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "About Us — Mission & Team",
  description: "Learn about the team building OrchestraAI and our mission to make autonomous agent systems accessible to every enterprise.",
};

const team = [
  {
    name: "Aria Patel",
    role: "CEO & Co-founder",
    bio: "Former ML Engineer at DeepMind. Built the distributed training infrastructure for AlphaCode. Passionate about autonomous systems.",
    background: "DeepMind · Stanford CS PhD",
    emoji: "👩‍💻",
  },
  {
    name: "Marcus Osei",
    role: "CTO & Co-founder",
    bio: "Previously Principal Engineer at Stripe, leading their ML platform. Architect of systems processing billions of events daily.",
    background: "Stripe · MIT CSAIL",
    emoji: "🧑‍🔬",
  },
  {
    name: "Yuki Tanaka",
    role: "Head of Product",
    bio: "Former PM at Vercel, shaped the developer experience for millions of engineers. Obsessed with making complex systems feel simple.",
    background: "Vercel · Carnegie Mellon",
    emoji: "👩‍🎨",
  },
  {
    name: "Diego Ruiz",
    role: "Head of Engineering",
    bio: "Staff Engineer at Anthropic, built core parts of Claude's tool use system. Open source contributor to LangChain and AutoGPT.",
    background: "Anthropic · UC Berkeley",
    emoji: "🧑‍💻",
  },
  {
    name: "Sana Al-Rashid",
    role: "Head of Enterprise",
    bio: "Led enterprise sales at Databricks from $10M to $500M ARR. Deep expertise in how Fortune 500s adopt AI infrastructure.",
    background: "Databricks · Wharton MBA",
    emoji: "👩‍💼",
  },
  {
    name: "James Whitfield",
    role: "Head of Security",
    bio: "CISO background at AWS GovCloud and Palantir. Built SOC 2 compliance frameworks for 40+ companies. Security-first mindset.",
    background: "AWS · Palantir",
    emoji: "🧑‍🔒",
  },
];

const values = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Autonomy with oversight",
    description: "We believe AI agents should operate autonomously — but with humans firmly in control of the goals, constraints, and escalation paths.",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "Developer-first",
    description: "We build for the engineers and builders who will actually use OrchestraAI. Obsessive attention to DX, documentation, and APIs.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Security as a feature",
    description: "Enterprise trust is earned through consistent, transparent security practices — not a checkbox. We publish our security posture openly.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Open ecosystem",
    description: "We support every major LLM, every major vector DB, and every major integration. Vendor lock-in is the enemy of good engineering.",
  },
];

const milestones = [
  { year: "2022", event: "Founded by two ML engineers frustrated with the state of agent tooling" },
  { year: "Q1 2023", event: "Seed round — $4.5M from Sequoia and a16z" },
  { year: "Q3 2023", event: "Launched private beta with 20 design partners" },
  { year: "Q1 2024", event: "Series A — $28M. Reached 100 paying customers" },
  { year: "Q3 2024", event: "Launched General Availability. 500+ enterprise customers" },
  { year: "2025", event: "Processing 10M+ agent executions per month" },
];

const investors = [
  "Sequoia Capital", "Andreessen Horowitz", "Khosla Ventures",
  "Y Combinator", "Coatue", "General Catalyst",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="glow" className="mb-6">Our Story</Badge>
            <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-6">
              We're making AI agents
              <br />
              <span className="text-gradient">actually useful</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              OrchestraAI was founded in 2022 by two ML engineers who kept building the same
              agent infrastructure from scratch at every company they worked at.
              We decided to build it once, properly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today we power autonomous agent workflows for 500+ enterprises —
              from stealth startups to Fortune 100 companies — handling everything
              from customer support triage to clinical trial monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <Section className="border-y border-border bg-card/20">
        <div className="max-w-3xl mx-auto text-center">
          <Target className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">Our mission</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To make autonomous AI agents as reliable, observable, and accessible as any other
            piece of enterprise software — so every organization can automate their most
            complex workflows without building infrastructure from scratch.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading
          badge="Culture"
          title="What we"
          titleHighlight="believe in"
          description="The principles that guide every product decision, hire, and customer conversation."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <Card key={v.title} className="border-gradient">
              <CardContent className="pt-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-card/20 border-y border-border">
        <SectionHeading
          badge="The team"
          title="Built by people who've"
          titleHighlight="been in the trenches"
          description="We've collectively built ML infrastructure, enterprise sales motions, and developer platforms at companies like Anthropic, Stripe, DeepMind, AWS, and Vercel."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member) => (
            <Card key={member.name} className="group hover:border-border/80 transition-colors">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 flex items-center justify-center text-2xl mb-4">
                  {member.emoji}
                </div>
                <p className="font-display text-lg font-semibold text-foreground">{member.name}</p>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{member.bio}</p>
                <p className="text-xs font-mono text-muted-foreground/60">{member.background}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeading
          badge="Timeline"
          title="From idea to"
          titleHighlight="global platform"
        />
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex items-start gap-6 pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-primary/40 flex items-center justify-center text-xs font-mono text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-mono text-primary mb-1">{m.year}</p>
                    <p className="text-sm text-foreground leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Investors */}
      <Section className="bg-card/20 border-y border-border">
        <SectionHeading
          badge="Backed by"
          title="World-class"
          titleHighlight="investors"
          description="Supported by the firms that backed Stripe, OpenAI, and Databricks."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {investors.map((inv) => (
            <div
              key={inv}
              className="px-6 py-3 rounded-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
            >
              {inv}
            </div>
          ))}
        </div>
      </Section>

      {/* Hiring CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-purple-900/8" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-4xl font-bold mb-4">
            We're <span className="text-gradient">hiring</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join a small team doing consequential work. Remote-first, equity-heavy,
            with all the infrastructure budget you'll ever need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link href="/marketing/contact">
                See open roles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="/marketing/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
