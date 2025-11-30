// =======================================
// PAYROLL MANAGER SIMULATOR – GAME DATA
// =======================================

// Higher = better for all stats EXCEPT complianceRisk.
// complianceRisk: positive = bad, negative = safe.
const INITIAL_STATS = {
  teamMorale: 0,
  complianceRisk: 0,
  leadershipTrust: 0,
  accuracy: 0,
  timeliness: 0,
  relationships: 0,
};

// Colourful borders per archetype for the result image
const BORDER_COLORS = {
  "The Operator": "#2563EB",        // blue
  "The Enforcer": "#DC2626",        // red
  "The Protector": "#14B8A6",       // teal
  "The Politician": "#1E293B",      // navy
  "The Diplomat": "#8B5CF6",        // purple
  "The Data Detective": "#38BDF8",  // electric blue
};

// Scenario tag config
const TAG_CONFIG = {
  timeliness:   { emoji: "⏱️", label: "Timeliness",        cls: "scenario-tag-timeliness" },
  accuracy:     { emoji: "🔍", label: "Accuracy issue",    cls: "scenario-tag-accuracy" },
  compliance:   { emoji: "📉", label: "Compliance risk",   cls: "scenario-tag-compliance" },
  relationship: { emoji: "🤝", label: "Relationships",     cls: "scenario-tag-relationship" },
  crisis:       { emoji: "🔥", label: "Crisis",             cls: "scenario-tag-crisis" },
};

