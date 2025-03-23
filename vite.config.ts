import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin(["BASE_URL"])],
  server: {
    port: 3001,
  },
  base: "",
});
