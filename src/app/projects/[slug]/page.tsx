"use client";

import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { useState, use } from "react";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────
//  PROJECT DATA — Edit this object to add/remove projects and content.
//  Each project key becomes the URL slug (e.g. /projects/heyshift).
//
//  OPTIONAL FIELDS (remove the key entirely to hide the section):
//    internshipNote, problem, challenges, impact, architecture, screenshots
//
//  screenshots: array of { src, caption } — images go in /public/images/projects/
//  architecture: path to architecture diagram in /public/images/projects/
// ─────────────────────────────────────────────────────────────────

const projects: Record<string, Project> = {

  // ── PROJECT: HeyShift ─────────────────────────────────────────
  heyshift: {
    title: "HeyShift",
    subtitle: "NLP Pipeline · Voice AI",
    tag: "NLP · Voice AI",
    status: "Completed",
    description: "Intelligent voice-first assistant for hands-free navigation and real-time contextual awareness.",
    overview:
      "HeyShift is an AI-powered voice assistant engineered for drivers and commuters. By combining speech recognition, large language models, real-time mapping, and vector-database memory, it enables fully hands-free interaction — navigation, traffic monitoring, weather updates, and personalized recall — without any manual input. The system classifies intent, routes to specialized handlers, and responds naturally through synthesized speech.",
    github: "https://github.com/Sankalpa-Giri/Hey-Shift-NLP-Pipeline.git",
    tech: [
      // Backend
      "Python", "FastAPI", "LangChain", "TinyLlama", "Ollama",
      // Data
      "MongoDB", "ChromaDB",
      // Frontend / Mobile
      "Java", "Android SDK", "XML",
      // Speech
      "SpeechRecognizer API", "TextToSpeech API", "Porcupine Wake Word",
      // APIs
      "Google Maps API", "OpenWeather API", "JWT",
    ],
    features: [
      { title: "Wake-Word Activation", detail: "Triggered by 'Hey Shift' via Porcupine engine — no button press needed." },
      { title: "Speech-to-Text Pipeline", detail: "Android SpeechRecognizer converts voice to text for downstream NLP." },
      { title: "Intent Classification", detail: "Domain routing layer separates navigation, weather, traffic, and general queries." },
      { title: "Smart Navigation", detail: "Real-time route guidance and traffic-aware ETA via Google Maps API." },
      { title: "Weather Intelligence", detail: "Live conditions, rain alerts, and context-aware recommendations via OpenWeather." },
      { title: "Conversational Memory", detail: "Session and long-term memory powered by ChromaDB vector retrieval." },
      { title: "Text-to-Speech Output", detail: "Natural-sounding responses fed back through Android TTS API." },
      { title: "JWT Auth & Profiles", detail: "Secure user sessions with persistent chat history stored in MongoDB." },
    ],
    workflow: [
      "Wake-word detected by Porcupine engine",
      "SpeechRecognizer captures and transcribes voice",
      "Intent detection & domain classification",
      "LLM processing via llama3.1:8b + LangChain",
      "Action handler invoked (Maps / Weather / Memory / General)",
      "Response generated and synthesized via TTS",
    ],
    challenges: [
      {
        challenge: "Accurately identifying user intent across multiple domains such as navigation, weather, traffic, memory, and location search. Direct intent classification often led to ambiguity and incorrect task execution.",
        solution: "Designed a two-stage Domain → Intent Classification Pipeline, where the system first identifies the query domain and then detects the specific intent within that domain. This improved intent accuracy, enabled reliable keyword mapping, and ensured the correct action handler was triggered.",
      },
      {
        challenge: "Routing across multiple domains without latency spikes",
        solution: "Built a domain classification layer that routes to specialized handlers in parallel.",
      },
      {
        challenge: "Real-time API calls while keeping response time low",
        solution: "Optimized API call sequencing and introduced dedicated service modules for maps and weather.",
      },
    ],
    impact: [
      "Fully hands-free assistant — zero manual interaction required while driving",
      "Multi-domain NLP handling navigation, weather, traffic, and conversation",
      "Persistent memory enabling personalized follow-up across sessions",
      "Demonstrated production integration of LLMs, Speech, Maps, and Vector DBs",
    ],
    // Set to the path of your architecture image in /public/images/projects/
    architecture: "/images/projects/heyshift/system_architecture.png",
    // Add screenshots: { src, caption } — images go in /public/images/projects/heyshift/
    screenshots: [
      // { src: "/images/projects/heyshift/screen-1.png", caption: "Home Screen & Wake Word UI" },
      // { src: "/images/projects/heyshift/screen-2.png", caption: "Navigation in Action" },
      // { src: "/images/projects/heyshift/screen-3.png", caption: "Weather Query Response" },
      { src: "/images/projects/heyshift/example_conversation.png", caption: "Example Conversation" },
    ],
  },

  // ── PROJECT: Darpan ───────────────────────────────────────────
  "project-darpan": {
    title: "Project Darpan",
    subtitle: "Computer Vision · LLM",
    tag: "Computer Vision · LLM",
    status: "Completed",
    description: "Deep Analysis via Reflective Prompt-Based Attention Network",
    overview:
      "Project Darpan is an AI-powered visual reasoning platform capable of understanding images and video streams through prompt-driven interaction. It combines Computer Vision and Large Language Models to analyze visual scenes and answer user queries.",
    github: "https://github.com/Sankalpa-Giri/DARPAN-IMG-LIVE-.git",
    tech: ["Python", "Flask", "OpenCV", "Ollama", "LLaVA", "Computer Vision", "LangChain"],
    features: [
      { title: "Prompt-Based Visual Analysis", detail: "Ask natural language questions about any image or live video frame." },
      { title: "Real-Time Video Processing", detail: "Continuous frame capture and analysis via OpenCV pipeline." },
      { title: "Object Detection", detail: "Identifies and locates objects within visual scenes." },
      { title: "Visual Question Answering", detail: "LLaVA model answers complex visual queries contextually." },
      { title: "Offline LLM Integration", detail: "Fully offline inference via Ollama — no cloud dependency." },
      { title: "Flask Web Interface", detail: "Clean browser-based UI for image upload and real-time interaction." },
    ],
    workflow: [
      "Capture image or video frame",
      "Process visual data using OpenCV",
      "Send visual context to LLaVA via Ollama",
      "Interpret user prompt",
      "Generate contextual response",
      "Display output through Flask UI",
    ],
    internshipNote:
      "Project Darpan was developed during my internship at PXE. The project explored how Large Language Models and Computer Vision can work together to create intelligent visual assistants capable of understanding scenes, answering questions, and assisting users through natural language interactions.",
    // architecture: "/images/projects/darpan/architecture.jpg",
    // screenshots: [],
  },

  // ── PROJECT: BERT Interpretability ────────────────────────────
  "bert-fined-tuned-for-interprebility": {
    title: "BERT Fine-tuned for Interpretability",
    subtitle: "NLP · Explainability",
    tag: "NLP · Explainability",
    status: "Completed",
    description: "Explaining fine-tuned bert-base-uncased predictions on SST-2 via Attention Rollout and Gradient × Input methods while auditing internalised societal biases.",
    overview:
      "A comprehensive natural language processing assignment addressing the transformer interpretability gap. By fine-tuning a 109M parameter bert-base-uncased model on the SST-2 sentiment dataset, this project implements and evaluates two complementary attribution techniques—Attention Rollout and Gradient × Input—to map human-understandable token-level importance scores and uncover systemic gender biases inherited during pre-training.",
    github: "https://github.com/Sankalpa-Giri/BERT-Fine-tuned-for-Interpretability.git",
    tech: ["Python", "PyTorch", "Hugging Face", "Transformers", "BERT", "Matplotlib", "Seaborn"],
    features: [
      { title: "Attention Rollout Tracking", detail: "Averages attention across heads, accounts for residual identity skip connections, and propagates matrices across all 12 layers to map global information flow without backpropagation" },
      { title: "Gradient × Input Attribution", detail: "Computes the element-wise product of token embeddings and their gradients with respect to the predicted class logit, utilizing an L2 norm to produce faithful, sharp saliency distributions" },
      { title: "Embedding Layer Hooks", detail: "Registers a forward hook on BERT's embedding layer to dynamically capture intermediate representation tensors for gradient computation" },
      { title: "Multi-Type Saliency Visualization", detail: "Generates token-level bar heatmaps for rollout and gradient scores, 2D attention matrix heatmaps for Layer 12 Head 1, and side-by-side comparison charts" },
      { title: "Gender Bias Auditing", detail: "Examines asymmetry in importance scores across semantically equivalent, pronoun-swapped sentence pairs to detect occupation-linked and leadership-linked demographic stereotypes" },
      { title: "Fine-Tuning Pipeline", detail: "Appends a linear classification head onto the [CLS] token, fine-tuning 109,483,778 parameters on 2,000 SST-2 samples over 2 epochs to skyrocket accuracy from 50.0% to 89.50%" },
    ],
    workflow: [
      "Load bert-base-uncased baseline architecture",
      "Fine-tune all parameters on SST-2 binary sentiment dataset using AdamW (LR: 2e-5, Batch Size: 16)",
      "Register a PyTorch forward hook on the model embedding layer",
      "Extract layer-wise attention weight tensors across 12 layers during the forward pass",
      "Backpropagate predicted class logits to compute element-wise embedding gradients",
      "Perform row-normalization, residual corrections, and matrix multiplication for Attention Rollout",
      "Calculate L2 norm of the gradient-embedding product for Gradient × Input scores",
      "Generate 2D matrix heatmaps, token heatmaps, and comparative bar charts",
      "Audit model bias by evaluating pronoun (he/she) and profession (doctor/nurse) importance disparities"
    ],
    // architecture: "/images/projects/bert/architecture.jpg",
    screenshots: [
      // { src: "/images/projects/heyshift/screen-1.png", caption: "Home Screen & Wake Word UI" },
      // { src: "/images/projects/heyshift/screen-2.png", caption: "Navigation in Action" },
      // { src: "/images/projects/heyshift/screen-3.png", caption: "Weather Query Response" },
      { src: "/images/projects/bert-fined-tuned-for-interprebility/model_performance.png", caption: "Model Comparison" },
      { src: "/images/projects/bert-fined-tuned-for-interprebility/ARHM_pos.png", caption: "Attention Rollout heatmap for positive sentence" },
      { src: "/images/projects/bert-fined-tuned-for-interprebility/ARHM_neg.png", caption: "Attention Rollout heatmap for negative sentence" },
      { src: "/images/projects/bert-fined-tuned-for-interprebility/GIHM_pos.png", caption: "Gradient x Input importance for positive sentence" },
      { src: "/images/projects/bert-fined-tuned-for-interprebility/GIHM_neg.png", caption: "Gradient x Input importance for negative sentence" },
      { src: "/images/projects/bert-fined-tuned-for-interprebility/comparision.png", caption: "Side-by-side comparison: Attention vs Gradient" },
    ],
  },

  // ── ADD MORE PROJECTS BELOW ────────────────────────────────────
  // "your-slug": {
  //   title: "",
  //   subtitle: "",
  //   tag: "",
  //   status: "Completed",
  //   description: "",
  //   overview: "",
  //   github: "",
  //   tech: [],
  //   features: [],
  //   workflow: [],
  // },
};

