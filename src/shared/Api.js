import axios from "axios";
import { getCookie } from "./Cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,

  withCredentials: true
});

// 토큰을 쿠키에 저장할 때
// instance.interceptors.request.use((config) => {
//   const token = getCookie("ACCESS_TOKEN");
//   const refreshToken = getCookie("REFRESH_TOKEN");

//   config.headers.authorization = token;
//   config.headers.refreshtoken = refreshToken;

//   return config;
// });

// 토큰을 로컬 스토리지에 저장할 때
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    const refreshToken = localStorage.getItem("REFRESH_TOKEN");
  
    config.headers.authorization = token;
    config.headers.refreshtoken = refreshToken;
  
    return config;
  });

export const getApi = (path, config) => {
    return instance.get(path, config)
}
export const postApi = (path, data, config) => {
    return instance.post(path, data, config)
}
export const patchApi = (path, data, config) => {
    return instance.patch(path, data, config)
}
export const putApi = (path, data, config) => {
    return instance.put(path, data, config)
}
export const deleteApi = (path, config) => {
    return instance.delete(path, config)
}