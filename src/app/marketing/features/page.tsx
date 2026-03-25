import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BrainCircuit, Workflow, Database, Network, Shield,
  BarChart3, GitBranch, Layers, Cpu, Zap, Globe, Lock, Eye,
  RefreshCw, Code2, Boxes, Webhook, Settings, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Features — Full Platform Capabilities",
  description: "Everything OrchestraAI offers: orchestration, memory, tools, observability, security, and developer experience.",
};

const featureGroups = [
  {
    category: "Orchestration Engine",
    icon: <BrainCircuit className="w-5 h-5" />,
    color: "text-cyan-400",
    description: "The intelligent core that plans, delegates, and coordinates agents.",
    features: [
      { name: "Goal decomposition", desc: "Automatically breaks complex tasks into structured subtasks with dependency graphs." },
      { name: "Dynamic replanning", desc: "When an agent fails or produces unexpected output, the orchestrator replans in real time." },
      { name: "Parallel execution", desc: "Run independent agent tasks concurrently to minimize total workflow latency." },
      { name: "Consensus voting", desc: "Multiple agents cross-validate outputs before final delivery — built-in quality gates." },
      { name: "Human-in-the-loop", desc: "Pause at any checkpoint for human review, approval, or steering before continuing." },
      { name: "Streaming output", desc: "Real-time token streaming from every agent step to your UI or downstream system." },
    ],
  },
  {
    category: "Visual Workflow Builder",
    icon: <Workflow className="w-5 h-5" />,
    color: "text-violet-400",
    description: "Design complex agent pipelines without writing orchestration code.",
    features: [
      { name: "Drag-and-drop canvas", desc: "Build agent graphs visually. Connect nodes, define edges, set conditions." },
      { name: "Pre-built templates", desc: "Start from 50+ production-ready workflow templates across industries." },
      { name: "Live preview", desc: "Test your workflow with sample data before deploying to production." },
      { name: "Version control", desc: "Full git-style versioning for every workflow change with rollback support." },
      { name: "Team collaboration", desc: "Multi-user editing, comments, and review flows for workflow changes." },
      { name: "YAML export", desc: "Export any visual workflow to YAML for code-first teams to review and deploy." },
    ],
  },
  {
    category: "Memory & Knowledge",
    icon: <Database className="w-5 h-5" />,
    color: "text-emerald-400",
    description: "Persistent, structured memory that makes agents smarter over time.",
    features: [
      { name: "Vector memory", desc: "Semantic search over all past agent interactions, documents, and knowledge." },
      { name: "Episodic memory", desc: "Agents recall specific past events, decisions, and their outcomes." },
      { name: "Shared workspace", desc: "All agents in a workflow read and write to a shared knowledge store." },
      { name: "Document ingestion", desc: "Upload PDFs, URLs, databases, and APIs to build agent knowledge bases." },
      { name: "Memory TTL controls", desc: "Set expiry for sensitive data. Comply with data retention policies." },
      { name: "Multi-tenant isolation", desc: "Each workspace's memory is fully isolated. Zero cross-tenant leakage." },
    ],
  },
  {
    category: "Integrations & Tools",
    icon: <Network className="w-5 h-5" />,
    color: "text-orange-400",
    description: "Connect agents to every system your business already uses.",
    features: [
      { name: "300+ prebuilt connectors", desc: "Slack, GitHub, Salesforce, Jira, HubSpot, Notion, Google Workspace, AWS, and more." },
      { name: "Custom tool builder", desc: "Define any REST API or Python function as an agent tool with OpenAPI or docstrings." },
      { name: "Database queries", desc: "Read/write to PostgreSQL, MySQL, MongoDB, BigQuery, Snowflake, and Redshift." },
      { name: "Webhook triggers", desc: "Fire workflows from any external event — forms, CRM updates, deploys, cron schedules." },
      { name: "Browser automation", desc: "Web scraping, form filling, and browser control as native agent tools." },
      { name: "Code execution sandbox", desc: "Agents run Python, JavaScript, and SQL in isolated, secure sandboxes." },
    ],
  },
  {
    category: "Security & Compliance",
    icon: <Shield className="w-5 h-5" />,
    color: "text-red-400",
    description: "Enterprise-grade security baked into every layer of the platform.",
    features: [
      { name: "SOC 2 Type II", desc: "Independently audited security controls. Reports available on request." },
      { name: "HIPAA ready", desc: "BAA available. Healthcare data handled with appropriate safeguards." },
      { name: "RBAC & SCIM", desc: "Fine-grained role-based access control. Sync users from your IdP via SCIM." },
      { name: "SAML SSO", desc: "Single sign-on with Okta, Azure AD, Google Workspace, and any SAML 2.0 provider." },
      { name: "Audit logs", desc: "Immutable, tamper-proof logs of every user action and agent execution." },
      { name: "Private cloud", desc: "Deploy OrchestraAI to your own AWS, Azure, or GCP account. Zero data egress." },
    ],
  },
  {
    category: "Observability & Debugging",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "text-yellow-400",
    description: "See exactly what every agent did, why, and how long it took.",
    features: [
      { name: "Full trace logs", desc: "Every prompt, tool call, response, and decision recorded in a structured trace." },
      { name: "Cost tracking", desc: "Per-workflow, per-agent LLM token costs. Set budgets and alerts." },
      { name: "Latency profiling", desc: "Identify bottlenecks in your agent pipeline with P50/P95/P99 latency charts." },
      { name: "Prompt versioning", desc: "Track which prompt version ran in each execution. A/B test prompts safely." },
      { name: "Error analytics", desc: "Categorized error rates, failure patterns, and recommended fixes." },
      { name: "OpenTelemetry export", desc: "Export traces to Datadog, Grafana, New Relic, or any OTel-compatible backend." },
    ],
  },
];

