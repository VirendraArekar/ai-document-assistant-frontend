import api from "./axios";

export const uploadDocument = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/documents/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getDocuments = async (page = 0, search = "") => {
  const response = await api.get("/documents", {
    params: {
      page,
      search,
    },
  });

  return response.data;
};

export const deleteDocument = async (id) => {
  return api.delete(`/documents/${id}`);
};

export const downloadDocument = async (id) => {
  return api.get(`/documents/download/${id}`, {
    responseType: "blob",
  });
};
