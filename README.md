# Playwright + Cucumber BDD (JavaScript)

## Project Overview
This repository contains automated UI test cases for [SauceDemo](https://www.saucedemo.com), built with **Playwright** and **Cucumber (BDD)** in JavaScript.  
It uses a **Page Object Model (POM)** for maintainability and supports screenshots & reports for failed steps.  

---

## Tech Stack
- Playwright (JavaScript) → Browser automation  
- Cucumber (BDD) → Business-readable test scenarios  
- Page Object Model (POM) → Clean test structure  
- GitHub Actions → CI/CD integration (optional)  

---

## Project Structure

src/
├── features/ # Gherkin feature files (BDD scenarios)
│ └── login.feature
│
├── pages/ # Page Object classes
│ └── loginPage.js
│
├── steps/ # Step definitions (Given/When/Then)
│ └── login.steps.js
│
└── support/ # Cucumber hooks & world
├── env.js
├── hook.js
└── world.js

reports/ # Custom screenshots & reports
playwright-report/ # Playwright native reports
tests/ # Native Playwright test examples

---

## Automated Test Scenarios
### Login
- Successful login with valid credentials  
- Login failure with invalid credentials  
- Locked-out user login attempt  

### Cart & Checkout 
- Add item(s) to cart  
- Remove item from cart  
- Checkout and verify total price  
- Complete order and validate success message  

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
* Custom screenshots → reports/screenshots/

CI/CD
--> Example GitHub Actions workflow is inside .github/workflows/ to run tests on every push.

## Portfolio Value
Demonstrates Playwright + Cucumber (BDD) integration
Uses POM design for maintainable tests
Includes reports, screenshots, CI/CD hooks for real-world QA workflows
Can be extended to cover API + Performance testing