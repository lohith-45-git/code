// Offline Chatbot Knowledge Base
const responses = {
    "hello": "Hello! How can I help you?",
    "hi": "Hi there! 😊",
    "how are you": "I'm doing great! Thanks for asking.",
    "your name": "I'm MiniChat, your offline chatbot!",
    "who are you": "I am a simple offline chatbot created using HTML, CSS & JS.",
    "bye": "Goodbye! Have a nice day! 👋"
};

// Function to send user message
function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user");
    input.value = "";

    setTimeout(() => {
        addMessage(getBotResponse(message), "bot");
    }, 500);
}

// Add message to chat box
function addMessage(text, sender) {
    let chatBox = document.getElementById("chatBox");

    let msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);
    msgDiv.innerText = text;

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Get bot response
function getBotResponse(userText) {
    userText = userText.toLowerCase();

    for (let key in responses) {
        if (userText.includes(key)) {
            return responses[key];
        }
    }

    return "Sorry, I didn't understand that. 🤔";
}
