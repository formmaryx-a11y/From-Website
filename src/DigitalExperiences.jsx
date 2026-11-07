import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./DigitalExperiences.css";

const steps = ["Website", "Visual direction", "Features", "Scope", "Your details"];

const websiteTypes = [
  { id: "Business website", icon: "◫", title: "Business website", desc: "A refined digital home for your brand or company." },
  { id: "E-commerce", icon: "◇", title: "E-commerce", desc: "An online store built to turn visitors into customers." },
  { id: "Portfolio", icon: "▧", title: "Portfolio", desc: "A distinctive space to showcase your work." },
  { id: "Landing page", icon: "↗", title: "Landing page", desc: "One focused page built around a clear goal." },
  { id: "Web application", icon: "⌘", title: "Web application", desc: "A custom digital product with interactive functionality." },
  { id: "Not sure yet", icon: "＋", title: "Not sure yet", desc: "Let's figure out the right direction together." },
];

const styles = [
  { id: "Minimal", title: "Minimal", desc: "Quiet, clean, intentional", className: "style-minimal" },
  { id: "Editorial", title: "Editorial", desc: "Typography-led and expressive", className: "style-editorial" },
  { id: "Luxury", title: "Luxury", desc: "Elegant, elevated, timeless", className: "style-luxury" },
  { id: "Experimental", title: "Experimental", desc: "Unexpected and distinctive", className: "style-experimental" },
  { id: "Futuristic", title: "Futuristic", desc: "Technology-led and immersive", className: "style-futuristic" },
  { id: "Open to ideas", title: "Open to ideas", desc: "Help me discover a direction", className: "style-unsure" },
];

const features = [
  "Responsive design",
  "Animations & interactions",
  "CMS / easy content editing",
  "E-commerce & payments",
  "User accounts & login",
  "Booking & scheduling",
  "AI-powered features",
  "Dashboard & analytics",
  "Search & filtering",
  "Third-party integrations",
  "SEO setup",
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
  websiteType: "",
  visualStyle: "",
  features: [],
  budget: "",
  timeline: "",
  name: "",
  email: "",
  company: "",
  description: "",
};

