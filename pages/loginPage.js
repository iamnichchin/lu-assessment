class LoginPage {
  constructor(page, baseURL) {
    this.page = page;
    this.baseURL = baseURL;
    // Selectors
    this.usernameInput = '#username'; 
    this.passwordInput = '#password'; 
    this.loginButton = 'role=button[name="Sign In"]'; 
  }

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto(`${this.baseURL}`);
  }

  // Fill in the username
  async enterUsername(email) {
    await this.page.fill(this.usernameInput, email);
  }

  // Fill in the password
  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  // Click the login button
  async clickLoginButton() {
    await this.page.locator(this.loginButton).click();
  }

  // Perform login
  async login(email, password) {
    await this.enterUsername(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
    await this.page.waitForTimeout(3000);; // Wait for the page to load completely
  }
}

module.exports = LoginPage;