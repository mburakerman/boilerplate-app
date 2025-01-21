import { Page } from "@playwright/test";

type LoginFixtureOptions = {
  readonly page: Page;
};

type LoginFixture = (options: LoginFixtureOptions) => Promise<void>;

export const loginFixture: LoginFixture = async ({ page }) => {
  await page.goto("/login");
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill("user@example.com");
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill("pass18345");
  await page.getByRole("button", { name: "Login", exact: true }).click();
};
