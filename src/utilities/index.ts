import {
  BlogCardProps,
  HowitWorksType,
  NavItemsType,
  PartnerType,
  VisionMission,
} from "../types";
import imgIcons from "../assets";
const nav_items: NavItemsType[] = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "about",
    title: "Who we are",
  },
];
const features = [
  {
    iconSrc: imgIcons.dollar,
    title: "Transparent Pricing",
    description:
      "Our transparent pricing ensures complete clarity, so you can book with confidence and travel stress-free.",
  },
  {
    iconSrc: imgIcons.globe,
    title: "Globe Reach",
    description:
      "Dreaming of iconic landmarks, we ensure a seamless connection to wherever your heart desires.",
  },
  {
    iconSrc: imgIcons.time,
    title: "Last-Minute Bookings",
    description:
      "With instant confirmations, competitive fares, last-minute travel has never been simpler.",
  },
  {
    iconSrc: imgIcons.flexible,
    title: "Flexible Options",
    description:
      "Effortlessly modify, reschedule, or cancel flights to suit your dynamic lifestyle.",
  },
];
const blog_cards: BlogCardProps[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/9f3fff5eab7c810296dbc1ed54afb0895273564b757e155303b6153965e032db?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    title: "Your Next Exploration Starts Here: The Globethrough Way",
    description:
      "Tired of the same old travel routine? It's time to ditch the cliché's and take your wanderlust to places that actually surprise you.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/2b17f17775b89b959f57ad9aea0336d091d2d75157853295cb376432ec6097c2?apiKey=00bedd7c3997447984bf9cef0c80b29a&",
    title: "Unlock Spontaneous Adventures: Travel Smarter with Globethrough",
    description:
      "When the urge to travel strikes unexpectedly, waiting around for deals to fall into place isn't an option. With Globethrough, Spontaneity meets convenience, ...",
  },
  {
    imageSrc: imgIcons.blog3,
    title: "Your Next Exploration Starts Here: The Globethrough Way",
    description:
      "Tired of the same old travel routine? It's time to ditch the cliché's and take your wanderlust to places that actually surprise you.",
  },
];

const partner: PartnerType[] = [
  {
    image: imgIcons.thai,
    altText: "thai",
  },
  {
    image: imgIcons.amtravels,
    altText: "amtravels",
  },

  {
    image: imgIcons.arth,
    altText: "arth",
  },
  {
    image: imgIcons.bestdeal,
    altText: "bestdeal",
  },
];

const missionVission: VisionMission[] = [
  {
    title: "Mission",
    content: [
      "For travelers (B2C): We provide a smooth and affordable flight booking experience, with real-time updates, secure transactions, and the best deals on airfares",
      "For businesses (B2B): We empower travel agents and companies to earn on every ticket booked, turning flight sales into a sustainable and profitable venture",
    ],
    image:
      "https://images.unsplash.com/photo-1527605158555-853f200063e9?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Vission",
    content: [
      "Our vision is to make air travel seamless, affordable, and rewarding, ensuring that every journey—whether personal or business—starts with a hassle-free booking experience. ",
    ],
    image:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const howItWorksData: HowitWorksType[] = [
  {
    title: "One Way Trip",
    description: [
      "Seamless one-way seat selection with a user-friendly interface.",
      "Versatile booking options for flights, trains, and buses.",
    ],
    image: imgIcons.oneway,
  },
  {
    title: "Round Trip",
    description: [
      "Two-way seat selection for both departure and return journeys.",
      "Intuitive and user-friendly platform for a seamless booking experience.",
    ],
    image: imgIcons.twoway,
  },
  {
    title: "Ticket Summary",
    description: [
      "Comprehensive flight ticket summary with all booking details in one place.",
      "Access flight timings, seat selection, baggage allowances, and payment status anytime, anywhere.",
    ],
    image: imgIcons.ticketsumry,
  },
  {
    title: "Seat Selection",
    description: [
      "Easy and convenient flight seat selection through a simple, intuitive platform.",
      "Option to choose window, aisle, or extra legroom seats tailored to your comfort needs.",
    ],
    image: imgIcons.seats,
  },
  {
    title: "Booking Summary",
    description: [
      "Comprehensive flight ticket summary with all booking details in one place.",
      "Access flight timings, seat selection, baggage allowances, and payment status anytime, anywhere.",
    ],
    image: imgIcons.bookingsmry,
  },
];
export {
  nav_items,
  features,
  blog_cards,
  partner,
  missionVission,
  howItWorksData,
};
