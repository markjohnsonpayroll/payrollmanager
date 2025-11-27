const stats = {
  teamMorale: 0,
  complianceRisk: 0,
  leadershipTrust: 0,
  accuracy: 0,
  cutoffStability: 0,
  relationships: 0,
};

const scenarios = [
  {
    id: 1,
    title: "The Cut-Off Collision",
    description: "It’s Monday morning. Three countries haven’t delivered time files, and cut-off is today...",
    choices: [
      {
        id: "A",
        label: "Escalate immediately to HR leadership",
        effects: { cutoffStability: +2, relationships: -2, teamMorale: -1 },
      },
      {
        id: "B",
        label: "Process what you have and run adjustments next month",
        effects: { cutoffStability: +1, accuracy: -2, leadershipTrust: -1 },
      },
      {
        id: "C",
        label: "Rebuild the files manually from prior patterns",
        effects: { accuracy: +1, teamMorale: -2, cutoffStability: 0 },
      },
    ],
  },
  // ... add scenarios 2–10 later
];

let currentScenarioIndex = 0;

function applyEffects(effects) {
  for (const key in effects) {
    if (stats[key] !== undefined) {
      stats[key] += effects[key];
    }
  }
}

function getCurrentScenario() {
  return scenarios[currentScenarioIndex];
}

// later: renderScenario(), handleChoice(), showResult()
