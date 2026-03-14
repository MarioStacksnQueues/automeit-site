import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-6">Last updated: March 2026</p>

          <div className="space-y-6 text-gray-300">
            <p>By accessing AutoMeit.ai or purchasing any service, you agree to these Terms of Service. Please read them carefully before proceeding.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Services</h2>
            <p>AutoMeit.ai provides AI-powered phone system infrastructure for medical spas and service businesses, including: 24/7 AI receptionist call handling, missed-call SMS recovery, consultation booking automation, lead capture and routing, and revenue reporting dashboards. Specific service scope is defined at the time of onboarding based on your selected plan.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Plans and Pricing</h2>
            <p>AutoMeit.ai offers the following med spa plans:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Starter:</strong> $297/month + $297 one-time setup fee</li>
              <li><strong className="text-white">Growth:</strong> $497/month + $500 one-time setup fee</li>
              <li><strong className="text-white">Elite:</strong> $697/month + $1,000–$1,500 one-time setup fee</li>
            </ul>
            <p>All plans are billed monthly. Annual billing is available at a discounted rate (equivalent to 2 months free). Prices are per location. Multi-location pricing is calculated per location.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Setup Fees</h2>
            <p>All plans require a one-time setup fee paid prior to onboarding. Setup fees are non-refundable. They cover custom AI script development, booking system integration, call routing configuration, and go-live testing specific to your practice.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Proof Period</h2>
            <p>After setup is complete, AutoMeit.ai provides a 7-day proof period during which the system operates live and captures real call data. At the end of 7 days, you receive a report showing calls answered, leads captured, and estimated revenue recovered. If you choose not to continue after the proof period, your access ends and no monthly billing begins. The setup fee is retained as compensation for configuration work completed.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Monthly Billing and Cancellation</h2>
            <p>Monthly subscriptions begin the day after the 7-day proof period ends. All plans are month-to-month with no long-term contract required. You may cancel at any time by providing 30 days written notice to <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a>. No cancellation fees apply. Setup fees are non-refundable regardless of cancellation timing.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Annual Plans</h2>
            <p>Annual plan payments are made upfront. Annual plans are non-refundable after 30 days from payment date. Annual plans include the equivalent of 2 months of service at no additional charge compared to monthly billing.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate business information, services, pricing ranges, and policies needed to configure your AI system</li>
              <li>Ensure your use of AutoMeit.ai complies with all applicable laws, including TCPA requirements for SMS communications with your clients</li>
              <li>Obtain proper consent from callers before any SMS follow-up is sent on your behalf</li>
              <li>Keep your contact and billing information current</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Intellectual Property</h2>
            <p>The AutoMeit.ai platform, website, and proprietary workflows are the intellectual property of AutoMeit.ai. Call scripts and AI configurations built specifically for your practice remain your property. You grant AutoMeit.ai a limited license to use anonymized, aggregated performance data for service improvement purposes.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. HIPAA Notice</h2>
            <p>AutoMeit.ai is designed to avoid capturing protected health information (PHI) during the intake flow. Our systems collect caller name, phone number, and service interest only. We do not store or process PHI as defined under HIPAA. Clients who require a Business Associate Agreement (BAA) should contact us at <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a> prior to onboarding.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Limitation of Liability</h2>
            <p>AutoMeit.ai is not liable for missed revenue, lost leads, or business outcomes resulting from system downtime, third-party integration failures, or circumstances outside our reasonable control. Our maximum liability for any claim arising under these Terms is limited to the total fees paid in the 30 days prior to the claim.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Modifications to Service</h2>
            <p>AutoMeit.ai reserves the right to modify, update, or discontinue any feature of the service with reasonable notice. Material changes to pricing will be communicated at least 30 days in advance.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Changes to Terms</h2>
            <p>We may update these Terms at any time. We will notify active clients of material changes via email. Continued use of the service after notification constitutes acceptance of the updated Terms.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Georgia, United States, without regard to its conflict of law provisions.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">14. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
