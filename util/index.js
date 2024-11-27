import fs from 'fs';
import inquirer from 'inquirer';
import generateHTML from './template.js';

async function addProject() {
    const project = await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter project name:',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Enter link to project:',
            name: 'projectLink',
        },
    ]);
    return project;
}

async function main() {
    const answers = await inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',   

        message: 'What is your LinkedIn URL?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'github',
    },
    {
        type: 'confirm',   

        message: 'Would you like to add projects?',
        name: 'addProjects',
        default: false,
    },
]);
if (answers.addProjects) {
    const projects = [];
    let addMore = true;

    do {
        const project = await addProject();
        projects.push(project);

        addMore = await inquirer.prompt([
            {
            type: 'confirm',
            message: 'Do you want to add another project?',
            name: 'addAnother',
            default: false,
            },
        ]).then((confirm) => confirm.addAnother);
        } while (addMore);

        answers.projects = projects;
    }

    fs.writeFile('index.html', generateHTML(answers), (err) => {
        if (err) {
        console.error(err);
        } else {
        console.log(colors.green('Success!'));
        }
    });
}

main();