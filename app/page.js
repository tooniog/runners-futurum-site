"use client";

import { useState } from "react";

const BITES_AI = "https://bitesai-production.up.railway.app/";
const PADI_AI = "https://padiai-v2-production.up.railway.app/?v=8";
const INSTAGRAM = "https://instagram.com/runnersfuturum";
const EMAIL = "runnersfuturum@gmail.com";
const PHONE = "+2348180702081";
const INVESTOR_PASSWORD = "RUNNERS2026";

const RUNNERS_INTEL_DEMO =
  "https://cakehunter-xtupwyhxkmkqzmgwbpru3l.streamlit.app";

const RUNNERS_AGRO_DEMO =
  "https://runnerbot1-demo-8ugjjko9edsvk6wjat9jgr.streamlit.app/";

const RUNNERS_HEALTH_EDU_DEMO =
  "https://runners-intel-health-education-demo-beqhkm5oaeij68kszyewwl.streamlit.app/";

function runnerbotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("bites") || text.includes("food") || text.includes("restaurant")) {
    return "Bites AI is Runners Futurum’s food-intelligence product. It is designed to help users and food businesses make smarter food decisions, discover options faster, and create a stronger AI-powered food experience.";
  }

  if (text.includes("padi") || text.includes("friend") || text.includes("companion")) {
    return "Padi AI is a locally-aware AI companion concept built for practical conversation, guidance, support, and everyday usefulness for Nigerian users.";
  }

  if (text.includes("invest") || text.includes("fund") || text.includes("partner")) {
    return "Runners Futurum is open to strategic investment, institutional pilots, funding, sponsorship, and partnerships across Runners Intel, Runners Agro, Runners Errands, Bites AI, Padi AI, Runnerbot 2 SME Growth Agent, and the Healthcare + Education AI pilots. Serious partners can use the investor room or contact runnersfuturum@gmail.com.";
  }

  if (
    text.includes("health") ||
    text.includes("clinic") ||
    text.includes("hospital") ||
    text.includes("education") ||
    text.includes("school") ||
    text.includes("waec") ||
    text.includes("jamb")
  ) {
    return "The Healthcare + Education demo is a Runners Intel pilot package. Healthcare AI supports symptom triage, urgency routing, case logging and admin intelligence. Education AI supports WAEC/JAMB explanations, quizzes, answer marking, next lessons and teacher dashboards. The demo is available in the investor room.";
  }

  if (text.includes("agro") || text.includes("farm") || text.includes("agriculture") || text.includes("ogun")) {
    return "Runners Agro is the agriculture innovation arm focused on Ogun State and Nigeria: sustainable farming, AI-enabled operations, data-led production, market access, and long-term food infrastructure. The Runners Agro demo is available in the investor room.";
  }

  if (text.includes("errands") || text.includes("delivery") || text.includes("logistics") || text.includes("lagos")) {
    return "Runners Errands is the planned Lagos convenience and logistics platform: errands, delivery, dispatch, household support, SME fulfilment, and partner-led urban operations. It is open to funding, sponsorship, and operational partnerships.";
  }

  if (text.includes("runnerbot") || text.includes("intel") || text.includes("sme")) {
    return "Runnerbot 2 is the Runners Intel AI command layer. Venture 1 is the SME Growth Agent: a WhatsApp-first copilot for leads, follow-ups, invoicing, payments, delivery, and customer memory. The live demo is inside the investor room.";
  }

  return "Runners Futurum is building practical AI and innovation infrastructure for Nigeria, starting with Runners Intel, Runners Agro, Runners Errands, Bites AI, Padi AI, Runnerbot 2 SME Growth Agent, and Healthcare + Education AI pilots. Ask me about investment, partnerships, Bites AI, Padi AI, Agro, Errands, Healthcare, Education, or Runnerbot 2.";
}

