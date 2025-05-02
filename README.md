<!-- @format -->

# 📛 Game Hub

A **RAWG clone** – Game Hub is a modern game browsing and searching application that allows users to explore a wide selection of games, filter them by platform and genre, and view detailed information including critic scores.

---

## 📝 Description

Game Hub is a React-based application where users can:

- Browse popular video games
- Search for games by name
- Filter by platform and genres
- View game details (e.g., rating, screenshots, description)
- See critic scores and supported platforms
- Switch between dark and light mode
- Enjoy a fully responsive layout

---

## ⚙️ Tech Stack

### Frontend

- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) **React**

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) **TypeScript** (for static typing and enhanced development experience)
- ![@types/react](https://img.shields.io/badge/@types/react-61DAFB?style=for-the-badge&logo=react&logoColor=white) **@types/react** (for TypeScript type definitions)
- ![@types/react-dom](https://img.shields.io/badge/@types/react--dom-61DAFB?style=for-the-badge&logo=react&logoColor=white) **@types/react-dom** (for TypeScript type definitions)
- ![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white) **Chakra UI** (for design system)
- ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=for-the-badge&logo=react&logoColor=white) **React Icons**
- ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white) **Redux Toolkit** & **RTK Query** (for state and data fetching)
- ![React Router](https://img.shields.io/badge/React_Router-D63D20?style=for-the-badge&logo=react-router&logoColor=white) **React Router DOM** (for routing)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Vite** (for build and development)
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) **ESLint** (for linting and code quality)

## ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) **Prettier** (for code formatting)

## 🚀 Features

- 🎮 Game List with dynamic fetching
- 🔍 Search functionality
- 📄 Game details page with critic score
- 🎛️ Platform and genre filters
- 🌗 Light/Dark theme support
- 📱 Responsive layout
- ⚡ Optimized performance using code splitting & caching
- **Pagination**: Ability to go back and forward through pages of game listings

---

## 🧠 Challenges Faced

- 🧱 **Large Bundle Size**: Initially, our bundle was too large (704 KB). We fixed this by applying [manual code splitting](https://vitejs.dev/guide/build.html#chunking-strategy) using Vite’s `manualChunks` to split React, Chakra, and Icon libraries into separate chunks, improving caching and reducing main bundle to **340 KB** – nearly **52% reduction**.
- 🔄 **Boilerplate Redux**: Using Redux with thunks was too verbose. We migrated to **RTK Query**, which greatly reduced boilerplate, simplified async fetching logic, and improved **caching and performance**.
- 🔁 **Caching Strategy**: By splitting large vendor files (like `react.js`) into separate chunks, browsers can cache them. So when code doesn’t change, users don’t re-download them — improving load time.
- 🌍 **Dynamic Routing and Layouts**: Managing nested routes with layout wrappers required a clean component and router structure.
- 📦 **Tree-shaking and unused code**: Fine-tuning Vite config helped reduce unused code via better chunking.

---

## 📈 Performance Optimizations

- ✅ Reduced main bundle size from **704 KB → 340 KB**
- ✅ Applied `manualChunks` via Vite to split React, Chakra, and Icons
- ✅ Enabled browser caching for unchanged libraries
- ✅ Used **RTK Query** for built-in caching, retries, and state normalization
- ✅ Lazy loaded large route components

_(You can add performance screenshots here using `![Alt](./screenshot.png)` if needed)_

---

## 📸 Screenshots

_Add screenshots in your project folder and reference them here_
![Desktop](./screenshots/game-hub.png)
![Alt](./screenshots/game-hub-2.png)

---

## 🧪 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/game-hub.git
cd game-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

# Game Hub

## 🔗 Live Demo

👉 [Game Hub Live on Vercel](https://game-hub-zeta-self.vercel.app/)

---

## 👤 Author

- **Name**: Karan Meghe
- **Email**: [karanmeghe@email.com]
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/karan-meghe-015610209/)

---
