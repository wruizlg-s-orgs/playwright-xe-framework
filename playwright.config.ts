import { defineConfig, devices } from '@playwright/test';

import { validateEnvironmentSafety } from './helpers/environmentSafety';
import { validateConfig } from './helpers/configValidator';
import { printEnvironment } from './helpers/environmentReporter';

validateEnvironmentSafety();

validateConfig();

printEnvironment();

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        [
            'html',
            {
                outputFolder: 'playwright-report',
                open: 'never',
            },
        ],

        [
            'junit',
            {
                outputFile: 'test-results/results.xml',
            },
        ],

        [
            'allure-playwright',
            {
                resultsDir: 'allure-results',

                detail: true,

                suiteTitle: true,
            },
        ],

        ['list'],
    ],

    metadata: {
        project: 'Playwright XE Automation Framework',

        environment: process.env.ENVIRONMENT || 'local',

        framework: 'Playwright',

        language: 'TypeScript',
    },

    use: {
        baseURL: process.env.BASE_URL || 'http://localhost:3000',

        trace: process.env.CI ? 'retain-on-failure' : 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',
    },

    projects: [
        {
            name: 'chromium',

            testIgnore: ['**/tests/api/**'],

            use: {
                ...devices['Desktop Chrome'],
            },
        },

        {
            name: 'firefox',

            testIgnore: ['**/tests/api/**'],

            use: {
                ...devices['Desktop Firefox'],
            },
        },

        {
            name: 'webkit',

            testIgnore: ['**/tests/api/**'],

            use: {
                ...devices['Desktop Safari'],
            },
        },

        {
            name: 'api',

            testMatch: ['**/tests/api/**/*.spec.ts'],

            workers: 1,

            use: {
                baseURL: process.env.API_URL || 'http://localhost:4000',
            },
        },
    ],

    webServer: [
        {
            command: 'npm run start',

            url: 'http://localhost:3000',

            timeout: 30000,

            reuseExistingServer: !process.env.CI,
        },

        {
            command: 'npm run start:api',

            url: 'http://localhost:4000/api/users',

            timeout: 30000,

            reuseExistingServer: !process.env.CI,
        },
    ],
});
