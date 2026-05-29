import { test, expect } from '@playwright/test';

test('Required field validation', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.click('#login-button');

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('Username is required');

});