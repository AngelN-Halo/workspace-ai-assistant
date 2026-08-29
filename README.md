# Workspace AI Assistant

A multi-user productivity copilot for Gmail, Google Drive, Google Docs, and Google Sheets.

The assistant is designed around three principles:

- **Human approval first** — the assistant proposes changes before executing them.
- **Tenant isolation** — each user’s tokens, conversations, settings, and audit history remain isolated.
- **Auditability** — Workspace actions are recorded for review.

## Current status

This repository currently contains the frontend product prototype built with Astro, TypeScript, and Tailwind CSS. It demonstrates the intended workspace experience, including:

- Chat-based Workspace assistant UI
- Human approval action cards
- Connected Google account status
- Recent activity and audit-style history
- Gmail, Drive, Docs, and Sheets integration surfaces
- Responsive layouts and dark/light mode

OAuth, FastAPI services, PostgreSQL persistence, Redis jobs, encryption, and live Google API calls are planned backend work and are not connected in this prototype yet.

## Tech stack

- Astro 5
- TypeScript
- React 19 support configured
- Tailwind CSS
- Lucide React
- Node.js 20+

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static production site |
| `npm run preview` | Preview the production build locally |

## Planned architecture

The target deployment will use Docker Compose with four services:

- `frontend` — React/TypeScript application
- `backend` — FastAPI authentication, OAuth, agent orchestration, and Google API access
- `postgres` — users, tokens, conversations, messages, audit logs, and automation rules
- `redis` — session cache, background jobs, and agent memory cache

The AI layer will support configurable OpenAI, Azure OpenAI, Anthropic, and local Ollama providers. Google access will use least-privilege OAuth scopes wherever possible, with refresh tokens encrypted using an application key stored separately from the database.

## Repository

[github.com/AngelN-Halo/workspace-ai-assistant](https://github.com/AngelN-Halo/workspace-ai-assistant)
