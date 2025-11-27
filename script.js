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
  cutoffStability: 0,
  relationships: 0,
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
          cutoffStability: +2,
          relationships: -1,
          teamMorale: -1,
          leadershipTrust: +1,
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
          cutoffStability: +1,
          accuracy: -2,
          leadershipTrust: -1,
          complianceRisk: +2,
          relationships: +1,
          teamMorale: 0,
        },
      },
      {
        id: "C",
        label: "Rebuild files manually from partial data.",
        outcome:
          "You attempt a manual rebuild. It mostly works, but the team is exhausted and it's not sustainable.",
        effects: {
          cutoffStability: 0,
          accuracy: +1,
          teamMorale: -2,
          leadershipTrust: +1,
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
    choices: [
      {
        id: "A",
        label: "Deep-dive into retros before proceeding.",
        outcome:
          "You find root causes but slow everything down. Finance is relieved; the team is stressed.",
        effects: {
          accuracy: +2,
          complianceRisk: -2,
          cutoffStability: -1,
          teamMorale: -1,
          leadershipTrust: +1,
          relationships: +1,
        },
      },
      {
        id: "B",
        label: "Give a high-level summary now; details later.",
        outcome:
          "You keep momentum while giving Finance just enough to calm down.",
        effects: {
          accuracy: +1,
          complianceRisk: -1,
          cutoffStability: +1,
          leadershipTrust: +1,
          relationships: +1,
          teamMorale: 0,
        },
      },
      {
        id: "C",
        label: "Focus on closing payroll; retros later.",
        outcome:
          "You protect the cycle, but Finance feels ignored and escalations build.",
        effects: {
          cutoffStability: +2,
          accuracy: 0,
          complianceRisk: +1,
          leadershipTrust: -1,
          relationships: -2,
          teamMorale: +1,
        },
      },
    ],
  },

  {
    id: 3,
    title: "The Surprise Global Bonus",
    description:
      "CEO announces a surprise global bonus. HR wants it included this month; no upstream prep done.",
    choices: [
      {
        id: "A",
        label: "Add it this cycle for all countries.",
        outcome:
          "Employees love it; reconciliation and tax questions explode.",
        effects: {
          accuracy: -2,
          complianceRisk: +2,
          leadershipTrust: +2,
          cutoffStability: 0,
          teamMorale: -1,
          relationships: +1,
        },
      },
      {
        id: "B",
        label: "Refuse; insist on off-cycle or next cycle.",
        outcome:
          "Process stays intact. CEO isn’t thrilled but compliance is happy.",
        effects: {
          accuracy: +2,
          complianceRisk: -2,
          cutoffStability: +1,
          leadershipTrust: -1,
          teamMorale: +1,
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
          cutoffStability: 0,
          leadershipTrust: +1,
          relationships: +1,
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
    choices: [
      {
        id: "A",
        label: "Freeze payroll until upstream fixes the issue.",
        outcome:
          "You refuse to build on bad data. Slow but safe.",
        effects: {
          accuracy: +2,
          complianceRisk: -2,
          cutoffStability: -2,
          leadershipTrust: +1,
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
          complianceRisk: +1,
          cutoffStability: +1,
          teamMorale: -2,
          leadershipTrust: 0,
          relationships: +1,
        },
      },
      {
        id: "C",
        label: "Rollback to last clean snapshot.",
        outcome:
          "You lose time but regain stability. Future cycles are safer.",
        effects: {
          accuracy: +1,
          complianceRisk: -1,
          cutoffStability: -1,
          teamMorale: -1,
          leadershipTrust: +1,
          relationships: 0,
        },
      },
    ],
  },

  {
    id: 5,
    title: "In-Country Provider Revolt",
    description:
      "LATAM provider rejects the file and refuses to process it.",
    choices: [
      {
        id: "A",
        label: "Negotiate a one-time exception.",
        outcome:
          "Relationship preserved, expectations rise.",
        effects: {
          relationships: +2,
          complianceRisk: -1,
          cutoffStability: +1,
          leadershipTrust: +1,
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
          cutoffStability: +2,
          accuracy: -1,
          complianceRisk: +2,
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
          leadershipTrust: +1,
          cutoffStability: 0,
          accuracy: +1,
          teamMorale: +1,
        },
      },
    ],
  },

  {
    id: 6,
    title: "The Public Complaint",
    description:
      "Employee tags company on social: 'Payroll is ignoring me.'",
    choices: [
      {
        id: "A",
        label: "Respond publicly and move it to private channels.",
        outcome:
          "Shows empathy and visibility. Good optics.",
        effects: {
          relationships: +1,
          leadershipTrust: +1,
          complianceRisk: 0,
          accuracy: 0,
          teamMorale: 0,
          cutoffStability: 0,
        },
      },
      {
        id: "B",
        label: "Investigate quietly, respond after confirmation.",
        outcome:
          "Fact-first approach. Solid long-term impact.",
        effects: {
          accuracy: +1,
          complianceRisk: -1,
          leadershipTrust: +1,
          relationships: 0,
          teamMorale: 0,
          cutoffStability: 0,
        },
      },
      {
        id: "C",
        label: "Hand it to Employee Relations.",
        outcome:
          "You avoid risk, but payroll feels detached.",
        effects: {
          relationships: -1,
          leadershipTrust: 0,
          complianceRisk: 0,
          accuracy: 0,
          teamMorale: +1,
          cutoffStability: 0,
        },
      },
    ],
  },

  {
    id: 7,
    title: "The GL Black Hole",
    description:
      "Finance finds a major GL mismatch and blames payroll.",
    choices: [
      {
        id: "A",
        label: "Create a cross-functional task force.",
        outcome:
          "Deep fix, slow cycle. Political win long-term.",
        effects: {
          accuracy: +2,
          complianceRisk: -2,
          relationships: +2,
          leadershipTrust: +1,
          teamMorale: -1,
          cutoffStability: -1,
        },
      },
      {
        id: "B",
        label: "Provide a narrative and defer deep dive.",
        outcome:
          "Calms Finance, doesn't fix root causes.",
        effects: {
          accuracy: 0,
          complianceRisk: +1,
          relationships: +1,
          leadershipTrust: 0,
          teamMorale: 0,
          cutoffStability: +1,
        },
      },
      {
        id: "C",
        label: "Push the issue upstream.",
        outcome:
          "Some applaud the clarity; others think it's deflection.",
        effects: {
          relationships: -1,
          leadershipTrust: -1,
          accuracy: +1,
          complianceRisk: 0,
          teamMorale: +1,
          cutoffStability: 0,
        },
      },
    ],
  },

  {
    id: 8,
    title: "The Filing Deadline Duel",
    description:
      "Two high-impact statutory filings are due today; capacity for only one.",
    choices: [
      {
        id: "A",
        label: "File the one with biggest financial exposure.",
        outcome:
          "Financial risk reduced, regulatory timing suffers.",
        effects: {
          complianceRisk: -1,
          accuracy: +1,
          cutoffStability: 0,
          leadershipTrust: +1,
          teamMorale: -1,
          relationships: 0,
        },
      },
      {
        id: "B",
        label: "File the highest regulatory-risk jurisdiction first.",
        outcome:
          "Legal team relieved, Finance annoyed.",
        effects: {
          complianceRisk: -2,
          accuracy: 0,
          cutoffStability: 0,
          leadershipTrust: +1,
          relationships: -1,
          teamMorale: -1,
        },
      },
      {
        id: "C",
        label: "Split the team, try to do both.",
        outcome:
          "Deadlines met, quality and morale take a hit.",
        effects: {
          complianceRisk: +1,
          accuracy: -1,
          cutoffStability: +1,
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
      "Quarterly business review. Wins and misses on the table.",
    choices: [
      {
        id: "A",
        label: "Frame issues as systemic and argue for investment.",
        outcome:
          "You position payroll as under-resourced, not underperforming.",
        effects: {
          leadershipTrust: +2,
          relationships: +1,
          complianceRisk: -1,
          teamMorale: +1,
          cutoffStability: 0,
          accuracy: 0,
        },
      },
      {
        id: "B",
        label: "Highlight wins heavily, soften the misses.",
        outcome:
          "Short-term political win but limited long-term trust gains.",
        effects: {
          leadershipTrust: 0,
          relationships: +1,
          teamMorale: 0,
          accuracy: 0,
          complianceRisk: 0,
          cutoffStability: 0,
        },
      },
      {
        id: "C",
        label: "Be brutally transparent.",
        outcome:
          "High-integrity approach. Some leaders impressed; others nervous.",
        effects: {
          leadershipTrust: +1,
          relationships: 0,
          complianceRisk: -1,
          teamMorale: -1,
          cutoffStability: 0,
          accuracy: +1,
        },
      },
    ],
  },

  {
    id: 10,
    title: "The End-of-Cycle Collapse",
    description:
      "Hours before global approval, you detect missing cost centres, FX variances, and retro loops.",
    choices: [
      {
        id: "A",
        label: "Delay global approval and fix everything properly.",
        outcome:
          "Stressful delay, but you avoid shipping broken results.",
        effects: {
          accuracy: +3,
          complianceRisk: -3,
          cutoffStability: -2,
          leadershipTrust: +1,
          teamMorale: -1,
          relationships: 0,
        },
      },
      {
        id: "B",
        label: "Approve as-is, patch next cycle.",
        outcome:
          "No missed payday, but you're carrying risk forward.",
        effects: {
          accuracy: -3,
          complianceRisk: +3,
          cutoffStability: +2,
          leadershipTrust: -2,
          teamMorale: 0,
          relationships: +1,
        },
      },
      {
        id: "C",
        label: "Approve stable countries, isolate broken ones.",
        outcome:
          "Most employees are paid on time; a few suffer delays.",
        effects: {
          accuracy: +1,
          complianceRisk: -1,
          cutoffStability: 0,
          leadershipTrust: +1,
          teamMorale: 0,
          relationships: +1,
        },
      },
    ],
  },
];
