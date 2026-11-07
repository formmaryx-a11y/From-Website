
import { useEffect, useRef, useState } from "react";

import About from "./about";

import DigitalExperiences, {
  ProjectSummary,
} from "./DigitalExperiences";

import AIDevelopment, {
  AIProjectSummary,
} from "./AIDevelopment";

import MovingImage, {
  MovingImageSummary,
} from "./MovingImage";

import CreativeDirection from "./CreativeDirection";

import Contact from "./Contact";

import "./App.css";

const services = [
  {
    number: "01",
    title: "Digital experiences",
    description:
      "Distinctive websites and digital products, designed to move people and businesses forward.",
    tags: ["Strategy", "Web design", "Development"],
    link: "/services/digital-experiences",
  },
  {
    number: "02",
    title: "Intelligent systems",
    description:
      "Useful AI-powered tools and automations that make ambitious ideas work in the real world.",
    tags: ["AI development", "Automation", "Prototyping"],
    link: "/services/ai-development",
  },
  {
    number: "03",
    title: "Moving image",
    description:
      "Visual stories with atmosphere, rhythm and a point of view — made to stay with people.",
    tags: ["Film", "Motion", "Editing"],
    link: "/services/moving-image",
  },
  {
    number: "04",
    title: "Creative direction",
    description:
      "A clear visual language and thoughtful content that give brands a world of their own.",
    tags: ["Art direction", "Identity", "Content"],
    link: "/services/creative-direction",
  },
];

