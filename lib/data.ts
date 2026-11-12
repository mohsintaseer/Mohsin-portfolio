export const profile = {
  name: "Syed Mohsin Taseer Naqvi",
  role: "Computer Science graduate & software developer",
  intro:
    "I build web apps with Next.js and Node.js and work on agentic AI and retrieval-augmented generation (RAG) systems. I also taught programming labs at the University of Gujrat.",
  location: "Sargodha, Pakistan",
  email: "mohsinnaqvi5513@gmail.com",
  github: "https://github.com/mohsintaseer",
  linkedin: "https://www.linkedin.com/in/syed-mohsin-taseer-naqvi-623190361",
};

export const experience = [
  {
    title: "Teaching Assistant & Lab Instructor",
    org: "University of Gujrat",
    period: "2024 – 2026",
    points: [
      "Ran lab sessions for Programming Fundamentals, Object-Oriented Programming and Data Structures & Algorithms.",
      "Guided students through coding exercises, debugging and software design.",
      "Graded assignments, lab reports and practical exams, with written feedback.",
    ],
  },
  {
    title: "Information Secretary",
    org: "Computing Society, University of Gujrat",
    period: "2024 – 2026",
    points: [
      "Managed announcements and communication for society events and workshops.",
      "Coordinated promotion across digital and campus channels to raise student turnout.",
      "Worked with team leads to run tech competitions, seminars and departmental activities.",
    ],
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "University of Gujrat",
  period: "2022 – 2026",
};

export const skills = [
  { group: "Languages", items: ["C", "C++", "Python", "JavaScript", "TypeScript", "Dart"] },
  { group: "Web", items: ["HTML", "CSS", "React", "Next.js", "Node.js"] },
  { group: "Mobile", items: ["Flutter", "Dart", "Firebase"] },
  { group: "AI & LLM", items: ["LangChain", "RAG", "CrewAI", "Prompt engineering", "Ollama"] },
];

export const projects = [
  {
    name: "TradeFlux",
    tag: "Final year project",
    desc: "An agentic AI platform that predicts stock market moves. Several agents collect market data, read news sentiment, forecast and write reports, all shown on an interactive dashboard with backtesting and admin roles.",
    tech: ["Next.js", "TypeScript", "Python", "CrewAI", "Groq", "PostgreSQL", "Prisma"],
    link: "https://github.com/irfanakram994/stock-market-fyp",
  },
  {
    name: "VotaFlow",
    tag: "Real-time polls",
    desc: "Create polls, vote and watch results update live for everyone connected, using Stream Chat to sync votes across users.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stream Chat"],
    link: "https://github.com/mohsintaseer/VotaFlow-",
  },
  {
    name: "VisionLens AI",
    tag: "In-browser machine learning",
    desc: "Identifies objects in uploaded images or image URLs with MobileNet, shows confidence scores and keeps a gallery of recent images. Runs fully in the browser with no Python backend.",
    tech: ["React", "JavaScript", "TensorFlow.js", "MobileNet", "SCSS"],
    link: "https://github.com/mohsintaseer/Object-Vision-Ai",
  },
  {
    name: "PDF RAG Knowledge Assistant",
    tag: "Offline document Q&A",
    desc: "Splits PDFs into chunks, embeds them in ChromaDB and answers questions with a local Llama 3 model, so documents stay on your machine.",
    tech: ["Python", "LangChain", "Ollama", "ChromaDB"],
    link: "https://github.com/mohsintaseer/-PDF-RAG-Knowledge-Assistant",
  },
  {
    name: "Local Knowledge Graph RAG",
    tag: "Multi-hop reasoning",
    desc: "Extracts entities and relationships from raw text into a NetworkX graph, then answers questions by following links between them with a local Mistral model.",
    tech: ["Python", "LangChain", "Ollama", "NetworkX"],
    link: "https://github.com/mohsintaseer/Local-Knowledge-Graph-RAG-with-Ollama",
  },
  {
    name: "LangChain Documentation Deep Agent",
    tag: "Multi-agent RAG",
    desc: "Indexes the official LangChain docs and uses specialised subagents to find, analyse and combine passages into evidence-based answers.",
    tech: ["Python", "LangChain", "DeepAgents", "OpenAI Embeddings"],
    link: "https://github.com/mohsintaseer/LangChain-Documentation-Deep-Agent",
  },
  {
    name: "Short Research Agent",
    tag: "Semantic web search",
    desc: "Searches the web, pulls text from pages, ranks passages by embedding similarity and writes a short summary for your query.",
    tech: ["Python", "BeautifulSoup", "Sentence Transformers", "NumPy"],
    link: "https://github.com/mohsintaseer/Short-Research-Agent-Semantic-Web-Search-and-Summary-Generator",
  },
  {
    name: "Instagram Clone",
    tag: "Flutter, Android & web",
    desc: "Social app with sign-in, photo sharing, likes, comments, profiles, user search and follow/unfollow, backed by Firebase.",
    tech: ["Flutter", "Dart", "Firebase", "Provider"],
    link: "https://github.com/mohsintaseer/instagram-flutter-clone",
  },
  {
    name: "Restaurant Management System",
    tag: "C++ console app",
    desc: "Handles customer accounts, menus, orders and receipts, using binary search trees, linked lists and queues, with manager revenue reports and file storage.",
    tech: ["C++", "Data structures", "File handling"],
    link: "https://github.com/mohsintaseer/Restaurant-Management-System-Menu-Orders-Customer-Administration",
  },
];

export const events = ["Cybersecurity", "Artificial intelligence", "Generative AI"];
