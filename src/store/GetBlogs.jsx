import { create } from "zustand";

export const useBlogs = create((set) => ({
  loading: false,
  blogData: [],
  error: null,

  getBlog: async (params = {}) => {
    try {
      set({ loading: true, error: null });

      const query = new URLSearchParams(params).toString();
      const url = `${import.meta.env.VITE_BASE_URL}/api/blog/all${query ? `?${query}` : ""}`;

      const res = await fetch(url);
      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg || "Error fetching blogs");
      }

      const ans = await res.json();
      set({ blogData: ans.blogs || [], loading: false, error: null });
    } catch (error) {
      console.error(error);
      set({ error: error.message || "Something went wrong", loading: false });
    }
  },
}));
