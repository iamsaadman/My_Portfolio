import type { Achievement, Certification, EducationEntry, ExperienceEntry, ExpertiseCategory, LeadershipEntry, NavItem, Project, SkillGroup, SocialLink } from "@/types";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000";

export const profile = {
  name: "Muhammad Saadman Sakib Hossain",
  title: "Full-Stack Developer",
  shortIntro: "HELLO, I'M",
  headline: "MUHAMMAD SAADMAN SAKIB HOSSAIN",
  subtitle: "Building useful digital experiences through thoughtful engineering, collaboration, and continuous learning.",
  summary:
    "I am a final-trimester Computer Science and Engineering student at United International University, seeking opportunities to collaborate, contribute to meaningful projects, and grow professionally. My experience spans full-stack development, databases, automation, and AI/ML exploration.",
  email: "saadmansakib2002@gmail.com",
  github: "https://github.com/iamsaadman",
  linkedin: "https://www.linkedin.com/in/saadman-sakib-in/",
  university: "United International University, Dhaka",
  degree: "BSc in Computer Science and Engineering (Final Trimester)",
};

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const rotatingTitles = [
  "Full-Stack Developer",
  "Software Developer",
  "CSE Student",
  "AI/ML Enthusiast",
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: gmailComposeUrl, icon: "mail" },
];

export const expertise: ExpertiseCategory[] = [
  {
    title: "Frontend Development",
    icon: "Code2",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Flutter",
      "Streamlit",
    ],
  },
  {
    title: "Backend Development",
    icon: "Server",
    technologies: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database Management",
    icon: "Database",
    technologies: ["PostgreSQL", "SQLite", "SQL"],
  },
  {
    title: "Programming & CS",
    icon: "TerminalSquare",
    technologies: [
      "C",
      "C++",
      "Java",
      "Python",
      "Dart",
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "AI/ML & Automation",
    icon: "BrainCircuit",
    technologies: [
      "YOLOv8",
      "AI/ML Model Training",
      "Python Automation",
      "Speech Recognition",
      "Text-to-Speech",
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    technologies: [
      "Git",
      "GitHub",
      "Socket.IO",
      "Leaflet",
      "OpenStreetMap",
      "SSLCommerz",
      "SMTP",
      "ReportLab",
    ],
  },
];

export const technologySlider = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Flutter" },
  { name: "Django" },
  { name: "PostgreSQL" },
  { name: "SQLite" },
  { name: "Tailwind CSS" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "C++" },
  { name: "Java" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Flutter", "Streamlit", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Django", "Django REST Framework", "REST APIs", "JWT"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQLite"],
  },
  {
    title: "Other & Integrations",
    items: [
      "Git",
      "GitHub",
      "Socket.IO",
      "Leaflet",
      "OpenStreetMap",
      "SpeechRecognition",
      "gTTS",
      "ReportLab",
      "Requests",
      "SSLCommerz",
      "SMTP",
    ],
  },
  {
    title: "Concepts",
    items: ["DSA", "OOP", "RBAC", "Task Automation", "Data Analysis", "PDF Generation"],
  },
];

