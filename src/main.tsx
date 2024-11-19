import "@/styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Router } from "@/components/Router/Router";
import { IntlProvider } from "@/components/IntlProvider/IntlProvider";
import { queryClient } from "@/utils/queryClient";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IntlProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </HelmetProvider>
    </IntlProvider>
  </React.StrictMode>,
);
