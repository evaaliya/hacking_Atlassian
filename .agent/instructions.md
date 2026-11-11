# Agent instructions — hacking_Atlassian (Codegeist 2026)

## Goal

Build a Forge app that uses Atlassian context (Teamwork Graph / product APIs / Rovo) so teams can ship or act with more confidence. Target deadline context: Codegeist 2026 (Devpost).

## Environment checklist

- [ ] Node.js 20+ (`node --version`)
- [ ] Forge CLI (`npm install -g @forge/cli`, `forge --version`)
- [ ] `forge login` with Atlassian email + API token
- [ ] Demo site via `forge site provision` (or install with `--demo-site`)
- [ ] App scaffolded (`forge create` or files in this repo)

## Project layout (expected)

```
manifest.yml
package.json
src/
  frontend/index.jsx
  resolvers/index.js
  index.js
README.md
```

## Commands you should use

```bash
forge login
forge create                 # if starting from template
forge lint
forge deploy
forge install --demo-site
forge tunnel
```

## Do / don't

- Do keep scopes and permissions minimal in `manifest.yml`
- Do document install/demo steps in `README.md` for judges
- Don't commit secrets, tokens, or personal API keys
- Don't invent Forge module keys or Graph APIs — verify against docs
