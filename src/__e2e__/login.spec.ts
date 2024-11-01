import { expect, test } from "@playwright/test";

test.describe("Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("has login button", async ({ page }) => {
    await expect(page.getByRole("button", { name: /Login/i })).toBeVisible();
  });
});
