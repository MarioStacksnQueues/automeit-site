import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  BarChart3,
  MessageSquare,
  Shield,
  Users,
  Zap,
  Star,
  RefreshCw,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function Services() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const growthFeatures = [
    {
      icon: <Phone className="w-6 h-6 text-rose-400" />,
      title: "24/7 AI Phone System",
      desc: "Answers 100% of inbound calls with a natural, branded voice. Handles nights, weekends, and holidays so you never miss a consult — with optional live transfer to front desk during business hours.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-rose-400" />,
      title: "Appointment Booking Integration",
      desc: "Real-time calendar access for Boulevard, Mangomint, Mindbody, and Square. Books consultations directly and fires automated SMS confirmations immediately after.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-rose-400" />,
      title: "Consultation Qualification Flow",
      desc: "Custom-scripted triage for Botox, Fillers, Laser, Weight Loss, PRP, and Microneedling. Captures name, phone, email, treatment interest, budget range, first-time vs. returning, and referral source.",
    },
    {
      icon: <Zap className="w-6 h-6 text-rose-400" />,
      title: "Missed-Call Recovery System",
      desc: "When a call drops before answering, an instant branded SMS fires within seconds — with a direct booking link. Revenue that would have walked out the door stays in your pipeline.",
    },
    {
      icon: <Shield className="w-6 h-6 text-rose-400" />,
      title: "FAQ & Objection Handling",
      desc: "AI trained on your specific pricing ranges, downtime expectations, financing options, active promotions, cancellation policies, and treatment prep instructions.",
    },
    {
      icon: <Users className="w-6 h-6 text-rose-400" />,
      title: "Lead Routing Logic",
      desc: "VIP clients routed to priority lines. New consults flagged differently from returning clients. Weight-loss leads separated into their own funnel if needed.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-rose-400" />,
      title: "Basic Revenue Dashboard",
      desc: "Monthly report showing calls answered, appointments booked, and estimated revenue captured. Turns your phone system from a cost center into a documented revenue asset.",
    },
  ];

  const premiumFeatures = [
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      title: "Review Automation Engine",
      desc: "Post-appointment SMS review request with a direct Google Business link. Negative feedback gets routed internally before it ever goes public — protecting your reputation while growing your star rating.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-purple-400" />,
      title: "Reactivation Campaigns",
      desc: "Automated monthly outreach to no-shows, clients inactive for 90+ days, and consult leads who never booked. Includes SMS sequences, email flows, and promo offer insertion.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: "Advanced Revenue Dashboard",
      desc: "Revenue per call type, consult-to-treatment conversion rate, lost-call revenue estimates, and after-hours revenue impact. This turns your AI system into hard ROI evidence.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-400" />,
      title: "Financing Qualification Flow",
      desc: "Cherry and CareCredit screening built directly into the call flow. High-ticket leads are flagged and routed to the right financing conversation — so price never kills the close.",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Advanced Lead Segmentation",
      desc: "Leads categorized by treatment type, revenue potential, new vs. returning status, and high-value client tags. Auto-exported into your CRM for seamless follow-up.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "Quarterly Optimization Call",
      desc: "Every quarter, we review your conversion data, adjust scripts, add new treatments, and build seasonal promo scripting. Your system improves over time instead of going stale.",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-rose-400 text-sm font-semibold uppercase tracking-widest mb-5">
              Med Spa Revenue Infrastructure
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built for medical spas.<br />
              <span className="text-gradient">Nothing else.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We specialize in one industry so we can be the best at it. Every
              call script, every integration, and every revenue report is
              engineered around medical aesthetics — your treatments, your
              pricing, and your clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── GROWTH PLAN ── */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Plan summary */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-rose-400 text-sm font-bold">GROWTH PLAN</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Capture Missed Revenue
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                You're not paying for minutes. You're installing operational
                infrastructure that captures consults you're currently losing to
                voicemail, after-hours, and peak-traffic blackouts.
              </p>

              <div className="space-y-3 text-sm text-gray-400 mb-10">
                {[
                  "$1,500 one-time setup fee",
                  "$697/month",
                  "6-month minimum commitment",
                  "$7,100/year — saves 2 months",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={14} className="text-rose-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 mb-8">
                <p className="text-sm text-gray-500 italic">
                  &ldquo;Setup is $1,500 because we build out your full
                  treatment scripts and integrate directly into your booking
                  system. Monthly is $697. You need just 2 additional consults
                  per month to break even.&rdquo;
                </p>
              </div>

              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 text-white h-12 px-8 group"
              >
                Book Revenue Audit
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>

            {/* Right: Feature cards */}
            <div className="space-y-4">
              {growthFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl border border-white/8 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PREMIUM PLAN ── */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Feature cards */}
            <div className="space-y-4">
              {premiumFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl border border-white/8 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Plan summary */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-400 text-sm font-bold">
                  PREMIUM PLAN — MOST POPULAR
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Increase Total Revenue
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Everything in Growth, plus reactivation campaigns, review
                automation, financing flows, and quarterly optimization. You're
                not just capturing missed revenue — you're systematically
                growing it.
              </p>

              <div className="space-y-3 text-sm text-gray-400 mb-10">
                {[
                  "$2,500 one-time setup fee",
                  "$997/month",
                  "6-month minimum commitment",
                  "$10,000/year option",
                  "Includes everything in Growth Plan",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={14} className="text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 mb-8">
                <p className="text-sm text-gray-300 font-medium mb-1">
                  Growth = Capture missed revenue
                </p>
                <p className="text-sm text-gray-300 font-medium">
                  Premium = Increase total revenue
                </p>
                <p className="text-xs text-gray-600 mt-3">
                  That's how we explain the difference.
                </p>
              </div>

              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white h-12 px-8 shadow-lg shadow-rose-500/20 group"
              >
                Book Revenue Audit
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Works with your existing stack
          </h2>
          <p className="text-gray-400 mb-10">
            Direct integrations — no middleware, no workarounds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Boulevard",
              "Mangomint",
              "Mindbody",
              "Square",
              "Cherry",
              "CareCredit",
              "Salesforce",
              "HubSpot",
            ].map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not sure which plan fits?
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Book a free revenue audit and we'll show you exactly what your
            practice is missing — and which system fixes it.
          </p>
          <Button
            onClick={() => setIsCalendlyOpen(true)}
            size="lg"
            className="text-lg px-12 h-14 bg-rose-600 hover:bg-rose-700 shadow-xl shadow-rose-500/20"
          >
            Book Revenue Audit
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
