# NextGenApp — Next.js Fullstack Boilerplate

Features:
- Next.js (App Router) + TypeScript + Tailwind
- Redux Toolkit + Apollo Client
- GraphQL via /api/graphql (apollo-server-micro)
- MongoDB (Mongoose) models and seed script
- JWT auth with refresh tokens (HttpOnly cookies)
- OpenAPI (public/openapi.json) + swagger static UI
- Dockerfile + docker-compose + nginx proxy
- Generator scripts: component/page/resolver
- Github Actions CI template, ESLint, Prettier, Jest

Quickstart:
1. cp .env.example .env
2. npm ci
3. npm run dev
4. Open http://localhost:3000

Docker quickstart (requires docker-compose):
1. cd infra
2. docker-compose up --build

Generator examples:
- npm run gen:component -- ComponentName
- npm run gen:page -- pageName
- npm run gen:resolver -- ResolverName
