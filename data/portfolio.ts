export type SectionId =
  | "home"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

export type NavigationItem = {
  id: SectionId;
  label: string;
  index: string;
};

export const skillCategories = [
  "Languages",
  "Frameworks & libraries",
  "Engines & AR",
  "Databases & storage",
  "Background jobs & APIs",
  "Development tools",
] as const;

export type Skill = {
  name: string;
  category: (typeof skillCategories)[number];
  tone: "cobalt" | "lime" | "mint";
};

export type SystemNode = {
  id: "product" | "interface" | "services" | "data" | "delivery";
  label: string;
  capabilities: string[];
  proof?: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  summary?: string;
  commits: string[];
  technologies: string[];
};

export type Project = {
  label: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  constraint: string;
  decision: string;
  outcome: string;
  reliability: string;
  language: string;
  accent: string;
  status: string;
  technologies: string[];
  stars: number;
  url?: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  url?: string;
};

export const navigation: NavigationItem[] = [
  { id: "home", label: "About", index: "00" },
  { id: "projects", label: "Projects", index: "01" },
  { id: "experience", label: "Experience", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

export const profile = {
  "name": "Ismail Raqi",
  "initials": "IR",
  "role": "Software Engineer",
  "location": "Rabat, Morocco",
  "email": "cs.ismailrq@gmail.com",
  "availability": "Open to engineering opportunities",
  "headline": "Software engineering, from architecture to delivery.",
  "intro": "Software engineer with experience in application architecture, technical leadership, and product delivery. Focused on practical problem-solving and reliable, maintainable software.",
  "about": "Software engineer with experience in application architecture, technical leadership, and product delivery. Focused on practical problem-solving and reliable, maintainable software.",
  "philosophy": "I start by understanding the problem and the people using the product. I make trade-offs explicit, keep solutions clear, and follow through on the decisions I make. I value straightforward communication and software that remains easy to work with as it grows."
};

export const metrics = [
  {
    "value": "4",
    "label": "years at BROKERAGE & REIM"
  },
  {
    "value": "Flutter + Unity",
    "label": "mobile & augmented reality"
  },
  {
    "value": "2021–2022",
    "label": "computer science at 1337"
  }
];

export const systemNodes: SystemNode[] = [
  {
    "id": "product",
    "label": "Product",
    "capabilities": [
      "Requirements",
      "Development priorities",
      "Product delivery"
    ]
  },
  {
    "id": "interface",
    "label": "Mobile",
    "capabilities": [
      "Flutter",
      "iOS",
      "Android"
    ]
  },
  {
    "id": "services",
    "label": "Integration",
    "capabilities": [
      "Unity",
      "ARCore",
      "Backend integrations"
    ]
  },
  {
    "id": "data",
    "label": "Location",
    "capabilities": [
      "Geolocation",
      "Google Maps API",
      "Location-based AR"
    ]
  },
  {
    "id": "delivery",
    "label": "Ownership",
    "capabilities": [
      "Application architecture",
      "Technical decisions",
      "Performance"
    ]
  }
];

export const skills: Skill[] = [
  {
    "name": "Python",
    "category": "Languages",
    "tone": "cobalt"
  },
  {
    "name": "Dart",
    "category": "Languages",
    "tone": "cobalt"
  },
  {
    "name": "C#",
    "category": "Languages",
    "tone": "cobalt"
  },
  {
    "name": "SQL",
    "category": "Languages",
    "tone": "cobalt"
  },
  {
    "name": "Flutter",
    "category": "Frameworks & libraries",
    "tone": "mint"
  },
  {
    "name": "FastAPI",
    "category": "Frameworks & libraries",
    "tone": "mint"
  },
  {
    "name": "NetworkX",
    "category": "Frameworks & libraries",
    "tone": "mint"
  },
  {
    "name": "Unity",
    "category": "Engines & AR",
    "tone": "lime"
  },
  {
    "name": "ARCore",
    "category": "Engines & AR",
    "tone": "lime"
  },
  {
    "name": "SQLite",
    "category": "Databases & storage",
    "tone": "cobalt"
  },
  {
    "name": "Redis",
    "category": "Databases & storage",
    "tone": "cobalt"
  },
  {
    "name": "Hive",
    "category": "Databases & storage",
    "tone": "cobalt"
  },
  {
    "name": "Amazon S3",
    "category": "Databases & storage",
    "tone": "cobalt"
  },
  {
    "name": "Celery",
    "category": "Background jobs & APIs",
    "tone": "mint"
  },
  {
    "name": "REST APIs",
    "category": "Background jobs & APIs",
    "tone": "mint"
  },
  {
    "name": "WebSockets",
    "category": "Background jobs & APIs",
    "tone": "mint"
  },
  {
    "name": "Git",
    "category": "Development tools",
    "tone": "lime"
  },
  {
    "name": "Docker",
    "category": "Development tools",
    "tone": "lime"
  },
  {
    "name": "Sentry",
    "category": "Development tools",
    "tone": "lime"
  }
];

export const experience: Experience[] = [
  {
    "period": "Nov 2023 - Aug 2026",
    "role": "CTO & Lead Developer",
    "company": "BROKERAGE & REIM",
    "commits": [
      "Owned application architecture and technical decisions, defining how its core components communicate.",
      "Led mobile, location-based AR, and backend integration work; set development priorities.",
      "Resolved iOS and Android integration and reliability issues; managed native builds and tester releases."
    ],
    "technologies": [
      "Flutter",
      "Unity",
      "ARCore"
    ],
    "summary": "Location-based augmented reality real estate platform · Morocco"
  },
  {
    "period": "Sep 2022 - Nov 2023",
    "role": "Mobile Engineer",
    "company": "BROKERAGE & REIM",
    "commits": [
      "Built mobile features and integrations, resolving platform-specific and performance issues."
    ],
    "technologies": [
      "Mobile development",
      "Integration",
      "Performance"
    ]
  },
  {
    "period": "Sep 2025 - Jan 2026",
    "role": "Freelance Software Engineer",
    "company": "Network Reliability Analyzer",
    "commits": [
      "Built reliability block diagram (RBD) databases for curative congestion management (SPM-SPS, MPM-C).",
      "Added dynamic routing, OSPF connectivity analysis, and Kochs calculations for all outages in both models.",
      "Produced RBD visualizations and plots of average availability for static and OSPF routing."
    ],
    "technologies": [
      "Python",
      "SQLite",
      "NetworkX"
    ]
  },
  {
    "period": "Jan 2025 - Sep 2025",
    "role": "Freelance Software Engineer",
    "company": "Media processing service",
    "commits": [
      "Built a service for downloading media, converting audio, and extracting metadata.",
      "Set up background processing, cloud file storage, and reuse of previously processed files.",
      "Added live status updates, time-limited download links, and service health checks."
    ],
    "technologies": [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "S3"
    ]
  }
];

export const projects: Project[] = [
  {
    "label": "FREELANCE · JAN–SEP 2025",
    "slug": "mediahunter",
    "name": "Media processing service",
    "summary": "Media downloads, audio conversion, and metadata extraction.",
    "description": "A service for downloading media, converting audio, and extracting metadata.",
    "role": "Freelance Software Engineer, Jan 2025 - Sep 2025.",
    "constraint": "Support media downloads, audio conversion, and metadata extraction while processing runs in the background.",
    "decision": "Set up background processing, cloud file storage, and reuse of previously processed files.",
    "reliability": "Added live status updates, time-limited download links, and service health checks.",
    "outcome": "Media downloads, audio conversion, metadata extraction, and links to completed files.",
    "language": "Python",
    "accent": "#99aaff",
    "status": "Freelance client work",
    "technologies": [
      "Python",
      "FastAPI",
      "Celery",
      "Redis",
      "S3",
      "WebSockets"
    ],
    "stars": 0
  },
  {
    "label": "FREELANCE · SEP 2025–JAN 2026",
    "slug": "nt-zen",
    "name": "Network Reliability Analyzer",
    "summary": "RBD databases and network availability analysis for curative congestion management.",
    "description": "Reliability block diagram (RBD) databases for curative congestion management in the SPM-SPS and MPM-C models.",
    "role": "Freelance Software Engineer, Sep 2025 - Jan 2026.",
    "constraint": "Evaluate all outage scenarios for both models and compare static and OSPF routing.",
    "decision": "Built reliability block diagram (RBD) databases for curative congestion management (SPM-SPS, MPM-C).",
    "reliability": "Added dynamic routing, OSPF connectivity analysis, and Kochs calculations for all outages in both models.",
    "outcome": "Produced RBD visualizations and plots of average availability for static and OSPF routing.",
    "language": "Python",
    "accent": "#72d6be",
    "status": "Freelance client work",
    "technologies": [
      "Python",
      "SQLite",
      "SQL",
      "NetworkX",
      "Graph algorithms"
    ],
    "stars": 0
  },
  {
    "slug": "location-based-ar",
    "name": "Real estate AR platform",
    "summary": "A location-based augmented reality real estate platform.",
    "description": "A location-based augmented reality real estate platform for iOS and Android.",
    "role": "CTO & Lead Developer, Nov 2023 - Aug 2026; previously Mobile Engineer, Sep 2022 - Nov 2023.",
    "constraint": "Coordinate mobile, location-based AR, and backend integration work across iOS and Android.",
    "decision": "Owned application architecture and technical decisions, defining how its core components communicate.",
    "outcome": "Led mobile, location-based AR, and backend integration work; set development priorities. Managed native builds and tester releases.",
    "reliability": "Resolved iOS and Android integration and reliability issues.",
    "language": "Flutter · Unity",
    "accent": "#7691FF",
    "status": "Professional work",
    "technologies": [
      "Flutter",
      "Unity",
      "ARCore",
      "Geolocation"
    ],
    "stars": 0,
    "label": "BROKERAGE & REIM · PROFESSIONAL WORK"
  }
];

export const socials: SocialLink[] = [
  { label: "GitHub", handle: "ismailrq", url: "https://github.com/ismailrq" },
  {
    "label": "LinkedIn",
    "handle": "/in/raqi",
    "url": "https://www.linkedin.com/in/raqi"
  }
];
