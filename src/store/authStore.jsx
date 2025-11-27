// store/appStore.js
import { create } from "zustand";
import { auth } from "../api/apiCall";

export const useAppStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  toast: null,

  // 🔥 GLOBAL LOADER
  setLoading: (value) => set({ loading: value }),

  // 🔥 GLOBAL TOAST HANDLER
  setToast: (toast) => {
    set({ toast });
    setTimeout(() => set({ toast: null }), 3000); // Auto-remove
  },

  // 🔥 LOGIN FUNCTION
  loginUser: async (body) => {
    const res = await auth.login(body);

    const token = res?.data?.token;
    localStorage.setItem("token", token);

    set({ token, user: res?.data?.user });
    return res;
  },

  // 🔥 SIGNUP FUNCTION
  signupUser: async (body) => {
    const res = await auth.signup(body);

    const token = res?.data?.token;
    localStorage.setItem("token", token);

    set({ token, user: res?.data?.user });
    return res;
  },

  // 🔥 LOGOUT
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));
