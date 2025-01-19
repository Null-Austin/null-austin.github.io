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
        },
        'Dice': {
            'title': 'Dice',
            'Desc': 'A weirdly complicated rng game made with python',
            'Link': 'https://github.com/Null-Austin/Dice'
        },
        'Chess.com reporter': {
            'title': 'Chess.com reporting system',
            'Desc': 'report any chess.com user, but doesnt get them banned or does nothing, meant to be more of connected to an exstention',
            'Link': 'https://github.com/Null-Austin/Chess.com-reporting-system'
        },
        'Chess.com image stats': {
            'title': 'Chess account stats to image',
            'Desc': 'Converts your chess.com stats into a photo! for example: github.',
            'Link': 'https://github.com/Null-Austin/chess-to-image'
        }
    };

    Object.keys(projects).forEach(projectKey => {
        const project = projects[projectKey];
        let html = `<p><a href="${project.Link}">${project.title}</a> - ${project.Desc}</p>`;

        document.getElementById('projects').innerHTML += html;
    });
});
