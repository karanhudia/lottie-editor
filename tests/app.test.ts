import { test, expect } from '@playwright/test';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000');
  });

  test('navigation', async ({ page }) => {
    await expect(page).toHaveURL('http://localhost:3000');

    await expect(page).toHaveTitle(/Lottie Editor/);
  });

  test('file upload and featured animations', async ({ page }) => {
    await expect(page.getByText('Edit Animation')).toBeVisible();
    await expect(page.getByText('Upload JSON')).toBeVisible();
    await expect(page.getByText('Choose from our featured animations')).toBeVisible();

    await expect(page.getByRole('figure')).toHaveCount(20);
  });

  test('selecting an animation should open editor', async ({ page }) => {
    await page
      .locator('div:nth-child(2) > div > .MuiCardCover-root > div > .MuiBox-root > .MuiButton-root')
      .click();

    await expect(page.getByText('Layers')).toBeVisible();
    await expect(page.getByText('Speed')).toBeVisible();
    await expect(page.getByText('Colors')).toBeVisible();
  });
});
