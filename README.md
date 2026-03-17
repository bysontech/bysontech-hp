# Template A: Static Content

Static content site template using Cloudflare Pages + Astro + TailwindCSS + TypeScript.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) (static output)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Hosting**: Cloudflare Pages
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run typecheck` | Run TypeScript check |
| `npm test` | Run tests (not configured) |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting |

## Project Structure

```
├── src/
│   └── pages/         # Astro pages
├── public/            # Static assets
├── docs/              # Documentation
│   ├── TASK_TEMPLATE.md
│   └── DECISIONS.md
├── scripts/           # Utility scripts
├── .github/
│   ├── workflows/ci.yml
│   └── pull_request_template.md
├── CLAUDE.md          # Base rules for Claude
├── CLAUDE.local.md    # Project-specific rules
└── AGENTS.md          # Collaboration workflow
```

## Claude Operating Rules

This repository includes Claude operating rules for AI-assisted development:

- **CLAUDE.md**: Base rules shared across projects
- **CLAUDE.local.md**: Project-specific settings (commands, paths, etc.)
- **AGENTS.md**: Collaboration workflow and roles

### New Task Workflow

1. Create a task document using `docs/TASK_TEMPLATE.md`
2. Work on a feature branch (not main)
3. Run quality gates before PR:
   ```bash
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```
4. Create PR using the template

## CI/CD

GitHub Actions CI runs on every PR and push to main:
- Install dependencies (`npm ci`)
- Lint (`npm run lint`)
- Typecheck (`npm run typecheck`)
- Test (`npm test`)
- Build (`npm run build`)

## License

Private - BysonTech
