import axios from "axios";
const port = import.meta.env.VITE_PORT
const baseURL = import.meta.env.MODE === "development" ? "/api" : "https://evangadi-forum-backend-main.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
