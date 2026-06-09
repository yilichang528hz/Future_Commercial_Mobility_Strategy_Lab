# DESIGN_RULES/05_WRITING_REASONING_GUARDRAILS.md

## Goal
The public website should sound like a serious commercial vehicle product-planning portfolio, not like advertising copy or an overconfident AI essay.

## Detection layer A - structure
Codex must detect and rewrite:
- binary opposition formulas, including patterns equivalent to `not A but B`, `you may think A, but actually B`, and similar forced contrasts;
- over-definition formulas such as `the true X is Y`;
- unsupported conclusion leaps;
- excessive parallelism that makes the prose sound promotional rather than analytical.

## Detection layer B - semantics
Codex must detect and rewrite:
- inference gaps,
- oversimplification,
- manipulative tone,
- multi-level marketing style,
- grandiose advertising tone,
- claims that imply official endorsement,
- claims that turn demo data into market fact.

## Detection layer C - cognition
Codex must detect and rewrite:
- confirmation bias,
- framing bias,
- overgeneralization from one market to another,
- overapplication of international data to Taiwan without local validation.

## Rewrite method
When the above patterns appear, rewrite using:
- conditional reasoning: specify under what assumptions the claim holds;
- mechanism-based explanation: explain the chain through which a conclusion may emerge;
- layered analysis: separate market, technology, regulation, cost, infrastructure, service, dealer education, and customer-operation factors;
- uncertainty labels: `demo`, `requires validation`, `planning hypothesis`, `human review required`.

## Preferred style
Use concise but high-quality business and academic prose. The tone should be:
- careful,
- evidence-aware,
- human-centered,
- professional,
- suitable for product-planning interviews,
- free from exaggerated promises.

## Banned or discouraged public patterns
Avoid public-facing sentences that resemble:
- `This is not merely X; it is Y.`
- `The true value of X is Y.`
- `This completely transforms the industry.`
- `This proves that...` when only demo data is available.
- `The future must be...` when the website only presents a planning scenario.

Replace them with:
- `Under these operating conditions, X may support Y because...`
- `This module frames X through three factors:...`
- `The scenario suggests a possible planning path, subject to validation by...`
