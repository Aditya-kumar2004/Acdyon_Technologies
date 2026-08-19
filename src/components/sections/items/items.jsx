import React from "react";
import { AlertCircle, LayoutDashboard, Workflow } from "lucide-react";

// Feature Items Data
const featureItems = [
  {
    title: "See the whole picture",
    description:
      "Projects, tasks, deadlines, and team workload in one place. No more switching between trackers, spreadsheets, and chat threads.",
    icon: LayoutDashboard,
  },
  {
    title: "Know what needs attention",
    description:
      "FlowPilot surfaces important workload shifts and approaching bottlenecks before they turn into delivery blockers.",
    icon: AlertCircle,
  },
  {
    title: "Keep work moving",
    description:
      "Turn workspace insights into clear next steps without adding another layer of heavy process or status meetings.",
    icon: Workflow,
  },
];

/**
 * Beginner-Friendly Features Component
 * Renders main platform value propositions in a 3-column grid.
 */
export default function Features() {
  return (
    <section id="product" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            A clearer way to work
          </span>
          <h2 className="text-3xl font-semibold sm:text-5xl leading-tight max-w-xl">
            Less coordination. More momentum.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
            FlowPilot gives your team one shared view of what&apos;s happening, what&apos;s next, and what needs attention.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-xs hover:border-brand/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

