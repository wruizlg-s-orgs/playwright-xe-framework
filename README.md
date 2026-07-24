# Playwright QA Automation Framework

A professional QA Automation framework built with **Playwright**, **TypeScript**, and **REST API testing**, designed with scalable automation patterns commonly used in enterprise environments.

The project demonstrates UI and API automation practices, including service layers, fixtures, test data factories, authentication handling, CI execution, and reporting.

---

# 🚀 Tech Stack

- **Playwright**
- **TypeScript**
- **Node.js**
- **REST API Testing**
- **Express Mock API Server**
- **GitHub Actions**
- **HTML Test Reports**

---

# 📌 Project Features

## UI Automation

- Cross-browser testing:
  - Chromium
  - Firefox
  - WebKit

- Playwright test runner
- Automatic screenshots on failure
- Trace collection
- Video recording on failures
- HTML execution reports


## API Automation

- REST API testing
- CRUD validation
- API request context
- Authentication flow testing
- API fixtures
- Service layer architecture
- Test data factories
- Model-based request/response validation


## Framework Architecture

The framework follows maintainable automation patterns:

- Service Layer Pattern
- Test Data Builder Pattern
- Factory Pattern
- Fixture-based dependency injection
- Separation between:
  - Tests
  - Services
  - Models
  - Data
  - Helpers


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
│   ├── factories              # Test data generators
│   └── endpoints.ts           # API endpoints definition
│
├── fixtures
│   ├── api.fixture.ts         # API test fixture
│   └── auth.fixture.ts        # Authenticated API fixture
│
├── helpers
│   ├── ApiClient.ts           # API communication layer
│   ├── TestDataBuilder.ts     # Test data creation helper
│   └── environment.ts         # Environment configuration
│
├── models
│   ├── AuthResponse.ts
│   ├── CreateUserRequest.ts
│   ├── UpdateUserRequest.ts
│   ├── User.ts
│   └── UserListResponse.ts
│
├── services
│   └── UserService.ts         # Business API operations
│
├── tests
│   ├── api
│   │   ├── users.spec.ts
│   │   ├── profile.spec.ts
│   │   └── crud
│   │       └── users-crud.spec.ts
│   │
│   └── web
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd playwright-xe-framework
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# ▶️ Running Tests

## Run all tests

```bash
npm test
```

---

## Run API tests

```bash
npx playwright test --project=api
```

---

## Run CRUD API tests

```bash
npx playwright test tests/api/crud/users-crud.spec.ts
```

---

## Run tests on a specific browser

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

# 🔍 TypeScript Validation

Run TypeScript compiler validation:

```bash
npx tsc --noEmit
```

This ensures the framework has no TypeScript compilation errors before execution.

---

# 🧪 API Testing Coverage

Implemented API scenarios:

## Users API

### GET Users

Validates:

- Successful response
- Response structure
- User list validation


### Create User

Validates:

- HTTP 201 response
- Generated user ID
- Created user data


### Retrieve User By ID

Validates:

- HTTP 200 response
- Correct user retrieval
- Data consistency


### Update User

Validates:

- HTTP 200 response
- Updated fields
- Correct user identifier


### Delete User

Validates:

- HTTP 204 response
- Successful resource removal


---

# 🔐 Authentication Testing

Authentication flow includes:

- Login request
- Token extraction
- Authenticated API context
- Protected endpoint validation


Example flow:

```
Login
  |
  ↓
Receive token
  |
  ↓
Set Authorization header
  |
  ↓
Access protected resources
```

---

# 🏗️ Framework Design

## ApiClient

Responsible for:

- HTTP communication
- GET requests
- POST requests
- PUT requests
- DELETE requests
- Authentication headers


---

## UserService

Contains business operations:

Example:

```typescript
userService.create()

userService.getById()

userService.update()

userService.delete()
```

This keeps tests clean and focused on validation.


---

## Test Data Factory

Dynamic test data generation:

Example:

```typescript
{
  name: "User_123456",
  email: "user_123456@test.com"
}
```

Benefits:

- Independent tests
- No duplicated data
- Better parallel execution


---

# 🌐 Playwright Configuration

The framework supports:

## Web Tests

Projects:

- Chromium
- Firefox
- WebKit


## API Tests

Dedicated project:

```
api
```

Configuration:

- Single worker execution
- API base URL
- API-specific fixtures


---

# 🔄 CI/CD Pipeline

Implemented with GitHub Actions.

Pipeline steps:

1. Checkout repository
2. Install Node.js
3. Install dependencies
4. Install Playwright browsers
5. Validate TypeScript
6. Execute automated tests
7. Upload HTML reports


Workflow file:

```
.github/workflows/playwright.yml
```

---

# 📊 Test Reports

After execution:

```bash
npx playwright show-report
```

The HTML report provides:

- Test results
- Execution time
- Screenshots
- Videos
- Traces


---

# 📈 Future Improvements

Possible framework enhancements:

- Environment profiles:
  - QA
  - Staging
  - Production

- Docker execution
- Database validation layer
- API schema validation
- Allure reporting
- Parallel API execution strategy
- Test tagging
- Automated test data cleanup


---

# 👨‍💻 Author

**Wagner Ruiz**

QA Automation Engineer

Experience with:

- Software Quality Assurance
- Test Automation
- API Testing
- Web Automation
- CI/CD Practices
- Financial Systems Testing

```
