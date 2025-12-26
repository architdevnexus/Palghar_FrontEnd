import { create } from "zustand";
import { main } from "../api/apiCall";

export const useMainStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchAllData: async (params = {}) => {
    try {
      set({ loading: true, error: null });

      const res = await main.allData(params);

      set({
        data: res.data,
        loading: false,
      });
    } catch (err) {
      set({
        error:
          err?.response?.data?.message ||
          "Failed to fetch data",
        loading: false,
      });
    }
  },
}));
