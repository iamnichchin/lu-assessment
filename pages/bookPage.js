const { expect } = require('@playwright/test'); // Import expect from Playwright

class BookPage {
  constructor(page) {
    this.page = page;

    // Selectors
    this.accountLink = 'a[href="/account"]';
    this.riderName = "div.rider-name";
    this.riderEmail = "div.rider-email";
  }

  // Click the "Account" hyperlink
  async clickAccount() {
    await this.page.click(this.accountLink);
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the navigation is complete
  }

  // Verify the rider name
  async verifyRiderName(expectedName) {
    await expect(this.page.locator(this.riderName)).toHaveText(expectedName);
  }

  // Verify the rider email
  async verifyRiderEmail(expectedEmail) {
    await expect(this.page.locator(this.riderEmail)).toHaveText(expectedEmail);
  }
}

module.exports = BookPage;
