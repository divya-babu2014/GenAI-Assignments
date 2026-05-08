import { test, expect } from '@playwright/test';

test('Learn Nested Frame - Click button inside nested frame', async ({ page }) => {
  // Load the url
  await page.goto('https://leafground.com/frame.xhtml');

  // Set viewport size (equivalent to maximize)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Get the outer frame using XPath
  const outerFrameLocator = page.frameLocator("//h5[text()=' Click Me (Inside Nested frame)']/following-sibling::iframe");

  // Get the inner (nested) frame
  const innerFrameLocator = outerFrameLocator.frameLocator('iframe').first();

  // Click the button inside the nested frame
  await innerFrameLocator.locator('#Click').click();

  // Verify the action was successful (optional)
  // You can add assertions here based on the expected behavior

  // Switch back to main page context
  // Simply use page.locator() to work with main page content
  const mainPageElements = page.locator('body');
  await expect(mainPageElements).toBeVisible();
});
