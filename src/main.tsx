/** @format */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from './components/ui/provider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './components/HomeLayout.tsx';
import { ErrorPage } from './components/index.ts';
import GameDetails from './Pages/GameDetails.tsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: 'gameinfo/:id',
        element: <GameDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
);
