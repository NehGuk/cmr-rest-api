FROM node:18-alpine

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY pnpm-lock.yaml package.json ./

# Install dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build TypeScript
RUN pnpm run build

# Remove dev dependencies for production
RUN pnpm prune --prod

# Expose port
EXPOSE 8080

# Start the application
CMD ["pnpm", "start"]