# syntax=docker/dockerfile:1

# Build stage: install the full workspace and compile the server into a
# standalone, self-contained binary (embeds the Bun runtime).
FROM oven/bun:1.3.14 AS build
WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile
RUN cd apps/server && bun run compile

# Runtime stage: ship only the compiled binary on a minimal Bun base.
FROM oven/bun:1.3.14-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/apps/server/server ./server

EXPOSE 3000
CMD ["./server"]
