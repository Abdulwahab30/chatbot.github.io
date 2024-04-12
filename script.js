document.addEventListener("DOMContentLoaded", function() {
    const userInput = document.getElementById("user-message");
    const sendButton = document.getElementById("send-btn");
    const chatHistory = document.querySelector(".chat-history");


    function addMessage(message, sender) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(sender);
        messageElement.innerText = message;
        chatHistory.appendChild(messageElement);

        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message !== "") {
            addMessage(message, "user");

            setTimeout(() => {
                const chatbotResponse = "This is a sample response from the chatbot.";
                addMessage(chatbotResponse, "chatbot");
            }, 500);
            userInput.value = ""; 
        }
    }

    // Event listener for send button click
    sendButton.addEventListener("click", function() {
        handleUserInput();
    });

    // Event listener for pressing Enter key in the input field
    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});
