"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, Send, Briefcase, Code, Lightbulb } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  { label: "Email", value: "sankalpagiri210@gmail.com", href: "mailto:sankalpagiri210@gmail.com", icon: <Mail size={15} /> },
  { label: "GitHub", value: "Sankalpa-Giri", href: "https://github.com/Sankalpa-Giri", icon: <FaGithub size={15} /> },
  { label: "LinkedIn", value: "sankalpa-giri", href: "https://linkedin.com/in/sankalpa-giri", icon: <FaLinkedin size={15} /> },
];

const openTo = [
  { icon: <Briefcase size={13} />, text: "Internship & full-time opportunities" },
  { icon: <Code size={13} />, text: "Freelance & open source collaboration" },
  { icon: <Lightbulb size={13} />, text: "Technical discussions & mentorship" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusOk, setStatusOk] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setErrors({});
    setLoading(true);
    setStatusMessage("");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...form, time: new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" }) },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
      setStatusOk(true);
      setStatusMessage("Message sent successfully. I'll be in touch soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatusOk(false);
      setStatusMessage("Failed to send. Please try again or email me directly.");
    }
    setLoading(false);
  };

  return (
    <main
      style={{
        height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
        background: "#080808",
        color: "#e8e4dc",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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

        .contact-input {
          width: 100%;
          padding: 9px 14px;
          background: #080808;
          border: 0.5px solid var(--border);
          color: #e8e4dc;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          border-radius: 2px;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .contact-input::placeholder { color: var(--text-dim); }
        .contact-input:focus { border-color: var(--border-accent); }
        .contact-input.error { border-color: rgba(180, 60, 60, 0.6); }

        .contact-label {
          display: block;
          font-size: 9px;
          letter-spacing: 0.18em;
          color: var(--text-dim);
          text-transform: uppercase;
          margin-bottom: 6px;
          font-weight: 400;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: rgba(201,169,110,0.06);
          border: 0.5px solid var(--gold-dim);
          color: var(--gold);
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s;
          border-radius: 2px;
        }
        .submit-btn:hover:not(:disabled) { background: rgba(201,169,110,0.12); border-color: var(--gold); }
        .submit-btn:disabled { opacity: 0.45; cursor: not-allowed; }

        .contact-link-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border: 0.5px solid var(--border);
          background: var(--surface);
          text-decoration: none;
          color: var(--text-muted);
          transition: border-color 0.2s, color 0.2s;
          border-radius: 2px;
        }
        .contact-link-row:hover { border-color: var(--border-accent); color: var(--gold); }

        .divider { border: none; border-top: 0.5px solid var(--border); }

        @media (max-width: 768px) {
          .contact-section { overflow-y: auto !important; height: 100vh !important; padding: 72px 24px 48px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .name-email-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        className="contact-section"
        style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", padding: "0 48px" }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "9px", letterSpacing: "0.22em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ display: "inline-block", width: 36, height: 1, background: "var(--gold)", flexShrink: 0 }} />
            Contact
          </p>
          <h1
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#f0ece3",
              marginBottom: "10px",
            }}
          >
            Get in{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Touch</em>
          </h1>
          <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text-muted)", fontWeight: 300, maxWidth: "480px" }}>
            Have a project, internship opportunity, or just want to connect?
            I'm always open to interesting conversations and collaborations.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div
          className="contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "56px", alignItems: "start" }}
        >

          {/* ── LEFT: Form ── */}
          <div>
            <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "18px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ display: "inline-block", width: 36, height: 1, background: "var(--border)", flexShrink: 0 }} />
              Send a message
            </p>

            {statusMessage && (
              <div style={{
                marginBottom: "16px", padding: "10px 16px",
                border: `0.5px solid ${statusOk ? "rgba(100,180,100,0.3)" : "rgba(180,60,60,0.3)"}`,
                background: statusOk ? "rgba(100,180,100,0.05)" : "rgba(180,60,60,0.05)",
                fontSize: "12px", color: statusOk ? "#7dbf7d" : "#bf7d7d",
                borderRadius: "2px", display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span>{statusOk ? "✓" : "⚠"}</span>
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="name-email-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                <div>
                  <label className="contact-label">Full name</label>
                  <input type="text" placeholder="Jane Smith" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`contact-input${errors.name ? " error" : ""}`} />
                  {errors.name && <p style={{ fontSize: "10px", color: "#bf7d7d", marginTop: 4 }}>{errors.name}</p>}
                </div>
                <div>
                  <label className="contact-label">Your email</label>
                  <input type="email" placeholder="jane@example.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`contact-input${errors.email ? " error" : ""}`} />
                  {errors.email && <p style={{ fontSize: "10px", color: "#bf7d7d", marginTop: 4 }}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="contact-label">Subject</label>
                <input type="text" placeholder="Internship opportunity · Project · Just saying hi" value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`contact-input${errors.subject ? " error" : ""}`} />
                {errors.subject && <p style={{ fontSize: "10px", color: "#bf7d7d", marginTop: 4 }}>{errors.subject}</p>}
              </div>

              <div>
                <label className="contact-label">Message</label>
                <textarea rows={5} maxLength={1000}
                  placeholder="Tell me about your project or what you have in mind…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`contact-input${errors.message ? " error" : ""}`}
                  style={{ resize: "none" }} />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                  {errors.message
                    ? <p style={{ fontSize: "10px", color: "#bf7d7d" }}>{errors.message}</p>
                    : <span />}
                  <span style={{ fontSize: "10px", color: "var(--text-dim)" }}>{form.message.length} / 1000</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "18px", flexWrap: "wrap" }}>
                <button type="submit" disabled={loading} className="submit-btn">
                  <Send size={12} />
                  {loading ? "Sending…" : "Send Message"}
                </button>
                <p style={{ fontSize: "10px", color: "var(--text-dim)", lineHeight: 1.6 }}>
                  Your information is kept private and will never be shared.
                </p>
              </div>
            </form>
          </div>

          {/* ── RIGHT: Info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            <div>
              <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ display: "inline-block", width: 36, height: 1, background: "var(--border)", flexShrink: 0 }} />
                Direct channels
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-row">
                    <span style={{ color: "var(--gold-dim)", flexShrink: 0 }}>{link.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 2 }}>{link.label}</p>
                      <p style={{ fontSize: "12px", color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{link.value}</p>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-dim)", flexShrink: 0 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <hr className="divider" />

            <div>
              <p style={{ fontSize: "9px", letterSpacing: "0.2em", color: "var(--text-dim)", textTransform: "uppercase", marginBottom: "14px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ display: "inline-block", width: 36, height: 1, background: "var(--border)", flexShrink: 0 }} />
                Open to
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {openTo.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ color: "var(--gold-dim)", marginTop: 1, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <hr className="divider" />

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6dbf6d", flexShrink: 0, boxShadow: "0 0 8px rgba(109,191,109,0.4)" }} />
              <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>
                Available for new opportunities · replies within 24–48 hrs
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}