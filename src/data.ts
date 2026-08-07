import aiModeLogo from "./assets/logos/Gemini.png";
import mapsLogo from "./assets/logos/GoogleMaps.png";
import androidAutoLogo from "./assets/logos/AndroidAuto.png";
import adsLogo from "./assets/logos/GoogleAds.png";
import googleLogo from "./assets/logos/Google-logo.png";
import podcastCover from "./assets/TheRomanticRealistReview.png";

export const cvUrl = "/Palak%20Shah%20-%20Resume%20-%20May%202026.pdf";

export const podcast = {
  title: "The Romantic Realist Review",
  cover: podcastCover,
  description:
    "Is Dilwale Dulhania Le Jayenge the ultimate love story, or a series of questionable life choices? Welcome to The Romantic Realist Review, where we dissect Bollywood classics through two opposing lenses — Nidhi makes the romantic case, Palak plays the skeptic — picking apart plot inconsistencies, grand declarations, and the most quotable lines along the way.",
  spotify: "https://open.spotify.com/show/5HgWTQDMwnvCuddOooa6ph",
  apple: "https://podcasts.apple.com/us/podcast/the-romantic-realist-review/id1877019619",
  amazon:
    "https://music.amazon.ca/fr-ca/podcasts/86faea90-c20e-4253-a170-c3dc82e9b2e0/the-romantic-realist-review",
};

export const profile = {
  name: "Palak Shah",
  title: "Software Engineer — ML, Bigdata & Gen AI",
  location: "Hoboken, NJ",
  phone: "(352) 433-9024",
  email: "spalak12@gmail.com",
  linkedin: "https://www.linkedin.com/in/palakshah2015/",
  github: "https://github.com/paalaakshaah",
  summary:
    "Software Engineer with 10+ years of experience at Google building scalable systems across Maps, Auto, and Ads. Specializing in machine learning, large-scale data ecosystems, and Gen AI development.",
};

export type Project = {
  title: string;
  period: string;
  blurb: string;
  bullets: string[];
  accent: "blue" | "red" | "yellow" | "green";
  demoUrl?: string;
  link?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "Personal Resume Site",
    period: "2026",
    blurb:
      "This site — a React + Vite + Tailwind portfolio with a persistent animated background, an alternating experience timeline, and a podcast page.",
    bullets: [
      "Single fixed canvas background layer shared across every route, styled with subtle Google-brand color accents",
      "Client-side routed pages (Home, Podcast, CV) built with react-router",
      "Experience cards zig-zag along a logo-marked timeline, each expandable inline for more detail",
    ],
    accent: "blue",
    link: "https://github.com/paalaakshaah/resume-site",
  },
  {
    title: "U.S. Visa Bulletin Tracker",
    period: "2026",
    blurb:
      "A full pipeline for tracking and visualizing the Dept. of State Visa Bulletin: a Python scraper, a SQLite database, and a Next.js dashboard.",
    bullets: [
      "Scraped and normalized 164 months of bulletin data (Jan 2013 – Aug 2026, ~21,500 data points) into a queryable SQLite schema",
      "Built a Next.js + Tailwind + Recharts dashboard where users enter their category, country, and priority date to see exactly where they stand on the trend chart",
      "Handled 13 years of shifting category and chargeability-area definitions without losing the original source data",
    ],
    accent: "green",
    demoUrl: "https://green-card-bulletin-tracker.vercel.app/",
    link: "https://github.com/paalaakshaah/Visa-Bulletin-Tracker",
  },
  {
    title: "Side Project",
    period: "Coming soon",
    blurb: "Details coming soon.",
    bullets: [],
    accent: "red",
    placeholder: true,
  },
];

