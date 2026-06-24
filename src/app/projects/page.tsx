"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HeyShift — AI-Powered Voice Assistant for Smart Navigation",
    slug: "heyshift",
    tag: "NLP · Voice AI",
    description:
      "An AI-powered voice assistant for drivers that combines navigation, traffic analysis, weather intelligence, conversational memory, and real-time voice interaction through a hands-free conversational interface.",
    tech: ["Python", "NLP", "Speech Processing", "Intent Detection", "Voice Assistant", "Generative AI"],
  },
  {
    title: "Project Darpan",
    slug: "project-darpan",
    tag: "Computer Vision · LLM",
    description:
      "An AI-powered visual reasoning and object understanding system integrating Computer Vision and Large Language Models.",
    tech: ["Python", "Flask", "OpenCV", "Ollama", "LLaVA", "Computer Vision"],
  },
  {
    title: "Bert Fined tuned for Interpretability",
    slug: "bert-fined-tuned-for-interprebility",
    tag: "bert-explainability",
    description: "BERT Interpretability: Explaining \"black box\" NLP predictions using attention rollout, gradient-based attribution, and gender bias evaluation.",
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "Jupyter"],
  },
];

const nodes = [
  { cx: 80, cy: 80 }, { cx: 200, cy: 60 }, { cx: 320, cy: 100 },
  { cx: 140, cy: 180 }, { cx: 280, cy: 200 }, { cx: 80, cy: 280 },
  { cx: 220, cy: 300 }, { cx: 360, cy: 260 },
];
const edges = [[0,1],[1,2],[0,3],[1,3],[2,4],[3,4],[3,5],[4,6],[4,7],[5,6]];

export default function ProjectsPage() {
  return (
    <main
      className="projects-main"
      style={{
        minHeight: "100vh",
        overflowX: "hidden",
        background: "#080808",
        color: "#e8e4dc",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        :root {
          --gold: #c9a96e;
          --gold-dim: #8a6e42;
          --surface: #0f0f0f;
          --border: rgba(255,255,255,0.07);
          --border-accent: rgba(201,169,110,0.25);
          --text-muted: #7a7570;
          --text-dim: #4a4845;
        }

        /* Desktop Main Padding (Navbar Clearance) */
        .projects-main {
          padding-top: 140px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 28px 28px 24px;
          border: 0.5px solid var(--border);
          background: var(--surface);
          text-decoration: none;
          color: inherit;
          border-radius: 2px;
          transition: border-color 0.25s, background 0.25s;
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-card:hover { border-color: var(--border-accent); background: #111; }
        .project-card:hover::before { opacity: 1; }

        .tag-accent {
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 3px 9px; border: 0.5px solid rgba(201,169,110,0.35);
          color: var(--gold); background: rgba(201,169,110,0.06); border-radius: 1px;
        }
        .tag-dim {
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 3px 9px; border: 0.5px solid var(--border);
          color: var(--text-dim); background: transparent; border-radius: 1px;
        }

        .divider { border: none; border-top: 0.5px solid var(--border); }

        .arrow-link {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--text-dim);
          transition: color 0.2s;
        }
        .project-card:hover .arrow-link { color: var(--gold); }

        /* ── Mobile & Tablet Responsive Optimizations ── */
        @media (max-width: 768px) {
          /* Reduces the huge gap you noticed at the top of the screen */
          .projects-main {
            padding-top: 0 !important; 
          }
          .projects-section {
            /* Perfectly align with your navbar height */
            padding: 72px 24px 60px !important; 
            min-height: 100vh !important;
            height: auto !important;
            overflow-y: visible !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Neural net background */}
      <svg
        style={{ position: "absolute", top: 40, right: 0, opacity: 0.04, pointerEvents: "none" }}
        width="380" height="380" viewBox="0 0 380 380" aria-hidden="true"
      >
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="#c9a96e" strokeWidth="0.8"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={i % 3 === 0 ? 4 : 3} fill="#c9a96e" />
        ))}
      </svg>

      <section
        className="projects-section"
        style={{ maxWidth: "1080px", margin: "0 auto", width: "100%", padding: "0 48px 100px", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "36px" }}
        >
          <p style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ display: "inline-block", width: 36, height: 1, background: "var(--gold)", flexShrink: 0 }} />
            Portfolio
          </p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(36px, 4.5vw, 56px)",
            fontWeight: 400, lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#f0ece3", marginBottom: "12px",
          }}>
            Selected{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Projects</em>
          </h1>
          <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text-muted)", fontWeight: 300, maxWidth: "500px" }}>
            A collection of work focused on Artificial Intelligence, Machine Learning,
            Computer Vision, NLP and Automation.
          </p>
        </motion.div>

        <hr className="divider" style={{ marginBottom: "32px" }} />

        {/* Grid */}
        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/projects/${project.slug}`} className="project-card" style={{ display: "flex", flexDirection: "column" }}>

                {/* Top row */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px", gap: "12px" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "0.18em", color: "var(--text-dim)", textTransform: "uppercase" }}>
                    0{index + 1}
                  </span>
                  <span className="tag-accent">{project.tag}</span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 400,
                  color: "#f0ece3",
                  marginBottom: "10px",
                  lineHeight: 1.15,
                }}>
                  {project.title}
                </h2>

                {/* Description */}
                <p style={{ fontSize: "12px", lineHeight: 1.75, color: "var(--text-muted)", fontWeight: 300, marginBottom: "20px", flex: 1 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "20px" }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tag-dim">{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{ borderTop: "0.5px solid var(--border)", paddingTop: "14px", display: "flex", justifyContent: "flex-end" }}>
                  <span className="arrow-link">
                    View Project <span style={{ fontSize: "14px" }}>→</span>
                  </span>
                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}