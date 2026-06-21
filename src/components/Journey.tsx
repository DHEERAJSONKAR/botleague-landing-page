import { motion } from "framer-motion";
import { journeySteps } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";

/** User Journey — a real sequence, so numbering and a connecting line carry meaning. */
export default function Journey() {
  return (
    <section id="journey" className="section-pad bg-bg-secondary">
      <div className="container">
        <SectionHeading
          eyebrow="From Garage To League"
          title="Your Journey In BotLeague"
          subtitle="Four stages stand between a first build and a national ranking. Every team follows the same path."
          align="center"
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mt-20 relative">
          <div className="absolute top-7 left-0 right-0 h-px bg-border" aria-hidden="true" />
          <div className="grid grid-cols-4 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex flex-col"
                >
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 bg-bg-secondary border-2 border-red-arena mb-6">
                    <Icon size={22} className="text-red-arena" />
                  </div>
                  <span className="font-mono text-xs text-text-gray tracking-widest mb-2">
                    STEP {step.number}
                  </span>
                  <h3 className="font-display text-lg font-semibold uppercase leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-gray leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden mt-12 relative pl-8">
          <div className="absolute top-2 bottom-2 left-[26px] w-px bg-border" aria-hidden="true" />
          <div className="flex flex-col gap-10">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-5"
                >
                  <div className="relative z-10 -ml-8 flex items-center justify-center w-12 h-12 bg-bg-secondary border-2 border-red-arena shrink-0">
                    <Icon size={18} className="text-red-arena" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-text-gray tracking-widest">
                      STEP {step.number}
                    </span>
                    <h3 className="font-display text-lg font-semibold uppercase leading-snug mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-text-gray leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
