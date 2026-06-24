import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────
//  DATA — edit these arrays to update the page. No JSX changes needed.
// ─────────────────────────────────────────────────────────────────

const education = [
  {
    institution: "KIIT University",
    degree: "B.Tech — Computer Science & Engineering",
    period: "2023 – Present",
    detail: "CGPA: 9.25",
  },
  {
    institution: "Range School",
    degree: "Class XII — Science (PCM)",
    period: "2020 – 2022",
    detail: "Percentage: 85%",
  },
  {
    institution: "St. Vincent Convent Sr. Sec School",
    degree: "Class X",
    period: "2008 – 2020",
    detail: "Percentage: 90%",
  },
];

const experience = [
  {
    role: "Project Trainee (AI/ML)",
    company: "PXE, DRDO",
    period: "2024",
    description:
      "Built Project Darpan — an AI-powered visual reasoning platform combining Computer Vision and Vision Language Models.",
  },
];

const skills = [
  "NLP", "Machine Learning", "Deep Learning", "Gen AI", "PyTorch", "FastAPI", "SQL", "Git", "UiPath",
];

const projects = [
  {
    title: "HeyShift - Navigation Voice Assistant",
    subtitle: "Intelligent Voice Assistant System",
    description:
      "An AI-powered voice assistant for drivers that combines navigation, traffic analysis, weather intelligence, conversational memory, and real-time voice interaction through a hands-free conversational interface.",
    tags: ["Intent Detection", "Voice Assistant", "Generative AI", "NLP"],
    link: "",
  },
  {
    title: "Project Darpan",
    subtitle: "Deep Analysis via Reflective Prompt-Based Attention Network",
    description:
      "An AI-powered visual reasoning system capable of understanding images and video streams using Vision Language Models and Computer Vision.",
    tags: ["OpenCV", "Ollama", "Flask", "LLaVA", "Computer Vision"],
    link: "",
  },
];

// ─────────────────────────────────────────────────────────────────
//  REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "10px",
        letterSpacing: "0.2em",
        color: "#acac7f",
        textTransform: "uppercase",
        fontWeight: 400,
        marginBottom: "36px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: 40,
          height: 1,
          background: "var(--gold)",
          flexShrink: 0,
        }}
      />
      {children}
    </p>
  );
}

