import React, { useState } from "react";
import { AlertTriangleIcon, CheckCircle2Icon, ClockIcon, SparklesIcon } from "lucide-react";

// Sample task data list
const INITIAL_TASKS = [
  {
    id: "t1",
    title: "Website Launch Milestone",
    category: "Release",
    owner: "Alex K.",
    deadline: "Due in 3 days",
    status: "blocked",
    statusText: "Blocked (2 tasks)",
  },
  {
    id: "t2",
    title: "Product onboarding",
    category: "Product",
    owner: "Sarah L.",
    status: "at-risk",
    statusText: "Milestone due",
  },
  {
    id: "t3",
    title: "Design system v2",
    category: "Design",
    owner: "Leo M.",
    status: "on-track",
    statusText: "On track",
  },
  {
    id: "t4",
    title: "Mobile release",
    category: "Engineering",
    owner: "Marcus T.",
    status: "on-track",
    statusText: "On track",
  },
];

/**
 * Beginner-Friendly ProductShowcase Component
 * Displays an interactive priority board and AI blocker resolver demo.
 */
export default function ProductShowcase() {
  const [resolved, setResolved] = useState(false);
  const [isResolving, setIsResolving] = useState(false);

  const handleResolve = () => {
    setIsResolving(true);
    setTimeout(() => {
      setResolved(true);
      setIsResolving(false);
    }, 400);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-semibold sm:text-5xl leading-tight max-w-xl">
            From scattered work to clear priorities.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
            FlowPilot surfaces what is on track, what is at risk, and what needs immediate attention.
          </p>
        </div>

        {/* Priority Board Card Showcase */}
        <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xl">
          {/* Top Browser Bar */}
          <div className="flex items-center gap-2 border-b border-border/40 bg-muted/20 px-4 py-3">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">
              FlowPilot — Priority Board
            </span>
          </div>

          {/* Priority Board Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 p-6">
            
            {/* Task Items List */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">Priority Board</h3>
                <span className="text-xs text-muted-foreground">4 Items</span>
              </div>

              <div className="flex flex-col gap-2">
                {INITIAL_TASKS.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between rounded-xl border p-3.5 transition-colors ${
                      task.id === "t1" && resolved
                        ? "border-emerald-500/30 bg-emerald-500/10"
                        : "border-border/50 bg-background"
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold">{task.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {task.category} • {task.owner}
                      </span>
                    </div>

                    <div>
                      {task.id === "t1" && resolved ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500">
                          <CheckCircle2Icon size={14} />
                          <span>Cleared</span>
                        </span>
                      ) : task.status === "blocked" ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-500">
                          <AlertTriangleIcon size={14} />
                          <span>{task.statusText}</span>
                        </span>
                      ) : task.status === "at-risk" ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-500">
                          <ClockIcon size={14} />
                          <span>{task.statusText}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500">
                          <CheckCircle2Icon size={14} />
                          <span>{task.statusText}</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Blocker Resolution Panel */}
            <div className="flex flex-col justify-between rounded-xl border border-brand/30 bg-brand/5 p-5">
              <div>
                <div className="flex items-center gap-2 text-brand">
                  <SparklesIcon size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    ✦ FlowPilot Insight
                  </span>
                </div>

                <div className="mt-3">
                  <h4 className="text-sm font-semibold">
                    {resolved
                      ? "Blockers cleared for Website Launch."
                      : "2 tasks are blocking the Website Launch milestone."}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {resolved
                      ? "Tasks were reassigned and staging sign-off has been scheduled."
                      : "The Copy review and Final QA tasks are unassigned and past their suggested start date."}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-border/40 bg-card p-3">
                <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Suggested Action
                </div>
                <div className="mt-1 text-xs font-semibold">
                  {resolved ? "Milestone back on track" : "Review workload distribution"}
                </div>
                <div className="mt-3">
                  {resolved ? (
                    <button
                      onClick={() => setResolved(false)}
                      className="w-full rounded-md border border-border bg-secondary py-1.5 text-xs font-medium hover:bg-secondary/80 transition-colors"
                    >
                      Reset demo
                    </button>
                  ) : (
                    <button
                      onClick={handleResolve}
                      disabled={isResolving}
                      className="w-full rounded-md bg-primary py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                    >
                      {isResolving ? "Resolving..." : "Review blockers →"}
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

