import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MoldsShowcase } from './components/MoldsShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { GuaranteeAndAccess } from './components/GuaranteeAndAccess';
import { FooterSection } from './components/FooterSection';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete' | null>(null);
  const [policyType, setPolicyType] = useState<'terms' | 'privacy' | 'refund' | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    scrollToSection('oferta-precios');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col selection:bg-orange-100 selection:text-orange-900">
      {/* Top Urgency Banner */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm">
        Oferta válida solo por hoy
      </div>

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToPricing={scrollToPricing}
        />

        {/* 2. Molds Showcase Section */}
        <MoldsShowcase />

        {/* 3. Testimonials Section (WhatsApp Style) */}
        <TestimonialsSection />

        {/* 4. Bonuses Section */}
        <BonusesSection onScrollToPricing={scrollToPricing} />

        {/* 5. Pricing Section with Countdown Timer */}
        <PricingSection onSelectPlan={(plan) => setSelectedPlan(plan)} />

        {/* 6. FAQ Accordion Section */}
        <FaqSection />

        {/* 8. Immediate Access & 7-Day Guarantee */}
        <GuaranteeAndAccess onScrollToPricing={scrollToPricing} />
      </main>

      {/* 9. Footer with Notice and Support */}
      <FooterSection onOpenPolicy={(type) => setPolicyType(type)} />

      {/* Modals */}
      {selectedPlan && (
        <CheckoutModal
          planId={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {policyType && (
        <PolicyModal
          type={policyType}
          onClose={() => setPolicyType(null)}
        />
      )}
    </div>
  );
}
