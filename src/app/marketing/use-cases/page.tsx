import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, TrendingUp, Users, FileText, Megaphone, Bug, Truck,
  Stethoscope, Scale, ShoppingCart, GraduationCap, Building2, CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Use Cases — Enterprise Agent Workflows",
  description: "Discover how OrchestraAI automates enterprise workflows across finance, legal, marketing, engineering, and more.",
};

const industries = [
  {
    industry: "Financial Services",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    cases: [
      {
        title: "Market Research Automation",
        description: "Agents continuously monitor market signals, news, filings, and analyst reports — synthesizing into structured investment briefs delivered to analysts every morning.",
        agents: ["Research Agent", "Analyst Agent", "Report Writer"],
        metrics: [{ label: "Time saved", value: "18hrs/week" }, { label: "Coverage", value: "10× more sources" }],
      },
      {
        title: "KYC & AML Compliance",
        description: "Automated customer due diligence workflows — document extraction, identity verification, sanctions screening, and risk scoring — completing in minutes instead of days.",
        agents: ["Document Agent", "Verification Agent", "Risk Agent"],
        metrics: [{ label: "Processing time", value: "2 min vs 3 days" }, { label: "Accuracy", value: "99.4%" }],
      },
      {
        title: "Portfolio Monitoring",
        description: "Round-the-clock agents watching portfolio positions, generating alerts, computing risk metrics, and drafting client reports automatically.",
        agents: ["Data Agent", "Risk Agent", "Reporting Agent"],
        metrics: [{ label: "Monitoring coverage", value: "24/7/365" }, { label: "Report time", value: "< 5 min" }],
      },
    ],
  },
  {
    industry: "Legal & Compliance",
    icon: <Scale className="w-5 h-5" />,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    cases: [
      {
        title: "Contract Review Pipeline",
        description: "Multi-agent system extracts clauses, flags risk provisions, cross-references with templates, and generates redlines — turning hours of review into minutes.",
        agents: ["Extraction Agent", "Review Agent", "Redline Agent"],
        metrics: [{ label: "Review time", value: "45 min → 4 min" }, { label: "Issues flagged", value: "97% accuracy" }],
      },
      {
        title: "Regulatory Change Monitoring",
        description: "Agents track regulatory bodies, parse new rules, assess organizational impact, and route findings to the right compliance owners with action summaries.",
        agents: ["Monitor Agent", "Analysis Agent", "Routing Agent"],
        metrics: [{ label: "Regulations tracked", value: "50+ jurisdictions" }, { label: "Alert lag", value: "< 1 hour" }],
      },
      {
        title: "eDiscovery Acceleration",
        description: "Automated document classification, privilege review, and relevance scoring across millions of documents — with full audit trail for legal defensibility.",
        agents: ["Classification Agent", "Privilege Agent", "Review Agent"],
        metrics: [{ label: "Cost reduction", value: "70%" }, { label: "Documents/day", value: "500K+" }],
      },
    ],
  },
  {
    industry: "Customer Operations",
    icon: <Users className="w-5 h-5" />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    cases: [
      {
        title: "Intelligent Support Triage",
        description: "Agents classify inbound support tickets, retrieve relevant knowledge, draft responses, route complex cases to humans, and close simple ones fully autonomously.",
        agents: ["Triage Agent", "Knowledge Agent", "Response Agent"],
        metrics: [{ label: "Auto-resolution", value: "68%" }, { label: "CSAT lift", value: "+22 points" }],
      },
      {
        title: "Customer Onboarding",
        description: "End-to-end onboarding pipeline — account setup, data migration, configuration, welcome sequences, and early-warning health monitoring — zero manual steps.",
        agents: ["Setup Agent", "Migration Agent", "Comms Agent"],
        metrics: [{ label: "Time to value", value: "3 days → 4 hours" }, { label: "Churn reduction", value: "31%" }],
      },
      {
        title: "Proactive Churn Prevention",
        description: "Agents monitor engagement signals, identify at-risk customers, generate personalized intervention messages, and schedule outreach — before customers decide to leave.",
        agents: ["Monitor Agent", "Scoring Agent", "Outreach Agent"],
        metrics: [{ label: "Churn reduced", value: "28%" }, { label: "Customers saved", value: "4.2× ROI" }],
      },
    ],
  },
  {
    industry: "Software Engineering",
    icon: <Bug className="w-5 h-5" />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    cases: [
      {
        title: "Autonomous QA Testing",
        description: "Test agents generate test cases from specs, execute them, analyze failures, write bug reports, and even suggest fixes — running continuously against every PR.",
        agents: ["Test Generator", "Executor Agent", "Bug Report Agent"],
        metrics: [{ label: "Coverage increase", value: "+180%" }, { label: "Bug detection", value: "55% earlier" }],
      },
      {
        title: "Codebase Documentation",
        description: "Agents traverse entire codebases, infer intent from code, generate comprehensive docs, API references, and architecture diagrams — and keep them up to date.",
        agents: ["Code Reader", "Doc Writer", "Publisher Agent"],
        metrics: [{ label: "Coverage", value: "100% of functions" }, { label: "Time saved", value: "200hrs/quarter" }],
      },
      {
        title: "Incident Response",
        description: "On-call agents detect anomalies, correlate logs and metrics, identify root cause, draft post-mortems, and execute runbook steps — all before humans are even paged.",
        agents: ["Monitor Agent", "RCA Agent", "Runbook Agent"],
        metrics: [{ label: "MTTR reduction", value: "73%" }, { label: "False alerts", value: "−61%" }],
      },
    ],
  },
  {
    industry: "Marketing & Growth",
    icon: <Megaphone className="w-5 h-5" />,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    cases: [
      {
        title: "Content Production Pipeline",
        description: "Research agents gather trends and competitor content; writer agents draft blog posts, LinkedIn updates, and email sequences; editor agents QA and publish — fully automated.",
        agents: ["Research Agent", "Writer Agent", "Publisher Agent"],
        metrics: [{ label: "Output increase", value: "8× content volume" }, { label: "Production cost", value: "−65%" }],
      },
      {
        title: "SEO Intelligence",
        description: "Agents continuously audit site health, track keyword rankings, identify content gaps, generate SEO briefs, and monitor competitors — delivering weekly opportunity reports.",
        agents: ["Audit Agent", "Keyword Agent", "Brief Writer"],
        metrics: [{ label: "Organic growth", value: "+140% in 6mo" }, { label: "Hours saved", value: "30hrs/week" }],
      },
      {
        title: "Campaign Optimization",
        description: "Agents A/B test ad creatives, analyze performance data across channels, reallocate budget, and generate performance reports — optimizing campaigns in real time.",
        agents: ["Analytics Agent", "Creative Agent", "Budget Agent"],
        metrics: [{ label: "ROAS improvement", value: "2.4×" }, { label: "Optimization speed", value: "Real-time" }],
      },
    ],
  },
  {
    industry: "Healthcare & Life Sciences",
    icon: <Stethoscope className="w-5 h-5" />,
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
    cases: [
      {
        title: "Clinical Trial Monitoring",
        description: "Agents monitor trial data in real time, flag safety signals, generate protocol deviations reports, and compile regulatory submissions — with full audit trails.",
        agents: ["Data Monitor", "Safety Agent", "Report Agent"],
        metrics: [{ label: "Signal detection", value: "92% faster" }, { label: "Manual review", value: "−80%" }],
      },
      {
        title: "Medical Literature Synthesis",
        description: "Research agents search PubMed, extract relevant studies, assess quality, synthesize findings, and generate evidence summaries for clinical decision support.",
        agents: ["Search Agent", "Extraction Agent", "Synthesis Agent"],
        metrics: [{ label: "Literature coverage", value: "40M+ papers" }, { label: "Summary time", value: "< 10 min" }],
      },
      {
        title: "Prior Authorization Automation",
        description: "Agents extract patient data, match insurance criteria, draft authorization requests, handle follow-ups, and track approval status — end to end.",
        agents: ["Extraction Agent", "Criteria Agent", "Comms Agent"],
        metrics: [{ label: "Approval rate", value: "+34%" }, { label: "Processing time", value: "8 days → 6 hrs" }],
      },
    ],
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="glow" className="mb-6">Enterprise Use Cases</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Agents built for
            <br />
            <span className="text-gradient">every department</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From financial services to healthcare, OrchestraAI powers autonomous agent workflows
            across every industry and function. Real workflows, real results.
          </p>
        </div>
      </section>

      {/* Industry sections */}
      {industries.map((ind, indIdx) => (
        <Section
          key={ind.industry}
          className={indIdx % 2 !== 0 ? "bg-card/20 border-y border-border" : ""}
        >
          <div className="mb-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${ind.border} ${ind.bg} ${ind.color} text-sm font-semibold mb-4`}>
              {ind.icon}
              {ind.industry}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ind.cases.map((uc) => (
              <Card key={uc.title} className="group hover:border-border/80 flex flex-col transition-all duration-200">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{uc.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{uc.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1">
                  {/* Agents involved */}
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Agents used</p>
                    <div className="flex flex-wrap gap-1.5">
                      {uc.agents.map((a) => (
                        <span key={a} className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-auto pt-2 border-t border-border">
                    {uc.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-lg font-bold text-gradient">{m.value}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      {/* CTA */}
      <section className="relative py-24 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Don't see your use case?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            OrchestraAI is general-purpose. If your workflow has steps, decisions, and
            integrations — agents can handle it. Talk to our solutions team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link href="/marketing/contact">
                Book a custom demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="/marketing/docs">Explore documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
