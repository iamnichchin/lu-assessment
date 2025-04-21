// fixtures/loginFixture.js
const base = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const { getConfig } = require('../utils/loadConfig');

const config = getConfig(process.env.TEST_ENV || 'assessment');
const { email, password } = config.credentials;

exports.test = base.test.extend({
  loggedInPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page, config.baseURL);
    await loginPage.navigateToLoginPage();
    await loginPage.login(email, password);
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the login is complete

    await use(page);

    await page.close();
  }
});