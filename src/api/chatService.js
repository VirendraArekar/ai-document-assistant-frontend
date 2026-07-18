import api from "./axios";

export const askAI = async (question) => {
    const response = await api.post("/chat", {
        question
    });
    return response.data;
};

export const getChatHistory = async () => {
    const response = await api.get("/chat/history");
    return response.data;
};