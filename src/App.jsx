import React from "react";

// Import all landing page section components
import AIInsights from "./components/sections/ai-insights/ai-insights";
import CTA from "./components/sections/cta/cta";
import FAQ from "./components/sections/faq/faq";
import Footer from "./components/sections/footer/footer";
import Hero from "./components/sections/hero/hero";
import HowItWorks from "./components/sections/how-it-works/how-it-works";
import Features from "./components/sections/items/items";
import Navbar from "./components/sections/navbar/navbar";
import Pricing from "./components/sections/pricing/pricing";
import ProductShowcase from "./components/sections/product-showcase/product-showcase";
import WorkspaceSection from "./components/sections/workspace/workspace";
import { LayoutLines } from "./components/ui/layout-lines";

/**
 * Main Application Component
 * Assembles the landing page sections in top-to-bottom order.
 */
export default function App() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full selection:bg-brand/20 selection:text-brand">
      {/* Background Decorative Lines */}
      <LayoutLines />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interactive Workspace Demo */}
      <div id="workspace-demo">
        <WorkspaceSection />
      </div>

      {/* Feature Highlights */}
      <Features />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* How FlowPilot Works */}
      <HowItWorks />

      {/* AI Insights Showcase */}
      <AIInsights />

      {/* Pricing Plans */}
      <Pricing />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Call to Action Banner */}
      <CTA />

      {/* Main Page Footer */}
      <Footer />
    </main>
  );
}

