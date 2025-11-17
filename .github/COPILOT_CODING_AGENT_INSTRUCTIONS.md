# Copilot Coding Agent — Repository configuration and maintainer instructions

This document explains the recommended configuration and how to adapt it for Hydrogenesi/Phoenix_Ignition_TOE.

1) Files added
- .github/copilot-coding-agent.yml
  - The agent configuration (paths, test commands, safety rules, reviewer guidance).
- .github/COPILOT_CODING_AGENT_INSTRUCTIONS.md
  - This guide (explanations and customization steps).

2) Quick customization checklist (edit .github/copilot-coding-agent.yml)
- default_branch
  - Set to the repository's default branch name (e.g., `main`, `master`, `develop`).
- paths.include
  - Include only the directories/files the agent is allowed to change (e.g., `src/**`, `pkg/**`).
- paths.exclude
  - Always exclude sensitive or managed areas: `.github/**`, `docs/**`, `node_modules/**`.
- tests.test_command
  - Provide a command that reliably runs your repository tests (e.g., `pytest -q` or `npm ci && npm test`).
- analysis.static_analysis_command
  - Provide linter/static analysis commands if available; agent will run them before PR creation.
- safety.require_manual_approval_for
  - Add categories that must always get human review (database migrations, infra, secrets, etc.).
- review.fallback_reviewers
  - Add maintainer usernames to request reviews automatically when no CODEOWNERS entry applies.

3) Recommended workflow
- Agent runs the configured test and lint commands before opening PRs (when environment supports it).
- The agent opens a PR with the configured title and labels and requests the configured reviewers.
- The agent should never merge PRs requiring manual approval (per safety rules).

4) Optional: CODEOWNERS and branch protections
- Add a CODEOWNERS file to enforce reviewer assignment for critical paths.
- Configure branch protection rules on the default branch to:
  - Require status checks (tests/lints) to pass.
  - Require at least one review before merge.
  - Restrict who can push to protected branches.

5) Security and secrets
- Never allow the agent to modify files that contain credentials or secrets.
- Ensure secrets are stored in GitHub Secrets and not in the repository.
- If the agent needs access to CI or external systems, prefer short-lived tokens and least privilege.

6) Next steps I can take for you
- Open a PR to add these files to the repository with adjusted values (I can adapt the config to use the correct default branch and exact test commands if you tell me).
- Add a CODEOWNERS file and suggested branch protection settings.
- Tune the include/exclude patterns after you tell me the repo layout.

If you'd like, tell me:
- The repo's default branch name,
- Primary languages (optional),
- The exact test command used in CI,
and I will open a PR that adds these files with those values filled in.
