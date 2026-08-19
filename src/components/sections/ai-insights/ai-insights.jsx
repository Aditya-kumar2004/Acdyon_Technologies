import React, { useState } from "react";
import { SparklesIcon } from "lucide-react";

/**
 * Beginner-Friendly AIInsights Component
 * Demonstrates interactive AI workload warning card with toggle state.
 */
export default function AIInsights() {
  // Simple state to toggle between "Suggested Action" and "Reviewed" states
  const [isReviewed, setIsReviewed] = useState(false);

  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            ✦ FlowPilot Intelligence
          </span>
          <h2 className="text-3xl font-semibold sm:text-5xl leading-tight max-w-lg">
            Let your workspace surface what matters.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
            FlowPilot identifies critical signals so your team can act before milestones slip.
          </p>
        </div>

        {/* Interactive AI Insight Card */}
        <div className="relative w-full max-w-lg rounded-2xl border border-brand/30 bg-card p-6 sm:p-8 shadow-xl">
          
          {/* Card Header Row */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-brand">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                FlowPilot Insight
              </span>
            </div>
            <SparklesIcon className="size-4 text-brand" />
          </div>

          {/* Card Content Body */}
          <h3 className="text-lg font-semibold leading-snug">
            {isReviewed
              ? "Workload distribution optimized across Design."
              : "Your Design team has several tasks approaching the same milestone."}
          </h3>

          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {isReviewed
              ? "Milestone risk eliminated. Safe capacity restored across all 3 active deliverables."
              : "Distributing workload now prevents delivery bottlenecks closer to the deadline."}
          </p>

          {/* Suggested Action Box */}
          <div className="mt-6 rounded-xl border border-border/50 bg-muted/20 p-4">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Suggested action
            </div>
            <div className="mt-1 text-sm font-semibold">
              {isReviewed ? "Milestone delivery: On schedule" : "Review workload distribution"}
            </div>

            <div className="mt-3">
              {isReviewed ? (
                <button
                  onClick={() => setIsReviewed(false)}
                  className="rounded-lg border border-border bg-secondary px-3.5 py-1.5 text-xs font-medium hover:bg-secondary/80 transition-colors"
                >
                  Reset demo
                </button>
              ) : (
                <button
                  onClick={() => setIsReviewed(true)}
                  className="rounded-lg bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Review →
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