const projects = [
  {
    number: "01",
    name: "Objects of tomorrow",
    type: "Digital experience · Concept",
    className: "project-visual--one",
    mark: "O/T",
  },
  {
    number: "02",
    name: "A quieter kind of luxury",
    type: "Art direction · Campaign",
    className: "project-visual--two",
    mark: "FORM / 02",
  },
  {
    number: "03",
    name: "Beyond the interface",
    type: "AI · Experimental",
    className: "project-visual--three",
    mark: "∞",
  },
];

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={diagonal ? "arrow arrow--diagonal" : "arrow"}
    >
      <path d="M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" />
    </svg>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date())
      );

    update();

    const timer = window.setInterval(update, 30000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // PAGE ROUTES

  const path = window.location.pathname.replace(/\/+$/, "");

  if (path === "/about") {
    return <About />;
  }

  if (path === "/services/digital-experiences") {
    return <DigitalExperiences />;
  }

  if (path === "/project-summary") {
    return <ProjectSummary />;
  }

  if (path === "/services/ai-development") {
    return <AIDevelopment />;
  }

  if (path === "/ai-project-summary") {
    return <AIProjectSummary />;
  }

  if (path === "/services/moving-image") {
    return <MovingImage />;
  }

  if (path === "/moving-image-summary") {
    return <MovingImageSummary />;
  }

  if (path === "/services/creative-direction") {
    return <CreativeDirection />;
  }

  if (path === "/contact") {
    return <Contact />;
  }

  // HOMEPAGE

  return (
    <main>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="FORM home"
          onClick={closeMenu}
        >
          FORM<span className="wordmark-period">.</span>
        </a>

        <div className="header-center">
          <span className="status-dot" /> Independent digital studio
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <b>{menuOpen ? "CLOSE" : "MENU"}</b>
        </button>
      </header>

      <div
        className={`menu-overlay ${
          menuOpen ? "menu-overlay--open" : ""
        }`}
      >
        <nav className="menu-links" aria-label="Main navigation">
          {[
            ["01", "Home", "#top"],
            ["02", "About", "/about"],
            ["03", "Services", "#services"],
            ["04", "Selected work", "#work"],
            ["05", "Contact", "/contact"],
          ].map(([n, label, href]) => (
            <a href={href} key={n} onClick={closeMenu}>
              <small>{n}</small>
              <span>{label}</span>
              <Arrow diagonal />
            </a>
          ))}

          <p className="menu-foot">
            Independent by nature. Intentional by design.
          </p>
        </nav>
      </div>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-topline">
          <span>FORM® — CREATIVE TECHNOLOGY STUDIO</span>
          <span>INDEPENDENT / EST. 2026</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" /> GOOD IDEAS, GIVEN FORM.
          </p>

          <h1>
            Make it
            <br />
            <em>mean</em> more<span className="hero-star">✳</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description">
              We build thoughtful digital experiences, intelligent systems
              and visual stories for a world that never stands still.
            </p>

            <a
              className="circle-link"
              href="#work"
              aria-label="Explore selected work"
            >
              <span>
                SCROLL TO
                <br />
                EXPLORE
              </span>
              <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="hero-index">
          <span>01 / 05</span>
          <span>SCROLL TO DISCOVER ↓</span>
          <span>INDIA&nbsp;&nbsp; {time || "— — : — —"}</span>
        </div>
      </section>

      <div className="ticker" aria-label="FORM capabilities">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-group" key={i}>
              {[
                "DIGITAL CRAFT",
                "INTELLIGENT IDEAS",
                "VISUAL CULTURE",
                "BUILT WITH INTENT",
              ].map((item) => (
                <span key={item}>
                  {item}<i>✳</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="studio section-pad" id="studio">
        <div className="section-meta">
          <span>01 — THE STUDIO</span>
          <span>SMALL BY DESIGN. BIG ON INTENT.</span>
        </div>

        <div className="studio-layout">
          <Reveal className="studio-heading-wrap">
            <h2 className="section-heading">
              We believe
              <br />
              in <span className="serif-italic">making</span>
              <br />
              things matter.
            </h2>
          </Reveal>

          <Reveal className="studio-copy" delay={120}>
            <p className="copy-lead">
              The internet doesn't need more noise. It needs better ideas,
              made with care.
            </p>

            <p>
              FORM is an independent creative technology studio working at
              the intersection of design, technology and culture. We partner
              with ambitious people to turn clear thinking into work that
              feels different — and works beautifully.
            </p>

            <a className="text-link" href="/about">
              A LITTLE MORE ABOUT US <Arrow diagonal />
            </a>
          </Reveal>
        </div>

        <div className="studio-bottom">
          <span>CURIOUS MINDS. CONSIDERED OUTPUT.</span>
          <span>01 — 04</span>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-meta">
          <span>02 — WHAT WE DO</span>
          <span>THOUGHTFUL FROM FIRST THOUGHT TO FINAL PIXEL.</span>
        </div>

        <Reveal>
          <div className="services-intro">
            <h2 className="section-heading">
              Ideas into
              <br />
              <span className="serif-italic">impact.</span>
            </h2>

            <p>
              Different disciplines.
              <br />
              One considered approach.
            </p>
          </div>
        </Reveal>

        <div className="service-list">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 65}>
              <a className="service-row" href={service.link}>
                <span className="service-number">{service.number}</span>

                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="service-arrow">
                  <Arrow diagonal />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-meta">
          <span>03 — SELECTED DIRECTIONS</span>
          <span>A GLIMPSE OF WHAT'S POSSIBLE.</span>
        </div>

        <Reveal>
          <div className="work-heading">
            <h2 className="section-heading">
              Made to
              <br />
              <span className="serif-italic">move you.</span>
            </h2>

            <p>
              Some things are better experienced
              <br />
              than explained.
            </p>
          </div>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal
              className={`project-card ${
                index === 1 ? "project-card--offset" : ""
              }`}
              key={project.number}
              delay={index * 90}
            >
              <div className={`project-visual ${project.className}`}>
                <span className="project-index">
                  {project.number} / 03
                </span>

                <span className="project-mark">{project.mark}</span>

                <span className="project-open">
                  <Arrow diagonal />
                </span>
              </div>

              <div className="project-caption">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.type}</p>
                </div>
                <span>↗</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="work-note">
          A FEW WORLDS WE'RE EXPLORING. MORE TO COME.
        </p>
      </section>

      <section className="manifesto">
        <div className="manifesto-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" /> A NOTE ON HOW WE WORK
          </p>

          <h2>
            Less, but
            <br />
            <span className="serif-italic">never</span> ordinary.
          </h2>

          <p className="manifesto-foot">
            Clarity over clutter. Feeling over formula. Always made with intent.
          </p>
        </Reveal>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-meta">
          <span>04 — START A CONVERSATION</span>
          <span>HAVE SOMETHING IN MIND?</span>
        </div>

        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" /> THE NEXT GOOD THING STARTS HERE.
          </p>

          <h2>
            Let's make
            <br />
            <span className="serif-italic">something</span>
            <br />
            matter<span className="contact-period">.</span>
          </h2>

          <a className="contact-link" href="/contact">
            <span>START A PROJECT</span>
            <Arrow diagonal />
          </a>
        </Reveal>

        <div className="contact-aside">
          No big pitch required.
          <br />
          Just tell us what you're thinking.
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">
          FORM<span>.</span>
        </a>

        <div className="footer-middle">
          <span>INDEPENDENT DIGITAL STUDIO</span>
          <span>MADE WITH INTENT — © 2026</span>
        </div>

        <a className="back-top" href="#top">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}
