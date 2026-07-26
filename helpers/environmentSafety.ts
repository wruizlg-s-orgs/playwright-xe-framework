let validated = false;

export function validateEnvironmentSafety() {
    if (validated) {
        return;
    }

    validated = true;

    const environment = (process.env.ENVIRONMENT ?? 'local')
        .trim()
        .toLowerCase();

    const allowProd =
        (process.env.ALLOW_PROD ?? '').trim().toLowerCase() === 'true';

    if (environment === 'prod' && !allowProd) {
        throw new Error(`

🚨 Production execution blocked.

Current environment: PROD

Production tests require explicit permission.

Execute:

set ENVIRONMENT=prod && set ALLOW_PROD=true && npx playwright test

        `);
    }

    if (process.env.TEST_WORKER_INDEX === undefined) {
        console.log(`

=================================
 Environment Safety
 ENVIRONMENT: ${environment.toUpperCase()}
 PROD ACCESS: ${
     environment === 'prod'
         ? allowProd
             ? 'ENABLED'
             : 'DISABLED'
         : 'NOT REQUIRED'
 }
=================================

`);
    }
}
