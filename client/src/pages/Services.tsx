import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Bot, Mail, FileText, Code2, ArrowRight, MessageCircle } from "lucide-react";import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function Services() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const services = [
    {
      id: "lead-intelligence",
      icon: <Mail className="w-12 h-12 text-blue-400" />,
      title: "Lead Intelligence & Outreach",
      description: "Stop manually researching leads. We build systems that scrape data, enrich profiles, score leads, and draft hyper-personalized outreach sequences.",
      features: ["LinkedIn & Web Scraping", "Data Enrichment (Clearbit/Apollo)", "AI Personalized Email Drafting", "CRM Sync (HubSpot/Salesforce)"]
    },
    {
      id: "ai-receptionist",
      icon: <Bot className="w-12 h-12 text-purple-400" />,
      title: "AI Receptionist + Order Capture",
      description: "Answer calls and texts 24/7, build carts in real time, send payment links, and route urgent requests—so you never miss revenue.",
      features: ["Call + SMS Handling", "Cart Creation (POS/API)", "Pay-by-Link Checkout", "Live Transfer / Human Handoff"]
    },
    {
      id: "ai-customer-support",
      icon: <MessageCircle className="w-12 h-12 text-cyan-400" />,
      title: "AI Customer Support Automation",
      description:
        "Resolve customer questions instantly, reduce ticket volume, and route complex issues to a human—so support stays fast even after hours.",
      features: [
        "Helpdesk Integration (Intercom/Zendesk)",
        "FAQ + Knowledge Base Training",
        "Smart Routing + Human Handoff",
        "24/7 Responses + Audit Logs",]
    },
    {
      id: "custom-workflows",
      icon: <Code2 className="w-12 h-12 text-pink-400" />,
      title: "Custom Operational Workflows",
      description: "Have a unique bottleneck? We build bespoke automation pipelines connecting any tool with an API to streamline your specific internal processes.",
      features: ["Custom API Integrations", "Internal Dashboards", "Reporting Automation", "Employee Onboarding Flows"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services tailored for <br />
              <span className="text-gradient">Scale & Efficiency</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We don't sell cookie-cutter solutions. We architect custom automation infrastructure that fits your business like a glove.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Button 
                    onClick={() => setIsCalendlyOpen(true)}
                    variant="outline" 
                    className="border-white/10 hover:bg-white/5 group"
                  >
                    Discuss this solution 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              <div className="flex-1 w-full">
                <div className="glass-card p-1 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent aspect-video flex items-center justify-center relative overflow-hidden group">
                   {/* Abstract visualization placeholder */}
                   <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                   <div className="relative z-10 text-center p-8">
                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                        {service.icon}
                     </div>
                     <p className="text-sm text-gray-500 font-mono">
                       Automated Workflow Visualization
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to automate your workflow?</h2>
          <Button 
            onClick={() => setIsCalendlyOpen(true)}
            size="lg" 
            className="text-lg px-8 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20"
          >
            Start Your Project
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
