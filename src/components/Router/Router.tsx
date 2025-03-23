import { createBrowserRouter, RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout.tsx";
import { About } from "@/pages/About.tsx";
import { Home } from "@/pages/Home.tsx";
import { Login } from "@/pages/Login.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.tsx";
import { PrivateRoute } from "@/components/PrivateRoute/PrivateRoute.tsx";
import { NotFound } from "@/pages/NotFound.tsx";

const privateRoutes: RouteObject = {
  path: "/",
  element: (
    <PrivateRoute>
      <RootLayout />
    </PrivateRoute>
  ),
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
  ],
};

const publicRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorBoundary />,
  },
];

export const Router = createBrowserRouter([
  privateRoutes,
  ...publicRoutes,
  {
    errorElement: <ErrorBoundary />,
  },
]);
