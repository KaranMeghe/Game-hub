/** @format */

import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from './components/ui/provider.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const GameDetails = lazy(() => import('./Pages/GameDetails.tsx'));

const HomeLayout = lazy(() => import('./components/HomeLayout.tsx'));

const ErrorPage = lazy(() => import('./Pages/ErrorPage.tsx'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomeLayout />
          </Suspense>
        ),
      },
      {
        path: 'gameinfo/:id',
        element: (
          <Suspense>
            <GameDetails />
          </Suspense>
        ),
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
