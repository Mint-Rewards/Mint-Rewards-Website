import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Baby,
  Ban,
  BookOpen,
  Building,
  Building2,
  Clock,
  Code,
  Coffee,
  Coins,
  Cookie,
  Crown,
  Database,
  DollarSign,
  Eye,
  Facebook,
  Gift,
  GraduationCap,
  Headphones,
  Heart,
  HeartPulse,
  HelpCircle,
  Home,
  Instagram,
  Leaf,
  Lightbulb,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  Package,
  Phone,
  Recycle,
  RefreshCw,
  Scale,
  Settings,
  Share2,
  Shield,
  Target,
  TrendingUp,
  Truck,
  UserCircle,
  UserCheck,
  Users,
  Zap,
  Gavel,
} from "lucide-react";

export type MenuItem = {
  name: string;
  path: string;
  key: string;
  type: "link" | "scroll";
  scrollTarget?: string;
};

export const navbarMenuItems: MenuItem[] = [
  { name: "Personal", path: "/personal", key: "personal", type: "link" },
  { name: "Business", path: "/business", key: "business", type: "link" },
  {
    name: "How it Works",
    path: "/",
    key: "how-it-works",
    type: "scroll",
    scrollTarget: "how-it-works",
  },
  {
    name: "Partners",
    path: "/",
    key: "partners",
    type: "scroll",
    scrollTarget: "partners",
  },
  {
    name: "Impact",
    path: "/",
    key: "impact",
    type: "scroll",
    scrollTarget: "impact",
  },
  {
    name: "CO2 Calculator",
    path: "/co2-calculator",
    key: "co2-calculator",
    type: "link",
  },
];

export const navbarDarkMenuItems: MenuItem[] = [
  { name: "Personal", path: "/", key: "personal", type: "link" },
  {
    name: "How it Works",
    path: "/",
    key: "how-it-works",
    type: "scroll",
    scrollTarget: "how-it-works",
  },
  {
    name: "Partners",
    path: "/",
    key: "partners",
    type: "scroll",
    scrollTarget: "partners",
  },
  {
    name: "Impact",
    path: "/",
    key: "impact",
    type: "scroll",
    scrollTarget: "impact",
  },
  {
    name: "CO2 Calculator",
    path: "/co2-calculator",
    key: "co2-calculator",
    type: "link",
  },
];

export const impactStats = [
  {
    id: 1,
    value: 25000,
    suffix: "+",
    unit: "KG",
    label: "of waste recycled",
    description: "Keeping our cities cleaner",
    icon: "♻️",
    gradient: "from-green-400 to-emerald-500",
    iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
    accentColor: "green",
  },
  {
    id: 2,
    value: 84500,
    suffix: "+",
    unit: "KG",
    label: "CO₂ saved",
    description: "Fighting climate change together",
    icon: "🌱",
    gradient: "from-teal-400 to-cyan-500",
    iconBg: "bg-gradient-to-br from-teal-100 to-cyan-100",
    accentColor: "teal",
  },
  {
    id: 3,
    value: 10000,
    suffix: "+",
    unit: "",
    label: "Households already on board",
    description: "Growing community of eco-heroes",
    icon: "🏠",
    gradient: "from-blue-400 to-indigo-500",
    iconBg: "bg-gradient-to-br from-blue-100 to-indigo-100",
    accentColor: "blue",
  },
  {
    id: 4,
    value: 30,
    suffix: "+",
    unit: "",
    label: "Brands joined",
    description: "Partnering for a sustainable future",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-purple-400 to-pink-500",
    iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
    accentColor: "purple",
  },
];

export type IconFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServiceCard = IconFeature & { color: string };

export const aboutDifferentiators: IconFeature[] = [
  {
    icon: Truck,
    title: "Effortless",
    description: "No sorting complexity, no drop-off hassles. We come to you.",
  },
  {
    icon: Gift,
    title: "Rewarding",
    description:
      "Every collection earns points for real discounts at brands you love.",
  },
  {
    icon: Eye,
    title: "Transparent",
    description:
      "Track your impact, see where materials go, watch your rewards grow.",
  },
  {
    icon: Users,
    title: "Inclusive",
    description:
      "Free for everyone, serving communities often overlooked by traditional waste management.",
  },
];

