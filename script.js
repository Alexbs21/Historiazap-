const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const messageText = messageInput.value.trim();

    if (messageText) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "user-message");
        messageElement.innerHTML = `<span class="name">Você:</span><span class="text">${messageText}</span>`;
        chatBox.appendChild(messageElement);

        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
