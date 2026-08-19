import React from "react";

// 3 Simple steps data array
const steps = [
  {
    number: "01",
    title: "Connect your work",
    description:
      "Bring projects and tasks into one workspace. FlowPilot works alongside the tools your team already uses.",
  },
  {
    number: "02",
    title: "See the signal",
    description:
      "FlowPilot identifies workload changes, priorities, and potential blockers before they disrupt delivery.",
  },
  {
    number: "03",
    title: "Move with clarity",
    description:
      "Your team knows what matters next. Less coordination overhead, more focused building.",
  },
];

/**
 * Beginner-Friendly HowItWorks Component
 * Renders step-by-step workflow guide for users.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-brand text-xs font-semibold uppercase tracking-widest">
            How it works
          </span>
          <h2 className="max-w-lg text-center text-3xl font-semibold sm:text-5xl leading-tight">
            Three steps to a calmer workflow.
          </h2>
        </div>

        {/* 3 Step Grid */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-start gap-4">
              {/* Step Number Circle */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card font-mono text-xs font-semibold shadow-xs">
                {step.number}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="mb-1.5 text-base font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

