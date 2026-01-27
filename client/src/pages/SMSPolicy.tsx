import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function SMSPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-8">SMS Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">AutoMeit.ai Messaging Program</h2>
              <p>
                AutoMeit.ai uses SMS to send transactional and support messages related to customer requests and order workflows. Messages may include order confirmations, payment/checkout links, status updates, appointment reminders, and customer support responses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Opt-In Consent</h2>
              <p>
                You only receive messages if you explicitly opt in. Opt-in may occur by submitting your phone number through a website form or checkout flow that includes SMS consent language, or by providing verbal consent during a phone call where you request updates by text.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Opt-Out</h2>
              <p>
                Reply STOP at any time to unsubscribe. After you send STOP, you will receive a confirmation message and no further messages will be sent unless you opt in again.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Help</h2>
              <p>
                Reply HELP for help. You can also contact us at automeit.hr@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Message Frequency</h2>
              <p>
                Message frequency varies based on your activity and the services you request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Message and Data Rates</h2>
              <p>
                Message and data rates may apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Supported Carriers</h2>
              <p>
                Supported carriers are not guaranteed and may vary by recipient location and carrier policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Privacy</h2>
              <p>
                We do not sell personal information. For more information on how we handle data, see our <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</Link>.
              </p>
            </section>

            <section className="pt-8 border-t border-white/10 mt-12">
              <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
              <p>AutoMeit.ai</p>
              <p>Email: <a href="mailto:automeit.hr@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">automeit.hr@gmail.com</a></p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
