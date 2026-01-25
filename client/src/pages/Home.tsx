import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Bot,
  Zap,
  Database,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useRequestChecklist } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertChecklistSchema, type InsertChecklist } from "@shared/schema";
import { PopupModal } from "react-calendly";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const checklistMutation = useRequestChecklist();

  const form = useForm<InsertChecklist>({
    resolver: zodResolver(insertChecklistSchema),
    defaultValues: { email: "" },
  });

  const onChecklistSubmit = (data: InsertChecklist) => {
    checklistMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 border-blue-500/30 bg-blue-500/10 text-blue-300 rounded-full"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Taking New Clients for Q1 2026
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
              Stop Drowning in <br />
              <span className="text-gradient">Repetitive Work</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build AI-powered automation systems that reclaim 20+ hours per
              week for your team. Scale your operations without hiring more
              staff.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full sm:w-auto text-lg h-12 px-8 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25"
              >
                Book a Free Automation Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto text-lg h-12 px-8 border-white/10 hover:bg-white/5 text-gray-300"
              >
                See How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-10 border-y border-white/5 bg-white//[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
            Trusted by teams across industries
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              "Legal",
              "Recruiting",
              "E-commerce",
              "SaaS",
              "Professional Services",
            ].map((industry) => (
              <span
                key={industry}
                className="text-xl font-semibold text-gray-300 hover:text-white cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your team is burned out. <br />
                <span className="text-red-400">The busywork is winning.</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Sales reps wasting hours on data entry instead of selling.",
                  "Support teams answering the same 5 questions all day.",
                  "Operations buried under spreadsheets and manual reports.",
                  "Growth stalled because you can't hire fast enough.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                      <ChevronRight size={16} />
                    </div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20 rounded-2xl blur-xl -z-10" />
              <div className="glass-card p-8 rounded-2xl border-red-500/20">
                <div className="space-y-4">
                  <div className="h-2 bg-white/10 rounded w-3/4" />
                  <div className="h-2 bg-white/10 rounded w-full" />
                  <div className="h-2 bg-white/10 rounded w-5/6" />
                  <div className="h-2 bg-white/10 rounded w-2/3" />
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold">
                    !
                  </div>
                  <div>
                    <p className="text-white font-medium">System Overload</p>
                    <p className="text-sm text-gray-400">
                      Manual processes are choking your growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-24 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="container mx-auto px-4 md:px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-blue-400">AutoMeit System</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
           This isn’t plug-and-play AI. It’s custom automation engineered to work inside your real systems.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Bot className="w-8 h-8 text-blue-400" />,
              title: "Lead Intelligence",
              desc: "Enrich leads, draft personalized outreach, and sync to CRM automatically.",
            },
            {
              icon: <Zap className="w-8 h-8 text-purple-400" />,
              title: "Support Automation",
              desc: "Resolve 60% of tickets instantly with AI agents trained on your docs.",
            },
            {
              icon: <Database className="w-8 h-8 text-cyan-400" />,
              title: "Doc Processing",
              desc: "Extract data from invoices, contracts, and resumes into your database.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How We Work
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            {[
              {
                step: "01",
                title: "Audit & Strategy",
                desc: "We analyze your workflows to identify high-ROI automation opportunities.",
              },
              {
                step: "02",
                title: "Build & Integrate",
                desc: "We engineer custom automation systems connected to your existing stack.",
              },
              {
                step: "03",
                title: "Scale & Support",
                desc: "We maintain the systems and iterate as your business grows.",
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-background border-4 border-blue-500/20 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-400">
              Investment in systems that pay for themselves.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Starter
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                $3,500
                <span className="text-lg font-normal text-gray-500">
                  {" "}
                  one-time
                </span>
              </div>
              <p className="text-gray-400 mb-8 text-sm">
                Perfect for automating a single complex workflow.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "1 Custom Workflow",
                  "Zapier/Make Integration",
                  "2 Weeks Support",
                  "Training Video",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <Check size={16} className="text-blue-500" /> {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                variant="outline"
                className="w-full border-white/10 hover:bg-white/5"
              >
                Book Audit
              </Button>
            </div>

            {/* Core */}
            <div className="glass-card p-8 rounded-2xl border border-blue-500/50 bg-blue-500/5 relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Core System
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                $8,000
                <span className="text-lg font-normal text-gray-500">
                  {" "}
                  one-time
                </span>
              </div>
              <p className="text-gray-400 mb-8 text-sm">
                Full department automation overhaul.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "3-5 Interconnected Workflows",
                  "Custom Dashboard",
                  "1 Month Support",
                  "Team Workshop",
                  "Priority Build Queue",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-white text-sm"
                  >
                    <Check size={16} className="text-blue-400" /> {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Button>
            </div>

            {/* Scale */}
            <div className="glass-card p-8 rounded-2xl border border-white/10 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Scale Retainer
              </h3>
              <div className="text-4xl font-bold text-white mb-4">
                $2-5k
                <span className="text-lg font-normal text-gray-500">
                  {" "}
                  /month
                </span>
              </div>
              <p className="text-gray-400 mb-8 text-sm">
                Ongoing optimization and new builds.
              </p>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Unlimited Minor Tweaks",
                  "1 New Workflow / Month",
                  "Regular Strategy Calls",
                  "Server Maintenance",
                  "Priority Support",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <Check size={16} className="text-blue-500" /> {feature}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => setIsCalendlyOpen(true)}
                variant="outline"
                className="w-full border-white/10 hover:bg-white/5"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet / Footer CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Not ready to commit?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
              Get our free checklist:{" "}
              <strong>
                "10 Hidden Automation Opportunities in Your Business"
              </strong>{" "}
              sent to your inbox.
            </p>

            <form
              onSubmit={form.handleSubmit(onChecklistSubmit)}
              className="max-w-md mx-auto flex gap-4 relative z-10"
            >
              <Input
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500"
                {...form.register("email")}
              />
              <Button
                type="submit"
                disabled={checklistMutation.isPending}
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                {checklistMutation.isPending ? "Sending..." : "Send It"}
              </Button>
            </form>
            {form.formState.errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {form.formState.errors.email.message}
              </p>
            )}
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
