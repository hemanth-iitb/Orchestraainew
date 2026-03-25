import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Zap, Shield, Globe, GitBranch, Layers, BarChart3,
  CheckCircle2, ChevronRight, Star, TrendingUp, Clock, Users,
  BrainCircuit, Network, Workflow, Bot, Cpu, Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/shared/section";
import { AgentFlowDiagram } from "@/components/shared/agent-flow-diagram";
import { LogoMarquee } from "@/components/shared/marquee";

export const metadata: Metadata = {
  title: "OrchestraAI — Autonomous Agent Orchestration Platform",
  description:
    "Build, deploy, and orchestrate AI agents at scale. Connect intelligent agents into powerful enterprise workflows.",
};

const stats = [
  { value: "10M+", label: "Agent executions / month" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 50ms", label: "Avg. agent latency" },
  { value: "500+", label: "Enterprise customers" },
];

const coreFeatures = [
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Multi-Agent Reasoning",
    description:
      "Orchestrate chains of specialized agents that reason, plan, delegate, and collaborate to solve complex tasks autonomously.",
    badge: "Core",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop canvas to design agent pipelines. Connect LLMs, tools, memory, and APIs without writing boilerplate.",
    badge: "No-Code",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Long-Term Memory",
    description:
      "Persistent vector memory across sessions. Agents remember context, user preferences, and historical decisions.",
    badge: "Memory",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Tool & API Integration",
    description:
      "300+ prebuilt connectors — Slack, GitHub, Salesforce, Jira, Google Workspace, databases, and custom REST APIs.",
    badge: "Integrations",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified. Role-based access control, audit logs, data residency, and private cloud deployment.",
    badge: "Security",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Observability & Tracing",
    description:
      "Full OpenTelemetry-compatible trace logs for every agent step. Debug, monitor, and optimize agent behaviour in real time.",
    badge: "Insights",
  },
];

const testimonials = [
  {
    quote:
      "OrchestraAI reduced our manual research ops by 80%. Our analysts now spend time on decisions, not data gathering.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "FinanceOS",
    stars: 5,
  },
  {
    quote:
      "We replaced three different RPA tools with a single orchestrated agent workflow. The ROI was immediate.",
    author: "Marcus Reyes",
    role: "Head of Automation",
    company: "GlobalLogistics Inc.",
    stars: 5,
  },
  {
    quote:
      "The multi-agent system handles our entire customer onboarding — KYC checks, document review, welcome emails. All automated.",
    author: "Priya Nair",
    role: "CTO",
    company: "NeoBank",
    stars: 5,
  },
];

