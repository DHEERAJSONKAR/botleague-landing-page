import { ecosystemRoles } from "../data/mockData";
import SectionHeading from "./ui/SectionHeading";
import EcosystemFormCard from "./EcosystemFormCard";

/** Join The Ecosystem — three parallel signup paths into the league. */
export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section-pad bg-bg-primary">
      <div className="container">
        <SectionHeading
          eyebrow="Beyond The Builders"
          title="Join The Ecosystem"
          subtitle="BotLeague runs on more than teams. Judges, volunteers, and community members keep the league fair and running."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ecosystemRoles.map((role, index) => (
            <EcosystemFormCard key={role.id} role={role} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
