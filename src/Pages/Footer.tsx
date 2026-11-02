import {
  PRIVACY_POLICY_URL,
  REFUND_CANCELLATION_URL,
  SUPPORT_CONTACT_URL,
  TERMS_URL,
} from "../config";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#howItWorks" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#062D25] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="max-w-md">
          <a href="https://jayamwebsolutions.com/" className="inline-flex items-center gap-3">
            <img
              src="/jayam-web-solutions-logo.png"
              alt="Jayam Websolution"
              className="h-10 w-auto object-contain"
            />
            <span className="font-display text-sm font-bold text-white">
              Quotation Generator
            </span>
          </a>
          <p className="mt-4 text-sm leading-6 text-white/70">
            A simpler way to create professional quotations and keep your
            business workflow organized.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/90">
            Jayam Websolution
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#82BDA7]">
            Explore
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#82BDA7]">
            More Products
          </h2>
          <a
            href="https://jayam.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-white"
          >
            Explore Jayam products
            <span aria-hidden="true">↗</span>
          </a>
          <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#82BDA7]">
            Policies & Support
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {[
              { label: "Privacy Policy", href: PRIVACY_POLICY_URL },
              { label: "Terms", href: TERMS_URL },
              { label: "Refund/Cancellation", href: REFUND_CANCELLATION_URL },
              { label: "Support/Contact", href: SUPPORT_CONTACT_URL },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            &copy; {currentYear} Jayam Websolution. All rights reserved.
          </p>
          <a
            href="#home"
            className="transition-colors hover:text-white"
            aria-label="Back to top"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
