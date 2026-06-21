import type { IconType } from "react-icons";

/** Top-level navigation link shown in the Navbar. */
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/** A single event card in the Competitions & Events section. */
export type EventStatus = "live" | "upcoming" | "past";

export interface EventCard {
  id: string;
  status: EventStatus;
  statusLabel: string;
  title: string;
  description: string;
  location: string;
  date: string;
  participants: string;
  ctaLabel: string;
}

/** A single step in the User Journey timeline. */
export interface JourneyStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: IconType;
}

/** A single feature in the "What is BotLeague" grid. */
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

/** A single age/skill category card. */
export interface CategoryItem {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  skillTags: string[];
  image: string;
}

/** A single competition discipline card. */
export interface DisciplineItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: IconType;
}

/** A single benefit in the "Why Register" section. */
export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

/** The three ecosystem signup roles (Judge / Volunteer / Community). */
export type EcosystemRoleId = "judge" | "volunteer" | "community";

export interface EcosystemRole {
  id: EcosystemRoleId;
  title: string;
  description: string;
  icon: IconType;
  enrollOptions: string[];
  ctaLabel: string;
}

export interface EcosystemFormState {
  name: string;
  location: string;
  enroll: string;
}

export interface EcosystemFormErrors {
  name?: string;
  location?: string;
  enroll?: string;
}

/** A sponsor logo entry. */
export interface SponsorItem {
  id: string;
  name: string;
  tier: "title" | "powered-by" | "partner";
}

/** A footer link group. */
export interface FooterLinkGroup {
  id: string;
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: IconType;
}
