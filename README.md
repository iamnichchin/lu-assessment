# 🌟 **Lu Wingz Assessment**

Welcome to the **Lu Wingz Assessment** project! This is a part of the Assessment on Automation on Wingz.


## 📂 **Project Structure**

```plaintext
├── .github/
│   └── workflows/
│       └── playwright.yml  
├── tests/                   
│   └── myProfile.spec.js 
├── pages/          
│   └── myProfilePage.js
├── fixtures/          
│   └── setup.js
├── utils/          
│   └── testData.js
├── configs/          
│   └── dev.js
│   └── staging.js
│   └── prod.js
├── playwright.config.js    
├── package.json       
├── .gitignore               
```

- **.github/workflows/playwright.yml** = the GitHub Actions workflow file that automates your Playwright test runs every time you push code or open a pull request — it's how CI/CD (Continuous Integration/Delivery) is done right in GitHub.
- **./tests/** = Test Files. Scripts are here
- **./pages/** = Page Object Model (POM) files, each representing a single page or section of your app. (components, selectors, actions that are reusable)
- **./fixtures/** =  used to share context, such as logged-in states or test data. (login, logout)
- **./utils/** = general-purpose utilities and reusable logic
- **./configs/** = stores environment-specific settings, URLs, test users, or timeouts
- **playwright.config.js** = controls Playwright’s behavior, like browser settings, test directories, retries, and more.
- **package.json** = dependencies, scripts, project metadata
- **.gitignore** = preventing to commit node_modules, .env, test_results, or any file that you add here
- **README.md** = THIS! ✨ It shows you everything



---

## 🛠️ **Setup**

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd lu-wingz-assessment
   ```


2. **Install dependencies**:
   ```
   npm install
   ```

3. **Install Playwright browsers**:
   ```
   npx playwright install --with-deps
   ```

---

## 🚀 **Running Tests**

**Run all tests by TEST_ENV:**
   ```
   TEST_ENV=assessment npx playwright test
   ```

**Generate an HTML report**
   ```
   npx playwright show-report
   ```

---

## 🚀 **GitHub Actions**

This project includes a CI workflow using GitHub Actions. The workflow is defined in .github/workflows/playwright.yml. It runs tests on every push or pull request to the main or master branch.

## 📜 **Playwright Configuration**

The Playwright configuration is defined in the `playwright.config.js` file. Below are the key features of the configuration:

- **Parallel Test Execution** 🏃‍♂️: Tests are executed in parallel to speed up the testing process.
- **Retry Failed Tests** 🔄: Automatically retries failed tests to ensure reliability.
- **HTML Reporting** 📊: Generates detailed HTML reports for test results.
- **Cross-Browser Testing** 🌐: Supports testing on multiple browsers, including:
  - **Chromium** (Google Chrome, Microsoft Edge)
  - **Firefox**
  - **WebKit** (Safari)

You can customize the configuration by modifying the `playwright.config.js` file to suit your project needs.


