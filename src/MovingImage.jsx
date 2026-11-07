import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./MovingImage.css";

const filmTypes = [
  "Brand film",
  "Commercial / advertisement",
  "Product film",
  "Social media content",
  "Music video",
  "Motion graphics",
  "Not sure yet",
];

const directions = [
  "Cinematic & atmospheric",
  "Minimal & editorial",
  "Bold & energetic",
  "Experimental & artistic",
  "Documentary & human",
  "Open to ideas",
];

const deliverables = [
  "Main campaign film",
  "Short-form videos / Reels",
  "Product showcase",
  "Behind-the-scenes",
  "Motion graphics",
  "Multiple cut-downs",
];

const budgets = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1 lakh",
  "₹1 lakh – ₹3 lakh",
  "₹3 lakh+",
  "Let's discuss",
];

const timelines = [
  "As soon as possible",
  "Within 2–4 weeks",
  "Within 1–2 months",
  "Flexible",
];

const emptyBrief = {
  type: "",
  direction: "",
  deliverables: [],
  vision: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  brand: "",
  details: "",
};

function Arrow({ diagonal = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={diagonal ? "mi-arrow mi-arrow--diagonal" : "mi-arrow"}
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

function Header() {
  return (
    <header className="mi-header">
      <a href="/" className="mi-wordmark">FORM<span>.</span></a>
      <span className="mi-header-label">
        <i /> INDEPENDENT CREATIVE TECHNOLOGY STUDIO
      </span>
      <a href="/#services" className="mi-back-link">
        BACK TO STUDIO <Arrow diagonal />
      </a>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mi-footer">
      <a href="/" className="mi-wordmark">FORM<span>.</span></a>
      <span>MADE WITH INTENT — © 2026</span>
      <a href="mailto:hello@form.studio">SAY HELLO ↗</a>
    </footer>
  );
}

function Progress({ step }) {
  return (
    <div className="mi-progress">
      <div className="mi-progress-top">
        <span>PROJECT BRIEF</span>
        <span>0{step + 1} / 05</span>
      </div>
      <div className="mi-progress-track">
        <span style={{ width: `${((step + 1) / 5) * 100}%` }} />
      </div>
    </div>
  );
}

function ChoiceList({ options, value, onChange }) {
  return (
    <div className="mi-choice-list">
      {options.map((option, index) => (
        <button
          type="button"
          key={option}
          className={`mi-choice ${value === option ? "is-selected" : ""}`}
          onClick={() => onChange(option)}
        >
          <span className="mi-choice-number">0{index + 1}</span>
          <span>{option}</span>
          <span className="mi-choice-indicator">
            {value === option ? "✓" : "+"}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function MovingImage() {
  const [step, setStep] = useState(0);
  const [brief, setBrief] = useState(emptyBrief);
  const [error, setError] = useState("");

  const update = (key, value) => {
    setBrief((current) => ({ ...current, [key]: value }));
    setError("");
  };

  const toggleDeliverable = (item) => {
    setBrief((current) => ({
      ...current,
      deliverables: current.deliverables.includes(item)
        ? current.deliverables.filter((value) => value !== item)
        : [...current.deliverables, item],
    }));
    setError("");
  };

  const next = () => {
    if (step === 0 && !brief.type) {
      setError("Choose the kind of film you're thinking about.");
      return;
    }
    if (step === 1 && !brief.direction) {
      setError("Choose a visual direction to continue.");
      return;
    }
    if (step === 2 && brief.deliverables.length === 0) {
      setError("Select at least one deliverable.");
      return;
    }
    if (step === 3 && (!brief.budget || !brief.timeline)) {
      setError("Please select a budget and timeline.");
      return;
    }
    if (step === 4) {
      if (!brief.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email)) {
        setError("Please enter your name and a valid email address.");
        return;
      }

      sessionStorage.setItem("formMovingImageBrief", JSON.stringify(brief));
      window.location.assign("/moving-image-summary");
      return;
    }

    setStep((current) => current + 1);
    setError("");
  };

  return (
    <main className="mi-page">
      <Header />

      <section className="mi-hero">
        <div className="mi-hero-meta">
          <span>03 — OUR SERVICES</span>
          <span>FILM / MOTION / STORYTELLING</span>
        </div>

        <p className="mi-eyebrow"><i /> STORIES THAT STAY WITH YOU.</p>

        <h1>
          Moving
          <br />
          <em>image.</em>
        </h1>

        <div className="mi-hero-bottom">
          <p>
            We create visual stories with atmosphere, rhythm and a point of
            view. From the first frame to the final cut, every detail has a
            reason to be there.
          </p>
          <a href="#mi-intro" className="mi-scroll">
            SCROLL TO EXPLORE <Arrow diagonal />
          </a>
        </div>

        <div className="mi-hero-decoration" aria-hidden="true">
          <span>F</span>
          <span> / </span>
          <span>M</span>
        </div>
      </section>

      <section className="mi-intro" id="mi-intro">
        <div className="mi-section-meta">
          <span>01 — THE DISCIPLINE</span>
          <span>NOT JUST SOMETHING TO WATCH.</span>
        </div>

        <div className="mi-intro-grid">
          <h2>
            Give an idea
            <br />
            a <em>point of view.</em>
          </h2>
          <div className="mi-intro-copy">
            <p>
              Some things need more than words. They need movement, sound,
              atmosphere and emotion.
            </p>
            <p>
              We bring ideas to life through film, motion and considered
              visual storytelling — creating work that feels as good as it
              looks.
            </p>
          </div>
        </div>
      </section>

      <section className="mi-services">
        <div className="mi-section-meta">
          <span>02 — WHAT WE CREATE</span>
          <span>FROM FIRST FRAME TO FINAL FORM.</span>
        </div>

        <div className="mi-offerings">
          {[
            ["01", "Brand films", "Visual identities expressed through story, mood and moving image."],
            ["02", "Commercials", "Campaign films and advertisements built around a clear idea."],
            ["03", "Product films", "Thoughtful, detailed visuals that give products their moment."],
            ["04", "Social content", "Short-form films and content designed for today's platforms."],
            ["05", "Motion graphics", "Movement, typography and graphic elements with purpose."],
            ["06", "Post-production", "Editing, pacing, colour and finishing that bring it all together."],
          ].map(([number, title, description]) => (
            <article className="mi-offering" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <Arrow diagonal />
            </article>
          ))}
        </div>
      </section>

      <section className="mi-process">
        <div className="mi-section-meta">
          <span>03 — THE APPROACH</span>
          <span>THOUGHT THROUGH. FRAME BY FRAME.</span>
        </div>
        <h2>
          Every frame
          <br />
          <em>has a reason.</em>
        </h2>
        <div className="mi-process-grid">
          {[
            ["01", "Discover", "Understand the idea, the audience and what the story needs to say."],
            ["02", "Develop", "Shape the concept, visual language and creative direction."],
            ["03", "Produce", "Bring the idea to life through filming, design and motion."],
            ["04", "Finish", "Edit, refine and deliver the final work, ready for the world."],
          ].map(([number, title, description]) => (
            <article key={number}>
              <span>{number} / 04</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mi-brief" id="mi-brief">
        <div className="mi-section-meta">
          <span>04 — START SOMETHING</span>
          <span>LET'S MAKE IT MOVE.</span>
        </div>

        <div className="mi-brief-layout">
          <div className="mi-brief-heading">
            <p className="mi-eyebrow"><i /> HAVE A STORY IN MIND?</p>
            <h2>
              Let's make
              <br />
              something
              <br />
              <em>worth seeing.</em>
            </h2>
            <p>
              Tell us a little about what you're imagining. It doesn't need
              to be figured out yet — that's what we're here for.
            </p>
          </div>

          <div className="mi-form-panel">
            <Progress step={step} />

            {step === 0 && (
              <div className="mi-step">
                <p className="mi-step-label">FIRST THINGS FIRST</p>
                <h3>What are we creating?</h3>
                <p className="mi-step-description">Choose the kind of moving image project you have in mind.</p>
                <ChoiceList
                  options={filmTypes}
                  value={brief.type}
                  onChange={(value) => update("type", value)}
                />
              </div>
            )}

            {step === 1 && (
              <div className="mi-step">
                <p className="mi-step-label">THE FEELING</p>
                <h3>What should it feel like?</h3>
                <p className="mi-step-description">Think about the mood, style and energy you're drawn to.</p>
                <ChoiceList
                  options={directions}
                  value={brief.direction}
                  onChange={(value) => update("direction", value)}
                />
              </div>
            )}

            {step === 2 && (
              <div className="mi-step">
                <p className="mi-step-label">THE OUTPUT</p>
                <h3>What do you need?</h3>
                <p className="mi-step-description">Select everything that might be useful. You can choose more than one.</p>
                <div className="mi-multi-list">
                  {deliverables.map((item, index) => (
                    <button
                      type="button"
                      key={item}
                      className={`mi-multi-choice ${brief.deliverables.includes(item) ? "is-selected" : ""}`}
                      onClick={() => toggleDeliverable(item)}
                    >
                      <span>0{index + 1}</span>
                      {item}
                      <b>{brief.deliverables.includes(item) ? "✓" : "+"}</b>
                    </button>
                  ))}
                </div>
                <label className="mi-field">
                  ANYTHING ELSE WE SHOULD KNOW?
                  <textarea
                    rows="3"
                    value={brief.vision}
                    onChange={(event) => update("vision", event.target.value)}
                    placeholder="A reference, an idea, a feeling..."
                  />
                </label>
              </div>
            )}

            {step === 3 && (
              <div className="mi-step">
                <p className="mi-step-label">THE PRACTICALS</p>
                <h3>Let's talk scope.</h3>
                <p className="mi-step-description">A rough idea helps us understand what might be possible.</p>
                <label className="mi-field">
                  ESTIMATED BUDGET
                  <select value={brief.budget} onChange={(event) => update("budget", event.target.value)}>
                    <option value="">Select a budget</option>
                    {budgets.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <label className="mi-field">
                  IDEAL TIMELINE
                  <select value={brief.timeline} onChange={(event) => update("timeline", event.target.value)}>
                    <option value="">Select a timeline</option>
                    {timelines.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
              </div>
            )}

            {step === 4 && (
              <div className="mi-step">
                <p className="mi-step-label">THE HUMAN BIT</p>
                <h3>Who are we speaking with?</h3>
                <p className="mi-step-description">Leave your details and we'll take it from here.</p>
                <label className="mi-field">
                  YOUR NAME *
                  <input value={brief.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
                </label>
                <label className="mi-field">
                  EMAIL ADDRESS *
                  <input type="email" value={brief.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" />
                </label>
                <label className="mi-field">
                  BRAND / COMPANY
                  <input value={brief.brand} onChange={(event) => update("brand", event.target.value)} placeholder="If applicable" />
                </label>
                <label className="mi-field">
                  A LITTLE MORE ABOUT THE PROJECT
                  <textarea rows="3" value={brief.details} onChange={(event) => update("details", event.target.value)} placeholder="Tell us what you're thinking..." />
                </label>
              </div>
            )}

            {error && <p className="mi-error">{error}</p>}

            <div className="mi-form-actions">
              {step > 0 ? (
                <button className="mi-previous" type="button" onClick={() => { setStep((current) => current - 1); setError(""); }}>
                  ← BACK
                </button>
              ) : <span />}
              <button className="mi-next" type="button" onClick={next}>
                {step === 4 ? "REVIEW PROJECT" : "CONTINUE"} <Arrow />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export function MovingImageSummary() {
  const [brief] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("formMovingImageBrief")) || null;
    } catch {
      return null;
    }
  });

  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  const handleSendEmailJS = async () => {
    if (!brief) return;

    setIsSending(true);
    setSendError("");

    const payload = {
      from_name: brief.name,
      from_email: brief.email,
      company: brief.brand || "Not specified",
      service: `Moving Image — ${brief.type}`,
      budget: brief.budget,
      timeline: brief.timeline,
      message: [
        `Project Type: ${brief.type}`,
        `Visual Direction: ${brief.direction}`,
        `Deliverables: ${brief.deliverables.join(", ")}`,
        `Vision: ${brief.vision || "Not specified"}`,
        `Project Details: ${brief.details || "Not specified"}`,
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
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError("Failed to send brief. Please try again or contact us directly.");
    } finally {
      setIsSending(false);
    }
  };

  if (!brief) {
    return (
      <main className="mi-page mi-summary-page">
        <Header />
        <div className="mi-empty">
          <p className="mi-eyebrow"><i /> NO PROJECT BRIEF FOUND</p>
          <h1>Let's start<br /><em>from the beginning.</em></h1>
          <a className="mi-next mi-empty-link" href="/services/moving-image">START A PROJECT <Arrow /></a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="mi-page mi-summary-page">
      <Header />
      <section className="mi-summary">
        <p className="mi-eyebrow"><i /> YOUR PROJECT, IN FORM.</p>
        <h1>Good things<br /><em>start here.</em></h1>
        <p className="mi-summary-intro">Here's a look at what you've shared with us. When you're ready, send it over and let's start a conversation.</p>

        <div className="mi-summary-card">
          <div><span>PROJECT TYPE</span><strong>{brief.type}</strong></div>
          <div><span>VISUAL DIRECTION</span><strong>{brief.direction}</strong></div>
          <div><span>DELIVERABLES</span><strong>{brief.deliverables.join(" · ")}</strong></div>
          <div><span>YOUR VISION</span><strong>{brief.vision || "Not specified"}</strong></div>
          <div><span>BUDGET</span><strong>{brief.budget}</strong></div>
          <div><span>TIMELINE</span><strong>{brief.timeline}</strong></div>
          <div><span>NAME / BRAND</span><strong>{brief.name} {brief.brand && `· ${brief.brand}`}</strong></div>
          <div><span>EMAIL</span><strong>{brief.email}</strong></div>
          <div><span>PROJECT DETAILS</span><strong>{brief.details || "Not specified"}</strong></div>
        </div>

        {sentSuccess ? (
          <div className="mi-success-message" style={{ padding: "16px 0", fontWeight: 500, fontSize: "1.1rem" }}>
            ✓ Project brief sent successfully! We'll be in touch soon.
          </div>
        ) : (
          <button
            type="button"
            onClick={handleSendEmailJS}
            disabled={isSending}
            className="mi-send"
            style={{ cursor: isSending ? "wait" : "pointer", border: "none", width: "100%", textAlign: "center" }}
          >
            {isSending ? "SENDING BRIEF..." : "SEND PROJECT ENQUIRY ↗"}
          </button>
        )}

        {sendError && <p className="mi-error" style={{ marginTop: "12px" }}>{sendError}</p>}

        <p className="mi-email-note">This sends your completed brief straight to our studio inbox via EmailJS.</p>
        <button className="mi-edit" onClick={() => window.location.assign("/services/moving-image")}>← EDIT YOUR BRIEF</button>
      </section>
      <Footer />
    </main>
  );
}