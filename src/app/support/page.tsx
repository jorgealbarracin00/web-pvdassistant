import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with your PVD Assistant account, factory setup or production workflow.",
};

const topics = [
  ["Sign in with Apple", "Check that you are using the Apple Account connected to your existing PVD Assistant profile."],
  ["Joining a factory", "Use the factory invitation or membership details supplied by an authorised factory member."],
  ["Creating a factory", "Create a factory from the setup flow, then confirm the details before inviting members."],
  ["Factory roles", "Factory owners or authorised members manage roles. Ask your factory owner if access needs to change."],
  ["Sync issues", "Confirm your internet connection, keep the app open briefly and check that you are signed into the expected account."],
  ["Offline mode", "Some work can remain available while offline. Allow the app to reconnect before assuming a record has not synchronised."],
  ["Account deletion", "Request deletion from inside PVD Assistant. Manufacturing history may remain for traceability with attribution anonymised where applicable."],
  ["Ownership transfer", "A factory owner may need to transfer ownership before their account can be deleted."],
  ["Reporting bugs", "Include the device and app details below, what you expected, what occurred and the steps that led to the issue."],
];

export default function Support() {
  const mailto = "mailto:jorge.albarracin@gamadynamics.com.au?subject=PVD%20Assistant%20Support";
  return (
    <main id="main-content">
      <header className="page-hero shell support-hero">
        <p className="eyebrow">Product support</p>
        <h1>PVD Assistant Support</h1>
        <p className="page-lead">Need help with your account, factory setup or production workflow?</p>
        <a className="button primary" href={mailto}>Email GAMA DYNAMICS</a>
      </header>

      <section className="section shell support-grid">
        <div className="contact-card panel">
          <p className="eyebrow">Contact</p>
          <h2>Tell us what happened.</h2>
          <a className="contact-email" href={mailto}>jorge.albarracin@gamadynamics.com.au</a>
          <p className="response-copy">We aim to respond as soon as reasonably possible.</p>
        </div>
        <div className="support-details">
          <div className="checklist">
            <h2>Please include</h2>
            <ul>
              <li>App version</li><li>iPad model</li><li>iPadOS version</li>
              <li>Factory name, where appropriate</li><li>A clear description</li>
              <li>A screenshot, if useful</li><li>Approximate date and time</li>
            </ul>
          </div>
          <div className="warning-box">
            <h2>Please do not send</h2>
            <p>Passwords, Apple credentials, API keys, or confidential production information unless specifically requested.</p>
          </div>
        </div>
      </section>

      <section className="section shell topics-section">
        <div className="section-heading">
          <p className="eyebrow">Common topics</p>
          <h2>Useful first steps.</h2>
        </div>
        <div className="topic-grid">
          {topics.map(([title, body]) => (
            <article className="topic" key={title}><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
