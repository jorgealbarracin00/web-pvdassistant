import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pvdassistant.gamadynamics.com.au"),
  title: {
    default: "PVD Assistant — Factory memory and engineering insight",
    template: "%s | PVD Assistant",
  },
  description:
    "PVD Assistant helps manufacturing teams organise production workflows, preserve factory knowledge and investigate coating behaviour.",
  applicationName: "PVD Assistant",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "PVD Assistant",
    title: "PVD Assistant — Factory memory and engineering insight",
    description:
      "Structured production workflows, preserved factory knowledge and engineering evidence for coating teams.",
    images: [{ url: "/og.png", width: 1733, height: 909, alt: "PVD Assistant — Factory memory. Production clarity. Engineering insight." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PVD Assistant",
    description: "Factory memory. Production clarity. Engineering insight.",
    images: ["/og.png"],
  },
};

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <div className="shell nav-wrap">
            <Link className="brand" href="/" aria-label="PVD Assistant home">
              <BrandMark />
              <span>PVD Assistant</span>
            </Link>
            <nav aria-label="Primary navigation">
              <Link href="/">PVD Assistant</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/support">Support</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div>
              <p className="footer-brand">GAMA DYNAMICS</p>
              <p className="footer-note">Industrial software, designed in Australia.</p>
            </div>
            <nav aria-label="Footer navigation">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/support">Support</Link>
              <a href="mailto:jorge.albarracin@gamadynamics.com.au">Contact</a>
            </nav>
          </div>
          <div className="shell copyright">
            © {new Date().getFullYear()} GAMA DYNAMICS. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