// Scenario data
const scenarios = [
  {
    id: 1,
    title: "The Cut-Off Collision",
    description:
      "It’s Monday morning. Three countries haven’t delivered time files, and cut-off is today. HR says: 'We’re working on it, just hold the run for now.' What do you do?",
    tags: ["timeliness", "relationship", "crisis"],
    choices: [
      {
        id: "A",
        label: "Escalate immediately to HR leadership.",
        outcome:
          "You escalate hard. HR leadership responds, files arrive just in time. Leadership likes the decisiveness, team less so.",
        effects: {
          timeliness: 2,
          relationships: -1,
          teamMorale: -1,
          leadershipTrust: 1,
          complianceRisk: -1,
          accuracy: 0,
        },
      },
      {
        id: "B",
        label: "Process what you have now; correct next month.",
        outcome:
          "You hit cut-off but errors are baked in. Finance flags the variances. You bought time but created pain later.",
        effects: {
          timeliness: 1,
          accuracy: -2,
          leadershipTrust: -1,
          complianceRisk: 2,
          relationships: 1,
          teamMorale: 0,
        },
      },
      {
        id: "C",
        label: "Rebuild files manually from partial data.",
        outcome:
          "You attempt a manual rebuild. It mostly works, but the team is exhausted and it's not sustainable.",
        effects: {
          timeliness: 0,
          accuracy: 1,
          teamMorale: -2,
          leadershipTrust: 1,
          complianceRisk: -1,
          relationships: 0,
        },
      },
    ],
  },
  {
    id: 2,
    title: "Retro Chain Reaction",
    description:
      "Variance reports show unexpected retros across six jurisdictions. Finance wants explanations 'by the hour'.",
    tags: ["accuracy", "compliance"],
    choices: [
      {
        id: "A",
        label: "Deep-dive into retros before proceeding.",
        outcome:
          "You find root causes but slow everything down. Finance is relieved; the team is stressed.",
        effects: {
          accuracy: 2,
          complianceRisk: -2,
          timeliness: -1,
          teamMorale: -1,
          leadershipTrust: 1,
          relationships: 1,
        },
      },
      {
        id: "B",
        label: "Give a high-level summary now; details later.",
        outcome:
          "You keep momentum while giving Finance just enough to calm down.",
        effects: {
          accuracy: 1,
          complianceRisk: -1,
          timeliness: 1,
          leadershipTrust: 1,
          relationships: 1,
          teamMorale: 0,
        },
      },
      {
        id: "C",
        label: "Focus on closing payroll; retros later.",
        outcome:
          "You protect the cycle, but Finance feels ignored and escalations build.",
        effects: {
          timeliness: 2,
          accuracy: 0,
          complianceRisk: 1,
          leadershipTrust: -1,
          relationships: -2,
          teamMorale: 1,
        },
      },
    ],
  },
  {
    id: 3,
    title: "The Surprise Global Bonus",
    description:
      "The CEO announces a surprise global bonus. HR wants it included this month; no upstream prep done.",
    tags: ["accuracy", "compliance", "crisis"],
    choices: [
      {
        id: "A",
        label: "Add it this cycle for all countries.",
        outcome:
          "Employees love it; reconciliation and tax questions explode.",
        effects: {
          accuracy: -2,
          complianceRisk: 2,
          leadershipTrust: 2,
          timeliness: 0,
          teamMorale: -1,
          relationships: 1,
        },
      },
      {
        id: "B",
        label: "Refuse; insist on off-cycle or next cycle.",
        outcome:
          "Process stays intact. CEO isn’t thrilled but compliance is happy.",
        effects: {
          accuracy: 2,
          complianceRisk: -2,
          timeliness: 1,
          leadershipTrust: -1,
          teamMorale: 1,
          relationships: -1,
        },
      },
      {
        id: "C",
        label: "Prioritise a subset of key countries first.",
        outcome:
          "A balanced compromise. More complex but politically safe.",
        effects: {
          accuracy: 0,
          complianceRisk: 0,
          timeliness: 0,
          leadershipTrust: 1,
          relationships: 1,
          teamMorale: 0,
        },
      },
    ],
  },
  {
    id: 4,
    title: "Integration Chaos",
    description:
      "Your HCM → Payroll integration exported blank fields. Half the import is missing key values.",
    tags: ["accuracy", "compliance", "crisis"],
    choices: [
      {
        id: "A",
        label: "Freeze payroll until upstream fixes the issue.",
        outcome:
          "You refuse to build on bad data. Slow but safe.",
        effects: {
          accuracy: 2,
          complianceRisk: -2,
          timeliness: -2,
          leadershipTrust: 1,
          relationships: -1,
          teamMorale: 0,
        },
      },
      {
        id: "B",
        label: "Manually patch critical fields.",
        outcome:
          "Cycle continues but the team is buried. Risk accepted.",
        effects: {
          accuracy: -1,
          complianceRisk: 1,
          timeliness: 1,
          teamMorale: -2,
          leadershipTrust: 0,
          relationships: 1,
        },
      },
      {
        id: "C",
        label: "Rollback to last clean snapshot.",
        outcome:
          "You lose time but regain stability. Future cycles are safer.",
        effects: {
          accuracy: 1,
          complianceRisk: -1,
          timeliness: -1,
          teamMorale: -1,
          leadershipTrust: 1,
          relationships: 0,
        },
      },
    ],
  },
  {
    id: 5,
    title: "In-Country Provider Revolt",
    description:
      "Your LATAM in-country provider rejects the file and refuses to process it.",
    tags: ["relationship", "compliance"],
    choices: [
      {
        id: "A",
        label: "Negotiate a one-time exception.",
        outcome:
          "You get the run through this time and agree on improvements. Relationship preserved, expectations rise.",
        effects: {
          relationships: 2,
          complianceRisk: -1,
          timeliness: 1,
          leadershipTrust: 1,
          teamMorale: -1,
          accuracy: 0,
        },
      },
      {
        id: "B",
        label: "Fix only the bare minimum.",
        outcome:
          "Payroll runs, but you’re uneasy about hidden risk.",
        effects: {
          timeliness: 2,
          accuracy: -1,
          complianceRisk: 2,
          leadershipTrust: -1,
          relationships: 0,
          teamMorale: 0,
        },
      },
      {
        id: "C",
        label: "Escalate using the contract and enforce the SLA.",
        outcome:
          "Provider complies but relationship cools.",
        effects: {
          relationships: -2,
          complianceRisk: -1,
          leadershipTrust: 1,
          timeliness: 0,
          accuracy: 1,
          teamMorale: 1,
        },
      },
    ],
  },
  {
    id: 6,
    title: "The Public Complaint",
    description:
      "An employee tags the company on social media: 'I haven’t been paid correctly for months and payroll is ignoring me.'",
    tags: ["relationship", "crisis"],
    choices: [
      {
        id: "A",
        label: "Respond publicly and move it to private channels.",
        outcome:
          "You show visibility and empathy, then handle details privately. Good optics, controlled risk.",
        effects: {
          relationships: 1,
          leadershipTrust: 1,
          complianceRisk: 0,
          accuracy: 0,
          teamMorale: 0,
          timeliness: 0,
        },
      },
      {
        id: "B",
        label: "Investigate quietly, respond after confirmation.",
        outcome:
          "You prioritise facts over speed. The complaint sits a bit longer, but your response is strong and evidence-based.",
        effects: {
          accuracy: 1,
          complianceRisk: -1,
          leadershipTrust: 1,
          relationships: 0,
          teamMorale: 0,
          timeliness: 0,
        },
      },
      {
        id: "C",
        label: "Hand it to Employee Relations.",
        outcome:
          "You avoid comms risk, but payroll looks distant from employees.",
        effects: {
          relationships: -1,
          leadershipTrust: 0,
          complianceRisk: 0,
          accuracy: 0,
          teamMorale: 1,
          timeliness: 0,
        },
      },
    ],
  },
  {
    id: 7,
    title: "The GL Black Hole",
    description:
      "Finance flags a major GL mismatch and says payroll keeps 'getting it wrong'. They want a multi-country audit.",
    tags: ["accuracy", "compliance", "relationship"],
    choices: [
      {
        id: "A",
        label: "Create a cross-functional task force.",
        outcome:
          "Deep fix, slow cycle. You uncover structural issues, not just one-offs.",
        effects: {
          accuracy: 2,
          complianceRisk: -2,
          relationships: 2,
          leadershipTrust: 1,
          teamMorale: -1,
          timeliness: -1,
        },
      },
      {
        id: "B",
        label: "Provide a narrative and defer the deep dive.",
        outcome:
          "You calm Finance with a story but don’t fix root causes.",
        effects: {
          accuracy: 0,
          complianceRisk: 1,
          relationships: 1,
          leadershipTrust: 0,
          teamMorale: 0,
          timeliness: 1,
        },
      },
      {
        id: "C",
        label: "Emphasise it’s upstream data and push them to fix that.",
        outcome:
          "Some appreciate the clarity; others see it as blame-shifting.",
        effects: {
          relationships: -1,
          leadershipTrust: -1,
          accuracy: 1,
          complianceRisk: 0,
          teamMorale: 1,
          timeliness: 0,
        },
      },
    ],
  },
  {
    id: 8,
    title: "The Filing Deadline Duel",
    description:
      "Two high-impact statutory filings are due today. You only have capacity to get one right on time without overtime.",
    tags: ["timeliness", "compliance"],
    choices: [
      {
        id: "A",
        label: "File the one with the biggest financial exposure.",
        outcome:
          "You reduce financial risk first. Regulators in the other country aren’t thrilled by the delay.",
        effects: {
          complianceRisk: -1,
          accuracy: 1,
          timeliness: 0,
          leadershipTrust: 1,
          teamMorale: -1,
          relationships: 0,
        },
      },
      {
        id: "B",
        label: "File the highest regulatory-risk jurisdiction first.",
        outcome:
          "Legal is relieved; Finance grumbles about exposure in the other country.",
        effects: {
          complianceRisk: -2,
          accuracy: 0,
          timeliness: 0,
          leadershipTrust: 1,
          relationships: -1,
          teamMorale: -1,
        },
      },
      {
        id: "C",
        label: "Split the team and try to do both.",
        outcome:
          "You technically hit both deadlines, but quality and morale take a hit.",
        effects: {
          complianceRisk: 1,
          accuracy: -1,
          timeliness: 1,
          teamMorale: -2,
          leadershipTrust: 0,
          relationships: 0,
        },
      },
    ],
  },
  {
    id: 9,
    title: "The Leadership Review",
    description:
      "It’s time for your quarterly business review. You have strong wins but also visible misses this cycle.",
    tags: ["leadership", "relationship"],
    choices: [
      {
        id: "A",
        label: "Frame issues as systemic and argue for investment.",
        outcome:
          "You position payroll as under-resourced, not under-performing. Leadership appreciates the honesty.",
        effects: {
          leadershipTrust: 2,
          relationships: 1,
          complianceRisk: -1,
          teamMorale: 1,
          timeliness: 0,
          accuracy: 0,
        },
      },
      {
        id: "B",
        label: "Highlight wins heavily and soften the misses.",
        outcome:
          "Short-term, it lands well, but trust only grows slowly among those who know the gaps.",
        effects: {
          leadershipTrust: 0,
          relationships: 1,
          teamMorale: 0,
          accuracy: 0,
          complianceRisk: 0,
          timeliness: 0,
        },
      },
      {
        id: "C",
        label: "Be brutally transparent.",
        outcome:
          "High-integrity move. Some leaders are impressed; others worry you’re not fully in control.",
        effects: {
          leadershipTrust: 1,
          relationships: 0,
          complianceRisk: -1,
          teamMorale: -1,
          timeliness: 0,
          accuracy: 1,
        },
      },
    ],
  },
  {
    id: 10,
    title: "The End-of-Cycle Collapse",
    description:
      "Hours before global approval, you detect missing cost centres, FX variances, and retro loops in several countries.",
    tags: ["accuracy", "compliance", "timeliness", "crisis"],
    choices: [
      {
        id: "A",
        label: "Delay global approval and fix everything properly.",
        outcome:
          "Stressful delay, but you avoid shipping broken results and set a clear quality standard.",
        effects: {
          accuracy: 3,
          complianceRisk: -3,
          timeliness: -2,
          leadershipTrust: 1,
          teamMorale: -1,
          relationships: 0,
        },
      },
      {
        id: "B",
        label: "Approve as-is, patch next cycle.",
        outcome:
          "No missed payday, but you’re effectively shipping known defects.",
        effects: {
          accuracy: -3,
          complianceRisk: 3,
          timeliness: 2,
          leadershipTrust: -2,
          teamMorale: 0,
          relationships: 1,
        },
      },
      {
        id: "C",
        label: "Approve stable countries, isolate the problem ones.",
        outcome:
          "Most employees are paid on time while a few countries take the hit. Pragmatic containment.",
        effects: {
          accuracy: 1,
          complianceRisk: -1,
          timeliness: 0,
          leadershipTrust: 1,
          teamMorale: 0,
          relationships: 1,
        },
      },
    ],
  },
];

