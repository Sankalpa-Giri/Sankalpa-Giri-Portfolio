"use client";

import { useState } from "react";
import { ExternalLink, BadgeCheck, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "IBM Machine Learning",
    issuer: "IBM",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    badgeImage: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    issueDate: "Jun 2026",
    verifyUrl: "https://coursera.org/verify/professional-cert/FJSW2Q1CI0IG",
    skills: ["Machine Learning", "Supervised Learning", "Unsupervised Learning", "Deep Learning",
      "Reinforcement Learning", "Time Series Analysis", "Exploratory Data Analysis (EDA)", "Scikit-learn"],
  },
  {
    id: 2,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/ccna-introduction-to-networks.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/a8f2d450-4100-4e52-8d94-cccfb9498476/public_url",
    skills: ["IP Connectivity", "IP Services", "IP Subnetting", "IPv4 And IPv6 Addressing", "Network Fundamentals", "Security Fundamentals", "Switching"],
  },
  {
    id: 3,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/ccna-switching-routing-and-wireless-essentials.1.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/fa708443-4386-49cd-9fa8-a48aec8beddf/public_url",
    skills: ["Access Connectivity", "Access Security", "First-hop Redundancy", "High Availability", "IP Services", "Routing", "Switching Protocols", "Wireless LAN Controllers"],
  },
  {
    id: 4,
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/ccna-enterprise-networking-security-and-automation.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/8d9302d4-5bca-4c4f-90bd-c0aa0ab14458/public_url",
    skills: ["Dynamic Routing", "Network Address Translation (NAT)", "Network Automation Basics", "Quality Of Service (QoS)", "Security Threat Mitigation", "Software Driven Networks"],
  },
  {
    id: 5,
    title: "Python Essentials 1",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/python-essentials-1.1.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/e84c7bd7-318a-46af-b490-f0b60ebc0dc9/public_url",
    skills: ["Algorithmic Thinking", "Analytical Thinking", "Basic Python Programming", "Best Practices in Programming", "Design, Develop, and Debug Scripts", "Procedural Programming"],
  },
  {
    id: 6,
    title: "Python Essentials 2",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/python-essentials-2.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/761c3796-4cca-4072-8489-d8b4c8fa6806/public_url",
    skills: ["Classes", "Exceptions", "Generators", "Inheritance", "Methods", "Modules", "Object Oriented Programming", "Objects", "Packages", "PIP", "Polymorphism", "Properties"],
  },
  {
    id: 7,
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/introduction-to-modern-ai.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/b5ae9592-3ae6-440e-990c-4b922e8cf33f/public_url",
    skills: ["AI Learning", "Machine Learning", "Machine Translation", "Prompting Tips"],
  },
  {
    id: 8,
    title: "Introduction to Data Science",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/introduction-to-data-science.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/fd8617d4-a4e5-443a-bedc-77fc8e400952/public_url",
    skills: ["Data Analysis", "Data Collection", "Data Validation"],
  },
  {
    id: 9,
    title: "Apply AI: Update Your Resume",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/apply-ai-update-your-resume.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/3acf3cc9-a77f-4b7f-8683-ee56ceb70639/public_url",
    skills: ["Resume Tailoring", "Skills Inventory", "ATS Formatting", "Content Extraction"],
  },
  {
    id: 10,
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/3840px-Cisco_logo_blue_2016.svg.png",
    badgeImage: "/badges/apply-ai-analyze-customer-reviews.png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/230985cc-5cc8-48a7-b0ba-271f0a52fcba/public_url",
    skills: ["LLM Prompting", "Spreadsheet Formulas", "Tabular Data", "Thematic Analysis", "Tool Selection"],
  },
  {
    id: 11,
    title: "SAP Certified - Backend Developer",
    issuer: "SAP",
    issuerLogo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    badgeImage: "/badges/sap-certified-backend-developer-sap-cloud-applicati (1).png",
    issueDate: "Jun 2026",
    verifyUrl: "https://www.credly.com/badges/4c271f9a-0187-4a19-93fc-162b73a1aa91/public_url",
    skills: ["Application Development", "Application Security", "CAP Model"],
  },
];

