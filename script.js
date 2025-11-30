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

// Small tag text helpers (for consistency)
const TAGS = {
  TIMELINESS: "⏱️ Timeliness pressure",
  ACCURACY: "🔍 Accuracy issue",
  RELATIONSHIPS: "🤝 Relationship tension",
  COMPLIANCE: "📉 Compliance risk",
  CRISIS: "🔥 Crisis",
};

// Scenario data
const scenarios = [
  {
    id: 1,
    title: "The Cut-Off Collision",
    description:
      "It’s Monday morning. Three countries haven’t delivered time files, and cut-off is today. HR says: 'We’re working on it, just hold the run for now.' What do you do?",
    tags: [TAGS.TIMELINESS, TAGS.RELATIONSHIPS, TAGS.CRISIS],
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
    tags: [TAGS.ACCURACY, TAGS.COMPLIANCE],
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
    tags: [TAGS.CRISIS, TAGS.COMPLIANCE, TAGS.RELATIONSHIPS],
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
    tags: [TAGS.ACCURACY, TAGS.COMPLIANCE, TAGS.CRISIS],
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
    tags: [TAGS.RELATIONSHIPS, TAGS.COMPLIANCE],
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
    tags: [TAGS.RELATIONSHIPS, TAGS.ACCURACY, TAGS.CRISIS],
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
    tags: [TAGS.ACCURACY, TAGS.RELATIONSHIPS, TAGS.COMPLIANCE],
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
    tags: [TAGS.TIMELINESS, TAGS.COMPLIANCE],
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
    tags: [TAGS.RELATIONSHIPS, TAGS.CRISIS],
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
    tags: [TAGS.CRISIS, TAGS.ACCURACY, TAGS.COMPLIANCE, TAGS.TIMELINESS],
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
const resultDescriptionEl = document.getElementById("result-description");
const resultSummaryEl = document.getElementById("result-summary");
const progressLabelEl = document.getElementById("progress-label");
const progressFillEl = document.getElementById("progress-fill");
const downloadImageButtonEl = document.getElementById("download-image-button");
const shareStatusEl = document.getElementById("share-status");
const resultImageEl = document.getElementById("result-image");

// Intro / start
const introSection = document.getElementById("intro-section");
const startButton = document.getElementById("start-button");

// Share copy button
const copyResultButtonEl = document.getElementById("copy-result-button");

function applyEffects(effects) {
  for (const key in effects) {
    if (Object.prototype.hasOwnProperty.call(currentStats, key)) {
      currentStats[key] += effects[key];
    }
  }
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

  // Scenario tags / icons
  if (scenarioTagsEl) {
    scenarioTagsEl.innerHTML = "";
    if (scenario.tags && scenario.tags.length) {
      scenario.tags.forEach((tagText) => {
        const tag = document.createElement("span");
        tag.className = "scenario-tag";
        tag.textContent = tagText;
        scenarioTagsEl.appendChild(tag);
      });
    }
  }

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

// small fade between scenarios
const SCENARIO_FADE_MS = 200;

function handleNextScenario() {
  // add fade-out class
  if (scenarioSection) {
    scenarioSection.classList.add("fade-out");
  }

  setTimeout(() => {
    currentScenarioIndex += 1;

    if (currentScenarioIndex >= scenarios.length) {
      if (scenarioSection) {
        scenarioSection.classList.remove("fade-out");
      }
      renderResult();
    } else {
      renderScenario();
      if (scenarioSection) {
        // remove fade-out to reveal next scenario
        scenarioSection.classList.remove("fade-out");
      }
    }
  }, SCENARIO_FADE_MS);
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
    "You balance accuracy, risk, relationships, and deadlines. No single dimension dominates your style, so you tend to flex based on what the situation needs.";

  switch (dominant.key) {
    case "accuracy":
      title = "The Data Detective";
      description =
        "Your first instinct is to stabilise the numbers. You bring order to noisy data and look for patterns, making it harder for issues to hide in the details.";
      break;
    case "safeCompliance":
      title = "The Enforcer";
      description =
        "You anchor decisions around legal, tax, and statutory risk. You’re comfortable pushing back when something threatens compliance or control.";
      break;
    case "teamMorale":
      title = "The Protector";
      description =
        "You’re highly tuned into workload, burnout, and resilience. You’d rather build a sustainable payroll engine than chase short-term heroics.";
      break;
    case "leadershipTrust":
      title = "The Politician";
      description =
        "You instinctively think in narratives, stakeholders, and optics. You focus on maintaining confidence at senior levels so payroll keeps its seat at the table.";
      break;
    case "timeliness":
      title = "The Operator";
      description =
        "You see payroll as a non-negotiable service. Hitting cut-offs, approvals, and pay days is your north star, and you organise everything around that rhythm.";
      break;
    case "relationships":
      title = "The Diplomat";
      description =
        "You treat payroll as a team sport. You invest heavily in your relationships with HR, Finance, and providers so collaboration stays high even when pressure spikes.";
      break;
  }

  return { title, description, dominantDimension: dominant };
}

// personalised micro-summary based on top two stats
const DIMENSION_META = {
  accuracy: {
    label: "Accuracy",
    tone: "dig into root causes and correctness",
  },
  safeCompliance: {
    label: "Compliance Focus",
    tone: "protect the organisation from regulatory and statutory risk",
  },
  teamMorale: {
    label: "Team Morale",
    tone: "keep an eye on team wellbeing and sustainability",
  },
  leadershipTrust: {
    label: "Leadership Trust",
    tone: "align with senior stakeholders and manage expectations",
  },
  timeliness: {
    label: "Timeliness",
    tone: "prioritise cycle-critical actions and on-time delivery",
  },
  relationships: {
    label: "Cross-Functional Relationships",
    tone: "build bridges across HR, Finance, and in-country providers",
  },
};

function buildPersonalisedSummary(dimensions) {
  // dimensions = same structure as in determineArchetype
  const sorted = [...dimensions].sort((a, b) => b.value - a.value);
  const top1 = sorted[0];
  const top2 = sorted[1];

  // if everything is basically flat, show balanced message
  if (!top1 || (top1.value === 0 && (!top2 || top2.value === 0))) {
    return "You show a fairly balanced approach across timeliness, compliance, relationships, delivery and leadership – no single tendency dominates.";
  }

  const meta1 = DIMENSION_META[top1.key];
  const meta2 = top2 ? DIMENSION_META[top2.key] : null;

  if (meta1 && meta2) {
    return `You lead with ${meta1.label} and ${meta2.label}, tending to ${meta1.tone} while also ${meta2.tone}.`;
  }
  if (meta1) {
    return `You lead with ${meta1.label}, tending to ${meta1.tone}.`;
  }
  return "";
}

// =======================================
// FIREBASE AGGREGATE LOGGING
// =======================================

function updateAggregateStats() {
  // If Firestore not initialised, just skip logging
  if (!window.db || !window.increment || !latestArchetype) return;

  const statsDoc = window.db.collection("stats").doc("global");

  const updates = {
    totalGames: window.increment(1),
  };

  // Archetype counter, e.g. archetype_TheOperator
  const archKey = `archetype_${latestArchetype.title.replace(/\s+/g, "")}`;
  updates[archKey] = window.increment(1);

  // Scenario answer counters: scenario1_A, scenario2_B, etc.
  answerChoices.forEach((ans, idx) => {
    if (!ans) return;
    const scenarioNumber = idx + 1;
    const field = `scenario${scenarioNumber}_${ans}`;
    updates[field] = window.increment(1);
  });

  statsDoc.set(updates, { merge: true }).catch((err) => {
    console.error("Failed to update aggregate stats:", err);
  });
}

// =======================================
// SCORE BANDS (used in image)
// =======================================

function scoreToBandLabel(value) {
  if (value <= -6) return "Needs focus";
  if (value <= -2) return "Emerging";
  if (value <= 1) return "Balanced";
  if (value <= 5) return "Strong";
  return "Signature strength";
}

// =======================================
// RESULT RENDER / IMAGE
// =======================================

function renderResult() {
  // hide scenarios, show result card
  scenarioSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  if (progressLabelEl && progressFillEl) {
    progressLabelEl.textContent = "Game complete";
    progressFillEl.style.width = "100%";
  }

  latestArchetype = determineArchetype(currentStats);
  resultTitleEl.textContent = latestArchetype.title;

  if (shareStatusEl) {
    shareStatusEl.textContent = "";
  }

  // log to Firestore (aggregated stats only)
  updateAggregateStats();

  // 1) draw immediately so the image ALWAYS appears
  generateResultImage();

  // 2) if fonts are available, redraw once they are fully loaded
  if (document.fonts && document.fonts.load) {
    document.fonts
      .load("900 56px 'Inter'")
      .then(() => {
        generateResultImage();
      })
      .catch(() => {
        // if font load fails, we already have an image, so do nothing
      });
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

  // Background rings
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

  // Axes lines + labels
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

  // Data polygon
  ctx.beginPath();
  for (let i = 0; i < axes; i++) {
    const angle = i * angleStep - Math.PI / 2;
    const v = values[i]; // 0..1
    const r = radius * v;
    const x = centerX + Math.cos(angle) * r;
    const y = centerY + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  ctx.fillStyle = `${color}33`; // translucent fill
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

// =======================================
// RESULT IMAGE GENERATION (BRANDED)
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
  const innerTop = cardMargin + 20;
  const innerBottom = height - cardMargin - 40;
  const contentWidth = innerRight - innerLeft;

  // ===== TITLE =====
  const title = latestArchetype.title.toUpperCase();
  ctx.textBaseline = "top";
  ctx.lineJoin = "round";

  ctx.font = "900 56px 'Inter', system-ui, sans-serif";
  const titleWidth = ctx.measureText(title).width;
  const titleX = innerLeft + (contentWidth - titleWidth) / 2;
  const titleY = innerTop + 10;

  ctx.lineWidth = 6;
  ctx.strokeStyle = "#020617";
  ctx.strokeText(title, titleX, titleY);

  ctx.fillStyle = "#F9FAFB";
  ctx.fillText(title, titleX, titleY);

  // ===== DESCRIPTION =====
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

  nextY += 10;

  // ===== RADAR + "TABLE" BLOCK =====
  const blockTop = nextY + 10;
  const blockBottom = innerBottom - 60; // leave more room for footer
  const blockHeight = blockBottom - blockTop;

  const radarRadius = 115;

  // Shift radar + stats slightly right to reduce empty space on the left
  const radarCenterY = blockTop + blockHeight / 2;
  const radarCenterX = innerLeft + radarRadius + 80;

  // Prepare values for radar (normalised)
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

  // ===== KEY TENDENCIES AS A TABLE =====
  const tableX = radarCenterX + radarRadius + 80;
  let tableY = blockTop + 24;

  // Header
  ctx.font = "22px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#F9FAFB";
  ctx.fillText("Key tendencies", tableX, tableY);
  tableY += 30;

  // Column headings
  ctx.font = "16px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#9CA3AF";
  const colGap = 210; // space between label & band
  ctx.fillText("Dimension", tableX, tableY);
  ctx.fillText("Profile", tableX + colGap, tableY);
  tableY += 6;

  // Header underline
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(tableX, tableY + 6);
  ctx.lineTo(tableX + colGap + 220, tableY + 6);
  ctx.stroke();

  tableY += 18;

  // Rows
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

    // label
    ctx.fillStyle = "#E5E7EB";
    ctx.fillText(s.label, tableX, tableY);

    // band value in slightly brighter colour
    ctx.fillStyle = "#BFDBFE";
    ctx.fillText(band, tableX + colGap, tableY);

    tableY += 26;
  });

  // ===== BRANDED FOOTER (WITH MORE BOTTOM PADDING) =====
  const gameUrl = window.location.href.split("#")[0];

  // give extra breathing room above the border
  const footerY = innerBottom - 40;

  // subtle divider line
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(innerLeft, footerY);
  ctx.lineTo(innerRight, footerY);
  ctx.stroke();

  // branding text
  ctx.font = "16px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#E5E7EB";
  ctx.fillText("Payroll Manager Simulator", innerLeft, footerY + 22);

  ctx.font = "14px 'Inter', system-ui, sans-serif";
  ctx.fillStyle = "#9CA3AF";
  const cleanUrl = gameUrl.replace(/^https?:\/\//, "");
  ctx.fillText(cleanUrl, innerLeft, footerY + 40);

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
      "Result image downloaded. Attach it to your LinkedIn post along with the copied text.";
  }
}

if (downloadImageButtonEl) {
  downloadImageButtonEl.addEventListener("click", handleDownloadImageClick);
}

function getCanonicalGameUrl() {
  return window.location.href.split("#")[0];
}

// Build the share text that goes on the clipboard
function buildShareText() {
  const url = getCanonicalGameUrl();
  const title = latestArchetype ? latestArchetype.title : "a payroll archetype";

  return (
    `I just played the Payroll Manager Simulator and got "${title}". ` +
    `It walks you through 10 global payroll scenarios and shows how you balance timeliness, compliance, relationships and delivery.\n\n` +
    `Try it here: ${url}\n` +
    `#PayrollManagerSimulator`
  );
}

async function handleCopyResultClick() {
  if (!latestArchetype) {
    if (shareStatusEl) {
      shareStatusEl.textContent =
        "Finish the simulation first to copy your result.";
    }
    return;
  }

  const text = buildShareText();

  try {
    await navigator.clipboard.writeText(text);
    if (shareStatusEl) {
      shareStatusEl.textContent = "Result text copied. Paste it into your LinkedIn post.";
    }
  } catch (err) {
    console.error("Clipboard copy failed:", err);
    if (shareStatusEl) {
      shareStatusEl.textContent =
        "Couldn’t copy automatically – please paste manually.";
    }
  }
}

if (copyResultButtonEl) {
  copyResultButtonEl.addEventListener("click", handleCopyResultClick);
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
    // reset state in case of future replay features
    currentStats = { ...INITIAL_STATS };
    currentScenarioIndex = 0;
    answerChoices = [];
    renderScenario();
  });
}

// =====================
// FIREBASE INIT (SAFE)
// =====================

window.db = null;
window.increment = null;

const firebaseConfig = {
  apiKey: "AIzaSyXWxr4arF2lVN9K2k_PRkP4Q9zEZylra0",
  authDomain: "payrollmanagersim.firebaseapp.com",
  projectId: "payrollmanagersim",
  storageBucket: "payrollmanagersim.appspot.com",
  messagingSenderId: "292697378420",
  appId: "1:292697378420:web:4b91bf27593b5d39165821",
  measurementId: "G-MX0N4WLCM5",
};

try {
  if (window.firebase && window.firebase.firestore) {
    window.firebase.initializeApp(firebaseConfig);
    window.db = window.firebase.firestore();
    window.increment = window.firebase.firestore.FieldValue.increment;
  } else {
    console.warn("Firebase not available – analytics disabled.");
  }
} catch (e) {
  console.warn("Firebase init failed – analytics disabled.", e);
}
