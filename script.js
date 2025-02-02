const jsonData = {
    "name": "Roshan Rijal",
    "title": "Software Engineer",
    "about": "I build high-performance backend systems that never go down... unless they do.",
    "email": "rijalroshan94@gmail.com",
    "linkedin": "https://www.linkedin.com/in/roshan-rijal-4219629a/",
    "github": "https://github.com/rrijal53",
    "disclaimer": "No frontend elements were harmed in the making of this website.",
};

document.addEventListener('DOMContentLoaded', () => {
    const jsonDisplay = document.getElementById('json-display');

    // Create a formatted JSON string with clickable LinkedIn and GitHub URLs
    const formattedJson = JSON.stringify(jsonData, null, 2)
        .replace(/"https:\/\/www\.linkedin\.com\/in\/[^\"]+"/g, (match) => {
            const url = match.slice(1, -1); // Remove the quotes
            return `"${url} ( <a href='${url}' target='_blank'>LinkedIn Profile</a> )"`;
        })
        .replace(/"https:\/\/github\.com\/[^\"]+"/g, (match) => {
            const url = match.slice(1, -1); // Remove the quotes
            return `"${url} ( <a href='${url}' target='_blank'>GitHub Profile</a> )"`;
        });

    jsonDisplay.innerHTML = formattedJson;
});
