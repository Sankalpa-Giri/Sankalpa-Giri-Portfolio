"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "3", label: "Projects Built" },
  { value: "DRDO", label: "Project Trainee" },
  { value: "AI", label: "Core Domain" },
];

const socialLinks = [
  { href: "https://github.com/Sankalpa-Giri", icon: <FaGithub size={16} />, label: "GitHub" },
  { href: "https://linkedin.com/in/sankalpa-giri", icon: <FaLinkedin size={16} />, label: "LinkedIn" },
  { href: "mailto:sankalpagiri210@gmail.com", icon: <Mail size={16} />, label: "Email" },
];

const domains = [
  { label: "NLP", accent: true },
  { label: "LLM", accent: true },
  { label: "Generative AI", accent: true },
  { label: "RAG", accent: false },
  { label: "Deep Learning", accent: false },
  { label: "Automation", accent: false },
];

const nodes = [
  { cx: 80, cy: 80 }, { cx: 200, cy: 60 }, { cx: 320, cy: 100 },
  { cx: 140, cy: 180 }, { cx: 280, cy: 200 }, { cx: 80, cy: 280 },
  { cx: 220, cy: 300 }, { cx: 360, cy: 260 }, { cx: 160, cy: 360 }, { cx: 330, cy: 370 },
];
const edges = [
  [0,1],[1,2],[0,3],[1,3],[2,4],[3,4],[3,5],[4,6],[4,7],[5,6],[6,8],[7,9],[6,9],
];

