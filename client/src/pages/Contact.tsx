import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// Your Formspree form ID
const FORMSPREE_FORM_ID = "mkogqkzr";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);
    setStatusMsg(null);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          _subject: "New Contact Form Submission — AutoMeit.ai",
        }),
      });

      if (res.ok) {
        setStatusMsg({
          type: "success",
          text: "Message sent! We'll get back to you within 1 business day.",
        });
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setStatusMsg({
          type: "error",
          text: json?.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's talk automation.
                </h1>
                <p className="text-xl text-gray-400">
                  Ready to reclaim your time? Fill out the form or reach out directly. We usually respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-400">Automeit.hr@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Response Time</h3>
                    <p className="text-gray-400">Typically within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Based in New York, NY</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-10 rounded-3xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

              {statusMsg && (
                <div
                  className={`mb-6 rounded-xl px-4 py-3 text-sm ${
                    statusMsg.type === "success"
                      ? "bg-green-500/10 text-green-300 border border-green-500/20"
                      : "bg-red-500/10 text-red-300 border border-red-500/20"
                  }`}
                >
                  {statusMsg.text}
                </div>
              )}

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <Input
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-400 text-xs">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Email</label>
                    <Input
                      placeholder="john@company.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-400 text-xs">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Company</label>
                  <Input
                    placeholder="Company Name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500"
                    {...form.register("company")}
                  />
                  {form.formState.errors.company && (
                    <p className="text-red-400 text-xs">{form.formState.errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-blue-500 min-h-[150px]"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-xs">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}