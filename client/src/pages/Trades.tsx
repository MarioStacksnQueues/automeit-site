import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Phone,
  BarChart3,
  ChevronDown,
  Star,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupModal } from "react-calendly";

const faqs = [
  {
    q: "Will it work with Jobber or Housecall Pro?",
    a: "Yes. We integrate directly with Jobber, Housecall Pro, and Google Calendar. Booked jobs flow straight into your existing system. No double entry, no extra steps for your team.",
  },
  {
    q: "What about emergency calls at 2am?",
    a: "That is exactly what this is built for. The AI answers immediately, captures the issue type, address, urgency level, and contact info, then fires an instant SMS alert to your on-call tech. You never miss the high-ticket emergency call again.",
  },
  {
    q: "Can it handle multiple job types: plumbing, HVAC installs, roof estimates?",
    a: "Every call flow is custom-built for your business. We script separate intake paths for emergency calls, estimate requests, maintenance appointments, and seasonal services. Nothing generic.",
  },
  {
    q: "How long does setup take?",
    a: "Under 2 weeks from kickoff. We build your call scripts, integrate with your booking system, configure after-hours routing, and test every call path before going live.",
  },
  {
    q: "Do I need to change my phone number?",
    a: "No. We work with your existing number. Calls ring through your AI system first, and optional live transfer to your team during business hours is included.",
  },
  {
    q: "What if a caller asks about pricing or availability?",
    a: "Before launch, we train the AI on your service areas, general pricing ranges, availability windows, and what customers should do before the tech arrives. It handles the common questions so your team does not have to.",
  },
];

const testimonials = [
  {
    quote:
      "We were losing 3-4 after-hours calls a week. Emergency jobs at $1,200 a pop. Within the first month we recovered 6 jobs we would have lost to voicemail. System paid for itself week one.",
    name: "Marcus T.",
    title: "Owner, TrueFlow Plumbing",
    location: "Houston, TX",
  },
  {
    quote:
      "HVAC season hits and my phone does not stop. The AI handles every call during peak hours so my office is not drowning, and every lead is in Jobber before my team even sees it.",
    name: "Derek L.",
    title: "Operations Manager, CoolAir HVAC",
    location: "Phoenix, AZ",
  },
  {
    quote:
      "Roofing estimates are my lifeblood after storms. The AI captures every inbound call, qualifies the damage type, and books the estimate while I am on a roof. Closed 11 extra jobs last quarter.",
    name: "Ray C.",
    title: "Owner, StormShield Roofing",
    location: "Atlanta, GA",
  },
];

const comparisonRows = [
  { label: "Monthly Cost", automeit: "$497/mo", miss: "$0 (lose the job)", service: "$300-$600/mo" },
  { label: "Hours Available", automeit: "24/7 / 365", miss: "Business hours only", service: "24/7 (off-script)" },
  { label: "Missed After-Hours Jobs", automeit: "Zero", miss: "100%", service: "Varies" },
  { label: "Trades-Specific Scripts", automeit: "Custom built", miss: "N/A", service: "Generic only" },
  { label: "Booking Integration", automeit: "Jobber / HCP / GCal", miss: "None", service: "Not included" },
  { label: "Emergency SMS Alert", automeit: "Instant, automatic", miss: "None", service: "Not included" },
  { label: "Revenue Dashboard", automeit: "Included", miss: "None", service: "Not included" },
  { label: "Setup Time", automeit: "Under 2 weeks", miss: "N/A", service: "Days (no customization)" },
];

