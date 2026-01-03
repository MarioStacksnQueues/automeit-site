import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-6">Last updated: October 2024</p>
          
          <div className="space-y-6 text-gray-300">
            <p>By accessing or using the AutoMeit.ai website, you agree to be bound by these Terms of Service.</p>
            
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Services</h2>
            <p>AutoMeit.ai provides automation consulting and development services. Specific terms of service for paid engagements will be outlined in a separate Master Services Agreement (MSA).</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property</h2>
            <p>The content on this website, including text, graphics, and logos, is the property of AutoMeit.ai and is protected by copyright laws.</p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, AutoMeit.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of this website.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
