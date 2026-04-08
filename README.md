# PULSE Dashboard

Interactive research dashboard for the **PULSE (Pedagogical Utility Lens for Scaffolding Evaluation)** framework.

Explores 135 AI tutoring sessions (540 coded turns) across three frontier LLMs — GPT-5.4 Thinking, Claude Opus 4.6, and Gemini 3 Thinking — evaluating scaffolding quality for ADHD learners on four theory-grounded indicators.

## Pages

- **Overview** — Key metrics and scaffolding profiles
- **Model Comparison** — Radar charts, bar charts, and Kruskal-Wallis statistics
- **Condition Sensitivity** — How models respond to three ADHD behavioral profiles
- **Session Explorer** — Browse and filter all 135 sessions with turn-level detail
- **Emergent Patterns** — 16 scaffolding patterns identified through open coding
- **PULSE Scorer** — Real-time AI-powered scoring of tutor responses

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- Recharts
- Anthropic API (for PULSE Scorer)

## Citation

Kim, M. (2026). Cognitive friction as scaffolding: Evaluating AI-generated explanations through the PULSE framework. University of Pennsylvania, Graduate School of Education.

## License

MIT
