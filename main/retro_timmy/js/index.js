document.addEventListener('DOMContentLoaded', () => {
    const projects = {
        'BestJS': {
            'title': 'BestJS',
            'Desc': 'My favorite JavaScript library, to simply make JS!',
            'Link': 'https://github.com/Null-Austin/BestJS'
        },
        'Quick VSCODE': {
            'title': 'Quick VSCODE',
            'Desc': 'A quick way to load up VSCODE',
            'Link': 'https://chromewebstore.google.com/detail/quick-vscode/mcppolgkeojkenmalifhoabdlpjbkfko'
        }
    };

    Object.keys(projects).forEach(projectKey => {
        const project = projects[projectKey];
        let html = `<p><a href="${project.Link}">${project.title}</a> - ${project.Desc}</p>`;

        document.getElementById('projects').innerHTML += html;
    });
});