export default function Trades() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const starterFeatures = [
    "24/7 AI Phone System answering every inbound call, branded to your company",
    "Job intake qualification (issue type, address, urgency level, contact info)",
    "Booking integration with Jobber, Housecall Pro, or Google Calendar",
    "After-hours emergency call capture with instant SMS alert to on-call tech",
    "FAQ handling (service areas, pricing ranges, availability, what to do before tech arrives)",
    "Missed-call SMS recovery with callback request and booking link",
    "Monthly dashboard: calls answered, jobs captured, estimated revenue recovered",
  ];

  const proAddons = [
    "Multi-tech / multi-location call routing and dispatch triage",
    "Reactivation campaigns for past customers (seasonal tune-ups, annual service reminders)",
    "Review automation via post-job Google review SMS",
    "Financing FAQ flow for large jobs (roof replacements, HVAC installs)",
    "Advanced dashboard: revenue per call type, emergency vs. standard, lost-call estimates",
    "Lead segmentation by job type (emergency, estimate, maintenance) with CRM auto-export",
    "Quarterly optimization call with our team",
  ];

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 border-orange-500/30 bg-orange-500/10 text-orange-300 rounded-full"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
              </span>
              Built for Plumbing, HVAC, Roofing and Electrical
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Stop Losing Jobs <br />
              <span className="text-gradient-trades">to Voicemail</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We install a 24/7 AI phone system that captures every inbound job
              call, qualifies the lead, and books it, even after hours,
              weekends, and your busiest days.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full sm:w-auto text-lg h-14 px-10 bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/25"
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

            <p className="text-sm text-gray-600 mt-6">
              In med spa or aesthetics?{" "}
              <Link
                href="/"
                className="text-rose-400 hover:text-rose-300 font-medium transition-colors"
              >
                See Med Spa plans →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOOKING INTEGRATIONS */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
            Integrates with your dispatch and booking system
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {["Jobber", "Housecall Pro", "Google Calendar", "ServiceTitan", "FieldEdge"].map((platform) => (
              <span
                key={platform}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-sm font-medium text-gray-300 hover:border-orange-500/30 hover:text-white transition-colors cursor-default"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REVENUE MATH */}
      <section className="py-28 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              The math is{" "}
              <span className="text-orange-400">impossible to ignore</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Most trades companies have no idea how many jobs walk out the door every week.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-14 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
                {[
                  { label: "Average job value", value: "$900" },
                  { label: "Missed calls per week", value: "4" },
                  { label: "Would-book rate", value: "55%" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="text-5xl md:text-6xl font-bold text-white">{stat.value}</div>
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
                  className="text-7xl md:text-8xl font-bold text-orange-400 mb-4"
                >
                  $103,000+
                </motion.div>
                <p className="text-gray-200 text-xl font-medium">lost every year to unanswered calls.</p>
                <p className="text-gray-500 mt-4 text-sm">
                  Our system costs less than{" "}
                  <strong className="text-white">1 recovered job per month</strong>{" "}
                  to break even.
                </p>
                <Button
                  onClick={() => setIsCalendlyOpen(true)}
                  size="lg"
                  className="mt-10 bg-orange-600 hover:bg-orange-700 text-white text-lg h-14 px-12 shadow-lg shadow-orange-500/20"
                >
                  Book Revenue Audit
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
              Simple. Fast.{" "}
              <span className="text-orange-400">Job-generating.</span>
            </h2>
            <p className="text-gray-400 text-lg">Up and running in under 2 weeks.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20" />
            {[
              {
                step: "01",
                icon: <Phone className="w-8 h-8 text-orange-400" />,
                title: "AI Answers Every Call",
                desc: "Branded to your company. Natural voice. Handles after-hours, weekends, and peak hours, capturing 100% of inbound job calls.",
              },
              {
                step: "02",
                icon: <Wrench className="w-8 h-8 text-amber-400" />,
                title: "Qualifies and Books the Job",
                desc: "Captures issue type, address, urgency, and contact info, then books directly into Jobber or Housecall Pro with SMS confirmation.",
              },
              {
                step: "03",
                icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
                title: "Dashboard Proves ROI",
                desc: "Every call, every job booked, and estimated revenue captured, visible in one clean monthly report.",
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-background border-2 border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(234,88,12,0.08)]">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-gray-600 mb-2 tracking-widest">STEP {item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 max-w-xs mx-auto leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Two plans. Zero fluff.</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Built for trades companies. Priced so one recovered job more than pays for it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col"
            >
              <div className="mb-8">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Starter Plan</div>
                <h3 className="text-2xl font-bold text-white mb-2">Never Miss a Job</h3>
                <p className="text-gray-400 text-sm">The infrastructure to stop losing jobs to voicemail.</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-white">$497</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mt-2">
                  <span>$997 setup</span>
                  <span className="text-gray-700">·</span>
                  <span>6-mo minimum</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-gray-400">$5,200/yr (2 months free)</span>
                </div>
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {starterFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check size={16} className="text-orange-400 mt-0.5 shrink-0" />
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

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card p-8 md:p-10 rounded-3xl border border-orange-500/40 bg-orange-500/5 flex flex-col relative"
            >
              <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl tracking-wide">
                MOST POPULAR
              </div>
              <div className="mb-8">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Pro Plan</div>
                <h3 className="text-2xl font-bold text-white mb-2">Full Pipeline. Zero Missed Jobs.</h3>
                <p className="text-gray-400 text-sm">Capture, qualify, dispatch, and reactivate, completely automated.</p>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-bold text-white">$797</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mt-2">
                  <span>$1,997 setup</span>
                  <span className="text-gray-700">·</span>
                  <span>6-mo minimum</span>
                  <span className="text-gray-700">·</span>
                  <span className="text-gray-400">$8,200/yr option</span>
                </div>
              </div>
              <div className="mb-10 flex-1">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Everything in Starter, plus:</p>
                <ul className="space-y-3">
                  {proAddons.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                      <Check size={16} className="text-orange-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 shadow-lg shadow-orange-500/20"
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

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why not just use an answering service?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Answering services miss context. Missing calls costs jobs. Both options cost you revenue.
            </p>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-500 text-sm font-medium w-[30%]" />
                  <th className="p-3 text-center w-[23%]">
                    <div className="bg-orange-600 text-white rounded-xl px-3 py-2.5 text-sm font-bold">AutoMeit.ai</div>
                  </th>
                  <th className="p-3 text-center w-[23%]">
                    <div className="bg-white/5 border border-white/10 text-gray-400 rounded-xl px-3 py-2.5 text-sm font-medium">Missing Calls</div>
                  </th>
                  <th className="p-3 text-center w-[23%]">
                    <div className="bg-white/5 border border-white/10 text-gray-400 rounded-xl px-3 py-2.5 text-sm font-medium">Answering Service</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}` }>
                    <td className="p-4 text-sm text-gray-400 font-medium">{row.label}</td>
                    <td className="p-4 text-center text-sm text-orange-300 font-semibold">{row.automeit}</td>
                    <td className="p-4 text-center text-sm text-gray-500">{row.miss}</td>
                    <td className="p-4 text-center text-sm text-gray-500">{row.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-10">
            <Button onClick={() => setIsCalendlyOpen(true)} variant="outline" className="border-white/10 hover:bg-white/5 text-white">
              See which plan fits your operation
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">What trades owners say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">Rated 5.0 by our clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col"
              >
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</blockquote>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{t.title}</div>
                  <div className="text-gray-600 text-xs">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common questions</h2>
              <p className="text-gray-400">Everything trades owners ask before getting started.</p>
            </div>
            <div className="divide-y divide-white/8">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="text-white font-medium pr-8 group-hover:text-orange-300 transition-colors">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-orange-400" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="pb-6 text-gray-400 leading-relaxed text-sm -mt-2">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">What we are</p>
            <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              &ldquo;AutoMeit.ai is a{" "}
              <span className="text-orange-400">Trades Revenue Infrastructure Company</span>
              . We install AI systems that capture missed jobs, automate dispatch
              intake, reactivate past customers, and prove ROI with real dashboards.&rdquo;
            </blockquote>
            <p className="text-gray-500 mt-8 text-sm">
              Built for plumbing, HVAC, roofing, electrical, and general contracting.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-orange-900/40 via-background to-amber-900/40 border border-white/10 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to stop leaving jobs on the table?</h2>
              <p className="text-gray-300 mb-3 max-w-xl mx-auto text-lg">
                Book a free 20-minute revenue audit. We will calculate exactly how
                many jobs you are missing and what the dollar impact is.
              </p>
              <p className="text-gray-500 text-sm mb-10">No pitch. No pressure. Real numbers.</p>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white text-lg h-14 px-14 shadow-xl shadow-orange-500/20"
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
