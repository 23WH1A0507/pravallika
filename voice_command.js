### Voice Command Feature Example

Hi Team,

I've implemented a basic example of voice command functionality using the Web Speech API. This code allows users to request an ambulance or find the nearest hospital using voice commands.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AmbuFlow Voice Command</title>
</head>
<body>
    <h1>AmbuFlow Voice Command Integration</h1>
    <button id="start-button">Start Listening</button>
    <p id="output"></p>

    <script>
        const output = document.getElementById('output');
        const startButton = document.getElementById('start-button');

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            output.textContent = "Sorry, your browser doesn't support speech recognition.";
            startButton.disabled = true;
        } else {
            const recognition = new SpeechRecognition();

            recognition.onstart = () => {
                output.textContent = "Listening...";
            };

            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                output.textContent = `You said: "${command}"`;
                handleCommand(command);
            };

            recognition.onerror = (event) => {
                output.textContent = `Error occurred: ${event.error}`;
            };

            recognition.onend = () => {
                output.textContent += " Listening ended.";
            };

            startButton.onclick = () => {
                recognition.start();
            };
        }

        function handleCommand(command) {
            if (command.includes("help me find an ambulance")) {
                output.textContent = "Requesting an ambulance...";
            } else if (command.includes("locate the nearest hospital")) {
                output.textContent = "Finding nearest hospital...";
            } else {
                output.textContent = "Command not recognized.";
            }
        }
    </script>
</body>
</html>
