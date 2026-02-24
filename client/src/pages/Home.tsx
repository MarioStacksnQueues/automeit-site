import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Phone,
  Calendar,
  BarChart3,
  Star,
  RefreshCw,
  DollarSign,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupModal } from "react-calendly";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const growthFeatures = [
    "24/7 AI Phone System — answers every inbound call, branded to your spa",
    "Booking integration with Boulevard, Mangomint, Mindbody & Square",
    "Consultation qualification for Botox, Fillers, Laser, PRP, Weight Loss & more",
    "Missed-call SMS recovery — instant branded follow-up with booking link",
    "FAQ & objection handling (pricing, downtime, financing, cancellations)",
    "Lead routing — VIP priority, new consults, weight-loss segmentation",
    "Monthly revenue dashboard — calls, bookings & estimated revenue captured",
  ];

  const premiumAddons = [
    "Review automation — post-appointment Google review SMS",
    "Reactivation campaigns for no-shows, lapsed clients & ghost leads",
    "Advanced dashboard — revenue per call type, conversion rates, lost-call estimates",
    "Financing qualification flow (Cherry / CareCredit screening)",
    "Advanced lead segmentation with CRM auto-export",
    "Quarterly optimization strategy call with our team",
  ];

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 border-rose-500/30 bg-rose-500/10 text-rose-300 rounded-full"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              Built exclusively for medical aesthetics practices
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Stop Losing Med Spa <br />
              <span className="text-gradient">Revenue to Missed Calls</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We install a 24/7 AI phone system that books consultations
              automatically — even after hours, on weekends, and during your
              busiest moments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full sm:w-auto text-lg h-14 px-10 bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-500/25"
              >
                Book Free Revenue Audit
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto text-lg h-14 px-8 border-white/10 hover:bg-white/5 text-gray-300"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BOOKING INTEGRATIONS ── */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Integrates with your booking system
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {["Boulevard", "Mangomint", "Mindbody", "Square", "Cherry", "CareCredit"].map(
              (platform) => (
                <span
                  key={platform}
                  className="text-base font-semibold text-gray-400 hover:text-white transition-colors cursor-default"
                >
                  {platform}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── REVENUE MATH ── */}
      <section className="py-28 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              The math is{" "}
              <span className="text-rose-400">impossible to ignore</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Most med spas have no idea how much revenue walks out the door
              every week.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-14 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
                {[
                  { label: "Average consult value", value: "$600" },
                  { label: "Missed calls per week", value: "5" },
                  { label: "Would-book rate", value: "60%" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="text-5xl md:text-6xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-10 text-center">
                <p className="text-gray-400 mb-3 text-base">That's</p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-7xl md:text-8xl font-bold text-rose-400 mb-4"
                >
                  $93,600+
                </motion.div>
                <p className="text-gray-200 text-xl font-medium">
                  lost every year to unanswered calls.
                </p>
                <p className="text-gray-500 mt-4 text-sm">
                  Our system costs less than{" "}
                  <strong className="text-white">2 recovered consults per month</strong>{" "}
                  to break even.
                </p>
                <Button
                  onClick={() => setIsCalendlyOpen(true)}
                  size="lg"
                  className="mt-10 bg-rose-600 hover:bg-rose-700 text-white text-lg h-14 px-12 shadow-lg shadow-rose-500/20"
                >
                  Book Revenue Audit
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Simple. Fast.{" "}
              <span className="text-blue-400">Revenue-generating.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Up and running in under 2 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-blue-500/20" />
            {[
              {
                step: "01",
                icon: <Phone className="w-8 h-8 text-rose-400" />,
                title: "AI Answers Every Call",
                desc: "Branded to your spa. Natural voice. Handles after-hours, weekends, and peak hours — 100% of inbound calls captured.",
              },
              {
                step: "02",
                icon: <Calendar className="w-8 h-8 text-purple-400" />,
                title: "Qualifies & Books Consults",
                desc: "Collects treatment interest, budget, and availability — then books directly into your calendar with SMS confirmation.",
              },
              {
                step: "03",
                icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
                title: "Dashboard Proves ROI",
                desc: "Every call, every booking, and estimated revenue captured — visible in one clean monthly report.",
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-background border-2 border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(244,63,94,0.08)]">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-gray-600 mb-2 tracking-widest">
                  STEP {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 max-w-xs mx-auto leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Two plans. Zero fluff.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Both plans install real revenue infrastructure. Choose where you
              want to start.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Growth Plan */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col"
            >
              <div className="mb-8">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Growth Plan
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Capture Missed Revenue
                </h3>
                <p className="text-gray-400 text-sm">
                  The infrastructure to stop losing consultations to voicemail.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-white">$697</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mt-2">
                  <span>$1,500 setup</span>
                  <span className="text-gray-700">·</span>
                  <span>6-mo minimum</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-gray-400">$7,100/yr (2 months free)</span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {growthFeatures.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <Check
                      size={16}
                      className="text-rose-400 mt-0.5 shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => setIsCalendlyOpen(true)}
                variant="outline"
                size="lg"
                className="w-full border-white/15 hover:bg-white/5 text-white h-12"
              >
                Book Revenue Audit
              </Button>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-8 md:p-10 rounded-3xl border border-rose-500/40 bg-rose-500/5 flex flex-col relative"
            >
              <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl tracking-wide">
                MOST POPULAR
              </div>

              <div className="mb-8">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-3">
                  Premium Plan
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Increase Total Revenue
                </h3>
                <p className="text-gray-400 text-sm">
                  Full revenue engine — capture, reactivate, optimize, and prove ROI.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-white">$997</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mt-2">
                  <span>$2,500 setup</span>
                  <span className="text-gray-700">·</span>
                  <span>6-mo minimum</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-gray-400">$10,000/yr option</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Everything in Growth, plus:</p>
                <ul className="space-y-3 mb-10 flex-1">
                  {premiumAddons.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm"
                    >
                      <Check
                        size={16}
                        className="text-rose-400 mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white h-12 shadow-lg shadow-rose-500/20 mt-auto"
              >
                Book Revenue Audit
              </Button>
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            Both plans include a 6-month minimum. Annual pricing saves 2 months. No hidden fees.
          </p>
        </div>
      </section>

      {/* ── POSITIONING STATEMENT ── */}
      <section className="py-20 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">What we are</p>
            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              &ldquo;AutoMeit.ai is a{" "}
              <span className="text-rose-400">Med Spa Revenue Infrastructure Company</span>.
              We install AI systems that capture missed revenue, book more
              consults, increase lifetime value, and prove ROI with real
              dashboards.&rdquo;
            </blockquote>
            <p className="text-gray-500 mt-8 text-sm">
              Built exclusively for medical aesthetics practices.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-rose-900/40 via-background to-purple-900/40 border border-white/10 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to stop leaving money on the table?
              </h2>
              <p className="text-gray-300 mb-3 max-w-xl mx-auto text-lg">
                Book a free 20-minute revenue audit. We'll calculate exactly how
                many consults you're missing and what the dollar impact is.
              </p>
              <p className="text-gray-500 text-sm mb-10">
                No pitch. No pressure. Real numbers.
              </p>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white text-lg h-14 px-14 shadow-xl shadow-rose-500/20"
              >
                Book Revenue Audit
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
          </div>
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