function CertRow({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <article className="cert-row" style={{ position: "relative", background: "var(--surface)", border: "0.5px solid var(--border)", borderRadius: "2px", overflow: "hidden", transition: "border-color 0.3s" }}>

      {/* Left accent bar */}
      <div className="cert-accent" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, height: 0, background: "linear-gradient(to bottom, transparent, var(--gold), transparent)", transition: "height 0.4s ease" }} />

      {/* Main row */}
      <div className="cert-main-row">

        {/* Index — hidden on mobile */}
        <span className="cert-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Badge */}
        <div className="cert-badge">
          {!imgError ? (
            <img
              src={cert.badgeImage}
              alt={`${cert.title} badge`}
              style={{ width: 30, height: 30, objectFit: "contain" }}
              onError={() => setImgError(true)}
            />
          ) : (
            <BadgeCheck size={16} style={{ color: "var(--text-dim)" }} />
          )}
        </div>

        {/* Title + issuer */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
            <img
              src={cert.issuerLogo}
              alt={cert.issuer}
              style={{ height: 11, width: "auto", maxWidth: 48, objectFit: "contain", opacity: 0.4, flexShrink: 0 }}
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.style.display = "none";
                const sibling = el.nextSibling as HTMLElement | null;
                if (sibling) sibling.style.display = "inline";
              }}
            />
            <span style={{ fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.1em", display: "none" }}>
              {cert.issuer}
            </span>
          </div>
          <h3 className="cert-title">
            {cert.title}
          </h3>
        </div>

        {/* Date — hidden on mobile */}
        <div className="cert-date">
          <Calendar size={10} />
          <span>{cert.issueDate}</span>
        </div>

        {/* Verified pill — hidden on mobile */}
        <div className="cert-verified">
          <BadgeCheck size={10} style={{ color: "var(--gold)" }} />
          <span style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>
            Verified
          </span>
        </div>

        {/* Actions */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 6 }}>
          {/* Desktop: text + icon / Mobile: icon only */}
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="cert-btn"
            style={{ display: "flex", alignItems: "center", gap: 5, border: "0.5px solid var(--border)", borderRadius: "2px", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", transition: "border-color 0.2s, color 0.2s" }}
          >
            <span className="cert-verify-label">Verify</span>
            <ExternalLink size={10} />
          </a>

          <button
            onClick={() => setExpanded(!expanded)}
            className="cert-btn cert-expand-btn"
            style={{ border: "0.5px solid var(--border)", borderRadius: "2px", background: "transparent", color: "var(--text-dim)", cursor: "pointer", display: "flex", alignItems: "center", transition: "border-color 0.2s, color 0.2s" }}
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
        </div>
      </div>

      {/* Expanded skills panel */}
      <div style={{ overflow: "hidden", maxHeight: expanded ? 200 : 0, opacity: expanded ? 1 : 0, transition: "max-height 0.35s ease, opacity 0.25s ease" }}>
        <div style={{ padding: "14px 16px 18px", borderTop: "0.5px solid var(--border)" }}>
          {/* Show date + verified on mobile inside expanded panel */}
          <div className="cert-mobile-meta">
            <div style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--text-muted)", fontSize: 11 }}>
              <Calendar size={10} />
              <span>{cert.issueDate}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "2px 8px", border: "0.5px solid var(--border-accent)", borderRadius: 100, background: "rgba(201,169,110,0.05)" }}>
              <BadgeCheck size={9} style={{ color: "var(--gold)" }} />
              <span style={{ fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>Verified</span>
            </div>
          </div>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 10 }}>
            Skills Validated
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {cert.skills.map((skill) => (
              <span key={skill} style={{ padding: "3px 10px", border: "0.5px solid var(--border-accent)", borderRadius: 100, fontSize: 10, letterSpacing: "0.05em", color: "var(--gold)", background: "rgba(201,169,110,0.05)", textTransform: "uppercase" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CertificationsPage() {
  const uniqueIssuers = [...new Set(certifications.map((c) => c.issuer))].length;
  const totalSkills = certifications.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <main style={{ minHeight: "100vh", background: "#080808", color: "#e8e4dc", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", overflowX: "hidden" }}>
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

        /* ── Row hover ── */
        .cert-row:hover { border-color: rgba(201,169,110,0.2) !important; }
        .cert-row:hover .cert-accent { height: 100% !important; }
        .cert-btn:hover { border-color: var(--border-accent) !important; color: var(--gold) !important; }

        /* ── Main row layout ── */
        .cert-main-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
        }

        /* ── Badge box ── */
        .cert-badge {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 2px;
          border: 0.5px solid var(--border);
          background: transparent;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Title: wraps on mobile, truncates on desktop ── */
        .cert-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 15px;
          font-weight: 400;
          color: #f0ece3;
          line-height: 1.25;
          word-break: break-word;
        }

        /* ── Verify button ── */
        .cert-btn { padding: 5px 10px; }
        .cert-expand-btn { padding: 5px 7px; }

        /* ── Elements shown/hidden by screen size ── */
        .cert-index   { font-size: 10px; letter-spacing: 0.15em; color: var(--text-dim); width: 18px; text-align: right; flex-shrink: 0; }
        .cert-date    { display: flex; align-items: center; gap: 5px; color: var(--text-muted); font-size: 11px; flex-shrink: 0; }
        .cert-verified { flex-shrink: 0; display: flex; align-items: center; gap: 5px; padding: 3px 10px; border: 0.5px solid var(--border-accent); border-radius: 100px; background: rgba(201,169,110,0.05); }
        .cert-verify-label { display: inline; }

        /* Mobile meta row inside expanded panel — hidden on desktop */
        .cert-mobile-meta { display: none; }

        /* ── Stats divider ── */
        .stat-divider { width: 0.5px; height: 28px; background: var(--border); }

        /* ════════════════════════════════
           MOBILE  ≤ 640px
        ════════════════════════════════ */
        @media (max-width: 640px) {
          /* Section padding */
          section { padding: 100px 20px 80px !important; }

          /* Hide index, date, verified pill on the main row */
          .cert-index    { display: none; }
          .cert-date     { display: none; }
          .cert-verified { display: none; }

          /* Collapse "Verify" label — icon only */
          .cert-verify-label { display: none; }
          .cert-btn { padding: 6px 8px; }

          /* Title wraps freely */
          .cert-title { font-size: 14px; }

          /* Badge slightly smaller */
          .cert-badge { width: 36px; height: 36px; }

          /* Show date + verified inside expanded panel on mobile */
          .cert-mobile-meta {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }

          /* Stats row wraps */
          .stats-row { flex-wrap: wrap; gap: 20px !important; }
        }

        /* ════════════════════════════════
           TABLET  641px – 900px
        ════════════════════════════════ */
        @media (min-width: 641px) and (max-width: 900px) {
          section { padding: 120px 32px 100px !important; }
          .cert-verified { display: none; }
          .cert-title { font-size: 15px; }
        }
      `}</style>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "140px 48px 120px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 10, letterSpacing: "0.2em", color: "var(--text-dim)", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--gold)", flexShrink: 0 }} />
            Credentials
          </p>

          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#f0ece3", marginBottom: 14 }}>
            Certifications
          </h1>

          <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480, fontWeight: 300 }}>
            Industry-recognized credentials in AI, machine learning, and data science — each independently verifiable.
          </p>

          {/* Stats */}
          <div className="stats-row" style={{ display: "flex", alignItems: "center", gap: 32, marginTop: 36, paddingTop: 28, borderTop: "0.5px solid var(--border)" }}>
            {[
              { value: certifications.length, label: "Certifications" },
              { value: uniqueIssuers, label: "Issuers" },
              { value: `${totalSkills}+`, label: "Skills Validated" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 32 }}>
                {i > 0 && <div className="stat-divider" />}
                <div>
                  <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 26, fontWeight: 400, color: "#f0ece3", lineHeight: 1, marginBottom: 4 }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cert list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {certifications.map((cert, i) => (
            <CertRow key={cert.id} cert={cert} index={i} />
          ))}
        </div>

      </section>
    </main>
  );
}