// =======================================
// GAME ENGINE
// =======================================

let currentStats = { ...INITIAL_STATS };
let currentScenarioIndex = 0;
let hasChosenInScenario = false;
let latestArchetype = null;
let generatedImageDataUrl = null;
let answerChoices = []; // stores "A"/"B"/"C" for each scenario

// DOM elements
const scenarioSection = document.getElementById("scenario-section");
const resultSection = document.getElementById("result-section");
const scenarioTitleEl = document.getElementById("scenario-title");
const scenarioDescriptionEl = document.getElementById("scenario-description");
const scenarioTagsEl = document.getElementById("scenario-tags");
const choicesContainerEl = document.getElementById("choices-container");
const outcomeEl = document.getElementById("outcome");
const nextButtonEl = document.getElementById("next-button");
const resultTitleEl = document.getElementById("result-title");
const progressLabelEl = document.getElementById("progress-label");
const progressFillEl = document.getElementById("progress-fill");
const downloadImageButtonEl = document.getElementById("download-image-button");
const shareStatusEl = document.getElementById("share-status");
const resultImageEl = document.getElementById("result-image");
const personalisedSummaryEl = document.getElementById("personalised-summary");
const archetypeDescriptionEl = document.querySelector(".result-archetype-description");
const copyShareButtonEl = document.getElementById("copy-share-button");
const shareTextPreviewEl = document.getElementById("share-text-preview");

