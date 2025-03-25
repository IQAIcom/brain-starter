# 🧠 Brain Starter

A simple starter template to build intelligent agents with the Brain Framework.

## 🚀 Overview

This repository contains everything you need to get started with Brain Framework - a powerful platform for building AI agents. Brain Framework makes it easy to create, test, and deploy intelligent agents across various interfaces.

## ⚡ Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/IQAIcom/brain-starter
cd brain-starter
pnpm install
```

## 📋 Project Structure

```
brain-starter/
├── src/           # Source code
├── data/          # Data storage for your agent
├── .env           # Environment variables
└── package.json   # Project dependencies
```

## 🔧 Configuration

1. Create a `.env` file in the project root:

```
OPENAI_API_KEY=your_openai_api_key_here
```


## 🏃‍♂️ Running Your Agent

```bash
pnpm dev
```

## 🐳 Docker

This project includes Docker support for easy deployment and consistent environments.

### Building the Docker Image

```bash
docker build -t brain-starter .
```

### Running the Docker Container

```bash
docker run -p 3000:3000 --env-file .env brain-starter
```

The Dockerfile uses:
- Node.js 22 for modern JavaScript support
- pnpm for efficient dependency management
- Proper layer caching to optimize build times
- Automatic data directory creation for SQLite storage

This containerized setup ensures your brain agent runs in a consistent environment regardless of the host system.


## 📚 Documentation

For more information about Brain Framework, check out the official documentation:
[Brain Framework Documentation](https://brain.iqai.com)
