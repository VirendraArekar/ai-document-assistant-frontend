import api from "./axios";

export const uploadDocument = async (file, onUploadProgress) => {
    const formData = new FormData();
    formData.append("file", file);
    return api.post("/documents/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
};

export const getDocuments = async () => {
    return api.get("/documents");
};

export const deleteDocument = async (id) => {
    return api.delete(`/documents/${id}`);
};