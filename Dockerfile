# Dockerfile (place at repo root)
### Stage 1: install deps (build stage)
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
# Use npm ci for reproducible install
RUN npm ci --production=false

### Stage 2: copy source & run tests (optional)
FROM node:18-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Run tests in CI; here we don't block the build on tests but you can enable if you want
# RUN npm test

### Stage 3: runtime image (smaller)
FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# copy only production node_modules for smaller image
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app . 
EXPOSE 3000
CMD ["node", "index.js"]
