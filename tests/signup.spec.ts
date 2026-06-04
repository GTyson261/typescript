import { test, expect } from '@playwright/test';

test('Form Demo', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.waitForTimeout(1000);

  await page.fill('#firstName', 'Glenn');
  await page.waitForTimeout(1000);

  await page.fill('#lastName', 'Tyson');
  await page.waitForTimeout(1000);

  await page.fill('#userEmail', 'glenn@test.com');
  await page.waitForTimeout(1000);

  await page.click('label[for="gender-radio-1"]');
  await page.waitForTimeout(1000);

  await page.fill('#userNumber', '1234567890');
  await page.waitForTimeout(1000);

  await page.fill('#currentAddress', 'Delaware');
  await page.waitForTimeout(1000);

  await page.click('#submit');

  await expect(
    page.locator('#example-modal-sizes-title-lg')
  ).toContainText('Thanks for submitting the form');

  await page.waitForTimeout(5000); // keep browser open
});