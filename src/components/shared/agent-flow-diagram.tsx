"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AgentNode {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  type: "orchestrator" | "worker" | "tool" | "output";
}

const nodes: AgentNode[] = [
  { id: "orch", label: "Orchestrator", sublabel: "AI Planner", x: 300, y: 60, type: "orchestrator" },
  { id: "a1", label: "Research Agent", sublabel: "Web + RAG", x: 80, y: 200, type: "worker" },
  { id: "a2", label: "Code Agent", sublabel: "Python / JS", x: 300, y: 200, type: "worker" },
  { id: "a3", label: "Writer Agent", sublabel: "GPT-4o", x: 520, y: 200, type: "worker" },
  { id: "t1", label: "Vector DB", sublabel: "Pinecone", x: 80, y: 340, type: "tool" },
  { id: "t2", label: "GitHub API", sublabel: "Code tools", x: 300, y: 340, type: "tool" },
  { id: "t3", label: "Slack / Email", sublabel: "Comms tools", x: 520, y: 340, type: "tool" },
  { id: "out", label: "Result", sublabel: "Delivered", x: 300, y: 470, type: "output" },
];

const edges = [
  { from: "orch", to: "a1" },
  { from: "orch", to: "a2" },
  { from: "orch", to: "a3" },
  { from: "a1", to: "t1" },
  { from: "a2", to: "t2" },
  { from: "a3", to: "t3" },
  { from: "t1", to: "out" },
  { from: "t2", to: "out" },
  { from: "t3", to: "out" },
];

const nodeColors = {
  orchestrator: { fill: "hsl(199 100% 50% / 0.15)", stroke: "hsl(199 100% 50%)", text: "#00d4ff" },
  worker: { fill: "hsl(220 15% 14%)", stroke: "hsl(220 15% 28%)", text: "#e2e8f0" },
  tool: { fill: "hsl(270 60% 25% / 0.3)", stroke: "hsl(270 60% 50% / 0.6)", text: "#c4b5fd" },
  output: { fill: "hsl(142 60% 20% / 0.3)", stroke: "hsl(142 60% 45% / 0.7)", text: "#86efac" },
};

function getNodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function AgentFlowDiagram({ className }: { className?: string }) {
  const [activeEdge, setActiveEdge] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEdge((prev) => (prev + 1) % edges.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        viewBox="0 0 600 550"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 40px hsl(199 100% 50% / 0.08))" }}
      >
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(220 15% 35%)" />
          </marker>
          <marker id="arrowhead-active" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="hsl(199 100% 50%)" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNodeById(edge.from);
          const to = getNodeById(edge.to);
          const isActive = i === activeEdge;
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y + 28}
              x2={to.x}
              y2={to.y - 28}
              stroke={isActive ? "hsl(199 100% 50%)" : "hsl(220 15% 22%)"}
              strokeWidth={isActive ? 2 : 1.5}
              strokeDasharray={isActive ? "6 3" : "none"}
              markerEnd={isActive ? "url(#arrowhead-active)" : "url(#arrowhead)"}
              filter={isActive ? "url(#glow)" : undefined}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const colors = nodeColors[node.type];
          return (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              {/* Glow ring for orchestrator */}
              {node.type === "orchestrator" && (
                <circle r="44" fill="hsl(199 100% 50% / 0.06)" className="animate-pulse" />
              )}
              <rect
                x={-70}
                y={-26}
                width={140}
                height={52}
                rx={node.type === "orchestrator" ? 12 : 8}
                fill={colors.fill}
                stroke={colors.stroke}
                strokeWidth={node.type === "orchestrator" ? 1.5 : 1}
              />
              <text
                textAnchor="middle"
                y={-6}
                fontSize={12}
                fontWeight="600"
                fill={colors.text}
                fontFamily="Syne, sans-serif"
              >
                {node.label}
              </text>
              {node.sublabel && (
                <text
                  textAnchor="middle"
                  y={10}
                  fontSize={10}
                  fill="hsl(210 15% 50%)"
                  fontFamily="DM Sans, sans-serif"
                >
                  {node.sublabel}
                </text>
              )}
            </g>
          );
        })}

        {/* Status dots */}
        {nodes.map((node) => (
          <circle
            key={`dot-${node.id}`}
            cx={node.x + 60}
            cy={node.y - 20}
            r={4}
            fill={node.type === "orchestrator" ? "#00d4ff" : node.type === "output" ? "#86efac" : "hsl(220 15% 35%)"}
            className={node.type === "orchestrator" ? "animate-pulse" : ""}
          />
        ))}
      </svg>
    </div>
  );
}
