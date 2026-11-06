"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const BITES_AI = "https://bites-ai.vercel.app/";
const PADI_AI = "https://padiai.vercel.app/";
const RUNNERS_AGRO = "https://runners-agro.vercel.app/";
const RUNNERS_ERRANDS = "https://runners-errands-staging.vercel.app/";
const SABE = "https://sabe-xi.vercel.app/";
const EMAIL = "runnersfuturum@gmail.com";

export default function Home() {
  const [roomOpen, setRoomOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [roomBusy, setRoomBusy] = useState(false);
  const [demoCards, setDemoCards] = useState([]);
  async function refreshRoom() {
    try {
      const r = await fetch("/api/partner/session", { cache: "no-store" });
      if (!r.ok) throw new Error("Unauthorized");
      const data = await r.json();
      setDemoCards(data.cards); setRoomOpen(true); return true;
    } catch { setDemoCards([]); setRoomOpen(false); return false; }
  }
  useEffect(() => { refreshRoom(); }, []);
  async function unlockRoom(e) {
    e.preventDefault();
    if (roomBusy) return;
    setRoomBusy(true); setPasswordError(false);
    try {
      const r = await fetch("/api/partner/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ code: password }) });
      setPassword("");
      if (!r.ok || !(await refreshRoom())) setPasswordError(true);
    } catch { setPasswordError(true); } finally { setRoomBusy(false); }
  }
  async function lockRoom() {
    setDemoCards([]); setRoomOpen(false); setPassword("");
    await fetch("/api/partner/logout", { method: "POST" }).catch(() => {});
  }
  return (
    <main>
      {/* ================= NAV ================= */}
      <header className="site-nav">
        <div className="nav-inner">
          <a href="#top" className="brand-lockup" aria-label="Runners Futurum">
            <div className="brand-mark">
              <Image
                src="/logo.jpg"
                alt="Runners Futurum"
                width={42}
                height={42}
                priority
              />
            </div>

            <div>
              <div className="brand-name">Runners Futurum</div>
              <div className="brand-tagline">
                Intelligence. Innovation. Impact.
              </div>
            </div>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#company">Company</a>
            <a href="#portfolio">Platforms</a>
            <a href="#intel">Runners Intel</a>
            <a href="#products">Products</a>
            <a href="#runnerbot-family">Runnerbots</a>
            <a href="#partner-room">Partner Room</a>
          </nav>

          <a href={`mailto:${EMAIL}`} className="nav-cta">
            Start a conversation
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="top" className="hero">
        <div className="contour-texture" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="page-shell hero-inner">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot-wrap">
                <span className="status-dot-pulse" />
                <span className="status-dot" />
              </span>

              <span>
                Building practical AI infrastructure for Nigeria
              </span>
            </div>

            <h1>
              Intelligence for the institutions and industries{" "}
              <em>shaping Nigeria.</em>
            </h1>

            <p className="hero-description">
              Runners Futurum builds practical AI platforms that strengthen
              institutions, modernise industries and turn Nigerian
              opportunities into scalable technology businesses.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="button button-green">
                Explore the platforms <span>→</span>
              </a>

              <a
                href="#partner-room"
                className="button button-ghost"
              >
                Investor &amp; Partner Room
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>NG</strong>
                <span>Nigeria-first systems</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>built into the operating layer</span>
              </div>

              <div>
                <strong>NG</strong>
                <span>Nigeria first, built to scale</span>
              </div>
            </div>
          </div>

          <div className="hero-system">
            <div className="system-window">
              <div className="system-window-top">
                <div>
                  <span className="eyebrow light">Runners Futurum</span>
                  <h2>Intelligence Infrastructure</h2>
                </div>

                <span className="system-live">
                  <span />
                  ACTIVE
                </span>
              </div>

              <div className="system-core">
                <div className="core-ring core-ring-outer" />
                <div className="core-ring core-ring-inner" />

                <div className="core-centre">
                  <Image
                    src="/logo.jpg"
                    alt=""
                    width={68}
                    height={68}
                  />
                </div>

                <div className="system-node node-one">
                  <span>01</span>
                  <strong>Runners Intel</strong>
                  <small>Institutional Intelligence</small>
                </div>

                <div className="system-node node-two">
                  <span>02</span>
                  <strong>Runners Agro</strong>
                  <small>Agricultural Intelligence</small>
                </div>

                <div className="system-node node-three">
                  <span>03</span>
                  <strong>Runners Errands</strong>
                  <small>AI + Real-World Execution</small>
                </div>
              </div>

              <div className="system-footer">
                <span>Human oversight</span>
                <span>Operational intelligence</span>
                <span>Real-world execution</span>
              </div>
            </div>

            <p className="system-caption">
              One company. Multiple intelligence layers. One Nigerian
              technology ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMPANY ================= */}
      <section id="company" className="section paper-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow terracotta">
              Why Runners Futurum exists
            </span>

            <h2>
              Nigeria does not need more technology theatre.
              <br />
              It needs <em>technology that works.</em>
            </h2>

            <p>
              We build around real institutions, real industries and real
              operating problems — combining artificial intelligence with
              human judgement, local context and disciplined execution.
            </p>
          </div>

          <div className="principle-grid">
            <article>
              <span>01</span>
              <h3>Practical Intelligence</h3>
              <p>
                AI designed around measurable work, decisions and outcomes —
                not technology for its own sake.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Human-Centred AI</h3>
              <p>
                Systems that strengthen people and institutions while keeping
                human oversight where judgement matters.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Nigeria First</h3>
              <p>
                Products designed around Nigerian realities, opportunities,
                constraints and operating environments.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Built to Scale</h3>
              <p>
                Start with concrete problems. Prove utility. Build the
                infrastructure capable of growing far beyond the first use
                case.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="section surface-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow navy">The company</span>

            <h2>
              Connected platforms.
              <br />
              <em>One connected technology thesis.</em>
            </h2>
          </div>

          <div className="venture-grid">
            <article className="venture-card">
              <div className="venture-top">
                <span className="venture-number">01</span>
                <span className="mini-status">Institutional AI</span>
              </div>

              <h3>Runners Intel</h3>

              <p>
                Institutional Intelligence Platforms that combine AI guidance,
                knowledge, workflow support, human oversight and operational
                intelligence.
              </p>

              <div className="venture-tags">
                <span>Enterprise</span>
                <span>Education</span>
                <span>Operations</span>
                <span>Decision Support</span>
              </div>

              <a href="#intel">
                Explore Runners Intel <span>→</span>
              </a>
            </article>

            <article className="venture-card">
              <div className="venture-top">
                <span className="venture-number">02</span>
                <span className="mini-status">Agriculture</span>
              </div>

              <h3>Runners Agro</h3>

              <p>
                AI-coordinated agricultural intelligence and infrastructure
                designed around farmers, land, data, markets and the wider
                Nigerian agricultural economy.
              </p>

              <div className="venture-tags">
                <span>Runnerbot 1</span>
                <span>RAIP</span>
                <span>RAMAS</span>
                <span>Land</span>
              </div>

              <a
                href={RUNNERS_AGRO}
                target="_blank"
                rel="noreferrer"
              >
                Open Runners Agro <span>↗</span>
              </a>
            </article>

            <article className="venture-card">
              <div className="venture-top">
                <span className="venture-number">03</span>
                <span className="mini-status">AI + Real-World Services</span>
              </div>

              <h3>Runners Errands</h3>

              <p>
                An AI-powered convenience and fulfilment platform designed to
                turn natural-language requests into trusted real-world
                execution.
              </p>

              <div className="venture-tags">
                <span>AI Operations</span>
                <span>Commerce</span>
                <span>Fulfilment</span>
                <span>Delivery</span>
              </div>

              <a href="#errands">
                Explore Runners Errands <span>→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ================= RUNNERS INTEL ================= */}
      <section id="intel" className="intel-section">
        <div className="contour-texture" />

        <div className="page-shell intel-shell">
          <div className="intel-copy">
            <span className="eyebrow green">
              Runners Intel
            </span>

            <h2>
              AI should strengthen institutions,
              <br />
              <em>not replace them.</em>
            </h2>

            <p>
              Runnerbot 2 is the intelligence layer at the centre of Runners
              Intel — built to help organisations turn knowledge into guidance,
              guidance into workflow, and workflow into better institutional
              intelligence.
            </p>

            <div className="intel-principle">
              <span>Operating principle</span>
              <strong>
                Human judgement remains in control where decisions matter.
              </strong>
            </div>
          </div>

          <div className="intel-flow">
            {[
              ["01", "Institution", "Real organisational context"],
              ["02", "Runnerbot 2", "AI guidance and assistance"],
              ["03", "Knowledge", "Structured institutional intelligence"],
              ["04", "Workflow", "Action and operational support"],
              ["05", "Human Oversight", "Judgement and accountability"],
              ["06", "Intelligence", "Learning and decision support"],
            ].map(([number, title, description]) => (
              <div className="flow-row" key={number}>
                <span className="flow-number">{number}</span>

                <div>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-shell use-case-shell">
          <div className="use-case-grid">
            <article>
              <span>Enterprise</span>
              <h3>Enterprise Intelligence</h3>
              <p>
                Guidance, readiness, workflow support and structured
                operational insight for institutions serving businesses and
                entrepreneurs.
              </p>
            </article>

            <article>
              <span>Education</span>
              <h3>Education OS</h3>
              <p>
                AI support for students, teachers, parents, school operations
                and leadership — with safeguarding and human oversight built
                into the operating model.
              </p>
            </article>

            <article>
              <span>Operations</span>
              <h3>Institutional Productivity</h3>
              <p>
                Knowledge assistance, workflow guidance, document support and
                executive intelligence designed to reduce friction and improve
                execution.
              </p>
            </article>

            <article>
              <span>Property + Retail</span>
              <h3>Physical-Space Intelligence</h3>
              <p>
                AI operating layers for complex physical environments,
                connecting information, commerce, service workflows and
                operational intelligence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= RUNNERS ERRANDS ================= */}
      <section id="errands" className="errands-section">
        <div className="page-shell errands-shell">
          <div className="errands-copy">
            <span className="eyebrow terracotta">
              Runners Errands
            </span>

            <h2>
              From a request on your phone
              <br />
              to <em>real-world execution.</em>
            </h2>

            <p>
              Runners Errands is an AI-assisted convenience and fulfilment operating system in staging for Lagos, initially focused on Victoria Island and Ikoyi. Live commercial activation is subject to field readiness.
            </p>

            <p>
              Instead of forcing users through multiple apps, stores and
              delivery processes, the platform is designed to let someone
              describe what they need naturally and then coordinate the
              operational journey required to get it done.
            </p>

            <div className="errands-access-note">
              <span>Investor access</span>
              <strong>
                A controlled operations-staging evaluator is available in the Investor &amp; Partner Room. It does not dispatch live riders or process real-money payments.
              </strong>
            </div>

            <a href="#partner-room" className="errands-partner-link">
              Access the Investor &amp; Partner Room <span>→</span>
            </a>
          </div>

          <div className="errands-flow">
            <div className="errands-flow-heading">
              <span className="eyebrow navy">Operating model</span>
              <h3>AI coordinates. Humans execute.</h3>
            </div>

            {[
              [
                "01",
                "Request",
                "The user describes what they need in natural language.",
              ],
              [
                "02",
                "Understand",
                "The AI operations layer structures the request and determines the next actions.",
              ],
              [
                "03",
                "Coordinate",
                "Stores, fulfilment requirements, timing and delivery are organised around the request.",
              ],
              [
                "04",
                "Execute",
                "Vetted human runners are intended to complete tasks after live dispatch is activated.",
              ],
              [
                "05",
                "Improve",
                "With permission, the platform can learn useful preferences and make repeat errands easier.",
              ],
            ].map(([number, title, description]) => (
              <div className="errands-flow-row" key={number}>
                <span>{number}</span>

                <div>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="page-shell errands-capabilities">
          <article>
            <span>01</span>
            <h3>Natural-Language Errands</h3>
            <p>
              Ask for what you need in the way you would naturally explain it
              to another person.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Trusted Fulfilment</h3>
            <p>
              Technology coordinates the process while verified human runners
              handle physical execution.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Recurring Convenience</h3>
            <p>
              The staged platform is designed to support scheduled and repeat errands after field testing.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Transparent Execution</h3>
            <p>
              Clear status, communication and accountability are designed into
              the operating experience.
            </p>
          </article>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section id="products" className="section paper-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow terracotta">
              Consumer products · varying stages
            </span>

            <h2>
              Intelligence also has to work
              <br />
              <em>for everyday people.</em>
            </h2>

            <p>
              Alongside our infrastructure platforms, we build focused
              consumer AI products around high-frequency Nigerian needs.
            </p>
          </div>

          <div className="consumer-grid">
            <article className="consumer-card">
              <div className="consumer-label">
                <span className="consumer-dot" />
                LIVE PRODUCT
              </div>

              <h3>Bites AI</h3>

              <p className="consumer-subtitle">
                AI food discovery and dining companion.
              </p>

              <p>
                Helps users discover what and where to eat through a
                conversational AI experience built around everyday food
                decisions.
              </p>

              <a
                href={BITES_AI}
                target="_blank"
                rel="noreferrer"
                className="button button-dark"
              >
                Open Bites AI <span>↗</span>
              </a>
            </article>

            <article className="consumer-card">
              <div className="consumer-label">
                <span className="consumer-dot" />
                LIVE PRODUCT
              </div>

              <h3>Padi AI</h3>

              <p className="consumer-subtitle">
                AI educational companion.
              </p>

              <p>
                A learning-focused AI experience designed to make knowledge,
                explanation and educational support more accessible and useful.
              </p>

              <a
                href={PADI_AI}
                target="_blank"
                rel="noreferrer"
                className="button button-dark"
              >
                Open Padi AI <span>↗</span>
              </a>
            </article>
            <article className="consumer-card">
              <div className="consumer-label"><span className="consumer-dot" /> LIVE PRODUCT / EARLY ACCESS</div>
              <h3>Sabe</h3>
              <p className="consumer-subtitle">The AI Companion for Life in Nigeria.</p>
              <p>Ask Sabe. Find Opportunity. Get It Done. A Nigeria-first companion for everyday guidance and practical opportunity discovery.</p>
              <a href={SABE} target="_blank" rel="noopener noreferrer" className="button button-dark">Open Sabe <span>↗</span></a>
            </article>
          </div>
        </div>
      </section>


      {/* ================= DELIVERY EVIDENCE ================= */}
      <section id="built-now" className="section surface-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow navy">Built now / next milestones</span>
            <h2>Real software. <em>Clear boundaries.</em></h2>
            <p>Existing products, controlled evaluators and planned field operations are different stages. We label them explicitly and evaluate outcomes before claiming deployment impact.</p>
          </div>
          <div className="principle-grid">
            <article><span>LIVE PRODUCT</span><h3>Bites AI · Padi AI · Sabe</h3><p>Accessible consumer software. Sabe is in early access; capabilities and availability continue to evolve.</p></article>
            <article><span>PRIVATE EVALUATION</span><h3>Runnerbot 2</h3><p>Controlled and synthetic evaluations explore education, healthcare, fintech, logistics, property, enterprise and organisational workflows. Capabilities vary by sector; these demonstrations do not establish institutional approval, contracts or live integrations.</p></article>
            <article><span>OPERATIONS STAGING</span><h3>Runnerbot 3 · Runners Errands</h3><p>Lagos operating software in staging. Real dispatch, rider onboarding, payments and proof-of-delivery require operational verification before commercial activation.</p></article>
            <article><span>PLANNED / PREPAREDNESS</span><h3>Runners Futures · Runnerbot 4</h3><p>Founding U16 football trials and future agent-governance infrastructure are preparatory workstreams, not live public services.</p></article>
          </div>
        </div>
      </section>

      {/* ================= RUNNERBOT FAMILY ================= */}
      <section id="runnerbot-family" className="section paper-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow terracotta">Runners intelligence architecture</span>
            <h2>One family. <em>Distinct missions.</em></h2>
            <p>Human authority, verifiable execution and institutional trust are central. The product family is not a claim that every layer has launched commercially.</p>
          </div>
          <div className="venture-grid">
            <article className="venture-card">
              <div className="venture-top"><span className="venture-number">01</span><span className="mini-status">AGRICULTURAL INTELLIGENCE</span></div>
              <h3>Runnerbot 1</h3>
              <p>Intelligence for Runners Agro and RAMAS agricultural workflows. Digital-platform availability is distinct from demonstrated field deployment.</p>
              <a href={RUNNERS_AGRO} target="_blank" rel="noopener noreferrer">Explore Runners Agro <span>↗</span></a>
            </article>
            <article className="venture-card">
              <div className="venture-top"><span className="venture-number">02</span><span className="mini-status">INSTITUTIONAL EVALUATORS</span></div>
              <h3>Runnerbot 2</h3>
              <p>Governed enterprise, education and institutional intelligence, combining grounded assistance, preparation, escalation and human-led decisions.</p>
              <a href="#partner-room">Explore selected evaluators <span>→</span></a>
            </article>
            <article className="venture-card">
              <div className="venture-top"><span className="venture-number">03</span><span className="mini-status">OPERATIONS STAGING</span></div>
              <h3>Runnerbot 3</h3>
              <p>Order understanding, serviceability and operations coordination for Runners Errands. Field operations, rider support and payments remain activation gates.</p>
              <a href="#errands">Explore the operating model <span>→</span></a>
            </article>
          </div>
          <div className="runnerbot4-mission">
            <span>RUNNERBOT 4 · PREPAREDNESS / MISSION · NOT LIVE</span>
            <strong>Future sovereign agent-authority infrastructure: Identity → Authority → Scope → Policy → Human Approval → Runtime Enforcement → Audit → Revocation / Kill.</strong>
            <p>Research and preparedness only. No completed implementation, institutional deployment or current commercial availability is claimed.</p>
          </div>
        </div>
      </section>

      {/* ================= RUNNERS FUTURES ================= */}
      <section id="futures" className="section surface-section">
        <div className="page-shell">
          <div className="section-heading">
            <span className="eyebrow navy">Runners Futures · Planned</span>
            <h2>Developing the next generation, <em>starting with football.</em></h2>
            <p>The proposed Lagos U16 founding talent-identification trials and development pathway remain subject to venue, safeguarding, coaching and operational readiness. No public registration is currently advertised as open.</p>
          </div>
        </div>
      </section>

      {/* ================= PARTNER ROOM ================= */}
      <section id="partner-room" className="partner-section">
        <div className="page-shell">
          <div className="partner-header">
            <div>
              <span className="eyebrow green">
                Investor &amp; Partner Room
              </span>

              <h2>
                See what we are
                <br />
                <em>actually building.</em>
              </h2>
            </div>

            <p>
              A curated collection of controlled, synthetic demonstrations, private evaluators and staged operating systems. Institutional evaluation does not establish a customer, investor or licensing relationship.
            </p>
          </div>

          {!roomOpen ? (
            <div className="room-lock">
              <div className="lock-icon">
                <span />
              </div>

              <div className="lock-copy">
                <span className="eyebrow light">
                  Controlled access
                </span>

                <h3>Enter the Partner Room</h3>

                <p>
                  Enter the private access code provided by Runners Futurum. The server verifies access and sessions expire automatically. Each evaluator has its own controls. Use synthetic information only.
                </p>
              </div>

              <form onSubmit={unlockRoom} className="lock-form">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="Access code"
                  aria-label="Partner Room access code"
                />

                <button type="submit">
                  {roomBusy ? "Verifying…" : "Enter room"} <span>→</span>
                </button>

                {passwordError && (
                  <span className="password-error">
                    Access code not recognised.
                  </span>
                )}
              </form>
            </div>
          ) : (
            <>
              <div className="room-open-bar">
                <div>
                  <span className="room-open-dot" />
                  PARTNER ROOM VIEW OPEN
                </div>

                <button onClick={lockRoom}>
                  Lock room
                </button>
              </div>

              <div className="demo-grid">
                {demoCards.map((demo) => (
                  <article className="demo-card" key={demo.name}>
                    <div className="demo-top">
                      <span>{demo.number}</span>
                      <small>{demo.type}</small>
                    </div>

                    <h3>{demo.name}</h3>

                    <p>{demo.description}</p>
                    <p className="mini-status" style={{ marginTop: 10, marginBottom: 12 }}>{demo.status}</p>

                    <a
                      href={demo.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open demonstration <span>↗</span>
                    </a>
                  </article>
                ))}
              </div>

              <div className="partner-note">
                <div>
                  <span className="eyebrow green">
                    Strategic collaboration
                  </span>

                  <h3>
                    Building something important in Nigeria?
                  </h3>
                </div>

                <p>
                  Runners Futurum is open to conversations with institutions,
                  investors and strategic partners around high-value AI
                  infrastructure and technology deployment.
                </p>

                <a
                  href={`mailto:${EMAIL}?subject=Runners%20Futurum%20Strategic%20Collaboration`}
                  className="button button-green"
                >
                  Start a conversation <span>→</span>
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="closing-section">
        <div className="page-shell closing-inner">
          <span className="eyebrow green">
            Runners Futurum
          </span>

          <h2>
            Nigeria&apos;s next generation of
            <br />
            <em>intelligent systems starts here.</em>
          </h2>

          <p>
            We are building the platforms, operating intelligence and
            technology businesses required for a more productive,
            technologically capable Nigerian future.
          </p>

          <div className="closing-actions">
            <a
              href={`mailto:${EMAIL}`}
              className="button button-green"
            >
              Work with Runners Futurum <span>→</span>
            </a>

            <a href="#portfolio" className="button button-ghost">
              Explore the platforms
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <div className="footer-brand">
            <Image
              src="/logo.jpg"
              alt="Runners Futurum"
              width={36}
              height={36}
            />

            <div>
              <strong>Runners Futurum</strong>
              <span>Intelligence. Innovation. Impact.</span>
            </div>
          </div>

          <div className="footer-links">
            <a href={RUNNERS_AGRO} target="_blank" rel="noreferrer">
              Runners Agro
            </a>

            <a href={BITES_AI} target="_blank" rel="noreferrer">
              Bites AI
            </a>

            <a href={PADI_AI} target="_blank" rel="noreferrer">
              Padi AI
            </a>

            <a href={SABE} target="_blank" rel="noopener noreferrer">
              Sabe
            </a>
          </div>

          <div className="footer-meta">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>© 2026 Runners Futurum · Product status varies by stage</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
