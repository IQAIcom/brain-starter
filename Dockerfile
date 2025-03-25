FROM node:22-slim

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# Copy project files
COPY src/ ./src/
COPY tsconfig.json ./
COPY .env ./

# Create data directory for SQLite
RUN mkdir -p data

# Run the application
CMD ["pnpm", "dev"]