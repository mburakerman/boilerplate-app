import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { IntlProvider } from "@/components/IntlProvider/IntlProvider";
import { MemoryRouter } from "react-router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const render = (ui: React.ReactNode, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <IntlProvider>
            <MemoryRouter>{children}</MemoryRouter>
          </IntlProvider>
        </HelmetProvider>
      </QueryClientProvider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

// override render method
export { render };
