const { test, expect } = require('@playwright/test');

test('Launch application', async ({ page }) => {
    await page.goto('https://www.zensar.com/za-en');

    await page.getByAltText('Open Chatbot').click();
    await page.goBack();
  
});