export const aboutServices: ServiceCard[] = [
  {
    icon: Home,
    title: "For Households",
    description:
      "Doorstep recycling collection (free Lite plan or enhanced Pro plan) plus rewards you actually want to use.",
    color: "from-[#8CE4B5]",
  },
  {
    icon: Building,
    title: "For Brands",
    description:
      "Meaningful sustainability partnerships that engage conscious consumers and demonstrate real environmental impact.",
    color: "from-[#3EBAB9]",
  },
  {
    icon: MapPin,
    title: "For Cities",
    description:
      "Formal waste management infrastructure that reduces landfill burden and supports the informal recycling sector.",
    color: "from-[#1D558E]",
  },
];

export type MediaOutlet = {
  name: string;
  logo: string;
};

export const mediaOutlets: MediaOutlet[] = [
  { name: "HUM", logo: "/media-logos/hum-tv-logo.png" },
  {
    name: "AAJ TV",
    logo: "/media-logos/Aaj_News_(television_channel)_logo.png",
  },
  { name: "BOL TV", logo: "/media-logos/images.png" },
  { name: "Nukta", logo: "/media-logos/images%20(1).png" },
  { name: "CSR Forum", logo: "/media-logos/1631301374924.jpg" },
];

export type StoryBeneficiary = {
  icon: LucideIcon;
  title: string;
  benefit: string;
};

export const storyBeneficiaries: StoryBeneficiary[] = [
  {
    icon: Home,
    title: "Households",
    benefit: "get free collection and rewards",
  },
  {
    icon: Building2,
    title: "Brands",
    benefit: "engage customers through meaningful sustainability",
  },
  {
    icon: Users,
    title: "Waste Workers",
    benefit: "gain formal employment and better conditions",
  },
  {
    icon: MapPin,
    title: "Cities",
    benefit: "reduce landfill burden and environmental damage",
  },
];

export type TermsContentBlock = {
  subtitle: string;
  text: string;
};

export type TermsSection = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro?: string;
  text?: string;
  list?: string[];
  content?: TermsContentBlock[];
  footer?: string;
};

export const termsLastUpdated = "December 2024";

export const termsSections: TermsSection[] = [
  {
    id: "service",
    icon: Package,
    title: "Our Service",
    intro: "Mint Rewards provides:",
    list: [
      "Doorstep collection of recyclable materials (free with Lite, enhanced with Pro)",
      "A points-based rewards system for recycling",
      "Access to discounts and offers from partner brands",
      "Optional Pro membership with wet waste collection and enhanced benefits",
    ],
  },
  {
    id: "account",
    icon: UserCircle,
    title: "Account Requirements",
    intro: "To use Mint Rewards, you must:",
    list: [
      "Be at least 18 years old or have parental consent",
      "Provide accurate, current information during registration",
      "Maintain the confidentiality of your account credentials",
      "Notify us immediately of any unauthorized access",
      "Use the service only in areas where we operate",
    ],
  },
  {
    id: "points",
    icon: Coins,
    title: "How Mint Points Work",
    content: [
      {
        subtitle: "Earning Points",
        text: "You earn Mint Points when we collect and verify eligible recyclable materials from your location. Point values depend on material type, quantity, and quality.",
      },
      {
        subtitle: "Point Validity",
        text: "Points remain active for 2 months from the date earned. Expired points cannot be restored. Pro members may receive extended point validity as part of their membership benefits.",
      },
      {
        subtitle: "Redemption",
        text: "Points can be redeemed for discounts and offers from participating partners. Redemption is final and points cannot be refunded once used.",
      },
      {
        subtitle: "Point Transfers",
        text: "Points are non-transferable and have no cash value.",
      },
    ],
  },
  {
    id: "collection",
    icon: Recycle,
    title: "Collection Guidelines",
    content: [
      {
        subtitle: "Eligible Materials",
        text: "We collect plastic, paper, cardboard, metal, and other dry recyclables as specified in the app.",
      },
      {
        subtitle: "Preparation",
        text: "Recyclables should be clean, dry, and sorted according to app guidelines.",
      },
      {
        subtitle: "Access",
        text: "You must provide safe, accessible collection points during scheduled pickup times.",
      },
      {
        subtitle: "Contaminated Loads",
        text: "We reserve the right to reject heavily contaminated or non-recyclable materials without point credit.",
      },
    ],
  },
  {
    id: "pro",
    icon: Crown,
    title: "Pro Membership",
    intro: "Pro is an optional paid subscription offering:",
    list: [
      "Wet waste collection services",
      "Bonus points and exclusive rewards",
      "Extended point validity",
      "Priority collection scheduling",
      "Early access to partner offers",
    ],
    footer:
      "Pro subscriptions auto-renew unless cancelled. Cancellation terms and refund policies are detailed in the app.",
  },
  {
    id: "partners",
    icon: Gift,
    title: "Partner Offers",
    text: "Reward availability, values, and terms are set by partner brands and may change without notice. Mint Rewards is not responsible for partner-imposed restrictions, expired offers, or redemption disputes.",
  },
  {
    id: "prohibited",
    icon: Ban,
    title: "Prohibited Conduct",
    intro: "You may not:",
    list: [
      "Manipulate the points system through fraud or misrepresentation",
      "Share account access with others",
      "Reverse engineer or exploit the app",
      "Use automated systems to interact with our platform",
      "Violate any applicable laws",
    ],
  },
  {
    id: "suspension",
    icon: AlertTriangle,
    title: "Account Suspension",
    text: "We may suspend or terminate accounts that violate these terms, engage in fraudulent activity, or abuse the platform. Suspended accounts forfeit accumulated points.",
  },
  {
    id: "liability",
    icon: Scale,
    title: "Liability Limitations",
    intro:
      'Mint Rewards provides services "as is" without warranties. We are not liable for:',
    list: [
      "Service interruptions or delays",
      "Lost or expired points due to technical issues",
      "Disputes with collection staff or partners",
      "Indirect, incidental, or consequential damages",
    ],
    footer:
      "Our total liability is limited to the value of points in your account at the time of the incident.",
  },
  {
    id: "changes",
    icon: Settings,
    title: "Service Changes",
    text: "We may modify features, point values, collection schedules, or partner offerings to maintain platform sustainability. Major changes will be communicated through the app.",
  },
  {
    id: "disputes",
    icon: Gavel,
    title: "Dispute Resolution",
    text: "Disputes will be resolved through good faith negotiation. If unresolved, disputes are subject to the jurisdiction of Karachi courts under Pakistan law.",
  },
];

