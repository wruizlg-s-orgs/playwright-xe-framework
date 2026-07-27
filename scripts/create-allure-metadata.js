const fs = require('fs');

const allureDir = 'allure-results';

if (!fs.existsSync(allureDir)) {
    fs.mkdirSync(allureDir);
}

fs.writeFileSync(
    `${allureDir}/environment.properties`,
    `Environment=LOCAL
Browser=Multiple
Framework=Playwright
Language=TypeScript
CI=false
`
);

fs.writeFileSync(
    `${allureDir}/executor.json`,
    JSON.stringify(
        {
            name: 'Local Execution',
            type: 'local',
            buildOrder: 1,
            buildName: 'Playwright Local',
            reportName: 'Playwright Automation Report',
        },
        null,
        2
    )
);

console.log('Allure metadata created successfully');
