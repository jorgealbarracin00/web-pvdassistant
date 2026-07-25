import Image from "next/image";
import Link from "next/link";

const capabilities = [
  "Machine workflow", "Production queues", "Trolley management", "Colour recipes",
  "Versioned LAB targets", "Quality measurements", "Uniformity evaluation",
  "Maintenance recording", "Incident recording", "Production history",
  "Engineering Investigation Workspace", "Local deterministic engineering evidence",
  "Optional engineering consultation when configured",
];

const principles = [
  ["History is preserved", "Manufacturing records remain a reliable account of what happened on the factory floor."],
  ["Evidence stays intact", "Measurements remain immutable, while quality rules can evolve without rewriting history."],
  ["People make the decisions", "Engineering conclusions remain human decisions. AI is optional and operator initiated."],
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Built for coating operations</p>
          <h1>PVD Assistant</h1>
          <p className="hero-statement">
            <span>Factory memory.</span>
            <span>Production clarity.</span>
            <span className="accent-text">Engineering insight.</span>
          </p>
          <p className="hero-intro">
            PVD Assistant helps manufacturing teams organise production workflows,
            preserve factory knowledge and investigate coating behaviour using
            structured engineering evidence.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#overview">Explore the product</Link>
            <Link className="button secondary" href="/support">Get support</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-frame">
            <Image
              src="/pvd-hero.webp"
              alt="PVD Assistant machine workspace showing production controls and coating information"
              width={1536}
              height={1024}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="signal-card">
            <span className="signal-line" />
            <div><strong>Factory record</strong><small>Structured. Traceable. Available.</small></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="overview">
        <div className="section-heading">
          <p className="eyebrow">Product overview</p>
          <h2>One clear record of production work.</h2>
          <p>
            Daily workflows, measurements and engineering context are organised
            around the machines and teams that use them.
          </p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <div className="capability" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section philosophy">
        <div className="shell">
          <div className="section-heading narrow">
            <p className="eyebrow">Engineering philosophy</p>
            <h2>Evidence first. Decisions stay human.</h2>
          </div>
          <div className="principle-grid">
            {principles.map(([title, body]) => (
              <article className="panel" key={title}>
                <span className="panel-rule" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell factory-section">
        <div>
          <p className="eyebrow">Built for the factory</p>
          <h2>Designed for iPad use beside production equipment.</h2>
        </div>
        <div className="factory-copy">
          <p>
            Large controls and a clear machine overview keep the application useful
            where the work happens. Operators can follow live production, assign
            trolleys quickly and record maintenance without leaving the workflow.
          </p>
          <p>
            When a coating result needs closer attention, the Engineering
            Investigation Workspace brings production history, measurements and
            notes together for review.
          </p>
        </div>
      </section>

      <section className="section shell">
        <div className="about-panel">
          <div>
            <p className="eyebrow">About GAMA DYNAMICS</p>
            <h2>Engineering software with a clear purpose.</h2>
          </div>
          <p>
            PVD Assistant is designed and developed by GAMA DYNAMICS in Australia.
          </p>
        </div>
      </section>
    </main>
  );
}
