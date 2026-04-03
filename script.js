const knowledgeBase = [
  {
    id: "education",
    keywords: [
      "study",
      "studying",
      "major",
      "majors",
      "education",
      "school",
      "berkeley",
      "uc berkeley",
      "university",
      "degree",
      "graduation",
      "graduate",
      "student",
      "coursework",
      "classes",
    ],
    answers: [
      "Farah studies Data Science and Bioengineering at UC Berkeley and is expected to graduate in December 2026. Her coursework includes machine learning, data science, data analytics, probability and statistics, computational molecular and cell biology, computational functional genomics, and data structures and algorithms.",
      "She's a Data Science and Bioengineering student at UC Berkeley, graduating in December 2026. A lot of her coursework sits right at the intersection of machine learning, biology, and data-driven problem solving.",
    ],
  },
  {
    id: "background",
    keywords: [
      "background",
      "about",
      "bio",
      "who is farah",
      "tell me about farah",
      "story",
      "introduction",
    ],
    answers: [
      "Farah is a UC Berkeley student in Data Science and Bioengineering who really enjoys taking messy, unclear problems and turning them into something useful. She's especially drawn to work that has real scientific impact and stays interpretable.",
      "A good way to describe Farah is that she's a builder with a research mindset. She likes working on hard problems in data, biology, and decision-making, but she also cares a lot about making the work understandable and meaningful.",
    ],
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "work",
      "worked",
      "internship",
      "intern",
      "job",
      "jobs",
      "professional",
      "research",
      "lab",
      "labs",
      "resume",
    ],
    answers: [
      "Farah's experience includes being a Data Intern at Marine Biologics, a Computational Biology Researcher in the Staller Lab at UC Berkeley, a Bioinformatics Researcher at Lawrence Berkeley National Laboratory, and a Biomechanics Researcher at the CARE Lab.",
      "Most of Farah's experience sits between research and applied data work. She's worked in biotech, computational biology, bioinformatics, and biomechanics, so her background is both technical and pretty interdisciplinary.",
    ],
  },
  {
    id: "marine-biologics",
    keywords: [
      "marine",
      "biologics",
      "pdf",
      "ingestion",
      "csv",
      "pipeline",
      "dashboard",
      "upload",
      "uploads",
      "llm",
      "document",
      "documents",
    ],
    answers: [
      "At Marine Biologics, Farah built a workflow that pulled structured data out of scientific PDFs and turned it into CSVs for downstream machine learning use. She also built a web app version so people could upload PDFs and explore the results more easily.",
      "That Marine Biologics project is a strong example of the kind of work Farah likes: taking something messy and manual, automating it, and turning it into a tool people can actually use.",
    ],
  },
  {
    id: "skills",
    keywords: [
      "skills",
      "skill",
      "tech stack",
      "stack",
      "tools",
      "tool",
      "languages",
      "language",
      "python",
      "sql",
      "java",
      "r",
      "matlab",
      "bash",
      "streamlit",
      "supabase",
      "scikit",
      "scikit-learn",
    ],
    answers: [
      "Farah works with Python, SQL, Java, R, MATLAB, Bash, Scikit-learn, statsmodels, Streamlit, Supabase, GitHub, Jupyter Notebook, VS Code, IntelliJ, and RStudio. She also has experience with bioinformatics tools like BLAST, FoldSeek, Cytoscape, AlphaFold, JBrowse, and Chimera.",
      "Her skill set blends data science, machine learning, research computing, and bioinformatics, so she can move pretty comfortably between coding, analysis, and scientific context.",
    ],
  },
  {
    id: "interests",
    keywords: [
      "career",
      "interests",
      "interest",
      "goals",
      "goal",
      "looking for",
      "seeking",
      "opportunities",
      "roles",
      "role",
      "passionate",
      "care about",
    ],
    answers: [
      "Farah is especially interested in interpretable AI and ML pipelines, especially in healthcare, biotechnology, biological research, and environmental sustainability.",
      "A big thread through Farah's interests is wanting to build systems that are useful, transparent, and grounded in real impact. She's especially drawn to biotech, healthcare, sustainability, and scientific tooling.",
    ],
  },
  {
    id: "ml-projects",
    keywords: [
      "machine learning",
      "ml",
      "ai",
      "best project",
      "best projects",
      "project fits",
      "project fit",
      "which project",
      "relevant project",
      "data science project",
      "portfolio project",
    ],
    answers: [
      "The strongest projects for AI, ML, and data science roles are probably Farah's Lung scRNA-seq Clustering project, her Powerlifting ML Pipeline, and her Photosynthesis Gene Function Discovery work.",
      "If you're looking at her portfolio through an ML lens, the lung scRNA-seq project is probably the clearest machine learning example, while the powerlifting project shows pipeline thinking and the LBNL project shows strong scientific data analysis.",
    ],
  },
  {
    id: "powerlifting",
    keywords: [
      "powerlifting",
      "lifting",
      "training",
      "deload",
      "max",
      "performance tracking",
    ],
    answers: [
      "Farah's Powerlifting ML Pipeline is a current project focused on using user-inputted and online powerlifting data to help support training decisions like when to deload, when to test a max, and what to adjust in a training program.",
      "It's a fun project, but also a serious pipeline and modeling problem. The long-term idea is to turn it into an app that helps lifters while also improving the model as more training data comes in.",
    ],
  },
  {
    id: "scrna-project",
    keywords: [
      "lung",
      "scrna",
      "single-cell",
      "single cell",
      "clustering",
      "pca",
      "k-means",
      "kmeans",
      "differential expression",
      "cell populations",
      "unsupervised",
    ],
    answers: [
      "Farah's Lung scRNA-seq Clustering project used PCA, K-means clustering, differential expression analysis, and biological validation to identify meaningful cell populations in a lung single-cell RNA sequencing dataset.",
      "It's one of her strongest machine learning-related projects because it shows not just modeling, but also biological interpretation and validation.",
    ],
  },
  {
    id: "bioinformatics-project",
    keywords: [
      "photosynthesis",
      "gene function",
      "chlamydomonas",
      "bioinformatics",
      "foldseek",
      "blast",
      "cytoscape",
      "hpc",
      "chimera",
      "protein",
      "proteins",
    ],
    answers: [
      "In the Photosynthesis Gene Function Discovery project, Farah combined graph network analysis, structural similarity, and protein annotation workflows to investigate unknown gene functions in Chlamydomonas reinhardtii.",
      "That project is a really good example of her bioinformatics side. It pulls together tools like FoldSeek, BLAST, Cytoscape, Chimera, Bash, and HPC-based workflows.",
    ],
  },
  {
    id: "ethical-ai",
    keywords: [
      "ethical ai",
      "ethical",
      "ethics",
      "transparent",
      "transparency",
      "interpretable",
      "interpretability",
      "decision",
      "decisions",
      "trust",
      "responsible ai",
    ],
    answers: [
      "A big theme in Farah's work is transparency. She's especially interested in systems that help people make important decisions without turning the process into a black box.",
      "For Farah, ethical AI is less about buzzwords and more about building tools that people can actually trust, especially in areas like healthcare, biotech, and research.",
    ],
  },
  {
    id: "leadership",
    keywords: [
      "leadership",
      "mentor",
      "mentorship",
      "outreach",
      "tutor",
      "teaching",
      "community",
      "club",
      "women engineers",
      "honors society",
    ],
    answers: [
      "Farah has been an Executive Officer in the UC Berkeley Calisthenics Club, a Data Science Tutor at UC Berkeley, and a leader in both the Bioengineering Honors Society and the Society of Women Engineers.",
      "Mentorship and community-building are a real part of her story. She cares a lot about helping other students, especially those from underrepresented backgrounds, feel supported in technical spaces.",
    ],
  },
  {
    id: "hobbies",
    keywords: [
      "hobbies",
      "outside",
      "fun",
      "outside of tech",
      "interests outside",
      "reading",
      "volleyball",
      "calisthenics",
      "plants",
    ],
    answers: [
      "Outside of technical work, Farah enjoys calisthenics, reading, mentorship, volleyball, and caring for plants.",
      "She definitely has a strong life outside of tech too. Calisthenics is a big one, and she also really enjoys reading, mentoring, volleyball, and taking care of plants.",
    ],
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "reach",
      "linkedin",
      "github",
      "connect",
      "message",
      "hire",
      "resume",
      "cv",
    ],
    answers: [
      "You can reach Farah at ffcisse@berkeley.edu, connect on LinkedIn at linkedin.com/in/farah-cisse, or check out her GitHub at github.com/ffcisse.",
      "The easiest way to reach Farah is probably by email at ffcisse@berkeley.edu. Her LinkedIn and GitHub are also linked on the site.",
    ],
  },
];

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "of",
  "on",
  "or",
  "she",
  "tell",
  "the",
  "to",
  "what",
  "who",
  "with",
  "about",
]);

