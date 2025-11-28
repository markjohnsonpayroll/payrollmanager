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
  relationships: 0
};

const scenarios = [
  {
    id: 1,
    title: "The Cut-Off Collision",
    description:
      "It’s Monday morning. Three countries haven’t delivered time files, and cut-off is today. HR says: 'We’re working on it, just hold the run for now.' What do you do?",
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
          accuracy: 0
        }
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
          teamMorale: 0
        }
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
          relationships: 0
        }
      }
    ]
  },

  {
    id: 2,
    title: "Retro Chain Reaction",
    description:
      "Variance reports show unexpected retros across six jurisdictions. Finance wants explanations 'by the hour'.",
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
          relationships: 1
        }
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
          teamMorale: 0
        }
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
          teamMorale: 1
        }
      }
    ]
  },

  {
    id: 3,
    title: "The Surprise Global Bonus",
    description:
      "The CEO announces a surprise global bonus. HR wants it included this month; no upstream prep done.",
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
          relationships: 1
        }
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
          relationships: -1
        }
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
          teamMorale: 0
        }
      }
    ]
  },

  {
    id: 4,
    title: "Integration Chaos",
    description:
      "Your HCM → Payroll integration exported blank fields. Half the import is missing key values.",
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
          teamMorale: 0
        }
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
          relationships: 1
        }
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
          relationships: 0
        }
      }
    ]
  },

  {
    id: 5,
    title: "In-Country Provider Revolt",
    description:
      "Your LATAM in-country provider rejects the file and refuses to process it.",
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
          accuracy: 0
        }
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
          teamMorale: 0
        }
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
          teamMorale: 1
        }
      }
    ]
  },

  {
    id: 6,
    title: "The Public Complaint",
    description:
      "An employee tags the company on social media: 'I haven’t been paid correctly for months and payroll is ignoring me.'",
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
          timeliness: 0
        }
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
          timeliness: 0
        }
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
          timeliness: 0
        }
      }
    ]
  },

  {
    id: 7,
    title: "The GL Black Hole",
    description:
      "Finance flags a major GL mismatch and says payroll keeps 'getting it wrong'. They want a multi-country audit.",
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
          timeliness: -1
        }
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
          timeliness: 1
        }
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
          timeliness: 0
        }
      }
    ]
  },

  {
    id: 8,
    title: "The Filing Deadline Duel",
    description:
      "Two high-impact statutory filings are due today. You only have capacity to get one right on time without overtime.",
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
          relationships: 0
        }
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
          teamMorale: -1
        }
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
          relationships: 0
        }
      }
    ]
  },

  {
    id: 9,
    title: "The Leadership Review",
    description:
      "It’s time for your quarterly business review. You have strong wins but also visible misses this cycle.",
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
          accuracy: 0
        }
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
          timeliness: 0
        }
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
          accuracy: 1
        }
      }
    ]
  },

  {
    id: 10,
    title: "The End-of-Cycle Collapse",
    description:
      "Hours before global approval, you detect missing cost centres, FX variances, and retro loops in several countries.",
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
          relationships: 0
        }
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
          relationships: 1
        }
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
          relationships: 1
        }
      }
    ]
  }
];

// =======================================
// GAME ENGINE
// =======================================

let currentStats = { ...INITIAL_STATS };
let currentScenarioIndex = 0;
let hasChosenInScenario = false;
let latestArchetype = null;

// DOM elements
const scenarioSection = document.getElementById("scenario-section");
const resultSection = document.getElementById("result-section");
const scenarioTitleEl = document.getElementById("scenario-title");
const scenarioDescriptionEl = document.getElementById("scenario-description");
const choicesContainerEl = document.getElementById("choices-container");
const outcomeEl = document.getElementById("outcome");
const nextButtonEl = document.getElementById("next-button");
const resultTitleEl = document.getElementById("result-title");
const resultDescriptionEl = document.getElementById("result-description");
const statsListEl = document.getElementById("stats-list");
const progressTextEl = document.getElementById("progress-text");
const shareButtonEl = document.getElementById("share-button");
const shareStatusEl = document.getElementById("share-status");

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

  if (progressTextEl) {
    progressTextEl.textContent = `Scenario ${scenario.id} of ${scenarios.length}`;
  }

  scenarioTitleEl.textContent = `Scenario ${scenario.id}: ${scenario.title}`;
  scenarioDescriptionEl.textContent = scenario.description;

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

nextButtonEl.addEventListener("click", handleNextScenario);

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
    { key: "relationships", value: stats.relationships }
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
        "You keep payroll running on time. Cut-offs, SLAs, and on-time pay are your anchor.";
      break;
    case "relationships":
      title = "The Diplomat";
      description =
        "You invest heavily in cross-functional relationships. HR, Finance, and providers see you as a partner, not a blocker.";
      break;
  }

  return { title, description, dominantDimension: dominant };
}

function renderResult() {
  scenarioSection.classList.add("hidden");
  resultSection.classList.remove("hidden");

  if (progressTextEl) {
    progressTextEl.textContent = "Game complete";
  }

  latestArchetype = determineArchetype(currentStats);
  resultTitleEl.textContent = latestArchetype.title;
  resultDescriptionEl.textContent = latestArchetype.description;

  statsListEl.innerHTML = "";

  const statLabels = {
    teamMorale: "Team Morale",
    complianceRisk: "Compliance Risk (lower is better)",
    leadershipTrust: "Leadership Trust",
    accuracy: "Accuracy",
    timeliness: "Timeliness",
    relationships: "Cross-Functional Relationships"
  };

  Object.entries(currentStats).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.textContent = `${statLabels[key]}: ${value}`;
    statsListEl.appendChild(li);
  });

  if (shareStatusEl) {
    shareStatusEl.textContent = "";
  }
}

// =======================================
// LINKEDIN SHARE
// =======================================

function handleShareClick() {
  // Make sure we have an archetype
  if (!latestArchetype) {
    latestArchetype = determineArchetype(currentStats);
  }

  // Use the current page URL (works on local + GitHub Pages)
  const gameUrl = window.location.href.split("#")[0];
  const shareText =
    `I just completed the Payroll Manager Simulator and got "${latestArchetype.title}". ` +
    `If you work in payroll, take it and see what kind of payroll manager you are: ${gameUrl}`;

  const encodedUrl = encodeURIComponent(gameUrl);
  const linkedinUrl =
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  // Update status text
  if (shareStatusEl) {
    shareStatusEl.textContent = "Opening LinkedIn…";
  }

  // Open LinkedIn share window immediately (most reliable for popup blockers)
  window.open(linkedinUrl, "_blank");

  // Try to copy the suggested post text to clipboard
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(shareText).then(
      () => {
        if (shareStatusEl) {
          shareStatusEl.textContent =
            "LinkedIn opened in a new tab. Share text copied – just paste into the post and publish.";
        }
      },
      () => {
        if (shareStatusEl) {
          shareStatusEl.textContent =
            "LinkedIn opened in a new tab. Clipboard copy isn’t supported, so just write your own message.";
        }
      }
    );
  } else if (shareStatusEl) {
    shareStatusEl.textContent =
      "LinkedIn opened in a new tab. Clipboard copy isn’t supported, so just write your own message.";
  }
}

// Wire up the button
if (shareButtonEl) {
  shareButtonEl.addEventListener("click", handleShareClick);
}

// Start game on load
renderScenario();
