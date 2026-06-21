import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/mockData";
import Button from "./ui/Button";

/** Sticky top navigation with desktop links and a mobile slide-down menu. */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <a href="#home" className="flex items-center gap-2 group" aria-label="BotLeague home">
          <span className="relative flex items-center justify-center w-9 h-9 bg-red-arena">
            <span className="absolute inset-0 bg-red-arena group-hover:bg-blue-accent transition-colors duration-300" />
            <span className="relative font-display font-bold text-lg text-text-white">B</span>
          </span>
          <span className="font-display font-bold text-xl tracking-wide uppercase">
            Bot<span className="text-red-arena">League</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="font-display text-sm font-semibold uppercase tracking-wide text-text-gray hover:text-text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button className="font-display text-sm font-semibold uppercase tracking-wide text-text-white hover:text-red-arena transition-colors duration-200 px-3">
            Login
          </button>
          <Button variant="primary" size="md">
            Register Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-text-white"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-bg-secondary border-b border-border"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 font-display text-base font-semibold uppercase tracking-wide text-text-gray hover:text-text-white transition-colors duration-200 border-b border-border/60"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container flex flex-col gap-3 pb-6">
              <Button variant="outline" size="md" className="w-full justify-center">
                Login
              </Button>
              <Button variant="primary" size="md" className="w-full justify-center">
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
