import React from "react";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import Glow from "../../ui/glow";
import ThreeBackground from "../../ui/three-background";

/**
 * Beginner-Friendly Hero Section Component
 * Displays main headline, tagline, animated 3D background, and CTA buttons.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden py-20 sm:py-28 md:py-36 border-b-0">
      {/* 3D Interactive Particle Field Animation */}
      <ThreeBackground className="opacity-90" />

      {/* Atmospheric Glow Background */}
      <Glow variant="top" className="opacity-70 pointer-events-none" />

      {/* Bottom Fade Gradient for smooth transition */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />

      {/* Main Content Container */}
      <div className="max-w-6xl relative z-20 mx-auto flex flex-col items-center gap-6 text-center sm:gap-10 px-4">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold shadow-lg">
          <span className="flex items-center gap-1.5 text-brand">
            <SparklesIcon className="size-3.5 animate-pulse" />
            <span>AI Workflow Intelligence 2.0</span>
          </span>
          <span className="text-muted-foreground/60">•</span>
          <a href="#workspace-demo" className="flex items-center gap-1 text-foreground hover:text-brand transition-colors">
            See live preview
            <ArrowRightIcon className="size-3" />
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl leading-tight">
          Your team&apos;s work,
          <br />
          <span className="from-brand via-amber-300 to-orange-400 bg-gradient-to-r bg-clip-text text-transparent">
            finally in sync.
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-muted-foreground max-w-2xl text-base sm:text-xl font-medium leading-relaxed">
          FlowPilot brings projects, priorities, capacity, and AI insights into one calm, intelligent workspace.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="#get-started"
            className="rounded-xl bg-primary text-primary-foreground font-semibold px-8 py-3.5 text-base shadow-xl hover:opacity-90 transition-opacity"
          >
            Get started for free
          </a>
          <a
            href="#workspace-demo"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 backdrop-blur-md px-6 py-3.5 text-base font-medium text-foreground hover:bg-card/80 transition-colors"
          >
            <span>See how it works</span>
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

