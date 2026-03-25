import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "OrchestraAI — Autonomous Agent Orchestration Platform",
    template: "%s | OrchestraAI",
  },
  description:
    "Build, deploy, and orchestrate AI agents at scale. Connect intelligent agents into powerful workflows that automate your enterprise operations.",
  keywords: ["AI agents", "agent orchestration", "autonomous agents", "enterprise AI"],
  authors: [{ name: "OrchestraAI" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
