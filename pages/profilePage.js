const { expect } = require("@playwright/test"); // Import expect from Playwright

class ProfilePage {
  constructor(page) {
    this.page = page;

    // Selectors
    this.myProfileHeader = "h2";
    this.riderName = "div.rider-name";
    this.myProfileTab = 'a[href="/account/profile"]';
    this.firstNameInput = 'input[name="firstName"]';
    this.lastNameInput = 'input[name="lastName"]';
    this.locationInput = 'input[name="location"]';
    this.bioInput = 'textarea[name="bio"]';
  }

  // Click the "My Profile" Tab
  async clickyMyProfileTab() {
    await this.page.click(this.myProfileTab);
    await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the profile page is loaded
  }

  // Verify the profile page content
  async verifyProfilePageContent(expectedHeader, expectedRiderName) {
    await expect(this.page.locator(this.myProfileHeader)).toHaveText(
      expectedHeader
    );
    await expect(this.page.locator(this.riderName)).toHaveText(
      expectedRiderName
    );
  }

  // Verify the value of the "firstName" input field
  async verifyFirstName(expectedFirstName) {
    const firstNameValue = await this.page.inputValue(this.firstNameInput);
    if (firstNameValue !== expectedFirstName) {
      throw new Error(
        `Expected firstname to be "${expectedFirstName}", but got "${firstNameValue}"`
      );
    }
  }

  // Verify the value of the "firstName" input field
  async verifyLastName(expectedLastName) {
    const lastNameValue = await this.page.inputValue(this.lastNameInput);
    if (lastNameValue !== expectedLastName) {
      throw new Error(
        `Expected firstname to be "${expectedLastName}", but got "${firstNameValue}"`
      );
    }
  }

  // Verify the value of the "location" input field
  async verifyLocation() {
    const locationValue = await this.page.inputValue(this.locationInput);
    if (locationValue.trim() === "") {
      console.log("Location field is blank or has no value.");
    } else {
      throw new Error(
        `Expected location field to be blank, but got "${locationValue}"`
      );
    }
  }

  // Verify the value of the "bio" input field
  async verifyBio() {
    const bioValue = await this.page.inputValue(this.bioInput);
    if (bioValue.trim() === "") {
      console.log("Bio field is blank or has no value.");
    } else {
      throw new Error(`Expected bio field to be blank, but got "${bioValue}"`);
    }
  }
}

module.exports = ProfilePage;
