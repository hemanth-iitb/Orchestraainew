import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BrainCircuit, Network, Layers, Workflow, GitBranch,
  Cpu, Database, Zap, Shield, CheckCircle2, TerminalSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/shared/section";
import { AgentFlowDiagram } from "@/components/shared/agent-flow-diagram";

export const metadata: Metadata = {
  title: "Product — Agent Orchestration Explained",
  description: "Understand how OrchestraAI orchestrates autonomous AI agents into enterprise-grade workflows.",
};

const architectureLayers = [
  {
    name: "Orchestration Layer",
    description: "The AI planner that decomposes goals, assigns tasks to specialized agents, and manages inter-agent communication.",
    icon: <BrainCircuit className="w-5 h-5" />,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    features: ["Goal decomposition", "Task delegation", "Conflict resolution", "Re-planning on failure"],
  },
  {
    name: "Agent Layer",
    description: "Specialized AI workers — each with a defined role, system prompt, and toolset — that execute specific subtasks.",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    features: ["Role-based prompting", "Tool access control", "Output validation", "Retry & fallback logic"],
  },
  {
    name: "Memory Layer",
    description: "Persistent context storage across sessions — short-term working memory, long-term vector memory, and episodic recall.",
    icon: <Database className="w-5 h-5" />,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    features: ["Vector embeddings", "Episodic memory", "Cross-session recall", "Shared agent state"],
  },
  {
    name: "Tool Layer",
    description: "The action surface — every API, database, and service your agents can call to observe and affect the world.",
    icon: <Zap className="w-5 h-5" />,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    features: ["300+ prebuilt tools", "Custom tool builder", "Rate limit handling", "Auth management"],
  },
];

const agentTypes = [
  {
    type: "Planner Agent",
    description: "Breaks down complex goals into structured subtasks and assigns them to the right workers.",
    model: "GPT-4o / Claude Opus",
    usedFor: "Strategy, research synthesis, project coordination",
  },
  {
    type: "Research Agent",
    description: "Searches the web, queries databases, and synthesizes information from multiple sources.",
    model: "Any LLM + web tools",
    usedFor: "Market research, due diligence, competitive analysis",
  },
  {
    type: "Code Agent",
    description: "Writes, runs, and debugs code in sandboxed environments. Can build and test full applications.",
    model: "Claude / GPT-4 + code tools",
    usedFor: "Automation scripts, data pipelines, integrations",
  },
  {
    type: "Reviewer Agent",
    description: "Validates, critiques, and quality-gates the output of other agents before delivery.",
    model: "Any LLM",
    usedFor: "QA, compliance checks, factual verification",
  },
  {
    type: "Communication Agent",
    description: "Composes and sends emails, Slack messages, reports, and notifications on behalf of the workflow.",
    model: "GPT-4o / Claude",
    usedFor: "Customer comms, internal updates, escalations",
  },
  {
    type: "Data Agent",
    description: "Queries, transforms, and analyzes structured data from SQL databases, spreadsheets, and APIs.",
    model: "Any LLM + SQL tools",
    usedFor: "Analytics, reporting, KPI monitoring",
  },
];

