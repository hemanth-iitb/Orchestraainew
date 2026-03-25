"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Mail, Calendar, MessageSquare, Building2,
  Users, Zap, CheckCircle2, Clock, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const contactOptions = [
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Book a live demo",
    description: "45-minute call with a solutions engineer. We'll build a custom workflow for your use case.",
    cta: "Pick a time",
    badge: "Most popular",
    color: "border-primary/40 bg-primary/5",
    badgeColor: "text-primary",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Start free trial",
    description: "No credit card. Deploy your first agent workflow in under 10 minutes.",
    cta: "Start building",
    badge: "Instant access",
    color: "border-border bg-card",
    badgeColor: "text-muted-foreground",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Enterprise inquiry",
    description: "Custom contracts, private cloud, dedicated support, and SLA guarantees.",
    cta: "Contact sales",
    badge: "Enterprise",
    color: "border-border bg-card",
    badgeColor: "text-muted-foreground",
  },
];

const faqs = [
  {
    q: "How long does it take to get started?",
    a: "Most teams deploy their first agent workflow within 2 hours of signing up. Our quickstart guide and templates get you there fast.",
  },
  {
    q: "What LLMs does OrchestraAI support?",
    a: "All major providers — OpenAI, Anthropic, Mistral, Cohere, Google Gemini — plus self-hosted models via Ollama or vLLM.",
  },
  {
    q: "Can I run OrchestraAI in my own cloud?",
    a: "Yes. Enterprise plans include a fully private cloud deployment to AWS, Azure, or GCP. Your data never leaves your VPC.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Starter plan is free forever — 1,000 agent runs per month, 3 active workflows. Upgrade when you need more.",
  },
  {
    q: "What compliance certifications do you hold?",
    a: "SOC 2 Type II certified. HIPAA-ready with BAA available. GDPR compliant. ISO 27001 in progress.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    useCase: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/6 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="glow" className="mb-6">Get Started</Badge>
          <h1 className="font-display text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            Let's build something
            <br />
            <span className="text-gradient">incredible together</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Whether you're exploring or ready to deploy — we're here to help you ship faster.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {contactOptions.map((opt) => (
            <div
              key={opt.title}
              className={`rounded-2xl border p-6 flex flex-col gap-4 ${opt.color}`}
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {opt.icon}
                </div>
                <span className={`text-xs font-semibold ${opt.badgeColor}`}>{opt.badge}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{opt.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{opt.description}</p>
              </div>
              <Button variant="outline" size="sm" className="mt-auto">
                {opt.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-2">Book a demo</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              Tell us about your team and use case. We'll prepare a custom demo and send a calendar invite within one business day.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-sm text-muted-foreground">
                  We'll reach out within one business day with a custom calendar link.
                  In the meantime, explore our documentation.
                </p>
                <Button variant="outline" size="sm" className="mt-6" asChild>
                  <Link href="/marketing/docs">Explore docs</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      First name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      placeholder="Aria"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Last name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      placeholder="Patel"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Work email <span className="text-red-400">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="aria@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <Input
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Your role</label>
                    <Input
                      placeholder="CTO / Head of Eng"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Team size</label>
                  <select
                    className="flex h-10 w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                    value={form.teamSize}
                    onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1–10 people</option>
                    <option value="11-50">11–50 people</option>
                    <option value="51-200">51–200 people</option>
                    <option value="201-1000">201–1,000 people</option>
                    <option value="1000+">1,000+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Primary use case</label>
                  <select
                    className="flex h-10 w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                    value={form.useCase}
                    onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                  >
                    <option value="">Select a use case</option>
                    <option value="research">Research & analysis automation</option>
                    <option value="support">Customer support automation</option>
                    <option value="document">Document processing</option>
                    <option value="content">Content & marketing ops</option>
                    <option value="devops">Engineering & DevOps</option>
                    <option value="compliance">Legal & compliance</option>
                    <option value="finance">Finance & accounting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    What are you trying to automate?
                  </label>
                  <Textarea
                    placeholder="Describe the workflow or problem you want to solve with agents..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="glow" size="lg" className="w-full">
                  Request a demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our{" "}
                  <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                  We'll never spam you.
                </p>
              </form>
            )}
          </div>

          {/* Right: info + FAQ */}
          <div className="space-y-8">
            {/* What to expect */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">What to expect</h3>
              <div className="space-y-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: "We reply within 1 business day" },
                  { icon: <Calendar className="w-4 h-4" />, text: "45-min personalized demo call" },
                  { icon: <Zap className="w-4 h-4" />, text: "Custom workflow built for your use case" },
                  { icon: <Users className="w-4 h-4" />, text: "Technical team available for deep dives" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="text-primary flex-shrink-0">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact alternatives */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <p className="text-sm font-semibold mb-3">Other ways to reach us</p>
              <div className="space-y-2.5 text-sm">
                <a href="mailto:hello@orchestraai.com" className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  hello@orchestraai.com
                </a>
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Discord community (5,000+ members)
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Frequently asked</h3>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q} className="p-4 rounded-xl border border-border bg-card">
                    <p className="text-sm font-medium text-foreground mb-1.5">{faq.q}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
