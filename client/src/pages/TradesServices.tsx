import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  BarChart3,
  Shield,
  Users,
  Zap,
  Star,
  RefreshCw,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Check,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function TradesServices() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const starterFeatures = [
    {
      icon: <Phone className="w-6 h-6 text-orange-400" />,
      title: "24/7 AI Phone System",
      desc: "Answers 100% of inbound calls with a natural, branded voice. Handles nights, weekends, and holidays so you never miss a job call. Optional live transfer to your team during business hours.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-orange-400" />,
      title: "Job Intake Qualification",
      desc: "Custom-scripted triage for emergency calls, service estimates, maintenance appointments, and seasonal services. Captures issue type, address, urgency level, and contact info on every call.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-400" />,
      title: "Booking Integration",
      desc: "Real-time connection to Jobber, Housecall Pro, and Google Calendar. Books jobs directly and fires automated SMS confirmations immediately after booking.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-400" />,
      title: "After-Hours Emergency Capture",
      desc: "When an emergency call comes in after hours, the AI captures all job details and fires an instant SMS alert to your on-call tech. No emergency job slips through.",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      title: "FAQ and Objection Handling",
      desc: "AI trained on your service areas, pricing ranges, availability windows, and what customers should do before the tech arrives. Handles the common questions so your team does not have to.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "Missed-Call SMS Recovery",
      desc: "When a call drops before answering, an instant branded SMS fires within seconds with a callback request link. Every lead that calls stays in your pipeline.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: "Revenue Dashboard",
      desc: "Monthly report showing calls answered, jobs booked, and estimated revenue captured. Turns your phone system from a cost into a documented revenue asset.",
    },
  ];

  const proFeatures = [
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: "Multi-Tech Routing and Dispatch Triage",
      desc: "Multiple technicians or multiple locations? Call routing logic assigns calls based on availability, location, and job type. Emergency calls reach the right tech immediately.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-amber-400" />,
      title: "Customer Reactivation Campaigns",
      desc: "Automated outreach to past customers for seasonal tune-ups, annual service reminders, and maintenance follow-ups. Brings your existing book of business back to work for you.",
    },
    {
      icon: <Star className="w-6 h-6 text-amber-400" />,
      title: "Review Automation",
      desc: "Post-job SMS review request with a direct Google Business link. Negative feedback routes internally before it goes public, protecting your reputation while growing your star rating.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-amber-400" />,
      title: "Financing FAQ Flow",
      desc: "Large jobs like roof replacements and full HVAC installs often stall on price. We build a financing FAQ flow into the intake so customers have answers before they talk to your team.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
      title: "Advanced Revenue Dashboard",
      desc: "Revenue per call type, emergency versus standard job breakdown, lost-call revenue estimates, and after-hours revenue impact. Hard ROI evidence on every monthly report.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-amber-400" />,
      title: "Quarterly Optimization Call",
      desc: "Every quarter, we review your call data, adjust scripts, add seasonal service flows, and optimize dispatch logic. Your system improves over time instead of going stale.",
    },
  ];

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-5">
              Trades Revenue Infrastructure
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built for trades.<br />
              <span className="text-gradient-trades">Nothing else.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Every call script, every integration, and every revenue report is
              built around how your jobs work: emergency calls, estimates,
              seasonal maintenance, and dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* STARTER PLAN */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-orange-400 text-sm font-bold">STARTER PLAN</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Never Miss a Job
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                The infrastructure to stop losing jobs to voicemail. Every
                inbound call captured, qualified, and booked, 24 hours a day,
                7 days a week.
              </p>
              <div className="space-y-3 text-sm text-gray-400 mb-10">
                {[
                  "$997 one-time setup fee",
                  "$497/month",
                  "6-month minimum commitment",
                  "$5,200/year, saves 2 months",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={14} className="text-orange-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 mb-8">
                <p className="text-sm text-gray-500 italic">
                  &ldquo;Setup is $997 because we build your full job intake
                  scripts and integrate directly into Jobber or Housecall Pro.
                  Monthly is $497. One recovered emergency job pays for the
                  whole month.&rdquo;
                </p>
              </div>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 text-white h-12 px-8 group"
              >
                Book Revenue Audit
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="space-y-4">
              {starterFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl border border-white/8 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRO PLAN */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-4">
              {proFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="glass-card p-5 rounded-xl border border-white/8 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-400 text-sm font-bold">PRO PLAN - MOST POPULAR</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Full Pipeline. Zero Missed Jobs.
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Everything in Starter, plus multi-tech routing, reactivation
                campaigns, review automation, and quarterly optimization.
                You are not just capturing missed revenue, you are building
                a system that grows.
              </p>
              <div className="space-y-3 text-sm text-gray-400 mb-10">
                {[
                  "$1,997 one-time setup fee",
                  "$797/month",
                  "6-month minimum commitment",
                  "$8,200/year option",
                  "Includes everything in Starter",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={14} className="text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/8 mb-8">
                <p className="text-sm text-gray-300 font-medium mb-1">Starter = Capture missed jobs</p>
                <p className="text-sm text-gray-300 font-medium">Pro = Build a full revenue pipeline</p>
                <p className="text-xs text-gray-600 mt-3">That is how we explain the difference.</p>
              </div>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white h-12 px-8 shadow-lg shadow-orange-500/20 group"
              >
                Book Revenue Audit
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Works with your existing stack</h2>
          <p className="text-gray-400 mb-10">Direct integrations, no middleware, no workarounds.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Jobber", "Housecall Pro", "Google Calendar", "ServiceTitan", "FieldEdge", "Salesforce", "HubSpot"].map((tool) => (
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

      {/* CTA */}
      <section className="py-20 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which plan fits?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Book a free revenue audit and we will show you exactly what your
            operation is missing and which plan fixes it.
          </p>
          <Button
            onClick={() => setIsCalendlyOpen(true)}
            size="lg"
            className="text-lg px-12 h-14 bg-orange-600 hover:bg-orange-700 shadow-xl shadow-orange-500/20"
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
