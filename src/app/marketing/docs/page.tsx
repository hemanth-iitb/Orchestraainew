"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search, BookOpen, Zap, Code2, GitBranch, Database, Network,
  Shield, BarChart3, ChevronRight, ExternalLink, Copy, Check,
  Terminal, Cpu, Workflow,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <Zap className="w-4 h-4" />,
    items: [
      { id: "quickstart", title: "Quickstart guide", badge: "5 min", href: "#quickstart" },
      { id: "concepts", title: "Core concepts", href: "#concepts" },
      { id: "first-agent", title: "Build your first agent", badge: "Tutorial", href: "#first-agent" },
      { id: "first-workflow", title: "Create a workflow", href: "#first-workflow" },
      { id: "deployment", title: "Deploy to production", href: "#deployment" },
    ],
  },
  {
    id: "agents",
    title: "Agents",
    icon: <Cpu className="w-4 h-4" />,
    items: [
      { id: "agent-config", title: "Agent configuration", href: "#agent-config" },
      { id: "system-prompts", title: "System prompts", href: "#system-prompts" },
      { id: "agent-memory", title: "Agent memory", href: "#agent-memory" },
      { id: "agent-tools", title: "Assigning tools", href: "#agent-tools" },
      { id: "agent-output", title: "Output validation", href: "#agent-output" },
    ],
  },
  {
    id: "orchestration",
    title: "Orchestration",
    icon: <Workflow className="w-4 h-4" />,
    items: [
      { id: "workflow-yaml", title: "Workflow YAML spec", badge: "Reference", href: "#workflow-yaml" },
      { id: "routing", title: "Routing & conditionals", href: "#routing" },
      { id: "parallel", title: "Parallel execution", href: "#parallel" },
      { id: "hitl", title: "Human-in-the-loop", href: "#hitl" },
      { id: "error-handling", title: "Error handling & retry", href: "#error-handling" },
    ],
  },
  {
    id: "memory",
    title: "Memory",
    icon: <Database className="w-4 h-4" />,
    items: [
      { id: "vector-memory", title: "Vector memory setup", href: "#vector-memory" },
      { id: "episodic", title: "Episodic memory", href: "#episodic" },
      { id: "knowledge-base", title: "Knowledge base ingestion", href: "#knowledge-base" },
      { id: "memory-ttl", title: "TTL & expiry policies", href: "#memory-ttl" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: <Network className="w-4 h-4" />,
    items: [
      { id: "built-in-tools", title: "Built-in tool catalog", href: "#built-in-tools" },
      { id: "custom-tools", title: "Custom tool builder", href: "#custom-tools" },
      { id: "webhooks", title: "Webhooks & triggers", href: "#webhooks" },
      { id: "sdk", title: "Python SDK", badge: "Popular", href: "#sdk" },
      { id: "rest-api", title: "REST API reference", href: "#rest-api" },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: <Shield className="w-4 h-4" />,
    items: [
      { id: "rbac", title: "RBAC & permissions", href: "#rbac" },
      { id: "sso", title: "SSO / SAML setup", href: "#sso" },
      { id: "audit-logs", title: "Audit logs", href: "#audit-logs" },
      { id: "private-cloud", title: "Private cloud deploy", href: "#private-cloud" },
    ],
  },
  {
    id: "observability",
    title: "Observability",
    icon: <BarChart3 className="w-4 h-4" />,
    items: [
      { id: "traces", title: "Trace explorer", href: "#traces" },
      { id: "cost-tracking", title: "Cost tracking", href: "#cost-tracking" },
      { id: "otel", title: "OpenTelemetry export", href: "#otel" },
      { id: "alerts", title: "Alerts & notifications", href: "#alerts" },
    ],
  },
];

const quickstartCode = `# Install the OrchestraAI SDK
pip install orchestraai

# Set your API key
export ORCHESTRA_API_KEY="oai_your_api_key_here"`;

const firstAgentCode = `from orchestraai import Agent, Workflow, Tool

# Define a simple research agent
researcher = Agent(
    name="researcher",
    role="Senior Research Analyst",
    model="gpt-4o",
    tools=[Tool.web_search(), Tool.rag_query()],
    memory=True,
    system_prompt="""
        You are an expert research analyst.
        Always cite your sources and be concise.
    """
)

# Create a workflow with a single agent
workflow = Workflow(
    name="research-pipeline",
    agents=[researcher],
    goal="Research {topic} and summarize key findings"
)

# Run it
result = workflow.run(inputs={"topic": "AI agent orchestration"})
print(result.output)`;

const yamlCode = `# Full multi-agent workflow definition
workflow:
  name: competitor-analysis
  version: "1.0"
  
  orchestrator:
    model: claude-opus-4
    strategy: sequential_with_feedback
    
  agents:
    - id: scraper
      role: Web Researcher
      model: gpt-4o-mini
      tools: [web_search, web_scrape]
      
    - id: analyst  
      role: Business Analyst
      model: claude-sonnet-4
      depends_on: [scraper]
      tools: [data_transform, chart_generate]
      
    - id: writer
      role: Report Writer
      model: gpt-4o
      depends_on: [analyst]
      tools: [doc_create, pdf_export]
      
  output:
    deliver_to: email
    format: pdf`;

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-border bg-[hsl(220_20%_5%)] overflow-hidden my-5">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-card/50">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 text-xs font-mono text-muted-foreground overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quickstart");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border py-8 pr-4">
          <div className="px-1 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <Input
                placeholder="Search docs..."
                className="pl-9 h-9 text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <nav className="space-y-6">
            {docSections.map((section) => (
              <div key={section.id}>
                <div className="flex items-center gap-2 px-1 mb-2">
                  <span className="text-muted-foreground">{section.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {section.title}
                  </span>
                </div>
                <ul className="space-y-0.5">
                  {section.items
                    .filter(item =>
                      !searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveSection(item.id)}
                          className={cn(
                            "w-full flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors text-left",
                            activeSection === item.id
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                          )}
                        >
                          <span className="truncate">{item.title}</span>
                          {item.badge && (
                            <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-xs bg-primary/10 text-primary border border-primary/20">
                              {item.badge}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-6 lg:px-10 py-10">
          {/* Quickstart */}
          <div id="quickstart" className="mb-16">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="electric">5 min</Badge>
              <span className="text-xs text-muted-foreground">Getting Started</span>
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight mb-4">Quickstart Guide</h1>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg max-w-2xl">
              Deploy your first AI agent workflow in under 5 minutes. This guide walks you from
              installation to a running multi-agent pipeline.
            </p>

            <h2 className="font-display text-xl font-semibold mb-3">1. Install the SDK</h2>
            <CodeBlock code={quickstartCode} language="bash" />

            <h2 className="font-display text-xl font-semibold mb-3 mt-8">2. Build your first agent</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Create a Python file and define an agent with a role, model, and tools:
            </p>
            <CodeBlock code={firstAgentCode} language="python" />

            <h2 className="font-display text-xl font-semibold mb-3 mt-8">3. Scale to multi-agent workflows</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Use the YAML workflow spec to define complex multi-agent pipelines declaratively:
            </p>
            <CodeBlock code={yamlCode} language="yaml" />

            <div className="mt-8 p-5 rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Pro tip</p>
                  <p className="text-sm text-muted-foreground">
                    Use the Visual Workflow Builder in the dashboard to design your pipeline
                    graphically and export the YAML — no need to write it from scratch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Concepts */}
          <div id="concepts" className="mb-16 pt-8 border-t border-border">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">Core Concepts</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Understanding the building blocks of OrchestraAI workflows.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { term: "Orchestrator", def: "The AI coordinator that decomposes goals, delegates tasks, and manages agent output." },
                { term: "Agent", def: "A specialized AI worker with a defined role, LLM, toolset, and memory access." },
                { term: "Tool", def: "A callable function (API, database query, code execution) that agents can invoke." },
                { term: "Workflow", def: "A directed graph of agents and their dependencies, defining task execution order." },
                { term: "Memory", def: "Persistent storage (vector, episodic, working) that agents read from and write to." },
                { term: "Trace", def: "The structured log of every prompt, tool call, and decision made during a workflow run." },
              ].map((item) => (
                <div key={item.term} className="p-4 rounded-xl border border-border bg-card">
                  <p className="font-mono text-sm text-primary mb-1">{item.term}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Reference preview */}
          <div id="rest-api" className="mb-16 pt-8 border-t border-border">
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">REST API Reference</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trigger workflows, query results, and manage agents programmatically.
            </p>

            {[
              {
                method: "POST",
                endpoint: "/v1/workflows/{id}/run",
                description: "Trigger a workflow run with input variables",
                color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
              },
              {
                method: "GET",
                endpoint: "/v1/runs/{run_id}",
                description: "Get the status and output of a workflow run",
                color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
              },
              {
                method: "GET",
                endpoint: "/v1/runs/{run_id}/trace",
                description: "Retrieve the full execution trace for a run",
                color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
              },
              {
                method: "POST",
                endpoint: "/v1/agents",
                description: "Create a new agent definition",
                color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
              },
              {
                method: "DELETE",
                endpoint: "/v1/workflows/{id}",
                description: "Delete a workflow and all associated runs",
                color: "text-red-400 bg-red-400/10 border-red-400/20",
              },
            ].map((endpoint) => (
              <div
                key={endpoint.endpoint}
                className="flex items-start gap-4 p-4 border border-border rounded-xl mb-3 bg-card hover:border-border/80 transition-colors"
              >
                <span className={`font-mono text-xs font-bold px-2 py-1 rounded border flex-shrink-0 ${endpoint.color}`}>
                  {endpoint.method}
                </span>
                <div>
                  <code className="text-sm font-mono text-foreground">{endpoint.endpoint}</code>
                  <p className="text-xs text-muted-foreground mt-0.5">{endpoint.description}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>

          {/* Navigation footer */}
          <div className="pt-8 border-t border-border flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Was this page helpful?</span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                👍 Yes
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                👎 No
              </button>
            </div>
          </div>
        </main>

        {/* Right: On this page */}
        <aside className="hidden xl:block w-52 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-10 pl-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            On this page
          </p>
          <nav className="space-y-2">
            {[
              "Install the SDK",
              "Build your first agent",
              "Multi-agent workflows",
              "Core concepts",
              "REST API reference",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="block text-xs text-muted-foreground hover:text-foreground transition-colors py-0.5"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Resources
            </p>
            <div className="space-y-2">
              {[
                { label: "GitHub", href: "#" },
                { label: "Discord Community", href: "#" },
                { label: "Status Page", href: "#" },
              ].map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {r.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
