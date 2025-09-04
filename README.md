# Playwright + Cucumber BDD (JavaScript)

## Project Overview
This repository contains automated UI test cases for [SauceDemo](https://www.saucedemo.com), built with **Playwright** and **Cucumber (BDD)** in JavaScript.  
It uses a **Page Object Model (POM)** for maintainability and supports **screenshots & reports** (Playwright + Allure) for failed steps.  

---

## Tech Stack
- Playwright (JavaScript) → Browser automation  
- Cucumber (BDD) → Business-readable test scenarios  
- Page Object Model (POM) → Clean test structure  
- Allure Reports → Rich HTML reporting with screenshots & labels  
- GitHub Actions → CI/CD integration (optional)  

---

## Project Structure

src/
├── features/ # Gherkin feature files (BDD scenarios)
│ └── login.feature
│ └── cartAndCheckout.feature
│
├── pages/ # Page Object classes
│ └── loginPage.js
│ └── cartAndcheckoutPage.js
│
├── steps/ # Step definitions (Given/When/Then)
│ └── login.steps.js
│ └── cartAndcheckoutPage.steps.js
│
├── support/ # Cucumber hooks & world
│ └── env.js
│ └── hooks.js
│ └── world.js
|
├── utils/ # Utilities
│ └── base.util.js
│ └── screenshot.util.js


reports/ # Screenshots & reports
playwright-report/ # Playwright native reports
allure-results/ # Raw results for Allure
allure-report/ # Generated Allure HTML report

---

## Automated Test Scenarios
### Login
- Successful login with valid credentials  
- Login failure with invalid credentials  
- Locked-out user login attempt  

### Cart & Checkout 
- Add item(s) to cart  
- Proceed to checkout with customer details  
- Verify order confirmation  
- Finish checkout and validate success message    

---

## Setup & Run Tests
1. Clone this repo:
   git clone https://github.com/<your-username>/playwright-cucumber-bdd.git
   cd playwright-cucumber-bdd

2. Install dependencies:
   npm install

3. Run BDD tests:
   npx cucumber-js

4. Run Playwright tests (native mode):
   npx playwright test

Reports & Screenshots
* Playwright report → playwright-report/index.html
* Screenshots → stored automatically for failed steps under reports/screenshots/
* Allure Report:
   -- Generate:  
      npx allure generate allure-results --clean -o allure-report
   -- Open (manual):
      npx allure open allure-report
   -- Or serve directly:
      npx allure serve allure-results

On Windows, if allure open fails to launch the browser automatically, just copy the URL printed in the console and open it manually, or run:
start "" ".\allure-report\index.html"


CI/CD
--> Example GitHub Actions workflow is inside .github/workflows/ to run tests on every push.

## Portfolio Value
Demonstrates Playwright + Cucumber (BDD) integration
Uses POM design for maintainable tests
Includes Playwright & Allure reports, screenshots, CI/CD hooks
Real-world QA workflow example, easily extendable to API & Performance testing