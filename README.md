# hacking_Atlassian

Codegeist 2026 Forge starter — Jira issue panel hello world scaffold.

## Prerequisites

- Node.js **20+** (Forge recommends 22.x / 24.x LTS)
- Atlassian account + [API token](https://id.atlassian.com/manage-profile/security/api-tokens)
- Forge CLI: `npm install -g @forge/cli`

## Setup

```bash
# 1) Verify Node
node --version
npm --version

# 2) Install Forge CLI (if needed)
npm install -g @forge/cli
forge --version

# 3) Log in
forge login

# 4) Register a real app ID (recommended)
#    Option A: forge create (pick Jira → UI Kit → jira-issue-panel), then copy files here
#    Option B: replace app.id in manifest.yml after creating an app in the developer console

# 5) Install dependencies
npm install

# 6) Provision / use demo site
forge site provision
# or after deploy:
forge deploy
forge install --demo-site
```

## Project layout

```
manifest.yml          # Forge app definition
package.json
src/
  frontend/index.jsx  # UI Kit panel
  resolvers/index.js  # backend resolver
  index.js            # exports handler
.cursor/rules/        # Cursor project rules
.agent/               # Agent instructions
```

## Local scripts

```bash
npm run lint
npm run deploy
npm run install:demo
npm run tunnel
```

## Next

1. Complete `forge login` and replace `app.id` in `manifest.yml`
2. Brainstorm category (Software / Business / Specialized) + bonus tracks (Rovo agents, MCP, Teamwork Graph, Marketplace)
3. Iterate with `forge tunnel` on the demo site