// ─────────────────────────────────────────────────────────────────
//  TYPES
// ─────────────────────────────────────────────────────────────────
interface Feature { title: string; detail: string; }
interface Challenge { challenge: string; solution: string; }
interface Screenshot { src: string; caption: string; }

interface Project {
  title: string;
  subtitle: string;
  tag: string;
  status: string;
  description: string;
  overview: string;
  github: string;
  tech: string[];
  features: Feature[];
  workflow: string[];
  internshipNote?: string;
  challenges?: Challenge[];
  impact?: string[];
  architecture?: string;
  screenshots?: Screenshot[];
}

// ─────────────────────────────────────────────────────────────────
//  SCREENSHOT GALLERY
// ─────────────────────────────────────────────────────────────────
function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return (
      <div style={{
        padding: "48px",
        border: "0.5px dashed rgba(201,169,110,0.2)",
        borderRadius: "2px",
        textAlign: "center",
        background: "var(--surface)",
      }}>
        <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Screenshots coming soon
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Main image */}
      <div style={{ position: "relative", borderRadius: "2px", overflow: "hidden", border: "0.5px solid var(--border)", background: "var(--surface)", aspectRatio: "16/9" }}>
        <Image
          src={screenshots[active].src}
          alt={screenshots[active].caption}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "contain" }}
        />
        {/* Caption bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(to top, rgba(8,8,8,0.95), transparent)",
          padding: "24px 20px 16px",
        }}>
          <p style={{ fontSize: "11px", color: "rgba(201,169,110,0.8)", letterSpacing: "0.08em" }}>
            {screenshots[active].caption}
          </p>
        </div>
        {/* Prev / Next */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={() => setActive((active - 1 + screenshots.length) % screenshots.length)}
              style={{
                position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                background: "rgba(8,8,8,0.8)", border: "0.5px solid var(--border-accent)",
                color: "var(--gold)", width: 36, height: 36, borderRadius: "2px",
                cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
            >←</button>
            <button
              onClick={() => setActive((active + 1) % screenshots.length)}
              style={{
                position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                background: "rgba(8,8,8,0.8)", border: "0.5px solid var(--border-accent)",
                color: "var(--gold)", width: 36, height: 36, borderRadius: "2px",
                cursor: "pointer", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
            >→</button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {screenshots.length > 1 && (
        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          {screenshots.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                position: "relative", width: 80, height: 52,
                border: i === active ? "0.5px solid var(--gold)" : "0.5px solid var(--border)",
                borderRadius: "2px", overflow: "hidden",
                cursor: "pointer", background: "var(--surface)",
                transition: "border-color 0.2s", flexShrink: 0, padding: 0,
              }}
            >
              <Image src={s.src} alt={s.caption} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: "cover" }} />
              {i !== active && <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.5)" }} />}
            </button>
          ))}
        </div>
      )}

      {/* Counter */}
      <p style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.1em", marginTop: "8px", textAlign: "right" }}>
        {active + 1} / {screenshots.length}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────────────────────────