export default function DigitalExperiences() {
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

  const toggleFeature = (feature) => {
    setBrief((current) => {
      const selected = current.features.filter(
        (item) => item !== "Not decided yet"
      );

      const next = selected.includes(feature)
        ? selected.filter((item) => item !== feature)
        : feature === "Not decided yet"
          ? ["Not decided yet"]
          : [...selected, feature];

      return { ...current, features: next };
    });
    setError("");
  };

  const validateStep = () => {
    if (step === 0 && !brief.websiteType) {
      setError("Choose the type of website you're looking for.");
      return false;
    }

    if (step === 1 && !brief.visualStyle) {
      setError("Choose a visual direction to continue.");
      return false;
    }

    if (step === 2 && brief.features.length === 0) {
      setError("Choose at least one feature, or select “Not decided yet”.");
      return false;
    }

    if (step === 3 && (!brief.budget || !brief.timeline)) {
      setError("Please select both a budget and a timeline.");
      return false;
    }

    if (step === 4) {
      if (!brief.name.trim()) {
        setError("Please enter your name.");
        return false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email)) {
        setError("Enter a valid email address.");
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

    sessionStorage.setItem("formProjectBrief", JSON.stringify(brief));
    setLoading(true);

    window.setTimeout(() => {
      window.location.assign("/project-summary");
    }, 2200);
  };

  if (loading) {
    return (
      <main className="builder-loading">
        <div className="loading-mark">F.</div>
        <p className="loading-kicker">FORM / DIGITAL EXPERIENCES</p>
        <h1>Putting your vision<br />into <em>perspective.</em></h1>
        <div className="loading-track">
          <span />
        </div>
        <p className="loading-caption">Preparing your project brief</p>
      </main>
    );
  }

  return (
    <main className="digital-builder">
      <nav className="builder-nav">
        <a className="builder-logo" href="/">FORM<span>.</span></a>
        <div className="builder-nav-right">
          <span>PROJECT ENQUIRY</span>
          <a href="/">CLOSE <span>↗</span></a>
        </div>
      </nav>

      <div className="builder-shell">
        <aside className="builder-side-note">
          <span className="builder-kicker">A GOOD PLACE TO START</span>
          <p>
            Every great digital experience begins with a
            <em> conversation.</em>
          </p>
          <span className="builder-side-bottom">FORM® — INDEPENDENT DIGITAL STUDIO</span>
        </aside>

        <section className="builder-main">
          <div className="builder-progress">
            <div className="builder-progress-top">
              <span>PROJECT DISCOVERY</span>
              <span>0{step + 1} / 0{steps.length}</span>
            </div>

            <div className="builder-progress-track">
              <div
                className="builder-progress-fill"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>

            <div className="builder-step-labels">
              {steps.map((label, index) => (
                <span key={label} className={index <= step ? "active" : ""}>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={submitBrief}>
            {step === 0 && (
              <div className="builder-step">
                <p className="builder-kicker">01 — THE FOUNDATION</p>
                <h1 className="builder-question">
                  What are we <em>building?</em>
                </h1>
                <p className="builder-subtitle">
                  Start with the kind of digital experience you have in mind.
                  We'll shape the details together.
                </p>

                <div className="builder-choice-grid">
                  {websiteTypes.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`builder-choice ${brief.websiteType === item.id ? "selected" : ""}`}
                      onClick={() => updateBrief("websiteType", item.id)}
                    >
                      <span className="builder-choice-icon">{item.icon}</span>
                      <span className="builder-choice-copy">
                        <strong>{item.title}</strong>
                        <small>{item.desc}</small>
                      </span>
                      <span className="builder-choice-check">↗</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="builder-step">
                <p className="builder-kicker">02 — THE AESTHETIC</p>
                <h1 className="builder-question">
                  How should it <em>feel?</em>
                </h1>
                <p className="builder-subtitle">
                  Choose a visual direction. These are starting points, not
                  limitations.
                </p>

                <div className="builder-style-grid">
                  {styles.map((style) => (
                    <button
                      type="button"
                      key={style.id}
                      className={`builder-style-card ${brief.visualStyle === style.id ? "selected" : ""}`}
                      onClick={() => updateBrief("visualStyle", style.id)}
                    >
                      <div className={`style-art ${style.className}`}>
                        <span className="style-art-line" />
                        <span className="style-art-block" />
                        <span className="style-art-dot" />
                      </div>
                      <div className="style-card-bottom">
                        <span>
                          <strong>{style.title}</strong>
                          <small>{style.desc}</small>
                        </span>
                        <span className="style-check">
                          {brief.visualStyle === style.id ? "✓" : "+"}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="builder-step">
                <p className="builder-kicker">03 — THE FUNCTION</p>
                <h1 className="builder-question">
                  What should it <em>do?</em>
                </h1>
                <p className="builder-subtitle">
                  Select everything you might need. You can always refine this
                  with us later.
                </p>

                <div className="builder-feature-grid">
                  {features.map((feature) => (
                    <button
                      type="button"
                      key={feature}
                      className={`builder-feature ${brief.features.includes(feature) ? "selected" : ""}`}
                      onClick={() => toggleFeature(feature)}
                    >
                      <span>{brief.features.includes(feature) ? "✓" : "+"}</span>
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="builder-step">
                <p className="builder-kicker">04 — THE PRACTICALS</p>
                <h1 className="builder-question">
                  Let's talk <em>scope.</em>
                </h1>
                <p className="builder-subtitle">
                  A rough idea helps us recommend the right approach.
                  These details are not a fixed quote.
                </p>

                <div className="builder-field-group">
                  <label>YOUR ESTIMATED BUDGET</label>
                  <div className="builder-budget-grid">
                    {budgets.map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        className={`builder-pill ${brief.budget === budget ? "selected" : ""}`}
                        onClick={() => updateBrief("budget", budget)}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="builder-field-group builder-timeline">
                  <label>WHEN WOULD YOU LIKE TO START?</label>
                  <div className="builder-budget-grid">
                    {timelines.map((timeline) => (
                      <button
                        type="button"
                        key={timeline}
                        className={`builder-pill ${brief.timeline === timeline ? "selected" : ""}`}
                        onClick={() => updateBrief("timeline", timeline)}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="builder-step">
                <p className="builder-kicker">05 — THE CONVERSATION</p>
                <h1 className="builder-question">
                  Who are we <em>speaking with?</em>
                </h1>
                <p className="builder-subtitle">
                  Leave us a few details. We'll take it from here.
                </p>

                <div className="builder-form">
                  <div className="builder-input-row">
                    <div className="builder-input-wrap">
                      <label htmlFor="brief-name">YOUR NAME *</label>
                      <input
                        id="brief-name"
                        type="text"
                        placeholder="Name"
                        value={brief.name}
                        onChange={(e) => updateBrief("name", e.target.value)}
                        autoComplete="name"
                      />
                    </div>

                    <div className="builder-input-wrap">
                      <label htmlFor="brief-email">EMAIL ADDRESS *</label>
                      <input
                        id="brief-email"
                        type="email"
                        placeholder="you@example.com"
                        value={brief.email}
                        onChange={(e) => updateBrief("email", e.target.value)}
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="builder-input-wrap">
                    <label htmlFor="brief-company">BRAND / COMPANY</label>
                    <input
                      id="brief-company"
                      type="text"
                      placeholder="Your company (optional)"
                      value={brief.company}
                      onChange={(e) => updateBrief("company", e.target.value)}
                    />
                  </div>

                  <div className="builder-input-wrap">
                    <label htmlFor="brief-description">TELL US ABOUT THE PROJECT</label>
                    <textarea
                      id="brief-description"
                      rows="5"
                      placeholder="The idea, the challenge, what you're imagining..."
                      value={brief.description}
                      onChange={(e) => updateBrief("description", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {error && <p className="builder-error">{error}</p>}

            <div className="builder-controls">
              <button
                type="button"
                className="builder-back"
                onClick={previousStep}
                disabled={step === 0}
              >
                ← BACK
              </button>

              {step < steps.length - 1 ? (
                <button type="button" className="builder-next" onClick={nextStep}>
                  CONTINUE <span className="builder-arrow">↗</span>
                </button>
              ) : (
                <button type="submit" className="builder-next">
                  CREATE MY BRIEF <span className="builder-arrow">↗</span>
                </button>
              )}
            </div>
          </form>

          <footer className="builder-footer">
            <span>YOUR IDEAS ARE SAFE WITH US.</span>
            <span>FORM® — DIGITAL EXPERIENCES</span>
          </footer>
        </section>
      </div>
    </main>
  );
}

export function ProjectSummary() {
  const [brief, setBrief] = useState(null);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("formProjectBrief");
      if (saved) setBrief(JSON.parse(saved));
    } catch {
      setBrief(null);
    }
  }, []);

  if (!brief) {
    return (
      <main className="summary-shell">
        <a className="builder-logo" href="/">FORM<span>.</span></a>
        <div className="summary-empty">
          <p className="builder-kicker">NO PROJECT BRIEF FOUND</p>
          <h1>Let's start with<br /><em>an idea.</em></h1>
          <a className="summary-primary" href="/services/digital-experiences">
            START A PROJECT ↗
          </a>
        </div>
      </main>
    );
  }

  const handleSend = async (event) => {
    event.preventDefault();

    if (sending || sendStatus === "success") return;

    setSending(true);
    setSendStatus("");

    try {
      await emailjs.send(
        "service_xkh2dhd",
        "template_0pcpt88",
        {
          from_name: brief.name,
          from_email: brief.email,
          company: brief.company || "Not provided",
          service: "Digital Experiences",
          budget: brief.budget,
          timeline: brief.timeline,
          message: [
            `Website type: ${brief.websiteType}`,
            `Visual direction: ${brief.visualStyle}`,
            `Features: ${brief.features.join(", ")}`,
            `Project details: ${brief.description || "Not provided"}`,
          ].join("\n"),
        },
        "BnuA4b7eChP64IPCY"
      );

      setSendStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendStatus("error");
    } finally {
      setSending(false);
    }
  };

  const rows = [
    ["Website type", brief.websiteType],
    ["Visual direction", brief.visualStyle],
    ["Features", brief.features.join(", ")],
    ["Estimated budget", brief.budget],
    ["Timeline", brief.timeline],
    ["Name", brief.name],
    ["Email", brief.email],
    ["Company", brief.company || "Not provided"],
    ["Project details", brief.description || "Not provided"],
  ];

  return (
    <main className="summary-shell">
      <nav className="builder-nav">
        <a className="builder-logo" href="/">FORM<span>.</span></a>
        <span className="builder-nav-right">PROJECT DISCOVERY / COMPLETE</span>
      </nav>

      <section className="summary-content">
        <div className="summary-success">
          <span className="summary-number">01 — PROJECT BRIEF</span>
          <span className="summary-success-mark">✓</span>
        </div>

        <div className="summary-intro">
          <p className="builder-kicker">A GOOD BEGINNING</p>
          <h1>Your idea has<br />taken <em>shape.</em></h1>
          <p>
            Thanks, {brief.name}. Here's a look at what you've shared with us.
            Take a moment to review your project brief.
          </p>
        </div>

        <div className="summary-card">
          <div className="summary-card-heading">
            <span>PROJECT OVERVIEW</span>
            <span>FORM® / 001</span>
          </div>

          {rows.map(([label, value]) => (
            <div className="summary-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        <div className="summary-contact">
          <p className="builder-kicker">THE NEXT STEP</p>
          <h2>Let's make it <em>real.</em></h2>
          <p>
            Your brief is ready. Send it directly to our studio
            and start the conversation.
          </p>

          <div className="summary-actions">
            <a
              className="summary-primary"
              href="#"
              onClick={handleSend}
              aria-disabled={sending || sendStatus === "success"}
            >
              {sending
                ? "SENDING BRIEF..."
                : sendStatus === "success"
                  ? "BRIEF SENT ✓"
                  : "SEND PROJECT BRIEF ↗"}
            </a>

            <a className="summary-secondary" href="/">
              BACK TO FORM
            </a>
          </div>

          <p className="summary-note" role="status">
            {sendStatus === "success"
              ? "Your project brief has been sent successfully. FORM will be in touch."
              : sendStatus === "error"
                ? "We couldn't send your brief right now. Please try again."
                : sending
                  ? "Sending your project brief..."
                  : "Your completed brief will be sent directly to the FORM studio."}
          </p>
        </div>
      </section>

      <footer className="builder-footer">
        <span>FORM® — INDEPENDENT DIGITAL STUDIO</span>
        <a href="/services/digital-experiences">START ANOTHER PROJECT ↗</a>
      </footer>
    </main>
  );
}