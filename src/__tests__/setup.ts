import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@/__tests__/testUtils";

// extend vitest's expect with @testing-library/jest-dom's matchers
expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// re-export everything, including the custom render from testUtils
export { render };
