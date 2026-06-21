import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

/** Consistent eyebrow + heading + subtitle block used to open each section. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col gap-3 max-w-2xl ${alignClasses}`}
    >
      <span className="eyebrow flex items-center gap-2">
        <span className="w-6 h-px bg-red-arena" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold uppercase leading-[1.05] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-gray text-base sm:text-lg leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