const comparisonRows = [
  { feature: "Multi-agent orchestration", orchestra: true, langchain: "Partial", flowise: "Partial", dify: "Partial" },
  { feature: "Visual workflow builder", orchestra: true, langchain: false, flowise: true, dify: true },
  { feature: "Long-term vector memory", orchestra: true, langchain: "Manual", flowise: "Partial", dify: "Partial" },
  { feature: "300+ prebuilt integrations", orchestra: true, langchain: false, flowise: false, dify: false },
  { feature: "SOC 2 Type II", orchestra: true, langchain: false, flowise: false, dify: false },
  { feature: "Private cloud deployment", orchestra: true, langchain: false, flowise: "Self-hosted only", dify: "Self-hosted only" },
  { feature: "Human-in-the-loop", orchestra: true, langchain: "Manual", flowise: false, dify: "Partial" },
  { feature: "Full trace observability", orchestra: true, langchain: "Partial", flowise: false, dify: "Partial" },
  { feature: "RBAC & SSO", orchestra: true, langchain: false, flowise: false, dify: "Enterprise only" },
  { feature: "Managed SLA (99.9%)", orchestra: true, langchain: false, flowise: false, dify: false },
];

function Check({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />;
  if (val === false) return <span className="text-muted-foreground/40 mx-auto block text-center text-xs">—</span>;
  return <span className="text-xs text-muted-foreground text-center block">{val}</span>;
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="glow" className="mb-6">Platform Features</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            The complete platform for
            <br />
            <span className="text-gradient">agent builders</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to build production-grade autonomous agent systems —
            from visual design to deployment, observability, and enterprise security.
          </p>
        </div>
      </section>

      {/* Feature groups */}
      {featureGroups.map((group, idx) => (
        <Section
          key={group.category}
          className={idx % 2 !== 0 ? "bg-card/20 border-y border-border" : ""}
        >
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:sticky lg:top-28">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-current/20 bg-current/10 ${group.color} text-sm font-semibold mb-4`}>
                {group.icon}
                {group.category}
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">{group.category}</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{group.description}</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {group.features.map((f) => (
                <div key={f.name} className="p-4 rounded-xl border border-border bg-card hover:border-border/80 transition-colors">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${group.color} flex-shrink-0`} />
                    <p className="text-sm font-semibold text-foreground">{f.name}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* Comparison table */}
      <Section className="bg-card/20 border-y border-border">
        <SectionHeading
          badge="Comparison"
          title="How we stack up"
          titleHighlight=""
          description="OrchestraAI vs. other agent and workflow tools on the market."
        />
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card/50">
                <th className="text-left px-5 py-4 font-semibold text-foreground w-1/3">Feature</th>
                <th className="text-center px-4 py-4 font-semibold text-primary">OrchestraAI</th>
                <th className="text-center px-4 py-4 font-medium text-muted-foreground">LangChain</th>
                <th className="text-center px-4 py-4 font-medium text-muted-foreground">Flowise</th>
                <th className="text-center px-4 py-4 font-medium text-muted-foreground">Dify</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-border/50 ${i % 2 === 0 ? "" : "bg-card/20"}`}>
                  <td className="px-5 py-3.5 text-foreground/80">{row.feature}</td>
                  <td className="px-4 py-3.5"><Check val={row.orchestra} /></td>
                  <td className="px-4 py-3.5"><Check val={row.langchain} /></td>
                  <td className="px-4 py-3.5"><Check val={row.flowise} /></td>
                  <td className="px-4 py-3.5"><Check val={row.dify} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-purple-900/8" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            All of this, <span className="text-gradient">starting free.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            No credit card required. Upgrade when you're ready to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link href="/marketing/contact">Start for free<ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="/marketing/contact">Book a demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
