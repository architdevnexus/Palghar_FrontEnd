import { create } from "zustand";

export const useMainStore = create((set) => ({
  projectdata: [],
  loading: false,
  error: null,

  // Fetch all properties and projects
  fetchAllData: async (params = {}) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    // console.log(BASE_URL)
    set({ loading: true, error: null });

    try {
      // Construct query string if params exist
      const queryString = new URLSearchParams(params).toString();
      const url = `${BASE_URL}/api/propertandprojects/all${queryString ? `?${queryString}` : ""}`;

      const res = await fetch(url);
      if (!res.ok) {
        const errorText = await res.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText };
        }
        throw new Error(errorData.message || "Failed to fetch data");
      }

      const data = await res.json();
      set({ projectdata: data?.data, loading: false });
    } catch (err) {
      console.error("FetchAllData Error 👉", err);
      set({
        error: err.message || "Failed to fetch data",
        loading: false,
      });
    }
  },
}));