const useCasePreviews = [
  { icon: <TrendingUp className="w-4 h-4" />, title: "Market Research Automation", industry: "Finance" },
  { icon: <Users className="w-4 h-4" />, title: "Customer Support Triage", industry: "SaaS" },
  { icon: <Clock className="w-4 h-4" />, title: "Document Processing Pipeline", industry: "Legal" },
  { icon: <Globe className="w-4 h-4" />, title: "Multi-channel Campaign Ops", industry: "Marketing" },
  { icon: <Bot className="w-4 h-4" />, title: "Autonomous QA Testing", industry: "Engineering" },
  { icon: <Cpu className="w-4 h-4" />, title: "Supply Chain Intelligence", industry: "Operations" },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for developers and small teams exploring agent orchestration.",
    features: [
      "Up to 1,000 agent runs/mo",
      "3 active workflows",
      "Community model integrations",
      "Basic observability",
      "Discord community support",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing teams running production agent workflows.",
    features: [
      "Up to 50,000 agent runs/mo",
      "Unlimited workflows",
      "All LLM providers",
      "Advanced tracing & logs",
      "Priority email support",
      "Custom tool integrations",
      "Team management",
    ],
    cta: "Start Pro trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale deployments with compliance requirements.",
    features: [
      "Unlimited agent runs",
      "Private cloud deployment",
      "SOC 2 & HIPAA compliance",
      "SAML SSO & SCIM",
      "SLA guarantees",
      "Dedicated support engineer",
      "Custom model fine-tuning",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function LandingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Now in General Availability
                <ChevronRight className="w-3 h-3" />
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Orchestrate
                <br />
                <span className="text-gradient">AI agents</span>
                <br />
                at scale.
              </h1>

              <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-lg">
                Build autonomous agent workflows that think, plan, and execute across
                your entire enterprise stack — without writing infrastructure from scratch.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button variant="glow" size="xl" asChild>
                  <Link href="/marketing/contact">
                    Start building free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <Link href="/marketing/product">
                    See how it works
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["No credit card required", "Free tier forever", "Deploy in minutes"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Flow diagram */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent blur-2xl" />
              <div className="relative border border-border/60 rounded-2xl bg-card/50 backdrop-blur-sm p-6 shadow-2xl border-gradient">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">agent-workflow.yaml</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Running
                  </span>
                </div>
                <AgentFlowDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <section className="py-12 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Integrates with your entire AI & data stack
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* ── CORE FEATURES ── */}
      <Section>
        <SectionHeading
          badge="Platform"
          title="Everything you need to"
          titleHighlight="build agent systems"
          description="OrchestraAI provides the full platform layer — orchestration, memory, tools, observability — so you ship agents faster."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFeatures.map((f) => (
            <Card key={f.title} className="group hover:border-border/80 hover:bg-card/80 transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors">
                    {f.icon}
                  </div>
                  <Badge variant="electric">{f.badge}</Badge>
                </div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{f.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/marketing/features">
              Explore all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* ── HOW IT WORKS ── */}
      <Section className="bg-card/20 border-y border-border">
        <SectionHeading
          badge="How it works"
          title="From idea to"
          titleHighlight="running agents"
          description="Three steps to deploy your first production-grade autonomous agent workflow."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Design your workflow",
              description: "Use the visual builder or YAML config to define agent roles, capabilities, tools, and handoff logic.",
              icon: <Workflow className="w-6 h-6" />,
            },
            {
              step: "02",
              title: "Connect your models & tools",
              description: "Plug in any LLM — GPT-4, Claude, Mistral, your own fine-tuned model — and wire up APIs, databases, and services.",
              icon: <Network className="w-6 h-6" />,
            },
            {
              step: "03",
              title: "Deploy & monitor",
              description: "One-click deploy to the cloud or your own infrastructure. Watch every agent decision in the trace dashboard.",
              icon: <BarChart3 className="w-6 h-6" />,
            },
          ].map((step, i) => (
            <div key={step.step} className="relative">
              {i < 2 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-10" />
              )}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-display text-4xl font-bold text-muted-foreground/30">{step.step}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── USE CASE PREVIEWS ── */}
      <Section>
        <SectionHeading
          badge="Use Cases"
          title="Agents for every"
          titleHighlight="enterprise workflow"
          description="From finance to engineering, OrchestraAI powers autonomous agents across every department."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCasePreviews.map((uc) => (
            <Link
              key={uc.title}
              href="/marketing/use-cases"
              className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-card/80 transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                {uc.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{uc.title}</p>
                <p className="text-xs text-muted-foreground">{uc.industry}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/marketing/use-cases">View all use cases</Link>
          </Button>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="bg-card/20 border-y border-border">
        <SectionHeading
          badge="Social proof"
          title="Trusted by"
          titleHighlight="enterprise teams"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.author} className="flex flex-col">
              <CardContent className="pt-6 flex flex-col gap-4 flex-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* ── PRICING ── */}
      <Section id="pricing">
        <SectionHeading
          badge="Pricing"
          title="Simple,"
          titleHighlight="transparent pricing"
          description="Start free. Scale as your agent workflows grow. No hidden fees."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-7 flex flex-col gap-6 ${
                tier.highlighted
                  ? "border-primary/60 bg-card border-gradient shadow-2xl shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg">
                    Most popular
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">{tier.name}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-display text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.price !== "Custom" && tier.price !== "$0" && (
                    <span className="text-muted-foreground text-sm">/month</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
              </div>

              <ul className="space-y-2.5 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "glow" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link href="/marketing/contact">{tier.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-900/10" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Badge variant="glow" className="mb-6">Ready to ship?</Badge>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Start orchestrating
            <br />
            <span className="text-gradient">agents today.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Join 500+ enterprises automating their most complex workflows with
            OrchestraAI. Deploy your first agent in under 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="xl" asChild>
              <Link href="/marketing/contact">
                Start free — no credit card
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link href="/marketing/contact">Schedule a demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
