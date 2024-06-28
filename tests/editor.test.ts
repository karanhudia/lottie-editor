import { test, expect } from '@playwright/test';

test.describe('editor page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto(
      'http://localhost:3000/lottie-editor/#/edit/2695edef-6e38-4840-a11a-e54e0a380c31',
    );
  });

  test('navigation', async ({ page }) => {
    await expect(page).toHaveURL(
      'http://localhost:3000/lottie-editor/#/edit/2695edef-6e38-4840-a11a-e54e0a380c31',
    );

    await expect(page).toHaveTitle(/Lottie Editor/);
  });

  test('nested layers', async ({ page }) => {
    await expect(page.getByText('Layers')).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(8); // Layers
    await expect(page.getByRole('radio')).toHaveCount(6); // Colors
  });

  test('layer selection and colors', async ({ page }) => {
    // Select a layer
    await page.getByRole('button', { name: 'l hand' }).click();
    // Layer color should be visible
    await expect(page.getByRole('radio')).toHaveCount(1); // Colors
  });

  test('editing controls', async ({ page }) => {
    await expect(page.getByText('Speed')).toBeVisible();
    await expect(page.getByText('Share Lottie')).toBeVisible();
    await expect(page.getByText('Export JSON')).toBeVisible();

    await expect(page.locator('div:nth-child(5) > div').first()).toBeVisible();
    await page.locator('[id="\\:r3\\:"]').check();
    await page.getByLabel('Color').locator('div').first().click();
  });
});
