const fs = require('fs');
const path = require('path');

const historySource = path.join('allure-report', 'history');
const historyTarget = path.join('allure-results', 'history');

if (fs.existsSync(historySource)) {
    fs.cpSync(historySource, historyTarget, {
        recursive: true,
    });

    console.log('✓ Allure history restored.');
} else {
    console.log('No previous history found.');
}