// Intro / start
const introSection = document.getElementById("intro-section");
const startButton = document.getElementById("start-button");

// Share / copy (we support either id)
const copyTextButtonEl =
  document.getElementById("copy-text-button") ||
  document.getElementById("copy-link-button");

function applyEffects(effects) {
  for (const key in effects) {
    if (Object.prototype.hasOwnProperty.call(currentStats, key)) {
      currentStats[key] += effects[key];
    }
  }
}

function renderScenarioTags(scenario) {
  if (!scenarioTagsEl) return;
  scenarioTagsEl.innerHTML = "";

  if (!scenario.tags || !scenario.tags.length) return;

  const wrapper = document.createElement("div");
  wrapper.className = "scenario-tags";

  scenario.tags.forEach((tagKey) => {
    const cfg = TAG_CONFIG[tagKey];
    if (!cfg) return;
    const span = document.createElement("span");
    span.className = `scenario-tag ${cfg.cls}`;
    span.textContent = `${cfg.emoji} ${cfg.label}`;
    wrapper.appendChild(span);
  });

  scenarioTagsEl.appendChild(wrapper);
}

function renderScenario() {
  const scenario = scenarios[currentScenarioIndex];

  if (!scenario) {
    renderResult();
    return;
  }

  if (progressLabelEl && progressFillEl) {
    const currentNum = scenario.id;
    const total = scenarios.length;
    progressLabelEl.textContent = `Scenario ${currentNum} of ${total}`;
    const percent = ((currentNum - 1) / total) * 100;
    progressFillEl.style.width = `${percent}%`;
  }

  scenarioTitleEl.textContent = `Scenario ${scenario.id}: ${scenario.title}`;
  scenarioDescriptionEl.textContent = scenario.description;
  renderScenarioTags(scenario);

  choicesContainerEl.innerHTML = "";
  outcomeEl.textContent = "";
  outcomeEl.classList.add("hidden");
  nextButtonEl.classList.add("hidden");
  hasChosenInScenario = false;

  scenario.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = `${choice.id}. ${choice.label}`;
    btn.addEventListener("click", () => handleChoiceClick(choice));
    choicesContainerEl.appendChild(btn);
  });
}

