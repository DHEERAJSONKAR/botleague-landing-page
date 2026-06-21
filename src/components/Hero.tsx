import { motion } from "framer-motion";
import { FiArrowRight, FiCompass } from "react-icons/fi";
import Button from "./ui/Button";

const heroStats = [
  { label: "Active Teams", value: "2,400+" },
  { label: "States Covered", value: "28" },
  { label: "Events / Year", value: "60+" },
];

/** Full-bleed hero banner — the page's thesis: a national arena, live and in motion. */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-bg-primary"
    >
      {/* Arena banner image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
          alt="Robotics arena with a competition bot under stage lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-bg-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/90 via-bg-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      </div>

      <div className="container relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-bg-card/80 border border-border backdrop-blur-sm"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-red-arena rounded-full animate-pulse-dot" />
          </span>
          <span className="eyebrow">Season 5 · Registrations Open</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl max-w-4xl"
        >
          India's Ultimate
          <br />
          <span className="text-red-arena">Robotics Arena</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-text-gray text-base sm:text-lg leading-relaxed"
        >
          One national platform for every robotics builder in the country.
          Register your team, compete in verified events, and climb a
          ranking that actually counts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg" icon={<FiArrowRight />}>
            Create Account
          </Button>
          <Button variant="outline" size="lg" icon={<FiCompass />} iconPosition="left">
            Explore Events
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6 max-w-2xl"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-mono text-2xl sm:text-3xl font-semibold text-text-white">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wider text-text-gray mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
