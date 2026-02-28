import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PopupModal } from "react-calendly";

const industries = [
  {
    name: "Med Spa and Aesthetics",
    href: "/",
    desc: "Botox, fillers, laser and more",
    color: "text-rose-400",
  },
  {
    name: "Trades",
    href: "/trades",
    desc: "Plumbing, HVAC, roofing and electrical",
    color: "text-orange-400",
  },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isTradesPage = location === "/trades" || location === "/trades-services";
  const servicesHref = isTradesPage ? "/trades-services" : "/services";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Services", href: servicesHref },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-[0_0_15px_rgba(244,63,94,0.5)] transition-all">
              A
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-rose-200 transition-colors">
              AutoMeit<span className="text-rose-500">.ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {/* Industries Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-rose-400 ${
                    location === "/" || location === "/trades" ? "text-rose-400" : "text-gray-300"
                  }`}
                >
                  Industries
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isIndustriesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {industries.map((ind) => (
                        <Link
                          key={ind.href}
                          href={ind.href}
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex flex-col gap-0.5 px-5 py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                        >
                          <span className={`text-sm font-semibold ${ind.color}`}>{ind.name}</span>
                          <span className="text-xs text-gray-500">{ind.desc}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-rose-400 ${
                    location === link.href ? "text-rose-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Button
              onClick={() => setIsCalendlyOpen(true)}
              className="bg-rose-600 hover:bg-rose-700 text-white border-none shadow-lg shadow-rose-500/20 hover:shadow-rose-500/40 transition-all"
            >
              Book Revenue Audit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Industries</p>
                {industries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col gap-0.5 py-3 border-b border-white/5"
                  >
                    <span className={`text-lg font-semibold ${ind.color}`}>{ind.name}</span>
                    <span className="text-sm text-gray-500">{ind.desc}</span>
                  </Link>
                ))}
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-medium ${
                    location === link.href ? "text-rose-400" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                onClick={() => { setIsMobileMenuOpen(false); setIsCalendlyOpen(true); }}
                className="mt-4 w-full bg-rose-600 hover:bg-rose-700 text-lg py-6"
              >
                Book Revenue Audit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PopupModal
        url="https://calendly.com/automeit-hr/free-automation-audit"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </>
  );
}