function handleChoiceClick(choice) {
  if (hasChosenInScenario) return;
  hasChosenInScenario = true;

  // record which option was chosen for this scenario (A/B/C)
  answerChoices[currentScenarioIndex] = choice.id;

  const buttons = choicesContainerEl.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.add("disabled"));

  applyEffects(choice.effects);

  outcomeEl.textContent = choice.outcome;
  outcomeEl.classList.remove("hidden");

  nextButtonEl.classList.remove("hidden");
}

function handleNextScenario() {
  currentScenarioIndex += 1;

  if (currentScenarioIndex >= scenarios.length) {
    renderResult();
  } else {
    renderScenario();
  }
}

if (nextButtonEl) {
  nextButtonEl.addEventListener("click", handleNextScenario);
}

// =======================================
// RESULT / ARCHETYPE LOGIC
// =======================================

function determineArchetype(stats) {
  const safeCompliance = -stats.complianceRisk;

  const dimensions = [
    { key: "accuracy", value: stats.accuracy },
    { key: "safeCompliance", value: safeCompliance },
    { key: "teamMorale", value: stats.teamMorale },
    { key: "leadershipTrust", value: stats.leadershipTrust },
    { key: "timeliness", value: stats.timeliness },
    { key: "relationships", value: stats.relationships },
  ];

  const dominant = dimensions.reduce((best, current) =>
    current.value > best.value ? current : best
  );

  let title = "Balanced Operator";
  let description =
    "You balance accuracy, risk, relationships, and deadlines. No single dimension dominates your style.";

  switch (dominant.key) {
    case "accuracy":
      title = "The Data Detective";
      description =
        "You care deeply about correctness and root-cause analysis. You’re the one who actually knows why the numbers are what they are.";
      break;
    case "safeCompliance":
      title = "The Enforcer";
      description =
        "Compliance is non-negotiable. You protect the company from regulatory risk, even if it means saying no to pressure.";
      break;
    case "teamMorale":
      title = "The Protector";
      description =
        "You shield your team from chaos and burnout. You know that sustainable delivery depends on people, not heroics.";
      break;
    case "leadershipTrust":
      title = "The Politician";
      description =
        "You manage upwards effectively, building trust and influence at senior levels to get payroll what it needs.";
      break;
    case "timeliness":
      title = "The Operator";
      description =
        "You see payroll as a non-negotiable service. Hitting cut-offs, approvals, and pay days is your north star, and you organise everything around that rhythm.";
      break;
    case "relationships":
      title = "The Diplomat";
      description =
        "You invest heavily in cross-functional relationships. HR, Finance, and providers see you as a partner, not a blocker.";
      break;
  }

  return { title, description, dominantDimension: dominant };
}

// score bands (used in table and text)
function scoreToBandLabel(value) {
  const v = Math.max(-10, Math.min(10, value));
  if (v <= -4) return "Needs focus";
  if (v <= -1) return "Emerging";
  if (v <= 2)  return "Balanced";
  if (v <= 5)  return "Strong";
  return "Signature strength";
}

