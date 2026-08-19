import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import FlowPilotLogo from "../../logos/flowpilot";
import { ModeToggle } from "../../ui/mode-toggle";

const navLinks = [
  { text: "Product", href: "#product" },
  { text: "Solutions", href: "#how-it-works" },
  { text: "How it works", href: "#how-it-works" },
  { text: "Pricing", href: "#pricing" },
  { text: "FAQ", href: "#faq" },
];

/**
 * Ultra-Professional Floating Glass Navbar Component
 * Hides on scroll down and re-appears on scroll up.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down past 60px, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          
          {/* Left Side: Brand Logo + Nav Links */}
          <div className="flex items-center gap-8">
            {/* Brand Logo */}
            <a href="/" className="flex items-center gap-2.5 text-base font-bold tracking-tight hover:opacity-90 transition-opacity">
              <FlowPilotLogo size={26} />
              <span className="text-lg font-extrabold tracking-tight">FlowPilot</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side: Theme Switcher, Sign In, Primary CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle Dropdown */}
            <div className="flex items-center">
              <ModeToggle />
            </div>

            {/* Desktop Sign In */}
            <a
              href="#sign-in"
              className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
            >
              Sign in
            </a>

            {/* Primary Get Started CTA Button */}
            <a
              href="#get-started"
              className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-foreground text-background hover:bg-foreground/90 px-4 py-2 text-sm font-semibold shadow-xs transition-all active:scale-[0.98]"
            >
              <span>Get started</span>
              <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/40 pt-4 pb-2 mt-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                {link.text}
              </a>
            ))}

            <div className="border-t border-border/40 pt-3 mt-2 flex flex-col gap-2.5">
              <a
                href="#sign-in"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Sign in
              </a>
              <a
                href="#get-started"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-foreground text-background py-2.5 text-sm font-semibold text-center"
              >
                <span>Get started</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}





