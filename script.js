const knowledgeBase = [
  {
    match: ["study", "major", "education", "school", "berkeley"],
    answer:
      "Farah studies Data Science and Bioengineering at UC Berkeley and is expected to graduate in December 2026.",
  },
  {
    match: ["background", "about", "who is farah", "tell me about farah"],
    answer:
      "Farah is a UC Berkeley student focused on data science, bioengineering, and building transparent tools that support better decisions in healthcare, biotech, and sustainability.",
  },
  {
    match: ["experience", "work", "internship", "job"],
    answer:
      "Her recent experience includes a Data Internship at Marine Biologics, computational biology research in the Staller Lab at UC Berkeley, bioinformatics research at Lawrence Berkeley National Laboratory, and biomechanics research at the CARE Lab.",
  },
  {
    match: ["skills", "tech stack", "tools", "languages"],
    answer:
      "Farah works with Python, SQL, Postgres, Java, R, MATLAB, Bash, Scikit-learn, statsmodels, Streamlit, Supabase, BLAST, FoldSeek, Cytoscape, GitHub, and notebook-based data workflows.",
  },
  {
    match: ["career", "interests", "goals", "looking for"],
    answer:
      "Farah is especially interested in ethical AI, interpretable pipelines, biotech, healthcare applications, computational biology, and environmental sustainability. This portfolio is geared toward data science, AI, and ML internship opportunities plus networking.",
  },
  {
    match: ["machine learning", "ml project", "best project", "project fits", "ai project"],
    answer:
      "For machine learning and data science roles, the strongest featured projects are the Lung scRNA-seq Clustering project for unsupervised learning, the Powerlifting ML Pipeline for pipeline thinking, and the LBNL photosynthesis gene analysis project for scientific data interpretation.",
  },
  {
    match: ["lung", "scrna", "clustering", "single-cell"],
    answer:
      "Farah's lung scRNA-seq project used PCA, K-means clustering, differential expression analysis, and biological validation to identify meaningful lung cell populations from high-dimensional gene expression data.",
  },
  {
    match: ["marine biologics", "pipeline", "pdf", "ingestion"],
    answer:
      "At Marine Biologics, Farah built a scientific PDF-to-CSV ingestion workflow using open-source tools and LLM-assisted extraction, then created a web app for uploads and real-time data visualization.",
  },
  {
    match: ["ethical ai", "transparent", "interpretable"],
    answer:
      "A big theme in Farah's work is transparency. She cares about pipelines that help people understand how decisions are made, especially in higher-stakes spaces like healthcare, biotech, and science.",
  },
  {
    match: ["leadership", "mentor", "outreach", "tutor"],
    answer:
      "Farah has been a Data Science Tutor at UC Berkeley, an Executive Officer in the Calisthenics Club, and a leader in both the Bioengineering Honors Society and the Society of Women Engineers. Mentorship and outreach are a major part of her story.",
  },
  {
    match: ["hobbies", "outside", "fun", "interests outside"],
    answer:
      "Outside of technical work, Farah enjoys calisthenics, reading, mentorship, and volleyball.",
  },
  {
    match: ["contact", "email", "reach", "linkedin", "github"],
    answer:
      "You can reach Farah at ffcisse@berkeley.edu, connect on LinkedIn at linkedin.com/in/farah-cisse, or view her GitHub at github.com/ffcisse.",
  },
  {
    match: ["resume", "cv"],
    answer:
      "You can open Farah's resume directly from the Resume button in the hero section or the link in the Contact section.",
  },
];

const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const promptButtons = document.querySelectorAll(".prompt-chip");

function addMessage(content, sender) {
  const node = document.createElement("div");
  node.className = `message ${sender}`;
  node.textContent = content;
  chatWindow.appendChild(node);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(question) {
  const normalized = question.toLowerCase().trim();
  const matched = knowledgeBase.find((entry) =>
    entry.match.some((term) => normalized.includes(term))
  );

  if (matched) {
    return matched.answer;
  }

  return "I can help with questions about Farah's background, projects, technical skills, leadership, interests, and contact details. Try asking about machine learning projects, biotech work, or how to get in touch.";
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

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value;
  handleQuestion(question);
  chatInput.value = "";
  chatInput.focus();
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const question = button.textContent || "";
    handleQuestion(question);
  });
});
