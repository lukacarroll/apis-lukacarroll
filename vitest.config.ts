import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

import { defineConfig } from "vitest/config";

export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["@testing-library/jest-dom", "./vitest.setup.ts"],
      mockReset: true
    }
  };
});
