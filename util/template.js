export default function generateHTML(answers) {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Portfolio</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
        <div class="row justify-content-center text-center">
            <div class="col-md-7">
            <h1 class="my-3 text-bg-dark p-3 rounded-4">${answers.name}</h1>
            <p class="lead mt-2">Hi! I'm based out of ${answers.location}.</p>
            <p>I'm currently enrolled in a full stack developer program where I am receiving a crash course in software development. My goal is to gain new skills, develop a portfolio, and ultimately to become a full stack developer.</p>
        `;
    
        if (answers.projects){
            html += '<ul>';
            answers.projects.forEach(project => {
                html += `<li class="btn btn-primary m-2"><a class="text-light" href="${project.projectLink}" target="_blank">${project.projectName}</a></li>\n`;
            });
            html += '</ul>';
        }
    
        html += `
            <p>If you would like to connect, you can reach me here:</p>
            <p><a class="btn btn-secondary" href="${answers.linkedin}" target="_blank">LinkedIn</a> | <a class="btn btn-secondary" href="${answers.github}" target="_blank">GitHub</a></p>
            </div>
        </div>
        </div>
    </body>
    </html>
    `;
    
        return html;
    }