import { createBrowserRouter, redirect } from "react-router";
import { RootLayout } from "@/layouts/RootLayout.tsx";
import { About } from "@/pages/about.tsx";
import { Index } from "@/pages/index.tsx";
import { Login } from "@/pages/login.tsx";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary.tsx";
import { NotFound } from "@/pages/404.tsx";

const authLoader = () => {
  const isLogged = true;

  if (!isLogged) {
    throw redirect("/login");
  }

  return null;
};

export const Router = createBrowserRouter([
  {
    path: "/",
    loader: authLoader,
    Component: RootLayout,
    ErrorBoundary,
    children: [
      { index: true, Component: Index },
      { path: "about", Component: About },
    ],
  },
  {
    path: "login",
    Component: Login,
    ErrorBoundary,
  },
  { path: "*", Component: NotFound },
]);
