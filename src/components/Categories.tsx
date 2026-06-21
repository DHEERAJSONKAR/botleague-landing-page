import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { categoryItems } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";

/** Categories — age-banded programs, each with its own skill focus. */
export default function Categories() {
  return (
    <section id="categories" className="section-pad bg-bg-secondary">
      <div className="container">
        <SectionHeading
          eyebrow="Programs By Age"
          title="Find Your Category"
          subtitle="Every builder starts somewhere. BotLeague programs scale in complexity as skills grow."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryItems.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden border border-border bg-bg-card aspect-[3/4]"
            >
              <img
                src={category.image}
                alt={`${category.title} robotics program, ${category.ageRange}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-bg-primary/10 group-hover:from-bg-primary/95 transition-colors duration-300" />

              <div className="relative h-full flex flex-col justify-end p-5">
                <span className="font-mono text-xs text-red-arena tracking-widest mb-2">
                  {category.ageRange}
                </span>
                <h3 className="font-display text-xl font-semibold uppercase leading-snug mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-text-gray leading-relaxed mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skillTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[11px] font-mono uppercase tracking-wide border border-border text-text-gray"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase text-text-white group-hover:text-red-arena transition-colors duration-200">
                  Explore Program
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
