//create axios api instance
import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:8000",
});
