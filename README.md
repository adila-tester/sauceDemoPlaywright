# SauceDemo Playwright Tests

A Playwright and TypeScript practice project that automates login scenarios for [SauceDemo](https://www.saucedemo.com/).

## Project Status

The project currently contains UI login tests for the SauceDemo authentication page. The login actions are organized using the Page Object Model (POM), with tests covering successful login, locked-out users, user variants, missing credentials, and invalid credentials.

At present:

- Login UI test coverage is implemented.
- Tests use TypeScript and Playwright Test.
- A basic login page object is available.
- Chromium, Firefox, and WebKit projects are configured.
- An HTML Playwright report is generated.
- GitHub Actions runs the test suite on pushes and pull requests.
- API test coverage and tests for inventory, cart, and checkout flows have not been implemented yet.

## Test Coverage

The login test suite covers:

- Valid login
- Locked-out user
- Problem user
- Performance glitch user
- Error user
- Visual user
- Empty username
- Empty password
- Invalid username
- Invalid password
- Both credentials empty

The tests are located in [`tests/ui/login.spec.ts`](tests/ui/login.spec.ts).

## Technologies

- Node.js
- TypeScript
- Playwright Test
- GitHub Actions

## Prerequisites

- Node.js
- npm
- Playwright browsers

## Installation

```powershell
npm ci
npx playwright install
```

On Linux or Windows CI environments, browser system dependencies may also be required:

```powershell
npx playwright install --with-deps
```

## Running the Tests

Run the complete test suite:

```powershell
npx playwright test
```

Run only the login tests:

```powershell
npx playwright test tests/ui/login.spec.ts
```

Run tests in a visible browser:

```powershell
npx playwright test --headed
```

Run tests in Chromium only:

```powershell
npx playwright test --project=chromium
```

## Test Report

Open the HTML report after a test run:

```powershell
npx playwright show-report
```

The report is also generated under `playwright-report/`.

## Project Structure

```text
.github/workflows/playwright.yml  # GitHub Actions test workflow
pages/loginPage.ts               # Login page object
playwright.config.ts             # Playwright configuration and browser projects
tests/ui/login.spec.ts           # SauceDemo login tests
package.json                     # Project dependencies
```

## CI/CD

The GitHub Actions workflow in `.github/workflows/playwright.yml` installs dependencies and browsers, runs all Playwright tests, and uploads the HTML report. It runs for pushes and pull requests targeting `main` or `master`.

## Planned Improvements

- Add npm scripts for common test commands
- Use a shared `baseURL` configuration
- Rename classes and types to match TypeScript conventions
- Reuse the page object in every login test
- Add inventory and product tests
- Add cart and checkout tests
- Add API tests
- Add test data and environment configuration
- Add a more detailed project description and screenshots
