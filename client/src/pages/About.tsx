import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, TrendingUp, BarChart3, ArrowRight, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/8 rounded-full blur-[100px] -z-10" />
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
            We build Revenue Infrastructure<br />
            <span className="text-gradient">for high-ticket service businesses.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Not a generic AI agency. Not a one-size-fits-all chatbot company.
            We go deep on the verticals we serve so every system we build
            is purpose-built for how that industry actually works.
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
                desc: "Every unanswered call is a lost job or consult. Our AI phone systems ensure 100% of inbound calls are handled, qualified, and booked. Available 24/7, including after-hours and weekends.",
              },
              {
                icon: <TrendingUp className="w-7 h-7 text-rose-400" />,
                title: "We Increase Lifetime Value",
                desc: "Reactivation campaigns, review automation, and follow-up sequences do not just capture revenue, they grow it over time by bringing dormant clients and past customers back in.",
              },
              {
                icon: <BarChart3 className="w-7 h-7 text-rose-400" />,
                title: "We Prove ROI With Data",
                desc: "Our dashboards show calls answered, jobs and consults booked, and estimated revenue captured. You know exactly what the system is worth every single month.",
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
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Two verticals. One obsession.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We do not sell the same system to every industry. We go deep on
              the verticals we serve so the AI knows your business, not just
              the general idea of it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Med Spa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-rose-500/20 bg-rose-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">Vertical 01</p>
                  <h3 className="text-white font-bold text-lg">Med Spa and Aesthetics</h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                {[
                  "Medical spas",
                  "Plastic surgery practices",
                  "Dermatology clinics",
                  "IV therapy and wellness studios",
                  "Laser hair removal chains",
                  "Botox and filler boutiques",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-rose-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                High-ticket consults where a missed call is a documented revenue
                event. Our AI is built around your treatments, booking platforms,
                and client journey.
              </p>
              <Link href="/" className="text-rose-400 hover:text-rose-300 text-sm font-semibold transition-colors inline-flex items-center gap-1">
                See Med Spa plans <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Trades */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-orange-500/20 bg-orange-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Vertical 02</p>
                  <h3 className="text-white font-bold text-lg">Trades and Home Services</h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-400 mb-6">
                {[
                  "Plumbing companies (5 to 25 employees)",
                  "HVAC and heating and cooling",
                  "Roofing contractors",
                  "Electrical contractors",
                  "General contractors with service divisions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Emergency jobs are high-ticket and time-sensitive. Our AI captures
                every inbound call, qualifies the job type, and books it into
                Jobber or Housecall Pro automatically.
              </p>
              <Link href="/trades" className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors inline-flex items-center gap-1">
                See Trades plans <ArrowRight size={14} />
              </Link>
            </motion.div>
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
                  desc: "We do not lead with AI jargon. We lead with numbers: how many jobs or consults you are losing and what each one is worth.",
                },
                {
                  title: "Built to your business",
                  desc: "Every qualification script is built around your specific services, pricing ranges, and client objections. Nothing generic.",
                },
                {
                  title: "You own the system",
                  desc: "No black boxes. You own the integrations, the scripts, and the data. We build it, you keep it.",
                },
                {
                  title: "ROI is non-negotiable",
                  desc: "We build dashboards that prove what the system is generating. If we cannot show you ROI, we are not doing our job.",
                },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 rounded-xl border border-white/8">
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
            Book a free 20-minute call. We will calculate what you are losing and
            what it costs to stop losing it.
          </p>
          <Button
            onClick={() => setIsCalendlyOpen(true)}
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white text-lg h-14 px-12 shadow-lg shadow-rose-500/20 group"
          >
            Book Revenue Audit
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
