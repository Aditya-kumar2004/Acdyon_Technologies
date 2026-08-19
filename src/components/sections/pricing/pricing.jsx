import React from "react";
import { Check } from "lucide-react";

// FlowPilot Pricing Plans
const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for individuals and small side projects.",
    features: [
      "Up to 3 active projects",
      "Basic AI task insights",
      "Community support",
      "Standard integrations",
    ],
    ctaText: "Get started free",
    ctaHref: "#get-started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/user/month",
    description: "Best for growing teams needing full workflow automation.",
    features: [
      "Unlimited active projects",
      "Advanced AI workload analytics",
      "Priority 24/7 support",
      "All 50+ integrations",
      "Custom workflow triggers",
    ],
    ctaText: "Start 14-day free trial",
    ctaHref: "#get-started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/user/month",
    description: "For organizations requiring custom security & SLAs.",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "SOC-2 & SAML SSO",
      "Custom AI model tuning",
    ],
    ctaText: "Contact sales",
    ctaHref: "#get-started",
    highlight: false,
  },
];

/**
 * Beginner-Friendly Pricing Component
 * Displays tier options with features and CTA buttons.
 */
export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Simple Pricing
          </span>
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Choose the plan that fits your team
          </h2>
          <p className="text-muted-foreground max-w-xl text-base sm:text-lg">
            No hidden fees. Upgrade or downgrade anytime with instant prorated adjustments.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-8 shadow-sm transition-all ${
                plan.highlight
                  ? "border-brand bg-card shadow-lg ring-1 ring-brand"
                  : "border-border bg-card/50"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[11px] font-semibold text-brand-foreground uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 min-h-[40px]">
                  {plan.description}
                </p>

                <div className="my-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check size={16} className="text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={plan.ctaHref}
                  className={`w-full inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-background hover:bg-accent"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

