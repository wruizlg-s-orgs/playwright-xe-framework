# 🎭 Playwright QA Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-45ba63?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node.js-22-green?logo=node.js)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions)
![Allure Report](https://img.shields.io/badge/Report-Allure-orange)
![License](https://img.shields.io/badge/license-MIT-blue)

A production-ready QA Automation Framework built with **Playwright + TypeScript**, following modern automation engineering practices for **UI**, **API**, **CI/CD**, **cross-browser execution**, and **advanced reporting**.

The framework was designed using scalable architecture patterns commonly adopted by mature QA Engineering teams.

---

# 🚀 Features

## UI Automation

- Cross-browser testing
    - Chromium
    - Firefox
    - WebKit
- Page Object Model (POM)
- Reusable Fixtures
- Parallel execution
- Trace collection
- Screenshot on failure
- Video recording (configurable)

---

## API Automation

- REST API testing
- Request Context API
- CRUD validation
- Authentication testing
- Status code validation
- Response body validation
- Schema validation ready

---

## Reporting

- Playwright HTML Report
- Allure Report
- Allure Categories
- Environment metadata
- Executor metadata
- Execution history
- Trend charts
- GitHub Pages publishing

---

## CI/CD

GitHub Actions pipeline including:

- Checkout
- Dependency installation
- ESLint validation
- TypeScript validation
- Playwright browsers installation
- Parallel browser execution
- API execution
- Allure Report generation
- Artifact publishing
- GitHub Pages deployment

---

# 🛠 Tech Stack

| Technology     | Purpose              |
| -------------- | -------------------- |
| Playwright     | UI & API Automation  |
| TypeScript     | Programming Language |
| Node.js        | Runtime              |
| Express.js     | Mock API             |
| GitHub Actions | CI/CD                |
| Allure Report  | Reporting            |
| ESLint         | Static Analysis      |
| Prettier       | Code Formatting      |

---

# 📂 Project Structure

```text
playwright-xe-framework
│
├── .github
│   └── workflows
│       └── playwright.yml
│
├── allure-config
│   └── categories.json
│
├── app
│   ├── server.js
│   └── api-server.js
│
├── data
│   ├── endpoints.ts
│   └── factories
│
├── fixtures
│   ├── api.fixture.ts
│   └── auth.fixture.ts
│
├── helpers
│   ├── ApiClient.ts
│   └── TestDataBuilder.ts
│
├── models
│   ├── User.ts
│   ├── LoginUser.ts
│   ├── AuthResponse.ts
│   ├── CreateUserRequest.ts
│   └── UpdateUserRequest.ts
│
├── pages
│
├── services
│   └── UserService.ts
│
├── tests
│   ├── api
│   └── ui
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 🏗 Framework Architecture

The project follows a layered architecture.

```text
Tests
   │
   ▼
Pages
   │
   ▼
Services
   │
   ▼
API Client
   │
   ▼
Playwright
```

For API tests:

```text
Tests

      │

      ▼

Fixtures

      │

      ▼

UserService

      │

      ▼

ApiClient

      │

      ▼

REST API
```

---

# ✨ Design Patterns

The framework uses several automation engineering best practices.

## ✅ Page Object Model (POM)

UI interactions are centralized inside page objects.

Benefits:

- Better maintenance
- Cleaner tests
- Reusable components

---

## ✅ Service Layer Pattern

Business operations are abstracted into service classes.

Example:

```text
UserService

 ├── login()

 ├── create()

 ├── update()

 ├── delete()

 └── getProfile()
```

Advantages:

- Business abstraction
- Reusability
- Easy maintenance

---

## ✅ Fixtures

Custom Playwright Fixtures provide:

- Authentication
- API Context
- Shared setup
- Shared teardown

This keeps tests clean and independent.

---

## ✅ Test Data Builder

Dynamic test data generation avoids collisions.

Example:

```text
User_173894718934

user173894718934@test.com
```

Benefits:

- Parallel execution
- Independent tests
- Repeatable executions

---

# 🔐 Authentication Flow

Authentication is performed once and reused during execution.

```text
Login

   │

   ▼

Receive JWT Token

   │

   ▼

API Context

   │

   ▼

Authenticated Requests
```

Supported validations:

- Successful login
- Invalid credentials
- Protected endpoints
- Token reuse

---

# 🧪 Running Tests

## Install dependencies

```bash
npm install
```

## Install Playwright browsers

```bash
npx playwright install
```

## Run all tests

```bash
npm test
```

## Run API tests

```bash
npx playwright test --project=api
```

## Run Chromium

```bash
npx playwright test --project=chromium
```

## Run Firefox

```bash
npx playwright test --project=firefox
```

## Run WebKit

```bash
npx playwright test --project=webkit
```

## Run a single spec

```bash
npx playwright test tests/api/crud/users-crud.spec.ts
```

## Debug mode

```bash
npx playwright test --debug
```

## Headed mode

```bash
npx playwright test --headed
```

## UI Mode

```bash
npx playwright test --ui
```

---

# 📊 Test Reports

The framework supports multiple reporting strategies to provide visibility into test execution.

---

# 🎭 Playwright HTML Report

Playwright provides a built-in HTML report with detailed execution information.

Generate and open the report:

```bash
npx playwright show-report
```

The report provides:

- Test execution summary
- Failed test analysis
- Screenshots
- Videos
- Traces
- Execution timeline
- Test steps
- Browser information

---

# 📈 Allure Report Integration

This framework integrates **Allure Report** for advanced test reporting and CI visibility.

Allure provides:

- Test execution dashboard
- Historical trends
- Test suites organization
- Environment information
- Executor information
- Categories
- Duration analysis
- Test attachments

Generate Allure report locally:

```bash
allure generate allure-results --clean -o allure-report
```

Open Allure locally:

```bash
allure serve allure-results
```

---

# 🌐 Allure Report with GitHub Pages

The CI pipeline automatically publishes the Allure report using GitHub Pages.

Architecture:

```text
Developer Push

        ↓

GitHub Actions

        ↓

Execute Playwright Tests

        ↓

Collect Allure Results

        ↓

Generate Allure Report

        ↓

Deploy gh-pages Branch

        ↓

Public Quality Dashboard
```

The published report contains:

- Total executed tests
- Passed tests
- Failed tests
- Browser execution matrix
- Test suites
- Environment information
- CI executor
- Execution trends

---

# 📊 Allure Historical Trend

The framework maintains execution history between pipeline runs.

Historical files:

```text
history/

├── history.json

├── history-trend.json

├── duration-trend.json

├── retry-trend.json

└── categories-trend.json
```

Benefits:

- Detect flaky tests
- Analyze regression stability
- Compare executions
- Monitor automation health

Example:

```text
Build #52

23 tests

100% passed


Build #53

23 tests

100% passed
```

Trend visualization allows tracking automation quality over time.

---

# 🧪 Test Organization Strategy

Tests are organized by business capability.

Example:

```text
tests

├── api

│   ├── authentication

│   ├── users

│   └── profile


└── ui

    ├── login

    ├── dashboard

    └── checkout
```

Advantages:

- Easier maintenance
- Business-oriented structure
- Better scalability
- Clear ownership

---

# 🏷 Test Tagging Strategy

The framework supports test categorization using Playwright tags.

Example:

```typescript
test('@smoke login should authenticate user', async ({ page }) => {});
```

Recommended tags:

```text
@smoke

@regression

@critical

@api

@ui

@integration
```

Execute smoke tests:

```bash
npx playwright test --grep @smoke
```

Execute regression tests:

```bash
npx playwright test --grep @regression
```

---

# ⚡ Parallel Execution

The framework supports parallel execution to reduce feedback time.

Configuration example:

```typescript
fullyParallel: true;
```

Browser execution matrix:

```text
Chromium

Firefox

WebKit
```

Benefits:

- Faster CI pipeline
- Independent execution
- Better scalability
- Reduced regression time

---

# 🌍 Environment Configuration

The framework supports multiple environments.

Example:

```text
.env.dev

.env.qa

.env.stage

.env.prod
```

Execution example:

```bash
ENVIRONMENT=qa npm test
```

Example configuration:

```text
ENVIRONMENT=QA

WEB_URL=http://localhost:3000

API_URL=http://localhost:4000
```

Benefits:

- Same automation suite across environments
- Easier deployment validation
- Reduced configuration duplication

---

# 🔐 Secrets Management

Sensitive data is managed using GitHub Actions Secrets.

Example:

```text
QA_API_URL

QA_USERNAME

QA_PASSWORD
```

Usage:

```yaml
env:
    API_PASSWORD: ${{ secrets.QA_PASSWORD }}
```

Benefits:

- Secure credentials handling
- No secrets committed to repository
- Enterprise-ready CI/CD

---

# ⚙️ GitHub Actions Pipeline

The automation pipeline is located at:

```text
.github/workflows/playwright.yml
```

Pipeline execution:

```text
Checkout Repository

        ↓

Setup Node.js

        ↓

Install Dependencies

        ↓

ESLint Validation

        ↓

TypeScript Validation

        ↓

Install Playwright Browsers

        ↓

Execute API Tests

        ↓

Execute UI Tests

        ↓

Upload Allure Results

        ↓

Generate Allure Report

        ↓

Publish Report Artifact

        ↓

Deploy GitHub Pages
```

---

# 🧩 Quality Gates

The pipeline validates:

## Code Quality

Using ESLint:

```bash
npm run lint
```

## Type Safety

Using TypeScript:

```bash
npx tsc --noEmit
```

## Automated Validation

Using Playwright:

```bash
npm test
```

## Reporting

Using Allure:

```bash
allure generate
```

The pipeline prevents delivery when quality checks fail.

---

# 🏗 Mock API Server

The project contains a local Express server used for API automation.

Start API server:

```bash
npm run start:api
```

API URL:

```text
http://localhost:4000
```

Available endpoints:

```text
GET     /api/users

GET     /api/users/:id

POST    /api/users

PUT     /api/users/:id

DELETE  /api/users/:id

POST    /login

GET     /profile
```

---

# 🐳 Docker Ready Architecture

The framework structure is prepared for container execution.

Future execution model:

```text
Developer Machine

        ↓

Docker Container

        ↓

Playwright Execution

        ↓

GitHub Actions

        ↓

Quality Report
```

Benefits:

- Consistent environments
- Faster onboarding
- Reproducible executions

---

# 🚀 Future Improvements Roadmap

## UI Automation

Planned:

- Component Object Pattern
- Visual Regression Testing
- Accessibility Testing
- Better locator strategy

---

## API Automation

Planned:

- JSON Schema Validation
- Contract Testing
- API Mocking
- API Performance Validation

---

## Performance Testing

Possible integrations:

- k6
- Grafana
- Load testing pipelines

---

## Security Testing

Future improvements:

- Dependency scanning
- OWASP validation
- Security quality gates

---

## CI/CD Improvements

Future enhancements:

- Scheduled nightly regression
- Slack notifications
- Test analytics dashboard
- Docker execution
- Cloud browser execution

---

# 🏆 Project Highlights

This framework demonstrates:

✅ Modern Playwright architecture  
✅ TypeScript automation framework  
✅ UI and API automation  
✅ Service Layer Pattern  
✅ Custom Fixtures  
✅ Test Data Builders  
✅ Cross-browser testing  
✅ Parallel execution  
✅ CI/CD automation  
✅ Allure reporting  
✅ GitHub Pages deployment  
✅ Quality Engineering practices

---

# 👨‍💻 Author

**Wagner Ruiz de Jesus**

Senior QA Automation Engineer

Professional experience:

- QA Automation Strategy
- Quality Engineering
- API Testing
- Performance Testing
- Web/mobile Automation
- CI/CD Pipelines
- Test Framework Architecture
- Agile Testing

---

# 📄 License

This project is intended for:

- Professional portfolio
- Technical demonstrations
- QA Automation studies

License:

```text
MIT License
```
