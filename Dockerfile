FROM node:22-slim

WORKDIR /app

# Install system dependencies including Python for node-gyp
RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  && rm -rf /var/lib/apt/lists/*

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