// personalised summary based on top 2 stats
function buildPersonalisedSummary(stats) {
  const safeCompliance = -stats.complianceRisk;

  const dims = [
    { key: "accuracy",        label: "Accuracy",        value: stats.accuracy },
    { key: "timeliness",      label: "Timeliness",      value: stats.timeliness },
    { key: "teamMorale",      label: "Team Morale",     value: stats.teamMorale },
    { key: "relationships",   label: "Relationships",   value: stats.relationships },
    { key: "leadershipTrust", label: "Leadership Trust", value: stats.leadershipTrust },
    { key: "complianceFocus", label: "Compliance Focus", value: safeCompliance },
  ];

  dims.sort((a, b) => b.value - a.value);

  const primary = dims[0];
  const secondary = dims[1];

  const phrases = {
    accuracy:
      "You lean heavily into getting the numbers right and understanding the ‘why’ behind every variance.",
    timeliness:
      "You anchor around hitting cut-offs and keeping the payroll cycle moving on time.",
    teamMorale:
      "You pay close attention to how the team is coping and try to protect people from burnout.",
    relationships:
      "You invest in relationships with HR, Finance, and providers to keep the ecosystem working smoothly.",
    leadershipTrust:
      "You focus on keeping senior stakeholders aligned and confident in payroll.",
    complianceFocus:
      "You keep your eye on regulatory and statutory risk, preferring to be safe rather than sorry.",
  };

  function phraseFor(dim) {
    if (!dim) return "";
    if (dim.key === "complianceFocus") return phrases.complianceFocus;
    return phrases[dim.key] || "";
  }

  const primaryText = phraseFor(primary);
  const secondaryText = phraseFor(secondary);
  if (!primaryText) return "";

  if (!secondaryText) {
    return `You lead with ${primary.label.toLowerCase()}. ${primaryText}`;
  }

  return `You lead with ${primary.label.toLowerCase()} and ${secondary.label.toLowerCase()}, combining these in most of your decisions. ${primaryText} ${secondaryText}`;
}

// =======================================
// FIREBASE AGGREGATE LOGGING
// =======================================

function updateAggregateStats() {
  if (!latestArchetype) return;

  const statsDoc = db.collection("stats").doc("global");

  const updates = {
    totalGames: increment(1),
  };

  const archKey = `archetype_${latestArchetype.title.replace(/\s+/g, "")}`;
  updates[archKey] = increment(1);

  answerChoices.forEach((ans, idx) => {
    if (!ans) return;
    const scenarioNumber = idx + 1;
    const field = `scenario${scenarioNumber}_${ans}`;
    updates[field] = increment(1);
  });

  statsDoc.set(updates, { merge: true }).catch((err) => {
    console.error("Failed to update aggregate stats:", err);
  });
}

// =======================================
// RESULT RENDER / IMAGE
// =======================================

function renderResult() {
  scenarioSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  if (progressLabelEl && progressFillEl) {
    progressLabelEl.textContent = "Game complete";
    progressFillEl.style.width = "100%";
  }

  latestArchetype = determineArchetype(currentStats);
  resultTitleEl.textContent = latestArchetype.title;

    // Update share text preview
  if (shareTextPreviewEl) {
    shareTextPreviewEl.textContent = buildShareText();
  }
  
  if (archetypeDescriptionEl) {
    archetypeDescriptionEl.textContent = latestArchetype.description;
  }

  const personalised = buildPersonalisedSummary(currentStats);
  if (personalisedSummaryEl) {
    personalisedSummaryEl.textContent = personalised;
  }

  if (shareStatusEl) {
    shareStatusEl.textContent = "";
  }

  updateAggregateStats();

  if (document.fonts && document.fonts.load) {
    document.fonts
      .load("900 56px 'Inter'")
      .then(generateResultImage)
      .catch(generateResultImage);
  } else {
    generateResultImage();
  }
}

// =======================================
// CANVAS TEXT / RADAR HELPERS
// =======================================

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let currY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currY);
      line = words[n] + " ";
      currY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currY);
    currY += lineHeight;
  }
  return currY;
}

function normalise(value, min, max) {
  const clamped = Math.max(min, Math.min(max, value));
  return (clamped - min) / (max - min);
}