function TimelineItem({
  title,
  sub,
  period,
  detail,
  description,
  isLast,
}: {
  title: string;
  sub: string;
  period: string;
  detail?: string;
  description?: string;
  isLast: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Timeline spine */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
          width: 14,
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            border: "1px solid var(--gold)",
            background: "var(--gold)",
            marginTop: 5,
            flexShrink: 0,
          }}
        />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: 1,
              background: "var(--border)",
              marginTop: 8,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : 32 }}>
        <p
          style={{
            fontSize: "11px",
            color: "var(--gold)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 5,
          }}
        >
          {period}
        </p>
        <h3
          style={{
            fontSize: "17px",
            fontWeight: 400,
            color: "#f0ece3",
            fontFamily: "'DM Serif Display', Georgia, serif",
            marginBottom: 3,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: detail || description ? 4 : 0 }}>
          {sub}
        </p>
        {detail && (
          <p style={{ fontSize: "11px", color: "var(--text-dim)", marginBottom: description ? 6 : 0 }}>
            {detail}
          </p>
        )}
        {description && (
          <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.75, marginTop: 6 }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
//  PAGE
// ─────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#e8e4dc",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        overflowX: "hidden",
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

        * { box-sizing: border-box; }

        .tag-pill {
          display: inline-block;
          padding: 4px 10px;
          border: 0.5px solid var(--border-accent);
          border-radius: 100px;
          font-size: 10px;
          letter-spacing: 0.07em;
          color: var(--gold);
          background: rgba(201,169,110,0.05);
          text-transform: uppercase;
        }

        .skill-item {
          padding: 8px 16px;
          border: 0.5px solid var(--border);
          border-radius: 4px;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          text-transform: uppercase;
          transition: border-color 0.2s, color 0.2s;
          background: var(--surface);
          cursor: default;
        }
        .skill-item:hover {
          border-color: var(--border-accent);
          color: var(--gold);
        }

        .project-card {
          background: var(--surface);
          border: 0.5px solid var(--border);
          border-radius: 2px;
          padding: 28px 28px 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .project-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px;
          height: 0;
          background: linear-gradient(to bottom, var(--gold), transparent);
          transition: height 0.4s ease;
        }
        .project-card:hover { border-color: rgba(201,169,110,0.2); }
        .project-card:hover::before { height: 100%; }

        .divider { border: none; border-top: 0.5px solid var(--border); margin: 0; }

        /* ── Two-column grid ── */
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
        }

        /* ── Project grid ── */
        .project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* ── Profile Layout ── */
        /* DESKTOP: Photo takes left column, Name/Desc stack on right */
        .profile-wrapper {
          display: grid;
          grid-template-columns: 30% 1fr;
          grid-template-areas: 
            "photo name"
            "photo desc";
          column-gap: 64px;
          row-gap: 16px;
          align-items: start;
        }
        .profile-photo {
          grid-area: photo;
          max-width: 400px;
          width: 100%;
          position: relative;
        }
        .profile-name {
          grid-area: name;
        }
        .profile-desc {
          grid-area: desc;
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .profile-wrapper {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            align-items: flex-start;
          }
          .profile-photo {
            flex: 0 0 35%;
            max-width: 150px;
            width: 100%;
          }
          .profile-name {
            flex: 1;
            min-width: 0;
          }
          .profile-desc {
            width: 100%;
          }
          .profile-desc hr {
            margin-bottom: 20px !important;
          }
          .photo-frame-inner {
            aspect-ratio: 3/4 !important;
            max-height: 260px !important;
          }
          .two-col {
            grid-template-columns: 1fr !important;
            gap: 44px !important;
          }
          .project-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card {
            padding: 24px 20px !important;
          }
        }

        /* ── TABLET ── */
        @media (max-width: 900px) and (min-width: 641px) {
          .profile-wrapper {
            column-gap: 40px;
            grid-template-columns: 35% 1fr;
          }
          .two-col {
            gap: 36px;
          }
        }
      `}</style>

      {/* ── PROFILE ──────────────────────────────────────── */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(64px, 10vw, 140px) clamp(20px, 5vw, 48px) clamp(56px, 8vw, 96px)" }}>
          <SectionLabel>Profile</SectionLabel>

          <div className="profile-wrapper">
            {/* 1. Photo (Left on all screens) */}
            <div className="profile-photo">
              <div style={{ position: "absolute", top: -12, left: -12, width: 32, height: 32, borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)", zIndex: 2 }} />
              <div style={{ position: "absolute", bottom: -12, right: -12, width: 32, height: 32, borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)", zIndex: 2 }} />
              <div
                className="photo-frame-inner"
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                  maxHeight: 400,
                  borderRadius: "2px",
                  overflow: "hidden",
                  border: "0.5px solid var(--border)",
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Sankalpa Giri"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 45vw, 400px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.4))" }} />
              </div>
            </div>

            {/* 2. Name & Designation (Top Right on Desktop / Top Right on Mobile) */}
            <div className="profile-name">
              <h1
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(38px, 5vw, 68px)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: "6px",
                  color: "#f0ece3",
                }}
              >
                Sankalpa{" "}
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Giri</em>
              </h1>

              <p style={{ fontSize: "11px", letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 400 }}>
                AI / ML Developer
              </p>
            </div>

            {/* 3. Description (Bottom Right on Desktop / Full-width bottom on Mobile) */}
            <div className="profile-desc">
              <hr className="divider" style={{ marginBottom: "28px" }} />
              <p style={{ fontSize: "14px", lineHeight: 1.85, color: "#E2DFD2", fontWeight: 300 }}>
                Computer Science student at KIIT University building intelligent
                systems at the intersection of Machine Learning, Computer Vision,
                and modern web frameworks. Passionate about turning research into
                real-world impact.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── EDUCATION & EXPERIENCE ────────────────────── */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px) clamp(56px, 8vw, 88px)" }}>
          <div className="two-col">

            <div>
              <SectionLabel>Education</SectionLabel>
              {education.map((item, i) => (
                <TimelineItem
                  key={i}
                  title={item.institution}
                  sub={item.degree}
                  period={item.period}
                  detail={item.detail}
                  isLast={i === education.length - 1}
                />
              ))}
            </div>

            <div>
              <SectionLabel>Experience</SectionLabel>
              {experience.map((item, i) => (
                <TimelineItem
                  key={i}
                  title={item.role}
                  sub={item.company}
                  period={item.period}
                  description={item.description}
                  isLast={i === experience.length - 1}
                />
              ))}
            </div>

          </div>
        </section>
      </FadeIn>

      {/* ── SKILLS ────────────────────────────────────── */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px) clamp(56px, 8vw, 88px)" }}>
          <SectionLabel>Capabilities</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skills.map((skill) => (
              <div key={skill} className="skill-item">{skill}</div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── PROJECTS ──────────────────────────────────── */}
      <FadeIn>
        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 48px) clamp(56px, 8vw, 88px)" }}>
          <SectionLabel>Selected Work</SectionLabel>
          <div className="project-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                {/* <p style={{ fontSize: "10px", letterSpacing: "0.2em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "20px" }}>
                  {String(i + 1).padStart(2, "0")}
                </p> */}
                <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "20px", fontWeight: 400, color: "#f0ece3", marginBottom: "5px", lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "10px", color: "var(--gold)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "18px" }}>
                  {p.subtitle}
                </p>
                <hr className="divider" style={{ marginBottom: "16px" }} />
                <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "22px" }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block", marginTop: "18px", fontSize: "11px", color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderBottom: "0.5px solid var(--gold-dim)" }}
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}