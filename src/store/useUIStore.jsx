import { create } from "zustand";

/*
  Global UI Store to manage:
  - Global loading spinner
  - Global toast system
*/

export const useUIStore = create((set) => ({
  isLoading: false,
  setLoading: (state) => set({ isLoading: state }),

  toast: null, // { message, type }
  showToast: (message, type = "info") =>
    set({ toast: { message, type } }),

  hideToast: () => set({ toast: null }),
}));