function drawRadarChart(ctx, centerX, centerY, radius, values, labels, color) {
  const axes = values.length;
  const angleStep = (Math.PI * 2) / axes;

  ctx.save();
  ctx.strokeStyle = "#1F2937";
  ctx.lineWidth = 1;

  for (let i = 1; i <= 3; i++) {
    ctx.beginPath();
    const r = (radius / 3) * i;
    for (let a = 0; a <= axes; a++) {
      const angle = a * angleStep - Math.PI / 2;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (a === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  ctx.strokeStyle = "#374151";
  ctx.lineWidth = 1;
  ctx.font = "14px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#E5E7EB";

  for (let i = 0; i < axes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    const labelRadius = radius + 14;
    const lx = centerX + Math.cos(angle) * labelRadius;
    const ly = centerY + Math.sin(angle) * labelRadius;

    const label = labels[i];
    const textWidth = ctx.measureText(label).width;
    ctx.fillText(label, lx - textWidth / 2, ly - 7);
  }

  ctx.beginPath();
  for (let i = 0; i < axes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const v = values[i];
    const r = radius * v;
    const x = centerX + Math.cos(angle) * r;
    const y = centerY + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  ctx.fillStyle = `${color}33`;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

// =======================================
// RESULT IMAGE GENERATION (WITH SUMMARY)
// =======================================

function generateResultImage() {
  if (!latestArchetype) return;

  const width = 1200;
  const height = 628;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const borderColor =
    BORDER_COLORS[latestArchetype.title] || BORDER_COLORS["The Operator"];

  // Outer coloured border
  ctx.fillStyle = borderColor;
  ctx.fillRect(0, 0, width, height);

  // White frame
  const frameMargin = 28;
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(
    frameMargin,
    frameMargin,
    width - frameMargin * 2,
    height - frameMargin * 2
  );

  // Inner dark card
  const cardMargin = frameMargin + 8;
  ctx.fillStyle = "#020617";
  ctx.fillRect(
    cardMargin,
    cardMargin,
    width - cardMargin * 2,
    height - cardMargin * 2
  );

  const innerLeft = cardMargin + 40;
  const innerRight = width - cardMargin - 40;
  const innerTop = cardMargin + 24;
  const innerBottom = height - cardMargin - 40;
  const contentWidth = innerRight - innerLeft;

  // ===== TITLE =====
  const title = latestArchetype.title.toUpperCase();
  ctx.textBaseline = "top";
  ctx.lineJoin = "round";

  ctx.font = "900 56px 'Inter', system-ui, sans-serif";
  const titleWidth = ctx.measureText(title).width;
  const titleX = innerLeft + (contentWidth - titleWidth) / 2;
  const titleY = innerTop;

  ctx.lineWidth = 6;
  ctx.strokeStyle = "#020617";
  ctx.strokeText(title, titleX, titleY);

  ctx.fillStyle = "#F9FAFB";
  ctx.fillText(title, titleX, titleY);

  // ===== DESCRIPTION + PERSONALISED SUMMARY =====
  ctx.font = "20px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#E5E7EB";

  const descX = innerLeft;
  const descY = titleY + 70;
  const descWidth = contentWidth;

  let nextY = drawWrappedText(
    ctx,
    latestArchetype.description,
    descX,
    descY,
    descWidth,
    28
  );

  const summaryText = buildPersonalisedSummary(currentStats);
  if (summaryText) {
    nextY += 6;
    ctx.fillStyle = "#9CA3AF";
    ctx.font = "18px 'Inter', system-ui, sans-serif";
    nextY = drawWrappedText(
      ctx,
      summaryText,
      descX,
      nextY,
      descWidth,
      24
    );
  }

  // Gap before radar / tendencies block
  nextY += 30;

  // ===== RADAR + KEY TENDENCIES (TEXT, NO TABLE) =====
  const blockTop = nextY;
  const blockBottom = innerBottom - 60; // leave room for footer
  const blockHeight = blockBottom - blockTop;

  const layoutCenterX = innerLeft + contentWidth / 2;

  // Radar positioned to the left of centre
  const radarRadius = 125;
  const radarCenterY = blockTop + blockHeight / 2;
  const radarCenterX = layoutCenterX - 220;

  const safeCompliance = -currentStats.complianceRisk;
  const rawValues = [
    currentStats.accuracy,
    currentStats.timeliness,
    currentStats.teamMorale,
    currentStats.relationships,
    currentStats.leadershipTrust,
    safeCompliance,
  ];
  const labels = ["ACC", "TIME", "MORALE", "REL", "LEAD", "COMP"];
  const values = rawValues.map((v) => normalise(v, -10, 10));

  drawRadarChart(
    ctx,
    radarCenterX,
    radarCenterY,
    radarRadius,
    values,
    labels,
    borderColor
  );

  // Key tendencies text block to the right, more central
  const statsX = layoutCenterX + 20;
  let statsY = blockTop + 10;

  ctx.font = "22px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#F9FAFB";
  ctx.fillText("Key tendencies", statsX, statsY);
  statsY += 34;

  ctx.font = "18px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#E5E7EB";

  const statDescriptors = [
    { label: "Accuracy", score: currentStats.accuracy },
    { label: "Timeliness", score: currentStats.timeliness },
    { label: "Team Morale", score: currentStats.teamMorale },
    { label: "Relationships", score: currentStats.relationships },
    { label: "Leadership Trust", score: currentStats.leadershipTrust },
    { label: "Compliance Focus", score: safeCompliance },
  ];

  statDescriptors.forEach((s) => {
    const band = scoreToBandLabel(s.score);
    const line = `${s.label}: ${band}`;
    ctx.fillText(line, statsX, statsY);
    statsY += 24;
  });

  // ===== CENTRED BRANDED FOOTER (ONE LINE) =====
  const footerY = innerBottom - 18;

  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(innerLeft, footerY);
  ctx.lineTo(innerRight, footerY);
  ctx.stroke();

  const footerText = "Payroll Manager Simulator • payrollmanagersim.com";
  ctx.font = "16px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#E5E7EB";

  const footerWidth = ctx.measureText(footerText).width;
  const footerX = innerLeft + (contentWidth - footerWidth) / 2;
  ctx.fillText(footerText, footerX, footerY + 26);

  generatedImageDataUrl = canvas.toDataURL("image/png");

  if (resultImageEl) {
    resultImageEl.src = generatedImageDataUrl;
    resultImageEl.classList.remove("hidden");
  }
}

// =======================================
// DOWNLOAD & SHARE HANDLERS
// =======================================

function handleDownloadImageClick() {
  if (!generatedImageDataUrl) {
    generateResultImage();
  }
  if (!generatedImageDataUrl) return;

  const link = document.createElement("a");
  link.download = `payroll-manager-${latestArchetype.title
    .replace(/\s+/g, "-")
    .toLowerCase()}.png`;
  link.href = generatedImageDataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  if (shareStatusEl) {
    shareStatusEl.textContent =
      "Image downloaded. Attach it to your LinkedIn post along with the text below.";
  }
}

if (downloadImageButtonEl) {
  downloadImageButtonEl.addEventListener("click", handleDownloadImageClick);
}

// Canonical URL (no hash etc)
function getCanonicalGameUrl() {
  return window.location.href.split("#")[0];
}

// Build the share text shown + copied
function buildShareText() {
  if (!latestArchetype) return "";

  const url = getCanonicalGameUrl();

  return (
    `I just played the Payroll Manager Simulator and came out as "${latestArchetype.title}".\n` +
    `It’s a 10-scenario game about how you run global payroll under pressure.\n\n` +
    `Play it here: ${url}\n` +
    `#PayrollManagerSimulator`
  );
}

async function handleCopyShareTextClick() {
  const text = buildShareText();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    if (shareStatusEl) {
      shareStatusEl.textContent = "Result text copied. Paste it into your LinkedIn post.";
    }
  } catch (err) {
    if (shareStatusEl) {
      shareStatusEl.textContent =
        "Couldn’t copy automatically – please select and copy the text manually.";
    }
  }
}

if (copyShareButtonEl) {
  copyShareButtonEl.addEventListener("click", handleCopyShareTextClick);
}


// =======================================
// INTRO START BUTTON HANDLER
// =======================================

if (startButton) {
  startButton.addEventListener("click", () => {
    if (introSection) {
      introSection.classList.add("hidden");
    }
    scenarioSection.classList.remove("hidden");
    currentStats = { ...INITIAL_STATS };
    currentScenarioIndex = 0;
    answerChoices = [];
    renderScenario();
  });
}

// =====================
// FIREBASE INIT
// =====================

const firebaseConfig = {
  apiKey: "AIzaSyXWxr4arF2lVN9K2k_PRkP4Q9zEZylra0",
  authDomain: "payrollmanagersim.firebaseapp.com",
  projectId: "payrollmanagersim",
  storageBucket: "payrollmanagersim.appspot.com",
  messagingSenderId: "292697378420",
  appId: "1:292697378420:web:4b91bf27593b5d39165821",
  measurementId: "G-MX0N4WLCM5",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const increment = firebase.firestore.FieldValue.increment;
