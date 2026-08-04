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

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
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
