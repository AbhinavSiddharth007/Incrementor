import { expect, test } from "@playwright/test";

test("counter interactions work across the home and login pages", async ({
  page,
}) => {
  await page.goto("/");

  const countValue = page.getByTestId("count-value");
  const decrementButton = page.getByTestId("decrement-btn");

  await expect(page.getByRole("heading", { name: /a counter/i })).toBeVisible();
  await expect(countValue).toHaveText("0");
  await expect(decrementButton).toBeDisabled();

  await page.getByTestId("increment-btn").click();
  await expect(countValue).toHaveText("1");

  await page.getByTestId("increment-btn").click();
  await expect(countValue).toHaveText("2");

  await decrementButton.click();
  await expect(countValue).toHaveText("1");

  await page.getByTestId("clear-btn").click();
  await expect(countValue).toHaveText("0");

  await page.goto("/login");

  await expect(
    page.getByRole("heading", { name: /login button press counter/i }),
  ).toBeVisible();
  await expect(page.getByTestId("count-value")).toHaveText("0");
});

test("intentionally fails to prove CI blocks regressions", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("count-value")).toHaveText("0");
  await page.getByTestId("increment-btn").click();
  await expect(page.getByTestId("count-value")).toHaveText("1");

  await expect(page.getByTestId("count-value")).toHaveText("3");
});
