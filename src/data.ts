export const profile = {
  name: "Palak Shah",
  title: "Software Engineer — ML, Ranking & Gen AI",
  location: "Hoboken, NJ",
  phone: "(352) 433-9024",
  email: "spalak12@gmail.com",
  linkedin: "https://www.linkedin.com/in/palakshah2015/",
  github: "https://github.com/paalaakshaah",
  summary:
    "Software Engineer with extensive experience in machine learning, ranking algorithms, and Gen AI development within global-scale environments (Maps, Auto, Ads). Committed to high-quality engineering standards and architectural integrity — building technology that isn't just powerful, but purposefully designed to solve real-world complexities.",
};

export type Project = {
  title: string;
  period: string;
  blurb: string;
  bullets: string[];
  accent: "blue" | "red" | "yellow" | "green";
  link?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Mode — Local Query Fan-Out",
    period: "Jul 2024 – Nov 2025 · Google",
    blurb:
      "Google's AI Mode turns standard search into an intuitive, multi-modal conversation. I designed a hierarchical AI framework for resolving local queries.",
    bullets: [
      "Built a model to understand user intent and generate complementary fan-out queries",
      "Architected the interface between generative models and legacy Maps backend services for low-latency responses",
      "Trained a summarization model to aggregate backend outputs, evaluated with auto-raters for helpfulness and correctness",
    ],
    accent: "blue",
  },
  {
    title: "Search Along Route Ranking",
    period: "Mar 2022 – Jun 2024 · Google Maps",
    blurb:
      "Search Along Route (and Explore Along Your Route) helps drivers find stops — gas, food, viewpoints — without detouring from their path.",
    bullets: [
      "Engineered high-throughput data ingestion and transformation pipelines to power ranking models",
      "Leveraged deep neural network architectures to refine Maps ranking algorithms, reducing feature latency",
    ],
    accent: "green",
  },
  {
    title: "Ads Policy Rule Engine",
    period: "Jul 2016 – Dec 2019 · Google Ads",
    blurb:
      "Founding member of Ads Integrity: Human Interactions, bridging platform security and advertiser productivity.",
    bullets: [
      "Designed and owned a high-throughput RPC-based rule engine as the core policy enforcement layer across Google Ads, AdWords Express, and the Ads API",
      "Led migration of large-scale advertising datasets to Bigtable via distributed Flume/MapReduce pipelines",
      "Built real-time advertiser messaging and automated re-crawl/re-review pipelines, cutting latency in compliance workflows",
    ],
    accent: "red",
  },
  {
    title: "Android Automotive OS",
    period: "Jan 2020 – Mar 2022 · Google Assistant, Android Auto",
    blurb:
      "AAOS runs directly on the car's hardware — no phone required. I worked on-device to make offline local search work well.",
    bullets: [
      "Updated on-device NLP models to improve understanding of directional and local search queries",
      "Optimized on-device server infrastructure to query locally stored maps, enabling offline search",
    ],
    accent: "yellow",
  },
  {
    title: "Side Project",
    period: "Coming soon",
    blurb: "Details coming soon.",
    bullets: [],
    accent: "blue",
    placeholder: true,
  },
  {
    title: "Side Project",
    period: "Coming soon",
    blurb: "Details coming soon.",
    bullets: [],
    accent: "green",
    placeholder: true,
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

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    title: "Software Engineer — AI Mode",
    org: "Google, New York",
    period: "Jul 2024 – Nov 2025",
    description: "Backend / Gen AI — hierarchical framework for local query resolution.",
  },
  {
    title: "Software Engineer — Maps Quality",
    org: "Google, New York",
    period: "Oct 2023 – Jun 2024",
    description:
      "Backend / Ranking — Search Along Route ranking, plus DMA 5(2) compliance for Maps ranking pipelines.",
  },
  {
    title: "Software Engineer — Google Assistant, Android Auto",
    org: "Google, New York",
    period: "Jan 2020 – Mar 2022",
    description: "Backend / On-device — NLP and offline search for Android Automotive OS.",
  },
  {
    title: "Software Engineer — Ads Privacy and Security",
    org: "Google, California",
    period: "Jul 2016 – Dec 2019",
    description:
      "Backend — policy enforcement rule engine, Bigtable migration, and an Engineering Excellence initiative across code quality and tech debt.",
  },
  {
    title: "Engineering Resident — Hiring Applications",
    org: "Google, New York",
    period: "Jul 2015 – Jul 2016",
    description: "Full Stack — productionized Google's hiring software with GWT, CSS, and HTML.",
  },
  {
    title: "MS, Electrical and Computer Engineering",
    org: "University of Florida",
    period: "Aug 2013 – May 2015",
    description: "",
  },
  {
    title: "BTech, Information and Communication Technology",
    org: "Dhirubhai Ambani Institute",
    period: "Aug 2009 – May 2013",
    description: "",
  },
];

export const skills = {
  Languages: ["C++", "Java", "Python", "SQL", "GCL"],
  Tools: ["VSCode", "Kiro", "Google Colab", "Jupyter", "GWT", "Git", "Vim"],
  "Database Technologies": ["Bigtable", "Spanner", "Flume", "MapReduce", "Storm", "Kafka"],
};
