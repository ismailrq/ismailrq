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
  details: { label: string; description: string }[];
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
    "name": "Media Processing Platform",
    "summary": "Media downloads, audio conversion, and metadata extraction with secure cloud delivery and automatic scaling on AWS.",
    "description": "Developed a platform for media downloads, audio conversion, and metadata extraction, including cloud delivery, security, and deployment.",
    "details": [
      {
        "label": "Processing",
        "description": "Extracted metadata and available formats, downloaded videos, and converted audio using yt-dlp and FFmpeg."
      },
      {
        "label": "Background jobs",
        "description": "Used Celery and Redis for processing, caching, and avoiding duplicate work."
      },
      {
        "label": "Delivery",
        "description": "Provided live updates through WebSockets and time-limited downloads from Amazon S3."
      },
      {
        "label": "Security",
        "description": "Implemented HMAC signing, TOTP verification, AWS Secrets Manager, and rate limiting."
      },
      {
        "label": "Infrastructure",
        "description": "Containerized deployment on AWS with load balancing, automatic scaling, health checks, and application and worker monitoring."
      }
    ],
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
      "Pydantic",
      "yt-dlp",
      "FFmpeg",
      "Celery",
      "Redis",
      "WebSockets",
      "Amazon S3",
      "aiobotocore",
      "HMAC",
      "TOTP/PyOTP",
      "AWS Secrets Manager",
      "Docker",
      "Docker Compose",
      "AWS EC2",
      "AWS Load Balancing",
      "AWS Auto Scaling",
      "ElastiCache",
      "Gunicorn",
      "Uvicorn",
      "Prometheus",
      "Flower",
      "Nginx",
      "LocalStack",
      "GitHub Container Registry"
    ],
    "stars": 0
  },
  {
    "label": "FREELANCE · SEP 2025–JAN 2026",
    "slug": "nt-zen",
    "name": "Network Reliability Analysis System",
    "summary": "Network modeling, failure analysis, and availability comparisons for the SPM-SPS and MPM-C congestion management models.",
    "description": "Developed a system for evaluating communication network reliability in the SPM-SPS and MPM-C congestion management models.",
    "details": [
      {
        "label": "Data and modeling",
        "description": "Built SQLite databases for network components, outage scenarios, and reliability block diagrams."
      },
      {
        "label": "Failure analysis",
        "description": "Identified component failure combinations that interrupt communication."
      },
      {
        "label": "Routing",
        "description": "Compared static routing with OSPF-style rerouting to evaluate alternative paths after failures."
      },
      {
        "label": "Calculations",
        "description": "Applied Kochs algebra to calculate availability across outage scenarios."
      },
      {
        "label": "Results",
        "description": "Generated network diagrams, availability comparisons, and exported analysis results."
      }
    ],
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
      "SQL",
      "SQLite",
      "NetworkX",
      "Matplotlib",
      "JSON",
      "unittest"
    ],
    "stars": 0
  },
  {
    "slug": "location-based-ar",
    "name": "Real Estate AR Platform",
    "summary": "A location-based augmented reality real estate platform.",
    "description": "Built a location-based AR real estate app for iOS and Android.",
    "details": [
      {
        "label": "Mobile",
        "description": "Built with Flutter and Dart."
      },
      {
        "label": "AR",
        "description": "Unity and C#, using a modular framework for embedding Unity with bidirectional communication and lifecycle management."
      },
      {
        "label": "Location",
        "description": "Geolocation, Google Maps API, ARCore Extensions, and the Geospatial API."
      },
      {
        "label": "Storage and services",
        "description": "Hive, Firebase Remote Config, and Cloud Messaging."
      },
      {
        "label": "Reliability",
        "description": "AR initialization and tracking checks, platform-specific fixes, and Sentry for crash analytics and logs."
      }
    ],
    "role": "CTO & Lead Developer, Nov 2023 - Aug 2026; previously Mobile Engineer, Sep 2022 - Nov 2023.",
    "constraint": "Coordinate mobile, location-based AR, and backend integration work across iOS and Android.",
    "decision": "Used a modular framework for embedding Unity with bidirectional communication and lifecycle management in the Flutter app.",
    "outcome": "Led mobile, location-based AR, and backend integration work, including Firebase Remote Config and Cloud Messaging. Set development priorities and managed native builds and tester releases.",
    "reliability": "Resolved iOS and Android integration and reliability issues.",
    "language": "Flutter · Unity",
    "accent": "#7691FF",
    "status": "Professional work",
    "technologies": [
      "Dart",
      "Flutter 3.x",
      "BLoC",
      "Unity",
      "C#",
      "ARCore",
      "ARCore Extensions",
      "Geospatial API",
      "Geolocation",
      "Google Maps API",
      "Hive",
      "Firebase Remote Config",
      "Firebase Cloud Messaging",
      "Sentry"
    ],
    "stars": 0,
    "label": "BROKERAGE & REIM · PROFESSIONAL WORK"
  },
  {
    "label": "BROKERAGE & REIM · PROFESSIONAL WORK",
    "slug": "homear-backend",
    "name": "HomeAR — Real Estate Backend",
    "summary": "Backend supporting a location-based AR real-estate application, with property management, proximity search, agency accounts, and real-time notifications.",
    "description": "Developed the backend supporting HomeAR’s location-based AR application. Organized the system into client and administration APIs, with PostgreSQL for property data and matching logic, and Redis and Socket.IO for real-time notifications.",
    "details": [
      {
        "label": "Property management",
        "description": "Managed apartments, houses, offices, shops, and parking listings, including pricing, availability, property-specific attributes, amenities, photos, videos, and floor plans."
      },
      {
        "label": "Geographic discovery",
        "description": "Implemented proximity filtering and distance sorting using custom PostgreSQL calculations. Exposed property coordinates, altitude, and GeoJSON data for location-based discovery."
      },
      {
        "label": "Agency operations",
        "description": "Supported individual sellers, agency accounts, agent subaccounts, activation controls, contact visibility, and listing transfers between agents."
      },
      {
        "label": "Matching and notifications",
        "description": "Matched saved property searches using PostgreSQL views. Added price-drop subscriptions, persisted notifications, and real-time delivery through Redis Pub/Sub and Socket.IO."
      },
      {
        "label": "Moderation and enrichment",
        "description": "Implemented administration endpoints for listing review, status changes, deletion, and amenity management. Integrated optional Google Places and walking-distance enrichment."
      },
      {
        "label": "Deployment and documentation",
        "description": "Containerized the APIs and supporting services with Docker Compose. Supplied database initialization scripts and Postman request collections."
      }
    ],
    "role": "Backend development, Aug 2023 - Jan 2024.",
    "constraint": "Support property publishing, geographic discovery, and agency operations while supplying property data to the mobile AR application.",
    "decision": "Separated client and administration APIs, centralized shared business logic in PostgreSQL views and triggers, and connected notification flows through Redis and Socket.IO.",
    "reliability": "Added input validation, seller ownership checks, revocable sessions, and persisted notification records.",
    "outcome": "A backend supporting property publishing, nearby-property discovery, agency management, saved-search matching, and price-drop notifications.",
    "language": "TypeScript",
    "accent": "#58C6C1",
    "status": "Professional work",
    "technologies": [
      "TypeScript",
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "SQL views and triggers",
      "JSON/JSONB",
      "Redis",
      "Socket.IO",
      "GeoJSON",
      "Google Places API",
      "Distance Matrix API",
      "JWT",
      "Nodemailer",
      "SMTP",
      "Docker",
      "Docker Compose",
      "Postman"
    ],
    "stars": 0
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
