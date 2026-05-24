// @ts-check
import { test, expect } from '@playwright/test';
import { Agent } from 'node:http';
import { fileURLToPath } from 'node:url';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  const T1 = await page.title();
  console.log(`Titile 1 is : ${T1}`);
});


test("first test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const T2 = await page.title();
  console.log(`Title 2 is : ${T2}`);
})



test("Nevigation", async ({ page }) => {
  await page.goto("https://www.youtube.com/")
  await expect(page).toHaveTitle(/YouTube/);
  await page.waitForTimeout(5000);
  await page.goto("https://www.facebook.com/")
  await page.waitForTimeout(2000);
  await page.goBack();
  await page.waitForTimeout(2000);
  await page.goForward();
  await page.reload();
  console.log(await page.title());
  console.log(await page.url());
})



test.only("locatorByInbulitMethod", async ({ page }) => {
  await page.goto("https://www.facebook.com/");
  await page.getByRole("textbox", { name: "Email address or mobile number" }).fill("namratakumbhar1512@gamil.com");
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: "Password" }).fill("kumbhar@345");
  await page.locator('//div[@aria-label="Show password"]').click();
  await page.waitForTimeout(5000);
  await page.getByText("Log in").nth(1).click();
  await page.waitForTimeout(1000);
})