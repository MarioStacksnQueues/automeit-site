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
            <p>At AutoMeit.ai, we take your privacy seriously. This policy describes how we collect and use your data.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out a contact form, request a checklist, or communicate with us via email. This may include your name, email address, company name, and message content.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send you requested materials (like our automation checklist).</li>
              <li>Improve our services and website experience.</li>
              <li>Send marketing communications (only if you've opted in).</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. HIPAA Notice</h2>
            <p>AutoMeit.ai is designed to avoid capturing protected health information (PHI) during the intake flow. Our systems collect name, phone number, and service interest only. We do not store or process PHI as defined under HIPAA. Clients requiring a Business Associate Agreement should contact us directly.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Contact Us</h2>
            <p>If you have questions about this privacy policy, contact us at <a href="mailto:hello@automeit.ai" className="text-rose-400 hover:text-rose-300">hello@automeit.ai</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
