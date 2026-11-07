import "./About.css";

export default function About() {
  return (
    <main className="about-page">

      <nav className="about-nav">
        <a href="/" className="about-logo">FORM<span>.</span></a>
        <a href="/" className="about-back">BACK TO HOME ↗</a>
      </nav>

      <section className="about-hero">
        <p className="about-label">THE STUDIO — EST. 2026</p>

        <h1>
          Good work starts
          <br />
          with <span>good thinking.</span>
        </h1>

        <p className="about-intro">
          We are FORM. An independent creative studio shaping
          digital experiences, visual stories and intelligent
          solutions for ambitious ideas.
        </p>

        <div className="about-scroll">SCROLL TO EXPLORE ↓</div>
      </section>

      <section className="about-belief">
        <p className="about-label">01 — WHAT WE BELIEVE</p>

        <h2>
          We believe in making things that feel as good as they work.
        </h2>

        <p>
          The internet doesn't need more noise. It needs thoughtful
          ideas, meaningful design and experiences people remember.
          That's where we come in.
        </p>
      </section>

      <section className="about-principles">
        <p className="about-label">02 — OUR APPROACH</p>

        <div className="principle">
          <span>01</span>
          <h3>Clarity over noise.</h3>
          <p>Every detail has a purpose. Nothing is there just to fill space.</p>
        </div>

        <div className="principle">
          <span>02</span>
          <h3>Curiosity with purpose.</h3>
          <p>We explore new possibilities and turn interesting ideas into useful things.</p>
        </div>

        <div className="principle">
          <span>03</span>
          <h3>Details make the difference.</h3>
          <p>From the first impression to the final interaction, every detail matters.</p>
        </div>
      </section>

      <section className="about-end">
        <p className="about-label">03 — LET'S CREATE</p>
        <h2>Have something<br />in mind?</h2>
        <a href="mailto:hello@form.studio">LET'S TALK ↗</a>
      </section>

      <footer className="about-footer">
        <span>FORM© 2026</span>
        <span>INDEPENDENT BY DESIGN.</span>
        <a href="/">BACK TO TOP ↑</a>
      </footer>

    </main>
  );
}