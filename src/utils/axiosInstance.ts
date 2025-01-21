import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { LANGUAGE_LOCAL_STORAGE_KEY } from "@/hooks/useSelectedLanguage";

const TOKEN_LOCAL_STORAGE_KEY = "token";
const LOGIN_PATH = "/login";

export const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Accept-Language"] = localStorage.getItem(
      LANGUAGE_LOCAL_STORAGE_KEY,
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response?.status === StatusCodes.UNAUTHORIZED &&
      !window.location.pathname.includes(LOGIN_PATH)
    ) {
      window.location.href = LOGIN_PATH;
    }
    return Promise.reject(error);
  },
);