export const privacyLastUpdated = "December 2025";

export type PrivacySection = {
  id: string;
  icon: LucideIcon;
  title: string;
  content?: TermsContentBlock[];
  list?: string[];
  text?: string;
  highlight?: string;
  footer?: string;
};

export const privacySections: PrivacySection[] = [
  {
    id: "collect",
    icon: Database,
    title: "What Information We Collect",
    content: [
      {
        subtitle: "Account Information",
        text: "Your name, email address, phone number, and collection address to provide recycling services and communicate with you.",
      },
      {
        subtitle: "Location Data",
        text: "Your address and optional real-time location to schedule collections and verify service availability in your area.",
      },
      {
        subtitle: "Usage Activity",
        text: "How you interact with the app, including recycling history, points earned, rewards redeemed, and feature usage to improve your experience.",
      },
      {
        subtitle: "Device Information",
        text: "Device type, operating system, and app version to ensure technical compatibility and security.",
      },
    ],
  },
  {
    id: "use",
    icon: UserCheck,
    title: "How We Use Your Information",
    list: [
      "Provide doorstep recycling collection services",
      "Calculate and credit Mint Points to your account",
      "Track waste collected, including type, quantity, and recyclability status",
      "Calculate your environmental impact (CO₂ savings, landfill diversion, etc.)",
      "Send collection reminders and service updates",
      "Process reward redemptions with partner brands",
      "Improve app functionality and user experience",
      "Communicate promotional offers (with your consent)",
      "Comply with legal and regulatory requirements",
    ],
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Data Sharing",
    highlight: "We do not sell your personal data. Period.",
    content: [
      {
        subtitle: "Collection Partners",
        text: "Address and collection schedule to complete pickups",
      },
      {
        subtitle: "Reward Partners",
        text: "Redemption codes to honor discounts (no personal details unless required)",
      },
      {
        subtitle: "Service Providers",
        text: "Secure hosting, analytics, and payment processors under strict confidentiality agreements",
      },
      {
        subtitle: "Legal Requirements",
        text: "When required by law or to protect our rights",
      },
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "Data Security",
    text: "Your information is protected using industry-standard encryption, secure servers, and access controls. While no system is 100% secure, we continuously monitor and update our security practices.",
  },
  {
    id: "rights",
    icon: Shield,
    title: "Your Rights",
    list: [
      "Access your personal data at any time through the app",
      "Correct inaccurate information in your profile settings",
      "Request deletion of your account and associated data",
      "Opt out of marketing communications",
      "Export your data in a portable format",
    ],
    footer:
      "To exercise these rights, contact us at privacy@mymintrewards.com or through the app's support section.",
  },
  {
    id: "retention",
    icon: Clock,
    title: "Data Retention",
    text: "We retain your information for as long as your account is active, plus 3 years after account closure to comply with legal obligations, resolve disputes, and improve our services. Aggregated, anonymized data may be retained indefinitely for research and planning purposes.",
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies and Tracking",
    text: "Our website uses cookies to remember your preferences and analyze site traffic. You can disable cookies in your browser settings, though some features may not function properly.",
  },
  {
    id: "children",
    icon: Baby,
    title: "Children's Privacy",
    text: "Mint Rewards is not intended for children under 13. We do not knowingly collect information from children.",
  },
  {
    id: "updates",
    icon: RefreshCw,
    title: "Updates to This Policy",
    text: "We may update this policy as our services evolve or regulations change. Significant changes will be communicated through the app and email.",
  },
];

export type CareerHighlight = IconFeature;

export const careersWhyJoinUs: CareerHighlight[] = [
  {
    icon: Target,
    title: "Real Impact",
    description:
      "Your work directly reduces landfill waste, supports vulnerable communities, and changes behavior at scale.",
  },
  {
    icon: Zap,
    title: "Startup Energy",
    description:
      "Join an early-stage team where your ideas matter, decisions move fast, and everyone wears multiple hats.",
  },
  {
    icon: Heart,
    title: "Purpose-Driven",
    description:
      "We're not chasing vanity metrics. We're building sustainable infrastructure that makes cities cleaner and lives better.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunity",
    description:
      "As we expand to new cities and scale operations, you'll grow with us—learning, leading, and shaping the company's direction.",
  },
];

export const careersValues: CareerHighlight[] = [
  {
    icon: Heart,
    title: "Purpose Before Profit",
    description:
      "Financial sustainability enables impact, but impact is why we exist.",
  },
  {
    icon: Shield,
    title: "Ownership and Accountability",
    description:
      "We trust you to own your work, make decisions, and take responsibility for outcomes.",
  },
  {
    icon: Users,
    title: "Inclusivity and Respect",
    description:
      "We build for diverse communities and we are one. Every voice matters.",
  },
  {
    icon: Lightbulb,
    title: "Innovation with Impact",
    description:
      "We love creative solutions, but only if they solve real problems for real people.",
  },
  {
    icon: BookOpen,
    title: "Learning and Growth",
    description:
      "Mistakes are lessons. Curiosity is celebrated. We get better together.",
  },
];

export type CareerTrait = {
  label: string;
  detail: string;
};

export const careersTraits: CareerTrait[] = [
  {
    label: "Purpose-driven",
    detail: "You care about sustainability and social impact",
  },
  {
    label: "Resourceful",
    detail: "You find solutions even with limited resources",
  },
  {
    label: "Collaborative",
    detail: "You thrive in team environments and communicate openly",
  },
  {
    label: "Adaptable",
    detail: "You roll with the punches in a fast-changing startup",
  },
  { label: "Action-oriented", detail: "You prefer building to talking" },
];

export type CareerTeam = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const careersTeams: CareerTeam[] = [
  {
    icon: Code,
    title: "Product & Engineering",
    description: "Building the app, logistics platform, and data systems",
  },
  {
    icon: Truck,
    title: "Operations",
    description:
      "Managing collections, partner relationships, and service delivery",
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    description: "Driving user acquisition and brand partnerships",
  },
  {
    icon: Headphones,
    title: "Customer Success",
    description: "Supporting users and ensuring great experiences",
  },
  {
    icon: Leaf,
    title: "Impact & Sustainability",
    description: "Measuring environmental outcomes and industry partnerships",
  },
];

export type CareerPerk = {
  icon: LucideIcon;
  label: string;
};

export const careersPerks: CareerPerk[] = [
  { icon: DollarSign, label: "Competitive salary and equity options" },
  { icon: HeartPulse, label: "Health insurance coverage" },
  { icon: Clock, label: "Flexible work arrangements" },
  { icon: GraduationCap, label: "Professional development budget" },
  { icon: Coffee, label: "Collaborative, mission-driven culture" },
];

export type FooterLink = {
  name: string;
  href: string;
  available: boolean;
  placeholder?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export const footerLinks: Record<string, FooterLinkGroup> = {
  about: {
    title: "About",
    links: [
      { name: "About Us", href: "/about", available: true },
      { name: "Our Story", href: "/story", available: true },
      { name: "Careers", href: "/careers", available: true },
    ],
  },
  support: {
    title: "Support",
    links: [
      { name: "FAQs", href: "/faqs", available: true },
      { name: "Contact Us", href: "/contact", available: true },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy", available: true },
      { name: "Terms & Conditions", href: "/terms", available: true },
    ],
  },
};

export type SocialLink = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export const footerSocialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/mint-rewards",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mintrewards",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/mintrewards",
    icon: Facebook,
  },
];

