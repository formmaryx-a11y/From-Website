
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const INITIAL_FORM = {
  from_name: "",
  from_email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      await emailjs.send(
        "service_xkh2dhd",
        "template_0pcpt88",
        form,
        "BnuA4b7eChP64IPCY"
      );

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "We couldn't send your enquiry right now. Please try again."
      );
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <header className="contact-header">
        <a href="/" className="contact-logo">FORM<span>.</span></a>
        <a href="/" className="contact-back">BACK TO HOME ↗</a>
      </header>

      <section className="contact-hero">
        <p className="contact-eyebrow">LET'S MAKE SOMETHING MATTER</p>
        <h1>
          A good idea
          <br />
          starts <span>somewhere.</span>
        </h1>
        <p className="contact-intro">
          Tell us what you're thinking. We'll take it from there.
        </p>
      </section>

      <section className="contact-content">
        {status === "success" ? (
          <div className="contact-success">
            <div className="success-icon">✓</div>
            <p className="contact-eyebrow">TRANSMISSION COMPLETE</p>
            <h2>Enquiry received<span>.</span></h2>
            <p>
              Thank you for considering FORM. Your project details
              have reached our studio. We'll be in touch soon.
            </p>
            <button
              className="contact-submit"
              onClick={() => setStatus("idle")}
            >
              SEND ANOTHER ENQUIRY <span>↗</span>
            </button>
          </div>
        ) : (
          <>
            <div className="contact-form-heading">
              <span>01 / PROJECT ENQUIRY</span>
              <span>ALL FIELDS MARKED * ARE REQUIRED</span>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field-grid">
                <label className="contact-field">
                  <span>YOUR NAME *</span>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Full name"
                    value={form.from_name}
                    onChange={updateField}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>EMAIL ADDRESS *</span>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="you@example.com"
                    value={form.from_email}
                    onChange={updateField}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span>COMPANY / BRAND</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company"
                    value={form.company}
                    onChange={updateField}
                  />
                </label>

                <label className="contact-field">
                  <span>WHAT ARE YOU LOOKING FOR? *</span>
                  <select
                    name="service"
                    value={form.service}
                    onChange={updateField}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Digital Experiences">Digital Experiences</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Moving Image">Moving Image</option>
                    <option value="Creative Direction">Creative Direction</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Something Else">Something Else</option>
                  </select>
                </label>

                <label className="contact-field">
                  <span>ESTIMATED BUDGET *</span>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={updateField}
                    required
                  >
                    <option value="" disabled>Select a range</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                    <option value="₹1,00,000 – ₹3,00,000">₹1,00,000 – ₹3,00,000</option>
                    <option value="₹3,00,000+">₹3,00,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </label>

                <label className="contact-field">
                  <span>IDEAL TIMELINE *</span>
                  <select
                    name="timeline"
                    value={form.timeline}
                    onChange={updateField}
                    required
                  >
                    <option value="" disabled>Select a timeline</option>
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1–3 months">1–3 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </label>
              </div>

              <label className="contact-field contact-message">
                <span>TELL US ABOUT YOUR PROJECT *</span>
                <textarea
                  name="message"
                  placeholder="The idea, the ambition, the details..."
                  value={form.message}
                  onChange={updateField}
                  rows="5"
                  required
                />
              </label>

              {error && (
                <p className="contact-error" role="alert">{error}</p>
              )}

              <div className="contact-form-bottom">
                <p>
                  By submitting, you agree to be contacted about
                  your enquiry.
                </p>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="contact-spinner" />
                      SENDING ENQUIRY...
                    </>
                  ) : (
                    <>
                      SEND ENQUIRY <span>↗</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </section>

      <footer className="contact-footer">
        <span>FORM® — INDEPENDENT CREATIVE STUDIO</span>
        <a href="mailto:form.maryx@gmail.com">FORM.MARYX@GMAIL.COM ↗</a>
        <span>© {new Date().getFullYear()} FORM</span>
      </footer>
    </main>
  );
}
