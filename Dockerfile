# Official Node environment
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
COPY . .
RUN npm ci
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["npm", "run", "start"]
