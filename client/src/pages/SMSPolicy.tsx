import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function SMSPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">SMS Consent &amp; Privacy Policy</h1>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Collect Consent</h2>
              <p>
                When a caller contacts a business powered by Automeit.ai's AI receptionist, the system verbally states:
              </p>
              <blockquote className="border-l-4 border-white/20 pl-4 italic my-4 text-gray-400">
                "Before we continue, by speaking with us today you agree to receive SMS text messages from [Business Name]
                at the number you're calling from. These messages may include appointment confirmations, reminders, and
                follow-up information. Message and data rates may apply. Reply STOP at any time to opt out. Do you agree
                to receive text messages?"
              </blockquote>
              <p>
                The caller must respond "Yes" or an equivalent affirmative before any SMS is sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How Consent Is Stored</h2>
              <p>We securely record the following at the time of consent:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Caller phone number</li>
                <li>Timestamp of verbal consent</li>
                <li>Call recording (stored securely)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How to Opt Out</h2>
              <p>
                Reply <strong className="text-white">STOP</strong> to any message. No further messages will be sent after
                you opt out.
              </p>
              <p className="mt-2">
                Reply <strong className="text-white">HELP</strong> for support contact information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Message and Data Rates</h2>
              <p>Message and data rates may apply.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Privacy</h2>
              <p>
                We do not sell personal information. For more information on how we handle data, see our{" "}
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-12">
              <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
              <p>Automeit.ai</p>
              <p>
                Email:{" "}
                <a href="mailto:support@automeit.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                  support@automeit.ai
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
