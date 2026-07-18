import api from "./axios";

export const askQuestion = async (question) => {
  const response = await api.post("/chat", {
    question,
  });

  return response.data;
};

export const getHistory = async () => {
  const response = await api.get("/chat/history");

  return response.data;
};
