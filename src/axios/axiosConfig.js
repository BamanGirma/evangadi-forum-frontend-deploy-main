import axios from "axios";
const port = import.meta.env.VITE_PORT


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default axiosInstance;
