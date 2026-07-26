import fs from 'fs';

const folder = 'allure-results';

if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
}


fs.writeFileSync(
    `${folder}/environment.properties`,
`Environment=QA
Browser=Multiple
Framework=Playwright
Language=TypeScript
CI=Local`
);


fs.writeFileSync(
    `${folder}/executor.json`,
JSON.stringify(
{
    name: "Local Execution",
    type: "local",
    buildName: "Playwright Local Run",
    reportName: "Playwright Automation Report"
},
null,
2)
);


console.log('Allure metadata generated successfully');