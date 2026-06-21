import { motion } from "framer-motion";
import { disciplineItems } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";
import CornerFrame from "./ui/CornerFrame";

/** Competition Disciplines — the six event formats teams can enter. */
export default function Disciplines() {
  return (
    <section id="disciplines" className="section-pad bg-bg-primary">
      <div className="container">
        <SectionHeading
          eyebrow="Six Formats, One League"
          title="Competition Disciplines"
          subtitle="From precision line-tracing to full-contact combat — pick the format that matches your build."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {disciplineItems.map((discipline, index) => {
            const Icon = discipline.icon;
            return (
              <motion.div
                key={discipline.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <CornerFrame className="h-full bg-bg-card border border-border p-6 flex flex-col gap-4 group-hover:border-transparent transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center justify-center w-12 h-12 bg-bg-secondary border border-border group-hover:border-red-arena transition-colors duration-300">
                      <Icon size={22} className="text-red-arena" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-text-gray px-2 py-1 border border-border">
                      {discipline.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold uppercase">
                    {discipline.title}
                  </h3>
                  <p className="text-sm text-text-gray leading-relaxed">
                    {discipline.description}
                  </p>
                </CornerFrame>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
