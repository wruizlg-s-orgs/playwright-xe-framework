import { defineConfig, devices } from '@playwright/test';

import { validateEnvironmentSafety } 
from './helpers/environmentSafety';

import { validateConfig } 
from './helpers/configValidator';

import { printEnvironment }
from './helpers/environmentReporter';



validateEnvironmentSafety();

validateConfig();

printEnvironment();

export default defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    reporter: [

        [
            'html',
            {
                outputFolder: 'playwright-report',
                open: 'never'
            }
        ],

        [
            'junit',
            {
                outputFile: 'test-results/results.xml'
            }
        ],

        [
            'list'
        ]

    ],
    
    use: {

        baseURL:
            process.env.BASE_URL ||
            'http://localhost:3000',

        trace:
            process.env.CI
                ? 'retain-on-failure'
                : 'on-first-retry',
                
        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

    },

    projects: [

        // =========================
        // WEB TESTS
        // =========================

        {

            name: 'chromium',

            testIgnore: [
                '**/tests/api/**'
            ],

            use: {

                ...devices['Desktop Chrome'],

            },

        },

        {

            name: 'firefox',

            testIgnore: [
                '**/tests/api/**'
            ],

            use: {

                ...devices['Desktop Firefox'],

            },

        },

        {

            name: 'webkit',

            testIgnore: [
                '**/tests/api/**'
            ],

            use: {

                ...devices['Desktop Safari'],

            },

        },

        // =========================
        // API TESTS
        // =========================

        {

            name: 'api',

            testMatch: [
                '**/tests/api/**/*.spec.ts'
            ],

            workers: 1,

            use: {

                baseURL:
                    process.env.API_URL ||
                    'http://localhost:4000',
                        
                trace:
                    process.env.CI
                        ? 'retain-on-failure'
                        : 'on-first-retry',

                screenshot: 'only-on-failure',
                    
                video: 'retain-on-failure',


            },

        },

    ],

    // =========================
    // SERVERS
    // =========================

    webServer: [

        {

            command: 'npm run start',

            url: 'http://localhost:3000',

            timeout: 30000,

            reuseExistingServer:
                !process.env.CI,
        },

        {

            command: 'npm run start:api',

            url: 'http://localhost:4000/api/users',

            timeout: 30000,

            reuseExistingServer:
                !process.env.CI,
        },

    ],
    

});