export type ContactDetails = {
  email: string;
  privacyEmail: string;
  termsEmail: string;
  mediaEmail: string;
  faqsEmail: string;
  responseTime: string;
  phone: string;
  phoneHours: string;
  addressLine1: string;
  addressLine2: string;
  businessDays: string;
  businessHours: string;
};

export const contactDetails: ContactDetails = {
  email: "hello@mymintrewards.com",
  privacyEmail: "support@mymintrewards.com",
  termsEmail: "support@mymintrewards.com",
  mediaEmail: "media@mymintrewards.com",
  faqsEmail: "hello@mymintrewards.com",
  responseTime: "We respond within 24 hours",
  phone: "+92 349 2498174",
  phoneHours: "Mon-Fri, 9am-6pm GMT",
  addressLine1: "5th Floor Amir Trade Centre",
  addressLine2: "PECHS Block 2, Karachi",
  businessDays: "Monday - Friday",
  businessHours: "9:00 AM - 6:00 PM GMT",
};

export type ContactInfoCard = {
  icon: LucideIcon;
  title: string;
  details: string;
  subtext: string;
};

export const contactInfoCards: ContactInfoCard[] = [
  {
    icon: Mail,
    title: "Email Us",
    details: contactDetails.email,
    subtext: contactDetails.responseTime,
  },
  {
    icon: Phone,
    title: "Call Us",
    details: contactDetails.phone,
    subtext: contactDetails.phoneHours,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: contactDetails.addressLine1,
    subtext: contactDetails.addressLine2,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: contactDetails.businessDays,
    subtext: contactDetails.businessHours,
  },
];

