# Chandresh Kumari - Interactive Resume

A visually engaging, interactive web resume built with React, Vite, Chakra UI, and Framer Motion. Easily deployable and production-ready, designed to impress recruiters at top tech companies.

---

## 🚀 Features

- Modern, animated, and responsive design
- Modular React components
- All resume links are accessible and interactive
- Dark mode support
- Easy deployment with Docker

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