export type ExperienceHighlight = {
  title: string;
  period: string;
  summary: string;
  detail: string[];
};

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  logo: string;
  highlights: ExperienceHighlight[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer — AI Mode",
    org: "Google, New York",
    period: "Jul 2024 – Nov 2025",
    logo: aiModeLogo,
    highlights: [
      {
        title: "Local Query Fan-Out",
        period: "Jul 2024 – Nov 2025",
        summary:
          "Designed a hierarchical AI framework so AI Mode can resolve local, map-based queries.",
        detail: [
          "Built a model to understand user intent and generate complementary fan-out queries",
          "Architected the interface between generative models and legacy Maps backend services for low-latency responses",
          "Trained a summarization model to aggregate backend outputs, evaluated with auto-raters for helpfulness and correctness",
        ],
      },
    ],
  },
  {
    title: "Software Engineer — Maps Quality",
    org: "Google, New York",
    period: "Mar 2022 – Jun 2024",
    logo: mapsLogo,
    highlights: [
      {
        title: "Search Along Route Ranking",
        period: "Mar 2022 – Jun 2024",
        summary:
          "Helped drivers find stops — gas, food, viewpoints — without detouring from their route.",
        detail: [
          "Engineered high-throughput data ingestion and transformation pipelines to power ranking models",
          "Leveraged deep neural network architectures to refine Maps ranking algorithms, reducing feature latency",
        ],
      },
      {
        title: "DMA 5(2) Compliance",
        period: "Oct 2023 – Feb 2024",
        summary: "Joined a rapid-response team to bring Maps ranking pipelines into compliance.",
        detail: [
          "Ensured Maps ranking pipelines met Article 5(2) of the EU Digital Markets Act, which limits pooling user data across services",
        ],
      },
    ],
  },
  {
    title: "Software Engineer — Google Assistant, Android Auto",
    org: "Google, New York",
    period: "Jan 2020 – Mar 2022",
    logo: androidAutoLogo,
    highlights: [
      {
        title: "On-Device Search for Android Automotive OS",
        period: "Jan 2020 – Mar 2022",
        summary: "Made local and directional search work reliably on-device, even offline.",
        detail: [
          "Updated on-device NLP models to improve understanding of directional and local search queries",
          "Optimized on-device server infrastructure to query locally stored maps, enabling offline search",
        ],
      },
    ],
  },
  {
    title: "Software Engineer — Ads Privacy and Security",
    org: "Google, California",
    period: "Jul 2016 – Dec 2019",
    logo: adsLogo,
    highlights: [
      {
        title: "Ads Policy Rule Engine",
        period: "Jul 2016 – Dec 2019",
        summary:
          "Founding member of Ads Integrity: Human Interactions, bridging platform security and advertiser productivity.",
        detail: [
          "Designed and owned a high-throughput RPC-based rule engine as the core policy enforcement layer across Google Ads, AdWords Express, and the Ads API",
          "Led migration of large-scale advertising datasets to Bigtable via distributed Flume/MapReduce pipelines",
          "Built real-time advertiser messaging and automated re-crawl/re-review pipelines, cutting latency in compliance workflows",
        ],
      },
      {
        title: "Engineering Excellence Initiative",
        period: "Jul 2018 – Dec 2019",
        summary: "Headed a cross-functional push to raise code quality and cut tech debt.",
        detail: [
          "Drove measurable improvements in code quality, technical debt reduction, and team velocity over multiple quarters",
        ],
      },
    ],
  },
  {
    title: "Engineering Resident — Hiring Applications",
    org: "Google, New York",
    period: "Jul 2015 – Jul 2016",
    logo: googleLogo,
    highlights: [
      {
        title: "Hiring Software Productionization",
        period: "Jul 2015 – Jul 2016",
        summary: "Full stack — productionized Google's internal hiring software.",
        detail: [
          "Productionized Google's hiring software using Google Web Toolkit (GWT), CSS, and HTML",
          "Delivered scalable front-end solutions that improved hiring pipeline efficiency while maintaining code quality and accessibility standards",
        ],
      },
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "MS, Electrical and Computer Engineering",
    school: "University of Florida",
    period: "Aug 2013 – May 2015",
  },
  {
    degree: "BTech, Information and Communication Technology",
    school: "Dhirubhai Ambani Institute",
    period: "Aug 2009 – May 2013",
  },
];

export const skills = {
  Languages: ["C++", "Java", "Python", "SQL", "GCL"],
  Tools: ["VSCode", "Kiro", "Google Colab", "Jupyter", "GWT", "Git", "Vim"],
  "Database Technologies": ["Bigtable", "Spanner", "Flume", "MapReduce", "Storm", "Kafka"],
};
