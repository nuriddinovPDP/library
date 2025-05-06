import axios from "axios";

export const API = axios.create({
    baseURL: "https://books-backend-production-6f61.up.railway.app"
})
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