const followUpWords = new Set([
  "more",
  "that",
  "this",
  "it",
  "why",
  "how",
  "which",
  "one",
]);

const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const promptButtons = document.querySelectorAll(".prompt-chip");

let lastMatchedTopics = [];

function addMessage(content, sender) {
  const node = document.createElement("div");
  node.className = `message ${sender}`;
  node.textContent = content;
  chatWindow.appendChild(node);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(" ")
    .filter((token) => token && !stopWords.has(token));
}

function isFollowUp(tokens) {
  return tokens.some((token) => followUpWords.has(token));
}

function scoreEntry(entry, normalizedQuestion, tokens, followUp) {
  let score = 0;

  entry.keywords.forEach((keyword) => {
    const normalizedKeyword = normalizeText(keyword);
    const parts = normalizedKeyword.split(" ");

    if (normalizedQuestion.includes(normalizedKeyword)) {
      score += parts.length > 1 ? 5 : 3;
    }

    const overlap = parts.filter((part) => tokens.includes(part)).length;
    if (overlap > 0) {
      score += overlap * 2;
    }
  });

  if (followUp && lastMatchedTopics.includes(entry.id)) {
    score += 3;
  }

  return score;
}

function getTopMatches(question) {
  const normalizedQuestion = normalizeText(question);
  const tokens = tokenize(question);
  const followUp = isFollowUp(tokens);

  return knowledgeBase
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, normalizedQuestion, tokens, followUp),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function pickAnswer(entry, question) {
  const normalizedQuestion = normalizeText(question);

  if (entry.id === "contact" && normalizedQuestion.includes("resume")) {
    return "You can open Farah's resume directly from the Resume button on the page, and if you want to reach out, her email is ffcisse@berkeley.edu.";
  }

  if (entry.id === "ml-projects" && normalizedQuestion.includes("best")) {
    return "If I had to pick just one, I'd probably point to the Lung scRNA-seq project first for machine learning, then the Powerlifting ML Pipeline for end-to-end pipeline thinking.";
  }

  return entry.answers[0];
}

function buildResponse(matches, question) {
  if (!matches.length) {
    return "I can help with questions about Farah's background, experience, projects, technical skills, leadership, interests, and contact details. Try asking something like 'What kind of work is she interested in?' or 'Which project best shows ML skills?'";
  }

  const best = matches[0];
  const second = matches[1];

  if (!second || second.score < best.score - 2) {
    return pickAnswer(best.entry, question);
  }

  return `${pickAnswer(best.entry, question)} ${second.entry.answers[1] || second.entry.answers[0]}`;
}

function getBotResponse(question) {
  const matches = getTopMatches(question);
  lastMatchedTopics = matches.slice(0, 2).map((item) => item.entry.id);
  return buildResponse(matches, question);
}

function handleQuestion(question) {
  if (!question.trim()) {
    return;
  }

  addMessage(question, "user");

  window.setTimeout(() => {
    addMessage(getBotResponse(question), "bot");
  }, 220);
}

if (chatForm && chatInput && chatWindow) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = chatInput.value;
    handleQuestion(question);
    chatInput.value = "";
    chatInput.focus();
  });
}

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.textContent || "";
    handleQuestion(question);
  });
});
