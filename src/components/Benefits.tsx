import { motion } from "framer-motion";
import { benefitItems } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";

const leaderboardRows = [
  { rank: 1, team: "Vector Strike", state: "Maharashtra", score: "9,840" },
  { rank: 2, team: "Iron Circuit", state: "Tamil Nadu", score: "9,615" },
  { rank: 3, team: "Nimbus RC", state: "Karnataka", score: "9,402" },
  { rank: 4, team: "Forge Tactical", state: "Delhi NCR", score: "9,188" },
  { rank: 5, team: "Apex Drift", state: "Telangana", score: "8,960" },
];

/** Why Register — benefits list paired with a live national leaderboard preview. */
export default function Benefits() {
  return (
    <section id="benefits" className="section-pad bg-bg-secondary">
      <div className="container">
        <SectionHeading
          eyebrow="Why It's Worth It"
          title="Why Register With BotLeague"
          subtitle="Every match you play counts toward something bigger than a single event."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            {benefitItems.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-bg-card border border-border hover:border-blue-accent/50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-11 h-11 bg-bg-secondary border border-border shrink-0">
                    <Icon size={20} className="text-blue-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold uppercase mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-text-gray leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2 bg-bg-card border border-border p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="eyebrow">National Leaderboard</span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-text-gray">
                <span className="w-1.5 h-1.5 bg-red-arena rounded-full animate-pulse-dot" />
                Live
              </span>
            </div>

            <div className="flex flex-col">
              <div className="grid grid-cols-[2.5rem_1fr_5rem_4rem] gap-2 px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-text-gray border-b border-border">
                <span>Rank</span>
                <span>Team</span>
                <span className="hidden sm:block">State</span>
                <span className="text-right">Score</span>
              </div>
              {leaderboardRows.map((row) => (
                <div
                  key={row.rank}
                  className="grid grid-cols-[2.5rem_1fr_5rem_4rem] gap-2 px-3 py-3 text-sm border-b border-border/60 last:border-b-0 hover:bg-white/[0.03] transition-colors duration-200"
                >
                  <span
                    className={`font-mono font-semibold ${row.rank <= 3 ? "text-red-arena" : "text-text-gray"}`}
                  >
                    {String(row.rank).padStart(2, "0")}
                  </span>
                  <span className="font-medium truncate">{row.team}</span>
                  <span className="hidden sm:block text-text-gray text-xs truncate">
                    {row.state}
                  </span>
                  <span className="text-right font-mono text-text-gray">{row.score}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
