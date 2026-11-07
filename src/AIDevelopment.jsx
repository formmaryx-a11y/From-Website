import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./AIDevelopment.css";

const steps = ["Solution", "Direction", "Capabilities", "Scope", "Your details"];

const solutions = [
  {
    id: "AI agents",
    icon: "✳",
    title: "AI agents",
    desc: "Intelligent assistants that can reason, respond and take action.",
  },
  {
    id: "Business automation",
    icon: "↗",
    title: "Business automation",
    desc: "Automate repetitive workflows and connect your tools.",
  },
  {
    id: "AI chatbot",
    icon: "◌",
    title: "AI chatbot",
    desc: "A conversational experience for customers or your team.",
  },
  {
    id: "Custom AI application",
    icon: "⌘",
    title: "Custom AI application",
    desc: "A purpose-built AI product designed around your idea.",
  },
  {
    id: "Data intelligence",
    icon: "▥",
    title: "Data intelligence",
    desc: "Turn information into useful insights and decisions.",
  },
  {
    id: "AI strategy / consultation",
    icon: "◎",
    title: "AI strategy",
    desc: "Explore where AI could make a meaningful difference.",
  },
  {
    id: "Not sure yet",
    icon: "＋",
    title: "Not sure yet",
    desc: "We can help identify the right solution together.",
  },
];

const directions = [
  {
    id: "Functional and focused",
    title: "Functional",
    desc: "Clear, practical and efficient",
    className: "ai-direction-functional",
  },
  {
    id: "Premium and polished",
    title: "Premium",
    desc: "Refined, considered and elevated",
    className: "ai-direction-premium",
  },
  {
    id: "Experimental and creative",
    title: "Experimental",
    desc: "Exploratory and unconventional",
    className: "ai-direction-experimental",
  },
  {
    id: "Technical and data-led",
    title: "Technical",
    desc: "Structured, analytical and precise",
    className: "ai-direction-technical",
  },
  {
    id: "Simple and approachable",
    title: "Approachable",
    desc: "Human, friendly and accessible",
    className: "ai-direction-approachable",
  },
  {
    id: "Open to ideas",
    title: "Open to ideas",
    desc: "Help me find the right direction",
    className: "ai-direction-open",
  },
];

const capabilities = [
  "Natural language conversations",
  "Website or app integration",
  "Automated workflows",
  "Document and file processing",
  "Knowledge base / custom data",
  "CRM integration",
  "Email and messaging automation",
  "Voice interaction",
  "AI-generated content",
  "Reporting and analytics",
  "Human approval and oversight",
  "Not decided yet",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1 lakh",
  "₹1 lakh – ₹2.5 lakh",
  "₹2.5 lakh+",
  "Let's discuss",
];

const timelines = [
  "As soon as possible",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
];

const initialBrief = {
  solution: "",
  direction: "",
  capabilities: [],
  challenge: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
  details: "",
};