export const projects: Project[] = [
  {
    slug: "featherflow",
    title: "FeatherFlow",
    category: "Final-year Design Project",
    role: "Backend Developer Contributor",
    description:
      "A team-built poultry farm management platform designed to connect farmers with supporting services. Contributed to authentication and the pharmacy and delivery modules as a backend developer.",
    features: [
      "Authentication contribution",
      "Pharmacy module",
      "Delivery module",
      "Final-year team design project",
    ],
    tech: ["Django REST Framework", "PostgreSQL", "JWT Authentication"],
    timeline: "Final-year project",
    github: "https://github.com/AbrarAdib18/Featherflow",
  },
  {
    slug: "university-medical-center",
    title: "University Medical Center",
    category: "University healthcare website",
    role: "Full-Stack Developer",
    description:
      "Built the frontend for a university medical center website with Tailwind CSS and implemented its backend with PHP.",
    features: [
      "Full frontend implementation",
      "Tailwind CSS styling",
      "PHP backend",
    ],
    tech: ["Tailwind CSS", "PHP"],
    timeline: "Academic project",
    github: "https://github.com/iamsaadman/UniversityMedcialCenter",
  },
  {
    slug: "yolov8m-object-detection",
    title: "YOLOv8m Object Detection Research",
    category: "Ongoing machine learning research",
    role: "Researcher and model trainer",
    description:
      "An ongoing research project using YOLOv8m for machine-learning object detection.",
    features: [
      "YOLOv8m model training",
      "Object detection experimentation",
      "Ongoing research",
    ],
    tech: ["Python", "YOLOv8m", "Computer Vision"],
    timeline: "Ongoing",
    github: "https://github.com/iamsaadman/yolov8m_model_train",
  },
  {
    slug: "voice-to-pdf-report-generator",
    title: "Voice-to-PDF Report Generator",
    category: "Voice-powered document generation",
    role: "Independent developer",
    description:
      "Created a voice-driven tool that turns spoken input into generated PDF reports.",
    features: [
      "Voice input",
      "Speech recognition",
      "PDF report generation",
    ],
    tech: ["Python", "Speech Recognition", "PDF Generation"],
    timeline: "Personal project",
    github: "https://github.com/iamsaadman/Python-With-AI-ML-Automation/blob/main/Voice_to_PDF_Report_Generator.py",
  },
  {
    slug: "azile",
    title: "Voice & Text Virtual Assistant",
    category: "Voice and Text Virtual Assistant",
    role: "Independent developer",
    description:
      "Developed a Python virtual assistant with voice and text interaction, including a private medicine-information text-help feature alongside practical assistant tools.",
    features: [
      "Text and voice interactions",
      "Private medicine-information text help",
      "Assistant utilities",
    ],
    tech: ["Python", "Speech Recognition", "Text-to-Speech"],
    timeline: "Personal project",
    github: "https://github.com/iamsaadman/Python-With-AI-ML-Automation/blob/main/Python_AI_Voice_Text_Virtual_Assistant.py",
  },
  {
    slug: "carco",
    title: "CarCo",
    category: "Automotive Marketplace and Community Platform",
    role: "Frontend Developer",
    description:
      "Developed a responsive automotive marketplace and community platform with vehicle listings, repair-shop directories, community features, authentication, search, seller verification, interactive maps, dashboards, and payment-integration features.",
    features: [
      "Automotive marketplace",
      "Repair shop directory",
      "Community platform",
      "User authentication",
      "Search functionality",
      "Seller verification",
      "Maps",
      "Dashboards",
      "Payment integration features",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Leaflet", "REST APIs"],
    timeline: "2025–2026",
  },
];

export const additionalProjects = [
  "NextJS Diary",
  "Python AI/ML Automation",
  "Birthday Email Automation",
  "Hospital Management System",
  "JavaFX Desktop Applications",
  "Algorithm Implementations",
];

export const experience: ExperienceEntry[] = [
  {
    title: "Graphics Designer Executive",
    company: "English Champ",
    period: "April 2024 – August 2024",
    responsibilities: [
      "Designed static images, videos, and motion graphics for brand identity, producing engaging content and managing projects from concept through timely delivery.",
    ],
  },
];

export const leadership: LeadershipEntry[] = [
  {
    title: "UIU Model United Nations (UIUMUN)",
    organization: "UIUMUN",
    position: "Head of Internal Affairs",
    period: "September 2025 – November 2026",
    responsibilities: [
      "Coordinate internal communication, support event planning, maintain organized club operations, and promote member engagement.",
    ],
  },
  {
    title: "UIU Model United Nations (UIUMUN)",
    organization: "UIUMUN",
    position: "Senior Media Executive",
    period: "October 2024 – September 2025",
    responsibilities: [
      "Created media and graphic content for club events, supported marketing, and strengthened club branding.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    institution: "United International University, Dhaka",
    degree: "BSc in Computer Science and Engineering",
    period: "Final Trimester",
    details: "Dhaka, Bangladesh. Focused on modern software development and intelligent systems.",
  },
  {
    institution: "Navy Anchorage School and College",
    degree: "HSC, Science",
    period: "2021",
  },
  {
    institution: "Cambrian School and College",
    degree: "SSC, Science",
    period: "2019",
  },
];

export const certifications: Certification[] = [
  { title: "SQL for Data Analysis", provider: "Simplilearn", issued: "May 2026" },
  { title: "Mastering Git & GitHub", provider: "Udemy", issued: "May 2026" },
  { title: "AI Career Edge", provider: "GP Academy", issued: "2026" },
  { title: "AI-Powered Communication", provider: "GP Academy", issued: "2026" },
  { title: "Personal Branding", provider: "GP Academy", issued: "2026" },
  { title: "Network Smarter with AI", provider: "GP Academy", issued: "2026" },
  { title: "Interview Skills", provider: "GP Academy", issued: "2026" },
  { title: "Corporate Presentation", provider: "GP Academy", issued: "2026" },
  { title: "Art of Communication", provider: "GP Academy", issued: "2026" },
  { title: "Smart CV", provider: "GP Academy", issued: "2026" },
  { title: "LinkedIn 101", provider: "GP Academy", issued: "2026" },
];

export const achievements: Achievement[] = [
  {
    title: "DBMS Lab Champion",
    project: "Shastho Shurokkha",
    role: "Frontend Developer",
    tech: ["Tailwind CSS", "Raw PHP"],
    description:
      "Built a responsive health-information platform with improved UI/UX and received DBMS Lab Champion recognition.",
  },
];
