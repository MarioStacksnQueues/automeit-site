import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-6">Last updated: October 2026</p>
          
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
