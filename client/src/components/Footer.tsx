import { Link } from "wouter";
import { Linkedin, Mail, Instagram } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050a14] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/#top" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AutoMeit<span className="text-blue-500">.ai</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We build intelligent automation systems that free teams from
              repetitive work. Scale your operations without scaling headcount.
            </p>

            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/automeit.ai/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mario-cuevas-b26421232/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/services#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Lead Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/services#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Support Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Document Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Custom Workflows
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  href="/about#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sms-policy#top"
                  className="hover:text-blue-400 transition-colors"
                >
                  SMS Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-500" />
                <Link
                  href="/contact#top"
                  className="hover:text-white transition-colors"
                >
                  Automeit.hr@gmail.com
                </Link>
              </li>
              <li className="text-gray-500 text-xs mt-4">
                Now accepting new projects.
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} AutoMeit.ai. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              href="/privacy#top"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms#top"
              className="hover:text-gray-300 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
