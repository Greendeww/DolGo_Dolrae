import axios from "axios";
import { getCookie } from "./Cookie";

export const instance = axios.create({
<<<<<<< HEAD
  baseURL: "15.164.171.189",
=======
  baseURL: process.env.REACT_APP_BASE_URL,
>>>>>>> 0beb71a96ac169fe664f4c3f3243edea555f7a59
  withCredentials: true
});

instance.interceptors.request.use((config) => {
  const token = getCookie("ACCESS_TOKEN");
  const refreshToken = getCookie("REFRESH_TOKEN");

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