export default function Home() {
  const [password, setPassword] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Welcome. I’m Runnerbot 2 for Runners Futurum. Ask me about the company, products, demos, investment, or partnerships.",
    },
  ]);

  const investorUnlocked = password === INVESTOR_PASSWORD;

  function sendMessage() {
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const botText = runnerbotReply(userText);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userText },
      { role: "bot", text: botText },
    ]);

    setChatInput("");
  }

  return (
    <main className="min-h-screen bg-[#f7fafc] text-slate-950">
      <section className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10">
        <header className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
              <img
                src="/logo.jpg"
                alt="Runners Futurum logo"
                className="z-10 h-full w-full object-contain p-1"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <span className="absolute text-xl font-black text-blue-900">R</span>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-900">
                Lagos • Ogun • Nigeria
              </p>
              <h1 className="text-xl font-black tracking-tight md:text-2xl">
                Runners Futurum
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            <a href="#products" className="nav-link">Products</a>
            <a href="#investors" className="nav-link">Investors</a>
            <a href="#runnerbot" className="nav-link">Runnerbot 2</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </header>

        <section className="hero-card">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-lime-300">
              AI venture studio • Practical innovation • Nigerian execution
            </p>

            <h2 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
              Building Nigeria’s future with AI, agriculture, logistics and intelligence.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
              Runners Futurum connects practical Nigerian problems with intelligent products:
              SME growth automation, food intelligence, AI companionship, agriculture,
              logistics, healthcare, education and enterprise-grade innovation across Lagos,
              Ogun State and Nigeria.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BITES_AI} target="_blank" rel="noreferrer" className="btn btn-lime">
                Open Bites AI
              </a>
              <a href={PADI_AI} target="_blank" rel="noreferrer" className="btn btn-white">
                Open Padi AI
              </a>
              <a href="#investors" className="btn btn-outline">
                Investor room
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["AI-first", "Nigeria-localised", "Lagos + Ogun", "Investor-ready", "Built for scale"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          <Metric label="Primary market" value="Nigeria" />
          <Metric label="Launch focus" value="Lagos + Ogun" />
          <Metric label="Core engine" value="AI agents" />
          <Metric label="Long-term vision" value="Infrastructure" />
        </section>

        <section className="section" id="mission">
          <div className="section-heading">
            <p className="eyebrow">Mission</p>
            <h2>One company. Multiple AI-native Nigerian opportunities.</h2>
            <p>
              Runners Futurum is designed as a future-facing operating company:
              product-first, investor-ready and focused on real-world Nigerian execution.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <VentureCard
              title="Runners Intel"
              text="AI venture intelligence for Nigeria: SME growth agents, education AI, healthcare workflows, fintech intelligence, logistics optimisation and enterprise pilots."
            />
            <VentureCard
              title="Runners Agro"
              text="Agriculture innovation for Ogun State and Nigeria: data-led farming, farm operations, market access, sustainability and future food systems."
            />
            <VentureCard
              title="Runners Errands"
              text="A future logistics and convenience platform for Lagos: errands, delivery, dispatch, household support, SME fulfilment and partner-led execution."
            />
          </div>
        </section>

        <section className="section" id="products">
          <div className="section-heading">
            <p className="eyebrow">Live products</p>
            <h2>Bites AI and Padi AI are the first public signals.</h2>
            <p>
              These products show the Runners Futurum direction: useful AI interfaces,
              Nigerian localisation and rapid venture deployment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ProductCard
              title="Bites AI"
              label="Food intelligence"
              text="Food intelligence and customer-facing AI experience designed to make food discovery, ordering support and food-related decisions faster and smarter."
              href={BITES_AI}
              button="Launch Bites AI"
              green
            />
            <ProductCard
              title="Padi AI"
              label="AI companion"
              text="A locally-aware AI companion concept built around conversation, guidance, practical support and human-centred usefulness for Nigerian users."
              href={PADI_AI}
              button="Launch Padi AI"
            />
          </div>
        </section>

        <section className="section" id="investors">
          <div className="section-heading">
            <p className="eyebrow">Investor and partner room</p>
            <h2>Restricted access for serious capital, pilots and partnerships.</h2>
            <p>
              Access the Runners Intel SME Growth demo, Runners Agro demo,
              Healthcare + Education pilot demo, and partnership routes for Runners Errands.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <label className="text-sm font-bold text-slate-700">
              Investor password
            </label>

            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter access password"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-blue-900/10 focus:ring-4"
            />

            {!password && (
              <p className="mt-3 text-sm text-slate-500">
                For access, contact Runners Futurum by email or phone.
              </p>
            )}

            {password && !investorUnlocked && (
              <p className="mt-3 text-sm font-bold text-red-600">
                Access not approved. Contact Runners Futurum for investor access.
              </p>
            )}

            {investorUnlocked && (
              <div className="mt-6">
                <p className="mb-4 rounded-2xl bg-lime-50 px-4 py-3 text-sm font-bold text-lime-800">
                  Access approved by Runnerbot 2.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <LockedCard
                    title="Runners Intel Demo"
                    text="View the Runnerbot 2 SME Growth Agent and AI intelligence workflow for investor, partner and strategic demo discussions."
                    href={RUNNERS_INTEL_DEMO}
                    button="Open Runners Intel Demo"
                  />

                  <LockedCard
                    title="Runners Agro Demo"
                    text="View the Runners Agro demo: the agriculture innovation layer for Ogun State and Nigeria, built around AI, data-led farming, market access and scalable agribusiness execution."
                    href={RUNNERS_AGRO_DEMO}
                    button="Open Runners Agro Demo"
                  />

                  <LockedCard
                    title="Healthcare + Education Pilot Demo"
                    text="View the demo-grade Runners Intel pilot for healthcare triage and education support. Built to support 90-day pilots with clinics, schools, ministries, universities and institutional partners."
                    href={RUNNERS_HEALTH_EDU_DEMO}
                    button="Open Health + Education Demo"
                  />
                </div>

                <div className="mt-4 rounded-3xl bg-slate-950 p-5 text-white">
                  <h3 className="text-xl font-black">
                    Partner with or fund Runners Errands
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                    Reach out to discuss Lagos logistics, errand operations,
                    sponsorship, funding or strategic partnerships.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a className="btn btn-lime" href={`mailto:${EMAIL}`}>
                      Email Runners Futurum
                    </a>
                    <a className="btn btn-outline" href={`tel:${PHONE}`}>
                      Call / WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section" id="runnerbot">
          <div className="section-heading">
            <p className="eyebrow">Runnerbot 2</p>
            <h2>Ask the Runners Futurum AI assistant.</h2>
            <p>
              Ask about Runners Futurum, Bites AI, Padi AI, Runners Agro,
              Runners Intel, Runners Errands, Healthcare, Education, investment or partnerships.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="mb-4 max-h-[420px] space-y-3 overflow-y-auto rounded-2xl bg-slate-50 p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === "user"
                      ? "ml-auto max-w-[86%] rounded-2xl bg-blue-950 px-4 py-3 text-white"
                      : "mr-auto max-w-[86%] rounded-2xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200"
                  }
                >
                  {message.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:flex-row">
              <input
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") sendMessage();
                }}
                placeholder="Ask about Bites AI, Padi AI, investment, Agro, Errands, Healthcare, Education or Runnerbot 2..."
                className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-blue-900/10 focus:ring-4"
              />

              <button onClick={sendMessage} className="btn btn-blue">
                Ask Runnerbot 2
              </button>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="eyebrow text-lime-300">Contact</p>
            <h2 className="text-3xl font-black md:text-4xl">
              Build, invest, pilot or partner with Runners Futurum.
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn btn-lime">
                @runnersfuturum
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-white">
                {EMAIL}
              </a>
              <a href={`tel:${PHONE}`} className="btn btn-outline">
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}

function VentureCard({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function ProductCard({ title, label, text, href, button, green }) {
  return (
    <div className="card">
      <p className="eyebrow">{label}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={green ? "btn btn-lime mt-4" : "btn btn-blue mt-4"}
      >
        {button}
      </a>
    </div>
  );
}

function LockedCard({ title, text, href, button }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-xl font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="btn btn-blue mt-4"
      >
        {button}
      </a>
    </div>
  );
}