export const siteConfig = {
  name: "Nikhil Bhalla",
  shortName: "NB",
  title: "High School Senior & Software Developer",
  description:
    "Nikhil Bhalla is a high school senior building projects in machine learning, web development, and algorithms.",
  siteUrl: "https://dudemillion.github.io/Portfolio/",
  accentColor: "#2500f7",
  hero: {
    eyebrow: "High school senior · Class of 2027",
    statement:
      "I build software that makes complex ideas easier to understand.",
    detail:
      "Exploring machine learning, web development, and algorithms through hands-on projects.",
  },
  social: {
    email: "bhallan803@gmail.com",
    linkedin: "https://www.linkedin.com/in/nikhil-bhalla-07311635b/",
    github: "https://github.com/dudemillion",
  },
  about: [
    "I'm a senior at Wake Early College of Information and Biotechnologies who enjoys turning technical ideas into working software.",
    "My projects range from an explainable machine-learning tool for analyzing misinformation to an interactive breadth-first-search pathfinder. I enjoy comparing approaches, understanding tradeoffs, and documenting both what works and what could improve.",
  ],
  skills: [
    "Python",
    "JavaScript",
    "Java",
    "HTML & CSS",
    "Machine Learning",
    "Streamlit",
    "Git & GitHub",
  ],
  approach: [
    {
      label: "Build",
      text: "Turn ideas into working, interactive software.",
    },
    {
      label: "Compare",
      text: "Test different approaches and choose practical tradeoffs.",
    },
    {
      label: "Explain",
      text: "Document how a system works, where it can fail, and how it could improve.",
    },
  ],
  projects: [
    
    {
      name: "Project LAZARUS",
      eyebrow: "Local-First AI · Personal Assistant",
      description:
        "An ongoing AI engineering project focused on building a privacy-conscious personal assistant with persistent memory and contextual intelligence. Currently features a modular backend, local memory storage, configurable personality system, and interactive dashboard, with plans for local LLM integration and intelligent home automation.",
      image: "projects/project-lazarus.png",
      imageAlt: "The Project LAZARUS dashboard displaying memory management, system activity, and a chat interface.",
      preview: "lazarus",
      repository: "https://github.com/dudemillion/Project-LAZARUS",
      liveDemo: null,
      skills: [
        "Python",
        "FastAPI",
        "Streamlit",
        "SQLite",
        "API Development",
        "pytest",
        "GitHub Actions"
      ],
      highlights: [
        "Developed a local memory system with structured event storage, daily journals, audit logging, and keyword search.",
        "Engineered a modular AI architecture featuring configurable personality rules, a mock LLM gateway, and metadata-aware memory chunking.",
        "Implemented automated testing with 23 passing tests at the latest checkpoint and continuous integration through GitHub Actions."
      ],
    },
    {
      name: "AI-Powered Misinformation Detector",
      eyebrow: "Machine learning · NLP",
      description:
        "A text-classification application that analyzes news headlines or articles, reports a prediction with confidence, and shows which words most influenced the result.",
      image: "projects/misinformation-detector.png",
      imageAlt:
        "The misinformation detector showing a Real prediction and a chart of influential words.",
      preview: "image",
      repository: "https://github.com/dudemillion/AI-Fake-News-Detector",
      liveDemo: null,
      skills: ["Python", "scikit-learn", "Streamlit", "NLP"],
      highlights: [
        "Trained a TF-IDF and logistic-regression classifier for headline and article text.",
        "Compared the final model with a DistilBERT experiment and chose the more practical approach.",
        "Added word-level explanations and documented limitations such as model drift.",
      ],
    },
    {
      name: "BFS Pathfinding Visualizer",
      eyebrow: "Algorithms · Interactive web",
      description:
        "An interactive 10×10 grid that finds and displays a shortest available path between two points while avoiding walls placed by the user.",
      image: null,
      imageAlt: "An illustrative grid showing a path around wall cells.",
      preview: "pathfinder",
      repository: "https://github.com/dudemillion/Pathfinder",
      liveDemo: "https://dudemillion.github.io/Pathfinder/",
      skills: ["JavaScript", "HTML", "CSS", "Algorithms"],
      highlights: [
        "Models start, end, wall, visited, and path states across a user-configurable grid.",
        "Uses breadth-first search to return a shortest path when one exists.",
        "Includes an optional step-by-step animation and a browser-based live demo.",
      ],
    },
  ],
  experience: [],
  education: [
    {
      school: "Wake Early College of Information and Biotechnologies",
      program: "High School Senior · Dual Enrollment",
      dateRange: "Expected graduation: 2027",
      summary:
        "Completing high school requirements at Wake Early College while taking college-level computer programming coursework through Wake Technical Community College.",
      achievements: [
        "Student of the Month",
        "Student Council member for two years",
        "A/AB Honor Roll every completed semester",
      ],
    },
  ],
};
