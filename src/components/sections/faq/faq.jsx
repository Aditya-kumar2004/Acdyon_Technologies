import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

// FlowPilot FAQ questions and answers
const faqList = [
  {
    question: "What is FlowPilot and how does it help my team?",
    answer:
      "FlowPilot is an AI-powered workflow intelligence platform. It connects your team's projects, priorities, and workloads into one calm workspace, giving you automatic insights into bottlenecks and team capacity.",
  },
  {
    question: "How does FlowPilot integrate with our existing tools?",
    answer:
      "FlowPilot seamlessly integrates with GitHub, Slack, Jira, Figma, and Notion. It syncs activity automatically in real-time so your team doesn't have to spend hours updating status reports.",
  },
  {
    question: "Is our team's data secure with FlowPilot?",
    answer:
      "Yes. FlowPilot is SOC-2 Type II certified and fully GDPR compliant. Your data is encrypted at rest and in transit using enterprise-grade AES-256 encryption. We never train public AI models on your private workspace data.",
  },
  {
    question: "Can I try FlowPilot before committing to a paid plan?",
    answer:
      "Absolutely! We offer a 14-day free trial on all plans with full feature access. No credit card is required to sign up.",
  },
  {
    question: "How does team pricing work?",
    answer:
      "FlowPilot offers simple per-user monthly or annual billing. You can add or remove team members at any time with prorated adjustments.",
  },
];

/**
 * Beginner-Friendly FAQ Component
 * Displays collapsible questions and answers.
 */
export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand">
            Got Questions?
          </span>
          <h2 className="text-3xl font-semibold sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <Accordion type="single" collapsible className="w-full max-w-2xl">
          {faqList.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-left font-medium text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}

