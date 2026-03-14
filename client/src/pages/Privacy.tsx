import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-6">Last updated: March 2026</p>

          <div className="space-y-6 text-gray-300">
            <p>AutoMeit.ai ("we," "us," or "our") is committed to protecting your privacy. This policy describes how we collect, use, and protect information when you visit our website or use our services.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and company name when you fill out a contact or audit request form</li>
              <li>Message content you submit through our contact form</li>
              <li>Booking information when you schedule a revenue audit via Calendly</li>
            </ul>
            <p className="mt-4">When our AI phone system operates on behalf of a client business, it may collect caller name, phone number, and service interest from callers to that business. We do not collect or store protected health information (PHI).</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To schedule and conduct revenue audit calls</li>
              <li>To configure and operate AI phone systems on behalf of client businesses</li>
              <li>To send service-related communications</li>
              <li>To improve our platform and services using anonymized, aggregated data</li>
              <li>To send marketing communications only if you have opted in</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Third-Party Services</h2>
            <p>AutoMeit.ai uses the following third-party services to operate. Each has its own privacy policy governing their data handling:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Twilio</strong> — Phone number provisioning, call routing, and SMS delivery</li>
              <li><strong className="text-white">ElevenLabs</strong> — AI voice synthesis for call handling</li>
              <li><strong className="text-white">Vapi</strong> — AI voice agent platform</li>
              <li><strong className="text-white">Airtable</strong> — Lead and client data storage</li>
              <li><strong className="text-white">n8n</strong> — Workflow automation between services</li>
              <li><strong className="text-white">Calendly</strong> — Booking and scheduling for revenue audits</li>
              <li><strong className="text-white">Formspree</strong> — Contact form submission handling</li>
              <li><strong className="text-white">Google Fonts</strong> — Typography delivery</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. HIPAA Notice</h2>
            <p>AutoMeit.ai is designed to avoid capturing protected health information (PHI) during the call intake flow. Our systems collect caller name, phone number, and service interest only. We do not store or process PHI as defined under HIPAA. Clients who require a Business Associate Agreement (BAA) should contact us at <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a> prior to onboarding.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
            <p>We implement reasonable technical and organizational security measures to protect your personal information, including SSL encryption for data in transit and access controls for stored data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Data Retention</h2>
            <p>We retain contact and lead information for as long as necessary to provide our services or as required by law. Client data is retained for the duration of the service relationship and deleted within 90 days of account termination upon request.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a>. We will respond to verified requests within 30 days.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. SMS Communications</h2>
            <p>For information about how we handle SMS consent and communications, see our <a href="/sms-policy" className="text-rose-400 hover:text-rose-300">SMS Policy</a>.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of material changes by updating the date at the top of this page. Continued use of our services after changes constitutes acceptance of the updated policy.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Contact Us</h2>
            <p>For privacy questions or data requests, contact us at <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
