const jsonData = {
    "name": "Roshan Rijal",
    "email": "rijalroshan94@gmail.com",
    "linkedin": "https://www.linkedin.com/in/roshan-rijal-4219629a/",
    "github": "https://github.com/rrijal53"
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
