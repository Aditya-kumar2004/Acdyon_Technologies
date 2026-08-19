import React from "react";
import Glow from "../../ui/glow";

/**
 * Beginner-Friendly Call to Action (CTA) Component
 * Prompts visitors to get started for free.
 */
export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden py-20 px-4">
      {/* Container Box */}
      <div className="max-w-4xl relative z-10 mx-auto flex flex-col items-center gap-6 text-center">
        
        {/* Headline */}
        <h2 className="text-3xl font-semibold sm:text-5xl leading-tight max-w-2xl">
          Bring clarity to the way your team works.
        </h2>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
          A calmer workspace for projects, priorities, and everything in between.
        </p>

        {/* Action Button */}
        <div className="flex justify-center pt-2">
          <a
            href="#get-started"
            className="rounded-xl bg-primary text-primary-foreground font-semibold px-8 py-3 text-base shadow-lg hover:opacity-90 transition-opacity"
          >
            Get started
          </a>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-80">
        <Glow variant="bottom" />
      </div>
    </section>
  );
}

