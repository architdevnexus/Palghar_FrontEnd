// api/axios.js
import axios from "axios";
import { useAppStore } from "../store/authStore";

// Create axios instance
export const instance = axios.create({
  baseURL: "https://your-api-url.com", // 🔥 Add your API URL
  timeout: 15000,
});

// REQUEST INTERCEPTOR
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Attach token to header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Enable global loader
    useAppStore.getState().setLoading(true);

    return config;
  },
  (error) => {
    useAppStore.getState().setLoading(false);
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
instance.interceptors.response.use(
  (response) => {
    useAppStore.getState().setLoading(false);

    // Auto-success toast
    useAppStore.getState().setToast({
      type: "success",
      message: response?.data?.message || "Success",
    });

    return response;
  },
  (error) => {
    useAppStore.getState().setLoading(false);

    useAppStore.getState().setToast({
      type: "error",
      message:
        error?.response?.data?.message ||
        "Something went wrong. Please try again.",
    });

    return Promise.reject(error);
  }
);
