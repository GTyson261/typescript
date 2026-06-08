import { test, expect } from '@playwright/test';

test('Login Demo', async ({ page }) => {

console.log('Opening login page...');
await page.goto(
'https://practicetestautomation.com/practice-test-login/'
);

await page.waitForTimeout(1000);

console.log('Typing username...');
await page.fill('#username', 'student');

await page.waitForTimeout(1000);

console.log('Typing password...');
await page.fill('#password', 'Password123');

await page.waitForTimeout(1000);

console.log('Clicking login button...');
await page.click('#submit');

await page.waitForTimeout(1000);

console.log('Checking login success...');
await expect(page.locator('h1'))
.toContainText('Logged In Successfully');

console.log('Test Passed!');

await page.waitForTimeout(2000);

});
