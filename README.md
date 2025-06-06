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
- 🔄 **Boilerplate Redux**: At first, we handled async logic using Redux Thunks, which followed this flow:

Services → Thunks → Slices → Custom Hook → Components

❌ This structure was verbose, repetitive, and hard to maintain.

✅ We migrated to **RTK Query**, simplifying everything to:

RTK Query API Slice → Auto-generated Hooks → Components

- 🔁 **Caching Strategy**:  
  By splitting out large vendor libraries like `react.js` into separate chunks, browsers can **cache them long-term**. So if the code hasn't changed, they won't be re-downloaded — improving load times for repeat visits.

By splitting large vendor files (like `react.js`) into separate chunks, browsers can cache them. So when code doesn’t change, users don’t re-download them — improving load time.

- 🌍 **Dynamic Routing and Layouts**: Managing nested routes with layout wrappers required a clean component and router structure.
- 📦 **Tree-shaking and unused code**: Fine-tuning Vite config helped reduce unused code via better chunking.

---

## 📈 Performance Optimizations

- ✅ Reduced main bundle size from **704 KB → 340 KB**
- ✅ Applied `manualChunks` via Vite to split React, Chakra, and Icons
- ✅ Enabled browser caching for unchanged libraries
- ✅ Used **RTK Query** for built-in caching, retries, and state normalization
- ✅ Lazy loaded large route components
- ![Screenshot 2025-05-02 at 9 00 10 PM](https://github.com/user-attachments/assets/20229c93-6594-40c3-b064-74767462373f)

![Screenshot 2025-05-02 at 9 00 27 PM](https://github.com/user-attachments/assets/1337e0bc-d5cd-4c4d-8fdb-4aafaa381744)

## 📸 Screenshots

<img width="1416" alt="Screenshot 2025-05-02 at 9 30 12 PM" src="https://github.com/user-attachments/assets/887d3e32-a942-40e8-97f4-851200dc8fdf" />

<img width="1425" alt="Screenshot 2025-05-02 at 9 30 44 PM" src="https://github.com/user-attachments/assets/28138605-6d75-4aed-81b7-14cfc75d9691" />

<img width="275" alt="Screenshot 2025-05-02 at 9 32 03 PM" src="https://github.com/user-attachments/assets/d77d6d7d-1e39-4257-9351-38168fa141d6" />

<img width="273" alt="Screenshot 2025-05-02 at 9 31 40 PM" src="https://github.com/user-attachments/assets/8533c2dc-0163-4058-85f8-5761e8b406cf" />

---

## 🧪 Getting Started

```bash
# Clone the repository
git clone https://github.com/KaranMeghe/game-hub.git
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
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/karan-meghe-015610209/)

---
