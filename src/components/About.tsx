import { motion } from "framer-motion";
import { featureItems } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";

/** "What is BotLeague" — the four pillars of the platform. */
export default function About() {
  return (
    <section id="about" className="section-pad bg-bg-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="What Is BotLeague"
              title="One Platform For Every Robotics Builder"
              subtitle="BotLeague turns scattered school and college robotics events into a single, structured national system."
            />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {featureItems.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-bg-card border border-border p-6 hover:border-red-arena/50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-11 h-11 bg-bg-secondary border border-border mb-5">
                    <Icon size={20} className="text-red-arena" />
                  </div>
                  <h3 className="font-display text-lg font-semibold uppercase mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-gray leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
