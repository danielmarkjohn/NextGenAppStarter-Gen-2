# NextGenApp Gen 2 - Expanded Full Stack Boilerplate

An upgraded developer-friendly boilerplate with **auth, Redux, Docker, and CI/CD**.

---

## ✨ Features

- **Frontend:** Vite + React + Redux Toolkit + TailwindCSS + Apollo Client
- **Backend:** Express.js + Apollo Server (GraphQL) + MongoDB (Mongoose)
- **Authentication:** JWT-based login & registration
- **Swagger UI** for API documentation
- **Dockerized** for local & production use
- **CI/CD Ready:** GitHub Actions workflow template
- **Generators:** CLI scripts to scaffold components & resolvers

---

## 📂 Folder Structure

<codeblock>
NextGenApp/
  frontend/
    src/
      components/
      store/
  backend/
    src/
      models/
      resolvers/
      middleware/
  infra/
    docker-compose.yml
  scripts/
</codeblock>

---

## 🚀 Getting Started

<codeblock>
# Clone repo
git clone https://github.com/YOURNAME/nextgenapp.git
cd nextgenapp

# Install dependencies
npm run install:all

# Start in dev mode
npm run dev:all
</codeblock>

---

## 🐳 Docker

<codeblock>
docker-compose up --build
</codeblock>

---

## 🧪 Testing

<codeblock>
npm run test
</codeblock>

---

## 📜 License

MIT
