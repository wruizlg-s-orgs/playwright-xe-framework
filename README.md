# 🎭 Playwright QA Automation Framework

A professional QA Automation framework built with **Playwright + TypeScript**, focused on UI and REST API automation testing, following scalable automation practices such as **Service Layer Pattern**, **Test Data Builders**, **Fixtures**, and **CI/CD execution with GitHub Actions**.

---

# 🚀 Tech Stack

- **Playwright** - End-to-end and API automation framework
- **TypeScript** - Strong typing and maintainable test code
- **Node.js** - Runtime environment
- **REST API Testing** - Backend validation
- **Express.js** - Mock API server for testing
- **GitHub Actions** - Continuous Integration pipeline
- **HTML Reports** - Test execution reports

---

# 📂 Project Structure

```
playwright-xe-framework
│
├── app
│   ├── server.js              # Mock web application server
│   └── api-server.js          # Mock REST API server
│
├── data
│   ├── factories              # Test data generation
│   └── endpoints.ts           # API endpoints definitions
│
├── fixtures
│   ├── api.fixture.ts         # API test fixture
│   └── auth.fixture.ts        # Authentication fixture
│
├── helpers
│   ├── ApiClient.ts           # API client abstraction
│   └── TestDataBuilder.ts     # Test data creation helper
│
├── models
│   ├── User.ts
│   ├── CreateUserRequest.ts
│   ├── UpdateUserRequest.ts
│   ├── AuthResponse.ts
│   └── LoginUser.ts
│
├── services
│   └── UserService.ts          # API service layer
│
├── tests
│   ├── api
│   │   ├── users.spec.ts
│   │   ├── profile.spec.ts
│   │   └── crud
│   │       └── users-crud.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# ✨ Features

## API Automation

- REST API testing with Playwright Request API
- CRUD validation:
    - Create User
    - Retrieve User
    - Update User
    - Delete User
- HTTP status validation
- Response body validation

## Test Architecture

Implemented automation design patterns:

### Service Layer Pattern

Business actions are centralized in services.

Example:

```
UserService
 ├── create()
 ├── getById()
 ├── update()
 └── delete()
```

Benefits:

- Less duplicated code
- Easier maintenance
- Better scalability

### Fixtures

Custom Playwright fixtures provide reusable test dependencies:

- API client initialization
- Authentication handling
- Shared test setup

### Test Data Factory

Dynamic test data generation:

Example:

```
User_1784912978794
user_1784912978794@test.com
```

Benefits:

- Independent tests
- No dependency between executions
- Better parallel execution

---

# 🔐 Authentication Testing

The framework includes authentication validation using:

- Login endpoint
- Token generation
- Authenticated API requests

Flow:

```
Login
  |
  v
Receive Token
  |
  v
Configure API Client
  |
  v
Execute Authenticated Requests
```

---

# 🧪 Running Tests

## Install dependencies

```bash
npm install
```

---

## Run all tests

```bash
npm test
```

Runs:

- UI tests
- API tests
- All configured Playwright projects

---

## Run API tests only

```bash
npx playwright test --project=api
```

---

## Run CRUD API tests

```bash
npx playwright test tests/api/crud/users-crud.spec.ts
```

---

## Run specific browser

Chromium:

```bash
npx playwright test --project=chromium
```

Firefox:

```bash
npx playwright test --project=firefox
```

WebKit:

```bash
npx playwright test --project=webkit
```

---

# 🔎 TypeScript Validation

Validate TypeScript compilation:

```bash
npx tsc --noEmit
```

---

# 📊 Test Reports

Generate and open Playwright HTML report:

```bash
npx playwright show-report
```

The framework generates:

- Execution summary
- Failed test details
- Screenshots
- Traces (when enabled)

---

# ⚙️ CI/CD Pipeline

The project uses **GitHub Actions**.

Pipeline steps:

```
Checkout repository

        ↓

Install Node.js

        ↓

Install dependencies

        ↓

Install Playwright browsers

        ↓

TypeScript validation

        ↓

Execute Playwright tests

        ↓

Upload HTML report
```

Workflow location:

```
.github/workflows/playwright.yml
```

---

# 🏗️ API Mock Server

The project contains a local Express API server used for automation testing.

Start API server manually:

```bash
npm run start:api
```

API URL:

```
http://localhost:4000
```

Available endpoints:

```
GET     /api/users
GET     /api/users/:id
POST    /api/users
PUT     /api/users/:id
DELETE  /api/users/:id
POST    /login
GET     /profile
```

---

# 🧩 Environment

Default configuration:

```
Web Application:
http://localhost:3000

API Server:
http://localhost:4000
```

---

# 📈 Automation Strategy

This framework follows QA automation best practices:

✅ Independent tests  
✅ Maintainable architecture  
✅ Reusable components  
✅ API abstraction layer  
✅ Dynamic test data  
✅ CI/CD execution  
✅ Cross-browser testing  
✅ Type-safe automation

---

# 👨‍💻 Author

**Wagner Ruiz de Jesus**

Senior QA Automation Engineer

Experience in:

- Web automation
- API testing
- Test strategy
- Quality engineering
- CI/CD pipelines

```

```