export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = projects[slug as keyof typeof projects];
  if (!project) return notFound();

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "#e8e4dc",
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      overflowX: "hidden",
    }}>
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

        .divider { border: none; border-top: 0.5px solid var(--border); }

        .section-label {
          font-size: 9px; letter-spacing: 0.22em; color: #FFFFF0;
          text-transform: uppercase; margin-bottom: 24px;
          display: flex; align-items: center; gap: 12px;
        }
        .section-label .line {
          display: inline-block; width: 36px; height: 1px;
          background: var(--gold); flex-shrink: 0;
        }

        .tag-accent {
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 3px 10px; border: 0.5px solid rgba(201,169,110,0.35);
          color: var(--gold); background: rgba(201,169,110,0.06); border-radius: 1px;
          white-space: nowrap;
        }
        .tag-dim {
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 3px 10px; border: 0.5px solid var(--border);
          color: var(--text-dim); background: transparent; border-radius: 1px;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }
        .tag-dim:hover { border-color: var(--border-accent); color: var(--gold); }

        .github-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 22px;
          border: 0.5px solid var(--gold-dim);
          background: rgba(201,169,110,0.06);
          color: var(--gold);
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          border-radius: 2px;
          cursor: pointer;
        }
        .github-btn:hover { background: rgba(201,169,110,0.14); border-color: var(--gold); }

        /* Feature cards */
        .feature-card {
          padding: 20px 22px;
          border: 0.5px solid var(--border);
          background: var(--surface);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 0;
          background: linear-gradient(to bottom, var(--gold), transparent);
          transition: height 0.35s ease;
        }
        .feature-card:hover { border-color: rgba(201,169,110,0.2); }
        .feature-card:hover::before { height: 100%; }

        /* Workflow */
        .workflow-step {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 14px 20px;
          border: 0.5px solid var(--border);
          background: var(--surface);
          border-radius: 2px;
          transition: border-color 0.2s;
        }
        .workflow-step:hover { border-color: var(--border-accent); }

        .step-num {
          width: 28px; height: 28px; border-radius: 50%;
          border: 0.5px solid var(--gold-dim);
          color: var(--gold);
          font-size: 10px; letter-spacing: 0.1em;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: 'DM Serif Display', serif;
        }

        /* Challenge card */
        .challenge-card {
          border: 0.5px solid var(--border);
          border-radius: 2px;
          overflow: hidden;
          background: var(--surface);
          transition: border-color 0.2s;
        }
        .challenge-card:hover { border-color: var(--border-accent); }

        /* Impact list */
        .impact-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 0;
          border-bottom: 0.5px solid var(--border);
        }
        .impact-item:last-child { border-bottom: none; }

        /* Status badge */
        .status-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 9px; letter-spacing: 0.15em; text-transform: uppercase;
          padding: 3px 10px;
          border: 0.5px solid rgba(120, 200, 140, 0.3);
          color: #78c88c;
          background: rgba(120, 200, 140, 0.06);
          border-radius: 1px;
        }

        @media (max-width: 768px) {
          .header-row { flex-direction: column !important; align-items: flex-start !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .section-wrap { padding: 80px 24px 60px !important; }
        }
      `}</style>

      <section className="section-wrap" style={{ maxWidth: "900px", margin: "0 auto", padding: "110px 48px 80px" }}>

        {/* ── Eyebrow ─────────────────────────────────────── */}
        <div className="section-label" style={{ marginBottom: "28px" }}>
          <span className="line" />
          Project Case Study
        </div>

        {/* ── Title row ───────────────────────────────────── */}
        <div className="header-row" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "24px", marginBottom: "12px" }}>
          <div>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 400, lineHeight: 1.0,
              letterSpacing: "-0.02em", color: "#f0ece3",
              marginBottom: "6px",
            }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "12px", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", fontStyle: "italic" }}>
              {project.subtitle}
            </p>
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn" style={{ marginTop: "8px" }}>
            <FaGithub size={14} />
            Source Code
          </a>
        </div>

        {/* ── Metadata row ────────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span className="tag-accent">{project.tag}</span>
          <span className="status-badge">
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#78c88c", display: "inline-block" }} />
            {project.status}
          </span>
        </div>

        <p style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 300, lineHeight: 1.75, marginBottom: "36px", maxWidth: "600px" }}>
          {project.description}
        </p>

        <hr className="divider" style={{ marginBottom: "48px" }} />

        {/* ── OVERVIEW ────────────────────────────────────── */}
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label"><span className="line" />Overview</p>
          <div style={{
            padding: "28px 32px",
            border: "0.5px solid var(--border)",
            borderLeft: "2px solid var(--gold)",
            background: "var(--surface)",
            borderRadius: "2px",
          }}>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#FCF5E5", fontWeight: 300 }}>
              {project.overview}
            </p>
          </div>
        </div>

        {/* ── FEATURES ────────────────────────────────────── */}
        {project.features && project.features.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label"><span className="line" />Key Features</p>
            <div
              className="features-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}
            >
              {project.features.map((f, i) => (
                <div key={f.title} className="feature-card">
                  <span style={{ color: "var(--gold-dim)", fontSize: "9px", letterSpacing: "0.12em", display: "block", marginBottom: "8px", fontFamily: "'DM Serif Display', serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "12px", color: "#FCF5E5", marginBottom: "6px", fontWeight: 500, letterSpacing: "0.02em" }}>
                    {f.title}
                  </p>
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.65, fontWeight: 300 }}>
                    {f.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── WORKFLOW ────────────────────────────────────── */}
        {project.workflow && project.workflow.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label"><span className="line" />Workflow</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {project.workflow.map((step, index) => (
                <div key={step} className="workflow-step">
                  <div className="step-num">{index + 1}</div>
                  <p style={{ fontSize: "12px", color: "#FCF5E5", lineHeight: 1.6, flex: 1 }}>{step}</p>
                  {index < project.workflow!.length - 1 && (
                    <span style={{ color: "var(--gold-dim)", fontSize: "10px", letterSpacing: "0.05em" }}>↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SYSTEM ARCHITECTURE ─────────────────────────── */}
        {project.architecture && (
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label"><span className="line" />System Architecture</p>
            <div style={{
              border: "0.5px solid var(--border)",
              borderRadius: "2px",
              overflow: "hidden",
              background: "var(--surface)",
            }}>
              <Image
                src={project.architecture}
                alt={`${project.title} system architecture`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{
                borderTop: "0.5px solid var(--border)",
                padding: "10px 20px",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold-dim)", display: "inline-block" }} />
                <p style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Architecture Diagram
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── SCREENSHOTS ─────────────────────────────────── */}
        {/* Show section even with empty array (shows placeholder) */}
        {"screenshots" in project && (
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label"><span className="line" />Screenshots</p>
            <ScreenshotGallery screenshots={project.screenshots ?? []} />
          </div>
        )}

        {/* ── CHALLENGES ──────────────────────────────────── */}
        {project.challenges && project.challenges.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label"><span className="line" />Challenges & Solutions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {project.challenges.map((c, i) => (
                <div key={i} className="challenge-card">
                  <div style={{
                    padding: "16px 20px",
                    borderBottom: "0.5px solid var(--border)",
                    display: "flex", gap: "14px", alignItems: "flex-start",
                  }}>
                    <span style={{
                      fontSize: "9px", letterSpacing: "0.1em", color: "#e07a5f",
                      border: "0.5px solid rgba(224,122,95,0.3)", padding: "2px 8px",
                      borderRadius: "1px", flexShrink: 0, marginTop: 2,
                    }}>
                      CHALLENGE
                    </span>
                    <p style={{ fontSize: "12px", color: "#FCF5E5", lineHeight: 1.65 }}>{c.challenge}</p>
                  </div>
                  <div style={{ padding: "16px 20px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <span style={{
                      fontSize: "9px", letterSpacing: "0.1em", color: "#78c88c",
                      border: "0.5px solid rgba(120,200,140,0.3)", padding: "2px 8px",
                      borderRadius: "1px", flexShrink: 0, marginTop: 2,
                    }}>
                      SOLUTION
                    </span>
                    <p style={{ fontSize: "12px", color: "#E9DCC9", lineHeight: 1.65, fontWeight: 300 }}>{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── IMPACT ──────────────────────────────────────── */}
        {project.impact && project.impact.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label"><span className="line" />Impact</p>
            <div style={{
              border: "0.5px solid var(--border)",
              background: "var(--surface)",
              borderRadius: "2px",
              padding: "8px 24px",
            }}>
              {project.impact.map((item, i) => (
                <div key={i} className="impact-item">
                  <span style={{ color: "var(--gold)", fontSize: "12px", marginTop: "1px", flexShrink: 0 }}>◈</span>
                  <p style={{ fontSize: "13px", color: "#FCF5E5", lineHeight: 1.7, fontWeight: 300 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TECH STACK ──────────────────────────────────── */}
        <div style={{ marginBottom: "48px" }}>
          <p className="section-label"><span className="line" />Technology Stack</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {project.tech.map((tech) => (
              <span key={tech} className="tag-dim" style={{ color: "#F3E5AB" }}>{tech}</span>
            ))} 
          </div>
        </div>

        {/* ── INTERNSHIP NOTE (Darpan only) ───────────────── */}
        {project.internshipNote && (
          <>
            <hr className="divider" style={{ marginBottom: "40px" }} />
            <div>
              <p className="section-label"><span className="line" />Internship Impact</p>
              <div style={{
                padding: "24px 28px",
                border: "0.5px solid var(--border-accent)",
                background: "rgba(201,169,110,0.03)",
                borderRadius: "2px",
                display: "flex", gap: "16px", alignItems: "flex-start",
              }}>
                <span style={{ color: "var(--gold)", fontSize: "16px", marginTop: "2px", flexShrink: 0 }}>◈</span>
                <p style={{ fontSize: "13px", lineHeight: 1.85, color: "var(--text-muted)", fontWeight: 300 }}>
                  {project.internshipNote}
                </p>
              </div>
            </div>
          </>
        )}

      </section>
    </main>
  );
}