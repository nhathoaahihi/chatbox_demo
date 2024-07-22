import { createChatBotMessage } from "react-chatbot-kit";
const botName = 'Chatbox CloudGo';
export const config = {
    initialMessages: [createChatBotMessage(`Hey there! I'm ${botName}`)],
    botName: botName,
};
