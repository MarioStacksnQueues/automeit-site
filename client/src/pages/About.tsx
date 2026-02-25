import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function About() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/8 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-5"
          >
            About AutoMeit.ai
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            We are a Med Spa<br />
            <span className="text-gradient">Revenue Infrastructure Company.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Not an automation agency. Not an AI tools company. Not
            multi-industry. We install AI revenue systems built exclusively for
            medical aesthetics practices.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-7 h-7 text-rose-400" />,
                title: "We Capture Missed Revenue",
                desc:
                  "Every unanswered call is a lost consult. Our AI phone systems ensure 100% of inbound calls are handled, qualified, and booked. Available 24/7, including after-hours and weekends.",
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-rose-400" />,
                title: "We Increase Lifetime Value",
                desc:
                  "Reactivation campaigns, review automation, and financing flows don't just capture revenue, they grow it over time by bringing dormant clients back and converting high-ticket leads.",
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-rose-400" />,
                title: "We Prove ROI With Data",
                desc:
                  "Our dashboards show calls answered, consults booked, and estimated revenue captured. You'll know exactly what the system is worth, every single month.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border-t-2 border-t-rose-500/40"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MED SPA ONLY */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10">
              Why med spa only?
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Most AI companies sell the same system to every vertical: the
                same chatbot for nail salons, HVAC companies, dispensaries, and
                law firms. We don't do that.
              </p>
              <p>
                Medical aesthetics is different. A Botox consult is worth
                $300-$500. A laser package is worth $2,000-$8,000. A missed call
                isn't a nuisance. It's a documented revenue event. That means
                the qualification scripts, lead routing, and follow-up sequences
                need to be built specifically for your treatments, your pricing
                structure, and your client journey.
              </p>
              <p>
                We went deep on one niche so we could be the best at it. Our AI
                knows the difference between a first-time filler inquiry and a
                returning weight-loss client. It knows how to handle financing
                objections. It knows when to route to a VIP priority line and
                when to fire an instant SMS recovery.
              </p>
              <p className="text-white font-semibold text-xl">
                That's the difference between a generic chatbot and a revenue
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Our approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Revenue-first, not tech-first",
                  desc: "We don't lead with AI jargon. We lead with numbers: how many consults you're losing and what each one is worth.",
                },
                {
                  title: "Built to your treatments",
                  desc: "Every qualification script is built around your specific services, pricing ranges, and client objections. Nothing generic.",
                },
                {
                  title: "You own the system",
                  desc: "No black boxes. You own the integrations, the scripts, and the data. We build it, you keep it.",
                },
                {
                  title: "ROI is non-negotiable",
                  desc: "We build dashboards that prove what the system is generating. If we can't show you ROI, we're not doing our job.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-6 rounded-xl border border-white/8"
                >
                  <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to install your revenue system?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Book a free 20-minute call. We'll calculate what you're losing and
            what it costs to stop losing it.
          </p>
          <Button
            onClick={() => setIsCalendlyOpen(true)}
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white text-lg h-14 px-12 shadow-lg shadow-rose-500/20 group"
          >
            Book Revenue Audit
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Button>
        </div>
      </section>

      <Footer />
      <PopupModal
        url="https://calendly.com/automeit-hr/free-automation-audit"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </div>
  );
}
