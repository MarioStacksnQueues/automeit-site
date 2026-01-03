import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            We believe humans should do <br />
            <span className="text-gradient">human work</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            AutoMeit.ai was founded on a simple premise: talent is wasted on repetitive tasks. We help forward-thinking companies unlock their team's creative potential through intelligent automation.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pragmatism over Hype", desc: "We don't care about the latest AI buzzword. We care about what actually solves your business problem reliably." },
              { title: "Engineering Excellence", desc: "Our automations are built with error handling, logging, and scalability in mind—not flimsy no-code scripts." },
              { title: "Transparency", desc: "You own the systems we build. No black boxes, no hostage situations. We build it, you keep it." }
            ].map((value, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl border-t-2 border-t-blue-500">
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                In 2022, we noticed a gap. Agencies were either selling simple Zapier connections that broke constantly, or massive enterprise consulting packages that cost six figures.
              </p>
              <p>
                AutoMeit fills the middle ground. We bring software engineering discipline to business process automation.
              </p>
              <p>
                Today, we're a small, dedicated team of automation engineers and systems architects working with high-growth startups and established firms to streamline operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
