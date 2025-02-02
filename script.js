const jsonData = {
    "name": "Roshan Rijal",
    "email": "rijalroshan94@gmail.com",
    "linkedin": "https://www.linkedin.com/in/roshan-rijal-4219629a/"
};

document.addEventListener('DOMContentLoaded', () => {
    const jsonDisplay = document.getElementById('json-display');
    jsonDisplay.textContent = JSON.stringify(jsonData, null, 2);
});