export const contactInquiryTypes: IconFeature[] = [
  {
    icon: Users,
    title: "General Enquiry",
    description: "Questions about Mint Rewards and how it works",
  },
  {
    icon: Building2,
    title: "Business Partnership",
    description: "Partner with us to offer rewards to your customers",
  },
  {
    icon: HelpCircle,
    title: "Support",
    description: "Help with your account, points, or collections",
  },
  {
    icon: MessageSquare,
    title: "Press & Media",
    description: "Media inquiries and press opportunities",
  },
];

export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactFaqs: ContactFaq[] = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all enquiries within 24 hours during business days.",
  },
  {
    question: "Can I schedule a demo for my business?",
    answer:
      'Yes! Select "Business Partnership" as your inquiry type and we\'ll arrange a personalized demo.',
  },
  {
    question: "Where can I find help with my account?",
    answer:
      'For immediate help, check our FAQs page or select "Support" when submitting your enquiry.',
  },
];

export const contactSocialLinks: SocialLink[] = [
  // {
  //   name: "X",
  //   href: "https://x.com/mintrewards",
  //   icon: Twitter,
  // },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mintrewards/",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mymintrewards/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/MintRewards",
    icon: Facebook,
  },
];

export const activeBrands = [
  "/brand-logos/1.png",
  "/brand-logos/2.png",
  "/brand-logos/3.png",
  "/brand-logos/4.png",
  "/brand-logos/5.png",
  "/brand-logos/6.png",
  "/brand-logos/7.png",
  "/brand-logos/8.png",
  // "/brand-logos/9.png",
  "/brand-logos/10.png",
  "/brand-logos/11.png",
  "/brand-logos/12.png",
  "/brand-logos/13.png",
  "/brand-logos/14.png",
  "/brand-logos/15.png",
  "/brand-logos/16.png",
  "/brand-logos/17.png",
  "/brand-logos/18.png",
  "/brand-logos/19.png",
  "/brand-logos/20.png",
  "/brand-logos/21.png",
  "/brand-logos/22.png",
  "/brand-logos/23.png",
  "/brand-logos/24.png",
  "/brand-logos/25.png",
  "/brand-logos/26.png",
  "/brand-logos/27.png",
  "/brand-logos/28.png",
  "/brand-logos/29.png",
  "/brand-logos/30.png",
];
