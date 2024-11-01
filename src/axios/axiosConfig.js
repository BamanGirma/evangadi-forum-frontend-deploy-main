import axios from "axios";
const port = import.meta.env.VITE_PORT


const axiosInstance = axios.create({
  baseURL: `http://localhost:5500/api`,
});

export default axiosInstance;
