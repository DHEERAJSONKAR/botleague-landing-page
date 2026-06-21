import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiUsers, FiArrowUpRight } from "react-icons/fi";
import { eventCards } from "../data/mockData";
import type { EventStatus } from "../types";
import SectionHeading from "./ui/SectionHeading";
import CornerFrame from "./ui/CornerFrame";

const statusStyles: Record<EventStatus, string> = {
  live: "bg-red-arena text-text-white",
  upcoming: "bg-blue-accent text-text-white",
  past: "bg-bg-card text-text-gray border border-border",
};

/** Competitions & Events — Live, Upcoming, and Past Results cards. */
export default function Competitions() {
  return (
    <section id="competitions" className="section-pad bg-bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="The Arena, Right Now"
            title="Competitions & Events"
            subtitle="Track every match happening across the league — from this morning's qualifiers to last season's finals."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventCards.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <CornerFrame
                color={event.status === "upcoming" ? "blue" : "red"}
                className="h-full bg-bg-card border border-border p-6 flex flex-col gap-5 transition-colors duration-300 group-hover:border-transparent"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-display font-semibold uppercase tracking-wide ${statusStyles[event.status]}`}
                  >
                    {event.status === "live" && (
                      <span className="w-1.5 h-1.5 bg-text-white rounded-full animate-pulse-dot" />
                    )}
                    {event.statusLabel}
                  </span>
                  <FiArrowUpRight className="text-text-gray group-hover:text-red-arena group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold uppercase leading-snug">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-gray leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-border text-sm text-text-gray font-mono">
                  <span className="flex items-center gap-2">
                    <FiMapPin size={14} className="text-red-arena shrink-0" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiCalendar size={14} className="text-red-arena shrink-0" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiUsers size={14} className="text-red-arena shrink-0" />
                    {event.participants}
                  </span>
                </div>

                <button className="w-full mt-1 py-2.5 font-display text-sm font-semibold uppercase tracking-wide border border-border text-text-white hover:bg-red-arena hover:border-red-arena transition-colors duration-200">
                  {event.ctaLabel}
                </button>
              </CornerFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
