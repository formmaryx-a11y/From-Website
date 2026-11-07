
import { useEffect, useState } from "react";
import "./CreativeDirection.css";

export default function CreativeDirection() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (next >= 100) {
        clearInterval(progressInterval);
      }
    }, 25);

    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, duration + 200);

    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(clockInterval);
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <main className="cd-page">
      {loading && (
        <div className="cd-loader">
          <div className="cd-loader-top">
            <span>FORM®</span>
            <span>CREATIVE DEPARTMENT</span>
          </div>

          <div className="cd-loader-center">
            <div className="cd-loader-symbol">
              <div className="cd-loader-ring ring-one" />
              <div className="cd-loader-ring ring-two" />
              <div className="cd-loader-ring ring-three" />
              <div className="cd-loader-core">F.</div>
            </div>

            <p>PREPARING SOMETHING DIFFERENT</p>
          </div>

          <div className="cd-loader-bottom">
            <span>INITIALISING EXPERIENCE</span>
            <span>{progress}%</span>
          </div>

          <div className="cd-loader-track">
            <div
              className="cd-loader-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="cd-noise" />
      <div className="cd-grid-bg" />

      <header className="cd-nav">
        <a href="/" className="cd-logo">FORM<span>®</span></a>

        <div className="cd-nav-center">
          INDEPENDENT CREATIVE STUDIO
        </div>

        <a href="/#contact" className="cd-nav-contact">
          LET'S TALK <span>↗</span>
        </a>
      </header>

      <section className="cd-hero">
        <div className="cd-topline">
          <span>04 / CREATIVE DIRECTION</span>
          <span>AN EXPRESSION OF WHAT'S NEXT</span>
        </div>

        <div className="cd-hero-content">
          <div className="cd-eyebrow">
            <span className="cd-status-dot" />
            <span>THE NEXT CHAPTER IS TAKING SHAPE</span>
          </div>

          <h1>
            NOT QUITE
            <br />
            <span>READY.</span>
            <br />
            <span className="cd-outline">BUT CLOSE.</span>
          </h1>

          <div className="cd-hero-bottom">
            <p className="cd-description">
              A new creative department is taking shape.
              <br />
              A space for ideas, identity and visual expression.
              <br />
              We're building it with intention.
            </p>

            <div className="cd-coming-stamp">
              <div className="cd-stamp-ring">
                <span>FORM®</span>
                <strong>COMING</strong>
                <strong>SOON</strong>
                <span>CREATIVE DIRECTION</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cd-orbit-area">
          <div className="cd-orbit orbit-a" />
          <div className="cd-orbit orbit-b" />
          <div className="cd-orbit orbit-c" />

          <div className="cd-orbit-center">
            <span>F</span>
          </div>

          <div className="cd-orbit-label label-one">IDEA / 001</div>
          <div className="cd-orbit-label label-two">VISION IN PROGRESS</div>
          <div className="cd-orbit-label label-three">FORM® STUDIO</div>
        </div>

        <div className="cd-scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="cd-scroll-line" />
        </div>
      </section>

      <section className="cd-statement">
        <div className="cd-section-label">
          <span>01 — THE THINKING</span>
          <span>AN INCOMPLETE IDEA, BY DESIGN.</span>
        </div>

        <div className="cd-statement-content">
          <h2>
            GOOD WORK
            <br />
            STARTS WITH
            <br />
            <span>A POINT OF VIEW.</span>
          </h2>

          <p>
            We're developing a new way to bring ideas to life.
            Not simply how something looks, but what it means,
            how it feels and the impression it leaves behind.
          </p>
        </div>
      </section>

      <section className="cd-exploration">
        <div className="cd-section-label">
          <span>02 — THE DIRECTION</span>
          <span>THE DETAILS ARE STILL UNFOLDING</span>
        </div>

        <div className="cd-exploration-grid">
          <div className="cd-explore-card card-identity">
            <div className="cd-card-number">01 / IDENTITY</div>
            <div className="cd-identity-art">
              <span>F</span>
              <span className="identity-small">FORM®</span>
            </div>
            <h3>Identity.</h3>
            <p>Building recognisable visual worlds.</p>
          </div>

          <div className="cd-explore-card card-image">
            <div className="cd-card-number">02 / ART DIRECTION</div>
            <div className="cd-image-art">
              <div className="image-shape shape-one" />
              <div className="image-shape shape-two" />
              <div className="image-shape shape-three" />
            </div>
            <h3>Art direction.</h3>
            <p>Giving ideas a visual point of view.</p>
          </div>

          <div className="cd-explore-card card-concept">
            <div className="cd-card-number">03 / CONCEPT</div>
            <div className="cd-concept-art">
              <span>IDEAS</span>
              <span>IN</span>
              <span>MOTION.</span>
            </div>
            <h3>Concept.</h3>
            <p>Finding the thought behind the work.</p>
          </div>
        </div>
      </section>

      <section className="cd-progress-section">
        <div className="cd-section-label">
          <span>03 — CURRENT STATUS</span>
          <span>BUILDING WITH INTENTION</span>
        </div>

        <div className="cd-progress-content">
          <div>
            <span className="cd-progress-kicker">DEPARTMENT STATUS</span>
            <h2>
              UNDER
              <br />
              <span>CONSTRUCTION.</span>
            </h2>
          </div>

          <div className="cd-progress-right">
            <div className="cd-progress-orb">
              <div className="cd-progress-orb-inner">
                <span>IN</span>
                <strong>THE</strong>
                <span>WORKS</span>
              </div>
            </div>

            <p>
              We believe in releasing work when it's ready,
              not simply when the clock says so.
            </p>
          </div>
        </div>

        <div className="cd-progress-footer">
          <span>
            <span className="cd-status-dot" />
            STATUS: IN DEVELOPMENT
          </span>
          <span>FORM® — EST. IN PROGRESS</span>
        </div>
      </section>

      <section className="cd-contact">
        <span className="cd-contact-kicker">UNTIL THEN</span>

        <h2>
          HAVE AN
          <br />
          <span>IDEA?</span>
        </h2>

        <p>
          The department may be in development.
          The conversation doesn't have to be.
        </p>

        <a href="/#contact" className="cd-contact-link">
          START A CONVERSATION <span>↗</span>
        </a>
      </section>

      <footer className="cd-footer">
        <a href="/" className="cd-footer-logo">FORM®</a>

        <span>INDEPENDENT BY NATURE.</span>

        <span>
          {time.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Asia/Kolkata",
          })} IST
        </span>

        <a href="/">BACK TO HOME ↑</a>
      </footer>
    </main>
  );
}
