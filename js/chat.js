import { GoogleGenAI } from "https://cdn.jsdelivr.net/npm/@google/genai@1.32.0/+esm";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyAmyKV_I7yFuUm2D1wsFSam6fkf9DOQjCY"
});


const userInput = document.getElementById("userInput");
const btn = document.getElementById("btn");
const userMsg = document.getElementById("messages");
const aiMsg = document.getElementById("typing");

// Create chat session
const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
        systemInstruction: ``
    }
});


btn.addEventListener("click", (e) => {
    const message = document.createElement('div');
    message.className = 'user';

    message.innerText = userInput.value;

    userMsg.appendChild(message);
})

