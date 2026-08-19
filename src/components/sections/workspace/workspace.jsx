import React from "react";
import DashboardPreview from "../../ui/dashboard-preview";
import Glow from "../../ui/glow";

/**
 * Beginner-Friendly Workspace Demo Component
 * Renders the interactive dashboard preview.
 */
export default function WorkspaceSection() {
  return (
    <section className="relative overflow-hidden py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            ✦ Interactive Workspace Demo
          </span>
          <h2 className="text-3xl font-semibold sm:text-5xl leading-tight max-w-xl">
            Experience the calm workspace.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
            Try clicking the live AI Auto-Balance button and tab controls below.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="relative w-full pt-4">
          <div className="rounded-2xl border border-border/80 bg-card p-2 shadow-2xl overflow-hidden">
            <DashboardPreview />
          </div>
          <Glow variant="center" className="opacity-60 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}

