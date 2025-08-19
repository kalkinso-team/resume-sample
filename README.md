# Chandresh Kumari - Interactive Resume

[![github pages](https://github.com/kalkinso-team/resume-sample/actions/workflows/run-gh-pages.yml/badge.svg?branch=main&event=deployment)](https://github.com/kalkinso-team/resume-sample/actions/workflows/run-gh-pages.yml)

A visually engaging, interactive web resume built with React, Vite, Chakra UI, and Framer Motion. Easily deployable and production-ready, designed to impress recruiters at top tech companies.

---

## 🚀 Features

- Modern, animated, and responsive design
- Modular React components
- All resume links are accessible and interactive
- Dark mode support
- Easy deployment with Docker or GitHub Pages

---

## 🐳 Getting Started with Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

### Quick Start

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/chandresh-resume.git
   cd chandresh-resume
   ```

2. **Build and start the app:**
   ```sh
   docker-compose up -d
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

### Stopping the App

To stop and remove the running containers:
```sh
docker-compose down
```

---

## 🛠️ Local Development (without Docker)

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Visit:**
   ```
   http://localhost:5173
   ```

---

## 🚀 Deploying to GitHub Pages

This project supports deployment to GitHub Pages using GitHub Actions.

### Prerequisites

- Repository must be public on GitHub.
- Replace `your-username` in `package.json`'s `homepage` field with your actual GitHub username.

### Steps

1. **Push your code to the `master` branch.**
2. **GitHub Actions will automatically build and deploy your site to the `gh-pages` branch.**
3. **Your site will be available at:**
   ```
   https://your-username.github.io/chandresh-resume
   ```

### Notes

- The workflow uses Node.js v20 and npm.
- The Vite build output (`dist/`) is published to GitHub Pages.
- SPA routing is supported via `404.html` redirect.

---

## 📦 Production Build

To build the app for production (without Docker):

```sh
npm run build
```

The static files will be output to the `dist/` directory.

---

## 📁 Project Structure

- `src/` - React components and app logic
- `public/` - Static assets
- `Dockerfile` - Docker build instructions
- `docker-compose.yml` - Docker Compose setup
- `nginx.conf` - Nginx configuration for SPA routing
- `.github/workflows/gh-pages.yml` - GitHub Actions workflow for Pages deployment

---

## 👤 Author

**Chandresh Kumari**

---

## 📄 License

MIT

---

## 💡 Notes

- The app is served on port 3000 by default when using Docker.
- For any issues or feature requests, please open an issue on the repository.
