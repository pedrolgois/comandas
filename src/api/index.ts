import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COMANDAS_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use((response) =>  response, (error) => {
  if (error?.response?.status === 401) {
    window.location.href = "/login";
  }
  return Promise.reject(error);
});
