import fs from 'node:fs';
import path from 'node:path';

const reportHistory = path.join('allure-report', 'history');
const resultsHistory = path.join('allure-results', 'history');

try {
    if (fs.existsSync(reportHistory)) {
        fs.mkdirSync('allure-results', { recursive: true });

        fs.cpSync(reportHistory, resultsHistory, {
            recursive: true,
            force: true,
        });

        console.log('✅ Previous Allure history restored.');
    } else {
        console.log('ℹ️ No previous Allure history found.');
    }
} catch (error) {
    console.error('❌ Failed to restore Allure history.');
    console.error(error);
    process.exit(1);
}