export default function Hero() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#e8e4dc",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --gold: #c9a96e;
          --gold-dim: #8a6e42;
          --surface: #0f0f0f;
          --border: rgba(255,255,255,0.07);
          --border-accent: rgba(201,169,110,0.25);
          --text-muted: #7a7570;
          --text-dim: #4a4845;
        }

        /* ── Hero Layout (Desktop) ── */
        .hero-wrapper {
          max-width: 1080px;
          margin: 0 auto;
          width: 100%;
          padding: 140px 48px 100px;
          display: grid;
          grid-template-columns: 35% 1fr;
          grid-template-areas:
            "photo name"
            "photo desc"
            "photo extra";
          gap: 64px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        .hero-photo { grid-area: photo; }
        .hero-name { grid-area: name; }
        .hero-desc { grid-area: desc; }
        .hero-extra { grid-area: extra; }

        /* ── Photo ── */
        .hero-photo-wrap {
          position: relative;
          width: 100%;
        }

        .hero-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          max-height: 440px;
          border-radius: 2px;
          overflow: hidden;
          border: 0.5px solid var(--border);
        }

        .hero-corner-tl {
          position: absolute;
          top: -14px; left: -14px;
          width: 32px; height: 32px;
          border-top: 0.5px solid var(--gold);
          border-left: 0.5px solid var(--gold);
          z-index: 2;
        }

        .hero-corner-br {
          position: absolute;
          bottom: -14px; right: -14px;
          width: 32px; height: 32px;
          border-bottom: 0.5px solid var(--gold);
          border-right: 0.5px solid var(--gold);
          z-index: 2;
        }

        .hero-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(8,8,8,0.55));
        }

        .hero-status-badge {
          position: absolute;
          bottom: 22px; left: -1px;
          background: rgba(8,8,8,0.88);
          border: 0.5px solid var(--border-accent);
          padding: 7px 14px;
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-status-text {
          font-size: 9px;
          letter-spacing: 0.2em;
          color: var(--gold);
          text-transform: uppercase;
          margin: 0;
        }

        /* ── Content Elements ── */
        .hero-name-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
          color: #f0ece3;
        }

        .hero-role {
          font-size: 10px;
          letter-spacing: 0.22em;
          color: #E2DFD2;
          text-transform: uppercase;
          margin-bottom: 0;
          font-weight: 400;
        }

        .hero-divider {
          border: none;
          border-top: 0.5px solid var(--border);
        }

        .hero-desc-text {
          font-size: 14px;
          line-height: 1.85;
          color: var(--text-muted);
          font-weight: 300;
          max-width: 480px;
        }

        /* ── Terminal ── */
        .terminal {
          background: #0a0a0a;
          border: 0.5px solid var(--border);
          border-left: 1.5px solid var(--gold);
          padding: 12px 16px;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          line-height: 1.8;
          margin-bottom: 18px;
          overflow-x: auto;
        }

        .t-prompt { color: var(--gold); }
        .t-key    { color: var(--text-muted); }
        .t-val    { color: #e8e4dc; }
        .t-dim    { color: var(--text-dim); }

        .t-cursor {
          display: inline-block;
          width: 7px; height: 12px;
          background: var(--gold);
          vertical-align: -2px;
          animation: blink 1.2s step-end infinite;
        }

        @keyframes blink { 50% { opacity: 0; } }

        /* ── Tags ── */
        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .tag {
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 0.5px solid;
          border-radius: 1px;
        }

        .tag-accent { border-color: rgba(201,169,110,0.35); color: var(--gold); background: rgba(201,169,110,0.06); }
        .tag-dim    { border-color: var(--border); color: var(--text-dim); background: transparent; }

        /* ── Buttons ── */
        .hero-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          border: 0.5px solid var(--gold-dim);
          background: rgba(201,169,110,0.06);
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }

        .hero-btn-primary:hover {
          background: rgba(201,169,110,0.12);
          border-color: var(--gold);
          color: #e0c48a;
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          border: 0.5px solid var(--border);
          background: transparent;
          color: var(--text-muted);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: border-color 0.25s, color 0.25s;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }

        .hero-btn-secondary:hover {
          border-color: rgba(255,255,255,0.2);
          color: #e8e4dc;
        }

        /* ── Social links ── */
        .hero-socials {
          display: flex;
          gap: 24px;
          margin-bottom: 36px;
          color: #FFFFFF;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--text-dim);
          text-decoration: none;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .social-link:hover { color: var(--gold); }

        /* ── Stats ── */
        .hero-stats {
          display: flex;
        }

        .stat-item {
          text-align: center;
          padding: 0 28px;
        }

        .stat-item:first-child {
          padding-left: 0;
        }

        .stat-item + .stat-item {
          border-left: 0.5px solid var(--border);
        }

        .stat-value {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 26px;
          font-weight: 400;
          color: #f0ece3;
          margin-bottom: 3px;
          line-height: 1;
        }

        .stat-label {
          font-size: 9px;
          letter-spacing: 0.14em;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        /* ── Scan line ── */
        .scan-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: rgba(201,169,110,0.45);
          animation: scan 3.5s ease-in-out infinite;
          pointer-events: none;
          z-index: 3;
        }

        @keyframes scan {
          0%   { top: 0; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* ── Status dot ── */
        .status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.35} }

        /* ── Responsive: Tablet ── */
        @media (max-width: 860px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            grid-template-areas:
              "photo"
              "name"
              "desc"
              "extra";
            gap: 32px;
            padding: 100px 28px 72px;
            max-width: 600px;
            margin: 0 auto;
          }
          .hero-photo {
            max-width: 250px;
            margin: 0 auto;
          }
          .hero-desc-text {
            max-width: 100%;
          }
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 640px) {
          .hero-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 24px;
            align-items: flex-start;
            padding: 72px 16px 56px;
            max-width: 100%;
          }
          .hero-photo {
            flex: 0 0 35%;
            max-width: 140px;
            width: 100%;
            margin: 0;
          }
          .hero-name {
            flex: 1;
            min-width: 0;
          }
          .hero-desc {
            width: 100%;
          }
          .hero-extra {
            width: 100%;
          }
          .hero-corner-tl {
            top: -10px; left: -10px;
            width: 24px; height: 24px;
          }
          .hero-corner-br {
            bottom: -10px; right: -10px;
            width: 24px; height: 24px;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            justify-content: center;
          }
          .hero-socials {
            gap: 16px;
            justify-content: center; /* Centered socials on mobile */
          }
          
          /* ── SCALED DOWN STATUS BADGE FOR MOBILE ── */
          .hero-status-badge {
            padding: 4px 8px;
            gap: 4px;
            bottom: 14px;
            white-space: nowrap;
          }
          .hero-status-text {
            font-size: 6px;
            letter-spacing: 0.1em;
          }
          .status-dot {
            width: 4px; height: 4px;
          }

          .stat-item {
            padding: 0 14px;
          }
          .terminal {
            font-size: 10px;
          }
          .hero-desc-text {
            font-size: 13px;
          }
        }
      `}</style>

      {/* Neural network background */}
      <svg
        style={{ position: "absolute", top: 0, right: 0, opacity: 0.04, pointerEvents: "none" }}
        width="420" height="420" viewBox="0 0 420 420"
        aria-hidden="true"
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

      <section className="hero-wrapper">

        {/* ── AREA: PHOTO ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hero-photo"
        >
          <div className="hero-photo-wrap">
            <div className="hero-corner-tl" />
            <div className="hero-corner-br" />

            <div className="hero-photo-frame">
              <div className="scan-line" />
              <Image
                src="/images/profile.jpg"
                alt="Sankalpa Giri"
                fill priority sizes="(max-width: 640px) 140px, (max-width: 860px) 250px, 480px"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
              <div className="hero-photo-gradient" />
            </div>

            <div className="hero-status-badge">
              <div className="status-dot" />
              <p className="hero-status-text">Available for opportunities</p>
            </div>
          </div>
        </motion.div>

        {/* ── AREA: NAME & DESIGNATION ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-name"
        >
          <h1 className="hero-name-title">
            Sankalpa{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Giri</em>
          </h1>
          <p className="hero-role">AI / ML Developer</p>
        </motion.div>

        {/* ── AREA: DESCRIPTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hero-desc"
        >
          <hr className="hero-divider" style={{ marginBottom: "28px" }} />
          <p className="hero-desc-text">
            I see language not just as words, but as the bridge between human thought and machine intelligence.
          </p>
        </motion.div>

        {/* ── AREA: EXTRA (Terminal, Tags, Buttons, Stats) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-extra"
        >
          {/* Terminal block */}
          <div className="terminal">
            <span className="t-prompt">&gt; </span>
            <span className="t-key">model</span>
            <span className="t-dim">.</span>
            <span className="t-val">focus</span>
            <span className="t-dim"> = [</span><br />
            {["Natural Language Processing", "Large Language Models", "Generative AI", "ML & Deep Learning"].map((d, i, arr) => (
              <span key={d} style={{ paddingLeft: "14px", display: "block" }}>
                <span className="t-val">"{d}"</span>
                <span className="t-dim">{i < arr.length - 1 ? "," : " ]"}</span>
              </span>
            ))}
            <span className="t-prompt">&gt; </span>
            <span className="t-cursor" />
          </div>

          {/* Domain tags */}
          <div className="hero-tags">
            {domains.map((d) => (
              <span key={d.label} className={`tag ${d.accent ? "tag-accent" : "tag-dim"}`}>
                {d.label}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Link href="/about" className="hero-btn-primary">About Me</Link>
            <a href="/resume.pdf" download className="hero-btn-secondary">Download Resume ↓</a>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>

          <hr className="hero-divider" style={{ marginBottom: "28px" }} />

          {/* Stats */}
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <p className="stat-value">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </section>
    </main>
  );
}