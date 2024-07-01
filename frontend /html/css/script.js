<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Runner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Code Runner</h1>
        <div class="form-group">
            <label for="language">Select Language:</label>
            <select id="language">
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <!-- Add more languages as needed -->
            </select>
        </div>
        <div class="form-group">
            <label for="code">Enter your code:</label>
            <textarea id="code" placeholder="Write your code here..."></textarea>
        </div>
        <button id="runButton">Run Code</button>
        <pre id="output"></pre>
    </div>
    <script src="script.js"></script>
</body>
</html>







style.css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1 {
    text-align: center;
    color: #333;
}

label {
    display: block;
    margin-top: 20px;
    font-weight: bold;
}

select, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

textarea {
    height: 200px;
    resize: vertical;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    font-size: 18px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

pre {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 4px;
    white-space: pre-wrap;
    margin-top: 20px;
}









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




