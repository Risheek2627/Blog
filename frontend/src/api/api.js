import axios from "axios";

const api = axios.create({
  baseURL: "https://blogging-backend-2s5q.onrender.com",
});

export default api;
