import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PVD Assistant processes, protects and retains account and manufacturing information.",
};

export default function Privacy() {
  return (
    <main id="main-content" className="legal-main">
      <header className="page-hero shell">
        <p className="eyebrow">Trust &amp; transparency</p>
        <h1>Privacy Policy</h1>
        <p className="page-lead">How information is handled when you use PVD Assistant.</p>
        <dl className="date-row">
          <div><dt>Effective date</dt><dd>26 July 2026</dd></div>
          <div><dt>Last updated</dt><dd>26 July 2026</dd></div>
        </dl>
      </header>

      <div className="shell legal-layout">
        <aside className="legal-aside" aria-label="Privacy policy sections">
          <p>On this page</p>
          <nav>
            <a href="#information">Information processed</a>
            <a href="#services">Third-party services</a>
            <a href="#deletion">Account deletion</a>
            <a href="#rights">Your enquiries</a>
            <a href="#contact">Contact</a>
          </nav>
        </aside>
        <article className="prose">
          <section>
            <h2>Introduction</h2>
            <p>PVD Assistant is an industrial engineering application developed by GAMA DYNAMICS in Australia. This policy explains the information the application may process and why.</p>
          </section>
          <section id="information">
            <h2>Information processed</h2>
            <p>Depending on how you use PVD Assistant, the application may process:</p>
            <ul>
              <li>your Sign in with Apple identity, including an Apple-supplied name or email where available;</li>
              <li>a Firebase Authentication identifier and an internal user identifier;</li>
              <li>factory memberships and user roles;</li>
              <li>machines, colours, trolleys, production runs and recipes;</li>
              <li>LAB measurements, quality evaluations, maintenance records and incident records; and</li>
              <li>engineering notes and consultation records, where applicable.</li>
            </ul>
          </section>
          <section>
            <h2>Why information is processed</h2>
            <p>Information is processed to authenticate users, authorise factory membership, synchronise production information, maintain manufacturing history, perform engineering calculations, improve reliability, provide support, perform account deletion and provide optional engineering consultation when explicitly requested.</p>
          </section>
          <section id="services">
            <h2>Third-party services</h2>
            <h3>Apple</h3>
            <p>Sign in with Apple is used to provide account authentication.</p>
            <h3>Google Firebase</h3>
            <p>Firebase Authentication, Firestore, Cloud Functions and App Check are used to authenticate users, store and synchronise authorised information, run trusted backend operations and help protect backend resources.</p>
            <h3>OpenAI</h3>
            <p>OpenAI is used only when an operator explicitly requests engineering consultation through the trusted backend. OpenAI does not receive every production run as part of normal application use.</p>
          </section>
          <section>
            <h2>Data sharing</h2>
            <p>Factory information is shared only with authorised members of the same factory. GAMA DYNAMICS does not sell personal information, and PVD Assistant does not use advertising networks.</p>
            <p>Information may be processed by the infrastructure providers required to operate the application, or disclosed where legally required.</p>
          </section>
          <section id="deletion">
            <h2>Account deletion</h2>
            <p>Users may request account deletion inside the application. The sign-in identity and factory memberships are removed. If the user owns a factory, ownership may need to be transferred before deletion can be completed.</p>
            <p>Manufacturing history may remain for engineering traceability, with personal attribution anonymised where applicable. Recipes, measurements and production history are not silently rewritten when an account is deleted.</p>
          </section>
          <section>
            <h2>Data retention</h2>
            <p>Account information is retained only while it is required to provide the service or meet legitimate operational requirements. Manufacturing history may be retained for engineering traceability. Retention depends on the nature of the record and the factory context.</p>
          </section>
          <section>
            <h2>Security</h2>
            <p>GAMA DYNAMICS uses reasonable safeguards appropriate to the application, including authentication, authorisation controls and cloud security measures. No system can guarantee perfect security.</p>
          </section>
          <section>
            <h2>International processing</h2>
            <p>Cloud infrastructure providers may process information in countries outside the user&apos;s country. Their processing is subject to their own infrastructure, safeguards and applicable terms.</p>
          </section>
          <section>
            <h2>Children</h2>
            <p>PVD Assistant is an industrial engineering application and is not directed toward children.</p>
          </section>
          <section id="rights">
            <h2>Your enquiries</h2>
            <p>You may contact GAMA DYNAMICS regarding access to or correction of account information, deletion requests, or other privacy enquiries. Available options may depend on the information involved and applicable law.</p>
          </section>
          <section>
            <h2>Changes to this policy</h2>
            <p>This Privacy Policy may be updated as PVD Assistant, its infrastructure or applicable requirements change. The effective date and last updated date will be revised when changes are published.</p>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <address>
              <strong>GAMA DYNAMICS</strong><br />
              Australia<br />
              <a href="mailto:jorge.albarracin@gamadynamics.com.au">jorge.albarracin@gamadynamics.com.au</a>
            </address>
          </section>
          <aside className="review-note">
            <strong>Legal review</strong>
            <p>This policy should receive legal review before broader commercial deployment.</p>
          </aside>
        </article>
      </div>
    </main>
  );
}
