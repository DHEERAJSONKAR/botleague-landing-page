import {
  FiUsers,
  FiMap,
  FiAward,
  FiTrendingUp,
  FiGrid,
  FiCreditCard,
  FiBarChart2,
  FiCompass,
  FiTarget,
  FiZap,
  FiNavigation,
  FiVideo,
  FiActivity,
  FiShield,
  FiCheckCircle,
  FiUserCheck,
  FiHeart,
  FiYoutube,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import { GiRaceCar, GiCrossedSwords } from "react-icons/gi";
import type {
  NavLink,
  EventCard,
  JourneyStep,
  FeatureItem,
  CategoryItem,
  DisciplineItem,
  BenefitItem,
  EcosystemRole,
  SponsorItem,
  FooterLinkGroup,
  SocialLink,
} from "../types";

export const navLinks: NavLink[] = [
  { id: "events", label: "Events", href: "#competitions" },
  { id: "programs", label: "Programs", href: "#categories" },
  { id: "community", label: "Community", href: "#ecosystem" },
  { id: "ranks", label: "Ranks", href: "#benefits" },
];

export const eventCards: EventCard[] = [
  {
    id: "live-now",
    status: "live",
    statusLabel: "Live Now",
    title: "Robo War National Qualifiers",
    description:
      "Combat bots from 12 states battle it out in the arena. Watch the live bracket and scores update in real time.",
    location: "Pragati Maidan, New Delhi",
    date: "Today · 10:00 AM IST",
    participants: "64 teams",
    ctaLabel: "Watch Live",
  },
  {
    id: "upcoming",
    status: "upcoming",
    statusLabel: "Upcoming",
    title: "Line Follower Sprint — Season 4",
    description:
      "Precision and speed collide as junior teams race the line across a redesigned, harder track.",
    location: "Bangalore International Exhibition Centre",
    date: "14 Jul 2026",
    participants: "Registration open",
    ctaLabel: "Register Now",
  },
  {
    id: "past-results",
    status: "past",
    statusLabel: "Past Results",
    title: "FPV Drone Racing — Season 3 Finals",
    description:
      "Relive the final lap times, podium finishes, and full leaderboard from last season's drone finals.",
    location: "Hyderabad",
    date: "02 Mar 2026",
    participants: "48 teams",
    ctaLabel: "View Results",
  },
];

export const journeySteps: JourneyStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Build Your Team",
    description:
      "Recruit teammates, pick your category, and register your team profile on the BotLeague platform.",
    icon: FiUsers,
  },
  {
    id: "step-2",
    number: "02",
    title: "Compete Across India",
    description:
      "Enter regional and national events across disciplines — from line followers to robo wars.",
    icon: FiMap,
  },
  {
    id: "step-3",
    number: "03",
    title: "Earn National Ranking & Value",
    description:
      "Every match feeds your verified digital scorecard and moves your team up the national leaderboard.",
    icon: FiTrendingUp,
  },
  {
    id: "step-4",
    number: "04",
    title: "Join The League",
    description:
      "Top-ranked teams earn a permanent place in the BotLeague roster and unlock career pathways.",
    icon: FiAward,
  },
];

export const featureItems: FeatureItem[] = [
  {
    id: "structured-events",
    title: "Structured Events",
    description:
      "A consistent national calendar of regional and national events, run to the same competition standard every time.",
    icon: FiGrid,
  },
  {
    id: "digital-identity",
    title: "Digital Identity",
    description:
      "Every builder gets a verified profile that tracks their team history, matches, and achievements.",
    icon: FiCreditCard,
  },
  {
    id: "national-ranking",
    title: "National Ranking",
    description:
      "A live, transparent leaderboard that ranks every team in the country across each discipline.",
    icon: FiBarChart2,
  },
  {
    id: "career-pathway",
    title: "Career Pathway",
    description:
      "Direct lines from arena performance to internships, scholarships, and robotics industry connections.",
    icon: FiCompass,
  },
];

