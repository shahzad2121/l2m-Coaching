import {
  CalendarCheck,
  User,
  HeartHandshake,
  Users,
  GraduationCap,
} from "lucide-react";

/**
 * image — object shape:
 *   src  : path relative to /public (e.g. "/images/services/consultation.jpg")
 *   alt  : accessible description
 *
 * Replace src with a real URL or CMS/API field when a backend is wired up.
 * The rest of the service object stays identical — only `src` needs updating.
 */

export const SERVICES = [
  {
    id: "consultation",
    num: "01",
    icon: CalendarCheck,
    label: "Free Introductory Consultation",
    title: "Free 30-Minute Introductory Consultation",
    intro:
      "At L2M Coaching, we offer a complimentary 30-minute introductory session to explore how coaching can support your personal or professional goals.",
    bullets: [
      "Discuss your personal or professional goals",
      "Identify key challenges and opportunities",
      "Explain our coaching approach",
      "Answer your questions about the coaching journey",
    ],
    outcome:
      "By the end of the session you will have clarity on whether coaching is the right step forward.",
    cta: "Book Free Consultation",
    ctaHref: "mailto:lloydm2m@gmail.com",
    tag: "Complimentary",
    image: {
      src: "/images/services/service-1.png",
      alt: "A coaching consultation meeting between coach and client",
    },
  },
  {
    id: "one-to-one",
    num: "02",
    icon: User,
    label: "One-to-One Coaching",
    title: "One-to-One Solution Focused Coaching",
    intro:
      "Personalised, confidential coaching sessions built entirely around you — your goals, your challenges, and your context.",
    sections: [
      {
        heading: "Session Structure",
        body: "6 one-hour sessions typically held weekly across four to six weeks. Flexible scheduling is available depending on individual needs.",
      },
      {
        heading: "Subscription Option",
        body: "Ongoing weekly coaching plans are available for long-term support. Clients can start with a single session or book all sessions as a package.",
      },
      {
        heading: "Add-On Support",
        body: "Daily or weekly personalised voice notes to maintain focus and momentum between sessions.",
      },
    ],
    bullets: [
      "Personal growth",
      "Leadership development",
      "Confidence building",
      "Career clarity",
    ],
    framework: {
      label: "Coaching Framework",
      title: "TGROWTHR",
      description: "Topic · Goal · Reality · Options · Will · Time · How · Results",
    },
    cta: "See Prices & Book Service",
    ctaHref: "mailto:lloydm2m@gmail.com",
    tag: "Individual",
    image: {
      src: "/images/services/service-2.jpg",
      alt: "One-to-one coaching conversation between coach and professional",
    },
  },
  {
    id: "family",
    num: "03",
    icon: HeartHandshake,
    label: "Family Connection Coaching",
    title: "Family Connection Coaching",
    subtitle: "Parents & Teens",
    intro:
      "This coaching package helps families strengthen relationships, improve communication, and support teens through life challenges.",
    sections: [
      {
        heading: "Session Structure",
        body: "6 one-hour sessions usually held weekly across four to six weeks. Families can also book a single session for specific challenges.",
      },
    ],
    bullets: [
      "Strengthening communication",
      "Building trust between parents and teens",
      "Developing emotional resilience",
      "Managing stress and conflict",
    ],
    tools: [
      "Emotions Wheel and Emotions Board",
      "Anger Volcano model",
      "MetaFox Cards",
      "Solution focused coaching frameworks",
    ],
    outcome:
      "Families gain practical tools, stronger communication, and deeper understanding.",
    cta: "See Prices & Book Service",
    ctaHref: "mailto:lloydm2m@gmail.com",
    tag: "Family",
    image: {
      src: "/images/services/service-3.jpeg",
      alt: "Family connection coaching session with parents and teens",
    },
  },
  {
    id: "team",
    num: "04",
    icon: Users,
    label: "Team & Group Coaching",
    title: "Team & Group Coaching",
    intro:
      "Designed for organisations seeking stronger teams, better collaboration, and improved leadership capability.",
    sections: [
      {
        heading: "Session Structure",
        body: "One-hour sessions delivered weekly or bi-weekly. Packages are available for organisations seeking long-term development.",
      },
      {
        heading: "Add-On Support",
        body: "Voice coaching support between sessions to maintain momentum and accountability.",
      },
    ],
    bullets: [
      "Improving team communication",
      "Strengthening collaboration",
      "Leadership development",
      "Performance improvement",
    ],
    cta: "See Prices & Book Service",
    ctaHref: "mailto:lloydm2m@gmail.com",
    tag: "Teams",
    image: {
      src: "/images/services/service-4.jpeg",
      alt: "Team and group coaching workshop in a professional setting",
    },
  },
  {
    id: "leadership",
    num: "05",
    icon: GraduationCap,
    label: "Level 7 Leadership Development Program",
    title: "Level 7 Leadership Development Program",
    intro:
      "A comprehensive leadership training programme designed to build confident, high-performing leaders.",
    sections: [
      {
        heading: "Program Features",
        body: "10 comprehensive leadership modules · Interactive workshops and role-playing · Real-world leadership exercises · Flexible delivery (in-person, virtual, hybrid)",
      },
    ],
    bullets: [
      "Strategic thinking and visionary leadership",
      "High-performing team building",
      "Emotional intelligence in leadership",
      "Innovation and creative problem solving",
      "Communication and influence",
      "Leading through change",
      "Self-leadership and continuous development",
    ],
    idealFor: ["Team leaders", "Managers", "Senior executives", "Aspiring leaders"],
    outcome:
      "Participants gain practical leadership tools that can be applied immediately in their organisations.",
    cta: "Book Leadership Consultation",
    ctaHref: "mailto:lloydm2m@gmail.com",
    tag: "Leadership",
    image: {
      src: "/images/services/service-5.jpg",
      alt: "Level 7 Leadership Development Programme workshop",
    },
  },
];