const codeExample = `# Define an agent workflow in YAML
workflow:
  name: market-research-pipeline
  trigger: schedule | api | event

  orchestrator:
    model: claude-opus-4
    goal: "Research competitors and produce a weekly brief"

  agents:
    - id: researcher
      role: Research Analyst
      model: gpt-4o
      tools: [web_search, rag_query, pdf_reader]
      memory: true

    - id: analyst
      role: Data Analyst  
      model: claude-sonnet-4
      tools: [sql_query, chart_generator]
      depends_on: [researcher]

    - id: writer
      role: Report Writer
      model: gpt-4o
      tools: [document_create, email_send]
      depends_on: [researcher, analyst]

  output:
    format: pdf_report
    notify: [slack_channel, email_list]`;

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="glow" className="mb-6">Platform Architecture</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            How agent orchestration
            <br />
            <span className="text-gradient">actually works</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            OrchestraAI is a multi-layer platform that connects LLMs, tools, and memory
            into autonomous agents that collaborate to complete enterprise tasks — reliably,
            at scale, and with full observability.
          </p>
        </div>
      </section>

      {/* Architecture Diagram */}
      <Section className="border-y border-border bg-card/20">
        <SectionHeading
          badge="Architecture"
          title="The four-layer"
          titleHighlight="agent stack"
          description="Every OrchestraAI workflow is built on four composable layers — from high-level orchestration down to individual tool calls."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {architectureLayers.map((layer, i) => (
            <div key={layer.name} className="relative">
              {i < 3 && (
                <div className="hidden lg:flex absolute top-10 left-full z-10 items-center w-full">
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground/40 -ml-2 flex-shrink-0" />
                </div>
              )}
              <Card className={`h-full border ${layer.border}`}>
                <CardHeader>
                  <div className={`w-10 h-10 rounded-xl ${layer.bg} ${layer.border} border flex items-center justify-center ${layer.color} mb-3`}>
                    {layer.icon}
                  </div>
                  <CardTitle className="text-base">{layer.name}</CardTitle>
                  <CardDescription className="text-sm">{layer.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {layer.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${layer.color} flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Live diagram + explanation */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="glow" className="mb-4">Live Example</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              Agents coordinating
              <br />
              <span className="text-gradient">in real time</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When a goal arrives, the Orchestrator analyzes it, spawns specialized agents,
              and routes their outputs back together into a final deliverable — handling
              failures, retries, and parallel execution automatically.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Parallel execution for independent subtasks",
                "Sequential handoffs for dependent steps",
                "Automatic retry with alternate strategies",
                "Shared memory across all agents in the workflow",
                "Real-time status streaming to your dashboard",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="glow" asChild>
              <Link href="/marketing/docs">Read the technical docs</Link>
            </Button>
          </div>
          <div className="border border-border/60 rounded-2xl bg-card/50 p-6 border-gradient">
            <AgentFlowDiagram />
          </div>
        </div>
      </Section>

      {/* Agent Types */}
      <Section className="bg-card/20 border-y border-border">
        <SectionHeading
          badge="Agent Catalog"
          title="Built-in agent"
          titleHighlight="archetypes"
          description="Start from battle-tested agent templates and customize to your needs, or build fully custom agents from scratch."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agentTypes.map((a) => (
            <Card key={a.type} className="group hover:border-border/80 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between mb-1">
                  <CardTitle className="text-base">{a.type}</CardTitle>
                  <Cpu className="w-4 h-4 text-primary mt-0.5" />
                </div>
                <CardDescription>{a.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground w-16 flex-shrink-0">Model:</span>
                  <span className="font-mono text-primary/80 bg-primary/10 px-2 py-0.5 rounded">{a.model}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-muted-foreground w-16 flex-shrink-0 mt-0.5">Used for:</span>
                  <span className="text-foreground/70">{a.usedFor}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Code Example */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge variant="glow" className="mb-4">Developer-First</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-5">
              Code, YAML, or
              <span className="text-gradient"> no-code</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Define agent workflows in YAML, Python, TypeScript, or use the visual drag-and-drop
              builder. Everything compiles to the same runtime — your choice of interface.
            </p>
            <div className="space-y-3 mb-8">
              {[
                { label: "YAML Config", desc: "Declarative workflow definitions" },
                { label: "Python SDK", desc: "Full programmatic control" },
                { label: "REST API", desc: "Trigger workflows from anywhere" },
                { label: "Visual Builder", desc: "No-code drag-and-drop canvas" },
                { label: "Webhooks", desc: "Event-driven workflow triggers" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                  <TerminalSquare className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{item.desc}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" asChild>
              <Link href="/marketing/docs">
                View SDK docs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-[hsl(220_20%_6%)] overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">workflow.yaml</span>
            </div>
            <pre className="p-5 text-xs font-mono text-muted-foreground leading-relaxed overflow-x-auto">
              <code>
                {codeExample.split("\n").map((line, i) => {
                  const isComment = line.trim().startsWith("#");
                  const isKey = /^\s+\w+:/.test(line) && !line.includes("- ");
                  const isString = line.includes('"') || line.includes("'");
                  return (
                    <span
                      key={i}
                      className={
                        isComment
                          ? "text-muted-foreground/50 block"
                          : isKey
                          ? "text-cyan-400 block"
                          : isString
                          ? "text-emerald-400 block"
                          : "block"
                      }
                    >
                      {line}
                    </span>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-purple-900/8" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Ready to build your <span className="text-gradient">first agent?</span>
          </h2>
          <p className="text-muted-foreground mb-8">Deploy a working agent workflow in under 10 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="lg" asChild>
              <Link href="/marketing/contact">Start building free</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link href="/marketing/use-cases">Explore use cases</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
