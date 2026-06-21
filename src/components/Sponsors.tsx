import { motion } from "framer-motion";
import { sponsorItems } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";

const tierLabels: Record<string, string> = {
  title: "Title Sponsor",
  "powered-by": "Powered By",
  partner: "Official Partners",
};

/** Sponsors — grouped by tier, rendered as a responsive wordmark grid. */
export default function Sponsors() {
  const partners = sponsorItems.filter((s) => s.tier === "partner");
  const poweredBy = sponsorItems.filter((s) => s.tier === "powered-by");
  const title = sponsorItems.find((s) => s.tier === "title");

  return (
    <section id="sponsors" className="section-pad bg-bg-secondary">
      <div className="container">
        <SectionHeading eyebrow="Backing The League" title="Sponsors" align="center" />

        <div className="mt-12 flex flex-col gap-10">
          {title && (
            <div className="flex flex-col items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-text-gray">
                {tierLabels.title}
              </span>
              <span className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wide text-text-white">
                {title.name}
              </span>
            </div>
          )}

          <div className="flex flex-col items-center gap-5">
            <span className="text-xs font-mono uppercase tracking-widest text-text-gray">
              {tierLabels["powered-by"]}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {poweredBy.map((sponsor, index) => (
                <motion.span
                  key={sponsor.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="font-display text-xl sm:text-2xl font-semibold uppercase text-text-gray hover:text-text-white transition-colors duration-200"
                >
                  {sponsor.name}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <span className="text-xs font-mono uppercase tracking-widest text-text-gray">
              {tierLabels.partner}
            </span>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {partners.map((sponsor, index) => (
                <motion.div
                  key={sponsor.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="flex items-center justify-center h-20 bg-bg-card border border-border px-4 grayscale hover:grayscale-0 hover:border-red-arena/40 transition-all duration-300"
                >
                  <span className="font-mono text-sm text-text-gray text-center leading-tight">
                    {sponsor.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
