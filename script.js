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
    answer:
      "Farah studies Data Science and Bioengineering at UC Berkeley and is expected to graduate in December 2026. Her coursework includes machine learning, data science, data analytics, probability and statistics, computational molecular and cell biology, computational functional genomics, and data structures and algorithms.",
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
    answer:
      "Farah is a UC Berkeley student in Data Science and Bioengineering who enjoys taking messy, unclear problems and building tools people can actually use. She cares about real scientific impact, interpretable and transparent systems, and making technical spaces more inclusive for underrepresented communities.",
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
    answer:
      "Farah's recent experience includes being a Data Intern at Marine Biologics, a Computational Biology Researcher in the Staller Lab at UC Berkeley, a Bioinformatics Researcher at Lawrence Berkeley National Laboratory, and a Biomechanics Researcher at the CARE Lab at San Francisco State.",
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
    answer:
      "At Marine Biologics, Farah built a data ingestion workflow that converted tables and methods in scientific PDFs into structured CSV data using open-source tooling, automation, and LLM-assisted extraction for downstream machine learning work. She also launched a web app version of the pipeline for easier PDF upload and real-time visualization.",
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
    answer:
      "Farah works with Python, SQL, Java, R, MATLAB, Bash, Scikit-learn, statsmodels, Streamlit, Supabase, GitHub, Jupyter Notebook, VS Code, IntelliJ, RStudio, and bioinformatics tools like BLAST, FoldSeek, Cytoscape, AlphaFold, JBrowse, and Chimera.",
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
    answer:
      "Farah is especially interested in building interpretable and transparent AI or ML-integrated pipelines, especially for healthcare, biotechnology, biological research, and environmental sustainability. She also cares deeply about mentorship and supporting underrepresented communities in STEM.",
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
    answer:
      "The strongest projects for AI, ML, and data science roles are Farah's Lung scRNA-seq Clustering project, her Powerlifting ML Pipeline, and her Photosynthesis Gene Function Discovery project. Each one highlights a different strength: machine learning analysis, pipeline building, and scientific data interpretation.",
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
    answer:
      "Farah's Powerlifting ML Pipeline is a current project focused on using user-inputted and online powerlifting data to build a machine learning pipeline that helps support training decisions like when to deload, when to test a max, and how to adjust a program. The long-term goal is to turn the backend pipeline into an app for athletes.",
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
    answer:
      "Farah's Lung scRNA-seq Clustering project used PCA, K-means clustering, differential expression analysis, and biological validation to identify meaningful cell populations in a lung single-cell RNA sequencing dataset. It is one of her clearest machine learning-focused projects.",
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
    answer:
      "In the Photosynthesis Gene Function Discovery project, Farah integrated graph network analysis, structural similarity, and protein annotation workflows to investigate unknown gene functions in Chlamydomonas reinhardtii. It highlights her bioinformatics, Bash, HPC, FoldSeek, BLAST, Cytoscape, and Chimera experience.",
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
    answer:
      "A big theme in Farah's work is transparency. She is especially interested in interpretable pipelines that help people understand how decisions are being made, particularly in high-stakes areas like healthcare, biotech, and scientific analysis.",
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
    answer:
      "Farah has served as an Executive Officer in the UC Berkeley Calisthenics Club, a Data Science Tutor at UC Berkeley, a leader in the Bioengineering Honors Society, and an outreach leader in the Society of Women Engineers. Mentorship and community-building are an important part of her story.",
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
    answer:
      "Outside of technical work, Farah enjoys calisthenics, reading, mentorship, volleyball, and caring for plants.",
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
    answer:
      "You can reach Farah at ffcisse@berkeley.edu, connect on LinkedIn at linkedin.com/in/farah-cisse, view her GitHub at github.com/ffcisse, or open her resume from the Resume button on the page.",
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

function scoreEntry(entry, normalizedQuestion, tokens) {
  let score = 0;

  entry.keywords.forEach((keyword) => {
    const normalizedKeyword = normalizeText(keyword);
    const keywordParts = normalizedKeyword.split(" ");

    if (normalizedQuestion.includes(normalizedKeyword)) {
      score += keywordParts.length > 1 ? 5 : 3;
    }

    const overlap = keywordParts.filter((part) => tokens.includes(part)).length;
    if (overlap > 0) {
      score += overlap * 2;
    }
  });

  if (lastMatchedTopics.includes(entry.id)) {
    score += 1;
  }

  return score;
}

function getTopMatches(question) {
  const normalizedQuestion = normalizeText(question);
  const tokens = tokenize(question);

  return knowledgeBase
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, normalizedQuestion, tokens),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function buildResponse(matches) {
  if (!matches.length) {
    return "I can help with questions about Farah's background, experience, projects, technical skills, leadership, interests, and contact details. Try asking something like 'What experience does Farah have?', 'Which project best shows ML skills?', or 'How can I contact Farah?'";
  }

  const best = matches[0];
  const second = matches[1];

  if (!second || second.score < best.score - 2) {
    return best.entry.answer;
  }

  return `${best.entry.answer} ${second.entry.answer}`;
}

function getBotResponse(question) {
  const matches = getTopMatches(question);
  lastMatchedTopics = matches.slice(0, 2).map((item) => item.entry.id);
  return buildResponse(matches);
}

function handleQuestion(question) {
  if (!question.trim()) {
    return;
  }

  addMessage(question, "user");

  window.setTimeout(() => {
    addMessage(getBotResponse(question), "bot");
  }, 250);
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
