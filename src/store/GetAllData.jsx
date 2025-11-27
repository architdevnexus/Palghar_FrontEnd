import { create } from "zustand";
import { main } from "../api/apiCall";

export const useMainStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  // Fetch All Data
  fetchAllData: async () => {
    try {
      set({ loading: true, error: null });

      const res = await main.allData();
      set({ data: res.data, loading: false });

    } catch (err) {
      set({ error: err?.response?.data || "Something went wrong", loading: false });
    }
  },

}));
