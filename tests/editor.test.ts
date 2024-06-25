import { test, expect } from '@playwright/test';

test.describe('editor page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(
      'http://localhost:3000/lottie-editor/random#/edit/4237dad5-98a6-4dbd-b304-0d5b6494efe7',
    );
  });

  test('navigation', async ({ page }) => {
    await expect(page).toHaveURL(
      'http://localhost:3000/lottie-editor/random#/edit/4237dad5-98a6-4dbd-b304-0d5b6494efe7',
    );

    await expect(page).toHaveTitle(/Lottie Editor/);
  });

  test('nested layers', async ({ page }) => {
    await expect(page.getByText('Layers')).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(8);
  });

  test('editing controls', async ({ page }) => {
    await expect(page.getByText('Speed')).toBeVisible();
    await expect(page.getByText('Scale')).toBeVisible();
    await expect(page.getByText('Export JSON')).toBeVisible();

    await expect(page.getByRole('radiogroup').locator('span').nth(2)).toBeVisible();
    await page.getByRole('radiogroup').locator('span').nth(2).click();
    await expect(page.locator('div:nth-child(5) > div:nth-child(3)')).toBeVisible();
    await page.getByLabel('Color').locator('div').first().click();
  });
});
