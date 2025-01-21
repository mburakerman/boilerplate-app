import { expect, test } from "@playwright/test";
import { loginFixture } from "@/__e2e__/auth";

test.beforeEach(async ({ page }) => {
  await loginFixture({ page });
});

test.describe("Login", () => {
  test("has login button", async ({ page }) => {
    await expect(page.getByRole("button", { name: /Login/i })).toBeVisible();
  });
});
