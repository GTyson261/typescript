import { test, expect } from '@playwright/test';

test('Form loads correctly', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await expect(page.locator('#firstName'))
    .toBeVisible();
});