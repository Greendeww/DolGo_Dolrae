import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true
})
api.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('Authorization')
    const RefreshToken = localStorage.getItem('RefreshToken')
    config.headers.common['Authorization'] = `${accessToken}`;
    config.headers.common['RefreshToken'] = `${RefreshToken}`;
    return config;
});
export const getApi = (path, config) => {
    return api.get(path, config)
}
export const postApi = (path, data, config) => {
    return api.post(path, data, config)
}
export const patchApi = (path, data, config) => {
    return api.patch(path, data, config)
}
export const putApi = (path, data, config) => {
    return api.put(path, data, config)
}
export const deleteApi = (path, config) => {
    return api.delete(path, config)
}
export default api