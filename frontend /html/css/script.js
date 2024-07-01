script.js

document.getElementById('runButton').addEventListener('click', async () => {
    const language = document.getElementById('language').value;
    const code = document.getElementById('code').value;
    const outputElement = document.getElementById('output');
    
    outputElement.textContent = 'Running...';

    try {
        const response = await fetch('http://localhost:3000/run-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ language, code })
        });

        if (response.ok) {
            const result = await response.json();
            outputElement.textContent = result.output;
        } else {
            outputElement.textContent = 'Error: Unable to run code';
        }
    } catch (error) {
        outputElement.textContent = 'Error: ' + error.message;
    }
});




