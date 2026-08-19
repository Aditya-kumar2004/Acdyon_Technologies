import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import FlowPilotLogo from "../../logos/flowpilot";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Globe,
} from "lucide-react";

// ==========================================
// Vector Social Icons Components
// ==========================================
const GithubIcon = (props) => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
  </svg>
);

const DiscordIcon = (props) => (
  <svg width={17} height={17} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// ==========================================
// Footer Link Navigation Data Arrays
// ==========================================
const productLinks = [
  { text: "AI Workflow Builder", href: "#product" },
  { text: "Smart Triggers", href: "#product" },
  { text: "Team Insights", href: "#product" },
  { text: "Integrations", href: "#product" },
  { text: "Security & Trust", href: "#" },
  { text: "Changelog", href: "#", badge: "v2.10" },
  { text: "Roadmap", href: "#" },
];

const solutionLinks = [
  { text: "Engineering Teams", href: "#how-it-works" },
  { text: "Product Operations", href: "#how-it-works" },
  { text: "Customer Support", href: "#how-it-works" },
  { text: "Enterprise AI", href: "#pricing" },
  { text: "Startups & Scaleups", href: "#pricing" },
];

const resourceLinks = [
  { text: "Documentation", href: "#" },
  { text: "API Reference", href: "#" },
  { text: "Community Forum", href: "#" },
  { text: "Blog & Guides", href: "#" },
  { text: "Customer Stories", href: "#" },
  { text: "System Status", href: "#" },
];

const companyLinks = [
  { text: "About Us", href: "#" },
  { text: "Careers", href: "#", badge: "Hiring" },
  { text: "Press Kit", href: "#" },
  { text: "Brand Assets", href: "#" },
  { text: "Contact Sales", href: "#" },
  { text: "Privacy Policy", href: "#" },
  { text: "Terms of Service", href: "#" },
];

/**
 * FooterSection Component
 * Beginner-friendly structure displaying newsletter subscription, brand information,
 * category links, and legal/compliance notices.
 */
export default function FooterSection({ className }) {
  // Local React state for managing email input and subscription confirmation feedback
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Simple form submit handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset subscription status after 4 seconds
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className={cn("bg-background relative w-full border-t border-border/40 px-4 pt-16 pb-8", className)}>
      <div className="max-w-container mx-auto flex flex-col gap-12">
        {/* Top Newsletter Card */}
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-card/80 via-card/40 to-background p-6 md:p-10 shadow-sm backdrop-blur-xs">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                <Sparkles size={13} />
                <span>Stay ahead with FlowPilot</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Get the latest AI workflow insights
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Join 15,000+ engineering & product leaders receiving our monthly automation teardowns and product updates.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background/80 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 px-5 py-2.5 text-sm font-medium transition-all shrink-0 cursor-pointer shadow-xs active:scale-[0.98]"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Links */}
        <Footer>
          <FooterContent className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
            {/* Brand Column */}
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <FlowPilotLogo size={28} />
                <span className="text-xl font-bold tracking-tight">FlowPilot</span>
                <span className="rounded-full bg-brand/10 border border-brand/20 px-2 py-0.5 text-[10px] font-medium text-brand">
                  AI Platform
                </span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                FlowPilot brings projects, priorities, workload, and intelligent insights into one calm, unified workspace for high-performing teams.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>All Systems Operational</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2 pt-2">
                {[
                  { icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                  { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
                  { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: DiscordIcon, href: "https://discord.com", label: "Discord" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-card text-muted-foreground hover:border-brand/40 hover:bg-accent hover:text-foreground transition-all hover:scale-105 active:scale-95"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </FooterColumn>

            {/* Product Column */}
            <FooterColumn>
              <h4 className="text-sm font-semibold tracking-wide text-foreground">Product</h4>
              <ul className="space-y-2.5 text-sm">
                {productLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{link.text}</span>
                      {link.badge && (
                        <span className="rounded-full bg-accent border border-border px-1.5 py-0.2 text-[10px] font-mono text-muted-foreground">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Solutions Column */}
            <FooterColumn>
              <h4 className="text-sm font-semibold tracking-wide text-foreground">Solutions</h4>
              <ul className="space-y-2.5 text-sm">
                {solutionLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Resources Column */}
            <FooterColumn>
              <h4 className="text-sm font-semibold tracking-wide text-foreground">Resources</h4>
              <ul className="space-y-2.5 text-sm">
                {resourceLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Company Column */}
            <FooterColumn>
              <h4 className="text-sm font-semibold tracking-wide text-foreground">Company</h4>
              <ul className="space-y-2.5 text-sm">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span>{link.text}</span>
                      {link.badge && (
                        <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.2 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </FooterContent>

          {/* Footer Bottom Bar */}
          <FooterBottom className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-muted-foreground text-xs">
              <span>© {new Date().getFullYear()} FlowPilot, Inc. All rights reserved.</span>
              <div className="hidden sm:block h-3 w-px bg-border" />
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <ShieldCheck size={13} className="text-emerald-500" />
                  SOC-2 Type II
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-muted-foreground">
                  <Globe size={13} />
                  GDPR Ready
                </span>
              </div>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

