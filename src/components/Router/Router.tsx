import { createBrowserRouter, RouteObject } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout.tsx";
import { About } from "@/pages/about.tsx";
import { Index } from "@/pages/index.tsx";
import { Login } from "@/pages/login.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.tsx";
import { PrivateRoute } from "@/components/PrivateRoute/PrivateRoute.tsx";
import { NotFound } from "@/pages/404.tsx";

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
      element: <Index />,
    },
    {
      path: "about",
      element: <About />,
    },
  ],
};

const publicRoutes: RouteObject[] = [
  {
    path: "login",
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
