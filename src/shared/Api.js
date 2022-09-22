import axios from "axios";
import { getCookie } from "./Cookie";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use((config) => {
  const token = getCookie("ACCESS_TOKEN");
  const refreshToken = getCookie("REFRESH_TOKEN");

  config.headers.Authorization = token;
  config.headers.Refreshtoken = refreshToken;

  return config;
});