export default function AIDevelopment() {
  const [step, setStep] = useState(0);
  const [brief, setBrief] = useState(initialBrief);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const updateBrief = (field, value) => {
    setBrief((current) => ({ ...current, [field]: value }));
    setError("");
  };

  const toggleCapability = (item) => {
    setBrief((current) => {
      const selected = current.capabilities.filter(
        (value) => value !== "Not decided yet"
      );

      const next = selected.includes(item)
        ? selected.filter((value) => value !== item)
        : item === "Not decided yet"
          ? ["Not decided yet"]
          : [...selected, item];

      return { ...current, capabilities: next };
    });

    setError("");
  };

  const validateStep = () => {
    if (step === 0 && !brief.solution) {
      setError("Choose the AI solution you're interested in.");
      return false;
    }

    if (step === 1 && !brief.direction) {
      setError("Choose a direction to continue.");
      return false;
    }

    if (step === 2 && brief.capabilities.length === 0) {
      setError("Select at least one capability, or choose Not decided yet.");
      return false;
    }

    if (step === 3 && (!brief.budget || !brief.timeline)) {
      setError("Please select both your budget and timeline.");
      return false;
    }

    if (step === 4) {
      if (!brief.name.trim()) {
        setError("Please enter your name.");
        return false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setError("");
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const previousStep = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const submitBrief = (event) => {
    event.preventDefault();

    if (!validateStep()) return;

    try {
      sessionStorage.setItem("formAIProjectBrief", JSON.stringify(brief));
    } catch {
      setError("We couldn't save your brief. Please try again.");
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      window.location.assign("/ai-project-summary");
    }, 2400);
  };

  if (loading) {
    return (
      <main className="ai-loading">
        <div className="ai-loading-mark">F<span>.</span></div>
        <p className="ai-kicker">FORM / INTELLIGENT SYSTEMS</p>
        <h1>
          Giving intelligence
          <br />
          <em>a purpose.</em>
        </h1>
        <div className="ai-loading-track">
          <span />
        </div>
        <p className="ai-loading-caption">Preparing your AI project brief</p>
      </main>
    );
  }

  return (
    <main className="ai-builder">
      <nav className="ai-nav">
        <a href="/" className="ai-logo">
          FORM<span>.</span>
        </a>
        <div className="ai-nav-right">
          <span>INTELLIGENT SYSTEMS</span>
          <a href="/">CLOSE ↗</a>
        </div>
      </nav>

      <div className="ai-shell">
        <aside className="ai-aside">
          <p className="ai-kicker">THINK BEYOND THE ORDINARY</p>
          <h2>
            Make technology
            <br />
            work with
            <br />
            <em>intention.</em>
          </h2>
          <p className="ai-aside-copy">
            Tell us about the challenge. We'll explore how intelligent
            technology can help solve it.
          </p>
          <span className="ai-aside-foot">
            FORM® — CREATIVE TECHNOLOGY STUDIO
          </span>
        </aside>

        <section className="ai-main">
          <div className="ai-progress">
            <div className="ai-progress-top">
              <span>AI PROJECT DISCOVERY</span>
              <span>0{step + 1} / 0{steps.length}</span>
            </div>

            <div className="ai-progress-track">
              <span
                style={{
                  width: `${((step + 1) / steps.length) * 100}%`,
                }}
              />
            </div>

            <div className="ai-step-labels">
              {steps.map((item, index) => (
                <span className={index <= step ? "active" : ""} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={submitBrief}>
            {step === 0 && (
              <div className="ai-step">
                <p className="ai-kicker">01 — THE OPPORTUNITY</p>
                <h1 className="ai-question">
                  What are we <em>imagining?</em>
                </h1>
                <p className="ai-subtitle">
                  What kind of intelligent solution would you like us to
                  explore?
                </p>

                <div className="ai-solution-grid">
                  {solutions.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`ai-solution ${brief.solution === item.id ? "selected" : ""}`}
                      onClick={() => updateBrief("solution", item.id)}
                    >
                      <span className="ai-solution-icon">{item.icon}</span>
                      <span className="ai-solution-copy">
                        <strong>{item.title}</strong>
                        <small>{item.desc}</small>
                      </span>
                      <span className="ai-solution-arrow">↗</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="ai-step">
                <p className="ai-kicker">02 — THE EXPERIENCE</p>
                <h1 className="ai-question">
                  What's the <em>feeling?</em>
                </h1>
                <p className="ai-subtitle">
                  Choose the overall approach that feels closest to your
                  ambition.
                </p>

                <div className="ai-direction-grid">
                  {directions.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`ai-direction ${brief.direction === item.id ? "selected" : ""}`}
                      onClick={() => updateBrief("direction", item.id)}
                    >
                      <div className={`ai-direction-art ${item.className}`}>
                        <span className="ai-art-ring" />
                        <span className="ai-art-line" />
                        <span className="ai-art-block" />
                      </div>
                      <div className="ai-direction-caption">
                        <span>
                          <strong>{item.title}</strong>
                          <small>{item.desc}</small>
                        </span>
                        <b>{brief.direction === item.id ? "✓" : "+"}</b>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="ai-step">
                <p className="ai-kicker">03 — THE CAPABILITIES</p>
                <h1 className="ai-question">
                  What should it <em>make possible?</em>
                </h1>
                <p className="ai-subtitle">
                  Select the capabilities you have in mind. We can work out
                  the technical details together.
                </p>

                <div className="ai-capability-grid">
                  {capabilities.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={`ai-capability ${brief.capabilities.includes(item) ? "selected" : ""}`}
                      onClick={() => toggleCapability(item)}
                    >
                      <span>{brief.capabilities.includes(item) ? "✓" : "+"}</span>
                      {item}
                    </button>
                  ))}
                </div>

                <div className="ai-challenge">
                  <label htmlFor="ai-challenge">
                    WHAT PROBLEM ARE YOU TRYING TO SOLVE?
                  </label>
                  <textarea
                    id="ai-challenge"
                    rows="4"
                    placeholder="Tell us what's taking too much time, what could work better, or what you'd love to make possible..."
                    value={brief.challenge}
                    onChange={(event) =>
                      updateBrief("challenge", event.target.value)
                    }
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="ai-step">
                <p className="ai-kicker">04 — THE PRACTICALS</p>
                <h1 className="ai-question">
                  Let's define the <em>scope.</em>
                </h1>
                <p className="ai-subtitle">
                  A starting estimate helps us understand what kind of
                  solution makes sense. Nothing here is a fixed quote.
                </p>

                <div className="ai-field-group">
                  <label>YOUR ESTIMATED BUDGET</label>
                  <div className="ai-pill-grid">
                    {budgets.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={`ai-pill ${brief.budget === item ? "selected" : ""}`}
                        onClick={() => updateBrief("budget", item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="ai-field-group ai-timeline">
                  <label>WHEN WOULD YOU LIKE TO BEGIN?</label>
                  <div className="ai-pill-grid">
                    {timelines.map((item) => (
                      <button
                        type="button"
                        key={item}
                        className={`ai-pill ${brief.timeline === item ? "selected" : ""}`}
                        onClick={() => updateBrief("timeline", item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="ai-step">
                <p className="ai-kicker">05 — THE CONVERSATION</p>
                <h1 className="ai-question">
                  Let's put a name to <em>the idea.</em>
                </h1>
                <p className="ai-subtitle">
                  Leave us your details and a little more context. We'll take
                  it from here.
                </p>

                <div className="ai-form">
                  <div className="ai-input-row">
                    <div className="ai-input-wrap">
                      <label htmlFor="ai-name">YOUR NAME *</label>
                      <input
                        id="ai-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Name"
                        value={brief.name}
                        onChange={(event) =>
                          updateBrief("name", event.target.value)
                        }
                      />
                    </div>

                    <div className="ai-input-wrap">
                      <label htmlFor="ai-email">EMAIL ADDRESS *</label>
                      <input
                        id="ai-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={brief.email}
                        onChange={(event) =>
                          updateBrief("email", event.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="ai-input-wrap">
                    <label htmlFor="ai-company">BRAND / COMPANY</label>
                    <input
                      id="ai-company"
                      type="text"
                      placeholder="Your company (optional)"
                      value={brief.company}
                      onChange={(event) =>
                        updateBrief("company", event.target.value)
                      }
                    />
                  </div>

                  <div className="ai-input-wrap">
                    <label htmlFor="ai-details">ANYTHING ELSE WE SHOULD KNOW?</label>
                    <textarea
                      id="ai-details"
                      rows="5"
                      placeholder="Your idea, the people it serves, the outcome you're hoping for..."
                      value={brief.details}
                      onChange={(event) =>
                        updateBrief("details", event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}

            {error && <p className="ai-error">{error}</p>}

            <div className="ai-controls">
              <button
                type="button"
                className="ai-back"
                onClick={previousStep}
                disabled={step === 0}
              >
                ← BACK
              </button>

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  className="ai-next"
                  onClick={nextStep}
                >
                  CONTINUE <span>↗</span>
                </button>
              ) : (
                <button type="submit" className="ai-next">
                  CREATE MY BRIEF <span>↗</span>
                </button>
              )}
            </div>
          </form>

          <footer className="ai-footer">
            <span>GOOD TECHNOLOGY STARTS WITH GOOD QUESTIONS.</span>
            <span>FORM® — INTELLIGENT SYSTEMS</span>
          </footer>
        </section>
      </div>
    </main>
  );
}

export function AIProjectSummary() {
  const [brief, setBrief] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("formAIProjectBrief");
      if (saved) setBrief(JSON.parse(saved));
    } catch {
      setBrief(null);
    }
  }, []);

  const handleSendEmailJS = async () => {
    if (!brief) return;

    setIsSending(true);
    setSendError("");

    const payload = {
      from_name: brief.name,
      from_email: brief.email,
      company: brief.company || "Not provided",
      service: `AI Development — ${brief.solution}`,
      budget: brief.budget,
      timeline: brief.timeline,
      message: [
        `AI Solution: ${brief.solution}`,
        `Experience Direction: ${brief.direction}`,
        `Capabilities: ${brief.capabilities.join(", ")}`,
        `Business Challenge: ${brief.challenge || "Not provided"}`,
        `Additional Details: ${brief.details || "Not provided"}`,
      ].join("\n"),
    };

    try {
      await emailjs.send(
        "service_xkh2dhd",
        "template_0pcpt88",
        payload,
        "BnuA4b7eChP64IPCY"
      );
      setSentSuccess(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError("Failed to send brief. Please try again or contact us directly.");
    } finally {
      setIsSending(false);
    }
  };

  if (!brief) {
    return (
      <main className="ai-summary-shell">
        <nav className="ai-nav">
          <a href="/" className="ai-logo">FORM<span>.</span></a>
        </nav>
        <div className="ai-summary-empty">
          <p className="ai-kicker">NO PROJECT BRIEF FOUND</p>
          <h1>
            Every idea
            <br />
            starts <em>somewhere.</em>
          </h1>
          <a className="ai-summary-primary" href="/services/ai-development">
            START A PROJECT ↗
          </a>
        </div>
      </main>
    );
  }

  const rows = [
    ["AI solution", brief.solution],
    ["Experience direction", brief.direction],
    ["Capabilities", brief.capabilities.join(", ")],
    ["Business challenge", brief.challenge || "Not provided"],
    ["Estimated budget", brief.budget],
    ["Timeline", brief.timeline],
    ["Name", brief.name],
    ["Email", brief.email],
    ["Company", brief.company || "Not provided"],
    ["Additional details", brief.details || "Not provided"],
  ];

  return (
    <main className="ai-summary-shell">
      <nav className="ai-nav">
        <a href="/" className="ai-logo">
          FORM<span>.</span>
        </a>
        <span className="ai-nav-right">AI PROJECT / COMPLETE</span>
      </nav>

      <section className="ai-summary-content">
        <div className="ai-summary-success">
          <span>01 — PROJECT BRIEF</span>
          <b>✓</b>
        </div>

        <div className="ai-summary-intro">
          <p className="ai-kicker">A NEW POSSIBILITY</p>
          <h1>
            Intelligence
            <br />
            with <em>intention.</em>
          </h1>
          <p>
            Thanks, {brief.name}. Your project brief is ready. Here's
            everything you've shared with our studio.
          </p>
        </div>

        <div className="ai-summary-card">
          <div className="ai-summary-card-head">
            <span>PROJECT OVERVIEW</span>
            <span>FORM® / AI 001</span>
          </div>

          {rows.map(([label, value]) => (
            <div className="ai-summary-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <div className="ai-summary-contact">
          <p className="ai-kicker">THE NEXT STEP</p>
          <h2>
            Let's make it <em>intelligent.</em>
          </h2>
          <p>
            Send your project brief directly to FORM and begin the conversation.
          </p>

          <div className="ai-summary-actions">
            {sentSuccess ? (
              <div className="ai-success-message" style={{ padding: "12px 0", fontWeight: 500 }}>
                ✓ Brief sent successfully! We'll be in touch soon.
              </div>
            ) : (
              <button
                type="button"
                onClick={handleSendEmailJS}
                disabled={isSending}
                className="ai-summary-primary"
                style={{ cursor: isSending ? "wait" : "pointer", border: "none" }}
              >
                {isSending ? "SENDING BRIEF..." : "SEND PROJECT BRIEF ↗"}
              </button>
            )}

            <a href="/" className="ai-summary-secondary">
              BACK TO FORM
            </a>
          </div>

          {sendError && <p className="ai-error" style={{ marginTop: "12px" }}>{sendError}</p>}

          <p className="ai-summary-note">
            This sends your completed brief straight to our studio inbox via EmailJS.
          </p>
        </div>
      </section>

      <footer className="ai-footer ai-summary-footer">
        <span>FORM® — CREATIVE TECHNOLOGY STUDIO</span>
        <a href="/services/ai-development">START ANOTHER PROJECT ↗</a>
      </footer>
    </main>
  );
}