export const categoryItems: CategoryItem[] = [
  {
    id: "mini-makers",
    title: "Mini Makers",
    ageRange: "Ages 7–9",
    description: "First steps into building and simple block-based control.",
    skillTags: ["Building", "Block Code"],
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "junior-innovators",
    title: "Junior Innovators",
    ageRange: "Ages 10–12",
    description: "Sensors, circuits, and the first real autonomous builds.",
    skillTags: ["Sensors", "Circuits"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "young-engineers",
    title: "Young Engineers",
    ageRange: "Ages 13–16",
    description: "Competitive builds with real engineering constraints.",
    skillTags: ["CAD", "Programming"],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "robo-minds",
    title: "Robo Minds",
    ageRange: "Ages 17+",
    description: "Advanced autonomy, AI, and arena-grade combat builds.",
    skillTags: ["AI/ML", "Combat Robotics"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop&sat=-100",
  },
];

export const disciplineItems: DisciplineItem[] = [
  {
    id: "robo-race",
    title: "Robo Race",
    tag: "Speed",
    description: "Autonomous bots race against the clock on a closed circuit.",
    icon: GiRaceCar,
  },
  {
    id: "line-follower",
    title: "Line Follower",
    tag: "Precision",
    description: "Sensor-guided bots trace a path with zero margin for error.",
    icon: FiNavigation,
  },
  {
    id: "rc-racing",
    title: "RC Racing",
    tag: "Control",
    description: "Driver skill meets raw speed across technical tracks.",
    icon: FiZap,
  },
  {
    id: "fpv-drone-racing",
    title: "FPV Drone Racing",
    tag: "Aerial",
    description: "First-person view drones thread tight, high-speed gates.",
    icon: FiVideo,
  },
  {
    id: "robo-hockey",
    title: "Robo Hockey",
    tag: "Strategy",
    description: "Team-built bots compete for puck control and goals.",
    icon: FiTarget,
  },
  {
    id: "robo-war",
    title: "Robo War",
    tag: "Combat",
    description: "Armored combat bots battle head-to-head in the arena.",
    icon: GiCrossedSwords,
  },
];

export const benefitItems: BenefitItem[] = [
  {
    id: "national-recognition",
    title: "National Recognition",
    description: "Verified results that count toward a single national ranking.",
    icon: FiAward,
  },
  {
    id: "fair-judging",
    title: "Fair Judging",
    description: "Certified judges and standardized scoring at every event.",
    icon: FiShield,
  },
  {
    id: "career-ops",
    title: "Career Opportunities",
    description: "Direct access to internships and industry scouting.",
    icon: FiCheckCircle,
  },
  {
    id: "high-energy-eco",
    title: "High-Energy Ecosystem",
    description: "A growing community of builders, mentors, and fans.",
    icon: FiActivity,
  },
];

export const ecosystemRoles: EcosystemRole[] = [
  {
    id: "judge",
    title: "Become a Judge",
    description: "Bring your technical expertise to the arena and score matches.",
    icon: FiUserCheck,
    enrollOptions: ["Robo Race", "Robo War", "Line Follower", "Drone Racing"],
    ctaLabel: "Apply to Judge",
  },
  {
    id: "volunteer",
    title: "Volunteer",
    description: "Help run events on the ground at venues across India.",
    icon: FiHeart,
    enrollOptions: ["Event Day Crew", "Registration Desk", "Arena Support"],
    ctaLabel: "Join as Volunteer",
  },
  {
    id: "community",
    title: "Community Member",
    description: "Follow teams, track rankings, and stay close to the league.",
    icon: FiUsers,
    enrollOptions: ["Builder", "Mentor", "Fan"],
    ctaLabel: "Join Community",
  },
];

export const sponsorItems: SponsorItem[] = [
  { id: "sponsor-1", name: "Vertex Robotics", tier: "title" },
  { id: "sponsor-2", name: "Circuitree", tier: "powered-by" },
  { id: "sponsor-3", name: "Ionic Labs", tier: "powered-by" },
  { id: "sponsor-4", name: "Forge Dynamics", tier: "partner" },
  { id: "sponsor-5", name: "Northstar Electronics", tier: "partner" },
  { id: "sponsor-6", name: "Pulse Motors", tier: "partner" },
  { id: "sponsor-7", name: "Apex Components", tier: "partner" },
  { id: "sponsor-8", name: "GridWorks", tier: "partner" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: "platform",
    title: "Platform",
    links: [
      { label: "Events", href: "#competitions" },
      { label: "Programs", href: "#categories" },
      { label: "Rankings", href: "#benefits" },
      { label: "Disciplines", href: "#disciplines" },
    ],
  },
  {
    id: "community",
    title: "Community",
    links: [
      { label: "Become a Judge", href: "#ecosystem" },
      { label: "Volunteer", href: "#ecosystem" },
      { label: "Sponsors", href: "#sponsors" },
      { label: "Join the League", href: "#journey" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { label: "About BotLeague", href: "#about" },
      { label: "Contact", href: "#footer" },
      { label: "Terms of Service", href: "#footer" },
      { label: "Privacy Policy", href: "#footer" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { id: "youtube", label: "YouTube", href: "https://youtube.com", icon: FiYoutube },
  { id: "instagram", label: "Instagram", href: "https://instagram.com", icon: FiInstagram },
  { id: "twitter", label: "Twitter", href: "https://twitter.com", icon: FiTwitter },
];
