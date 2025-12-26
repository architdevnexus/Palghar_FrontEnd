import { create } from "zustand";

export const useTestimonialStore = create((set) => ({
    testimonial: [],
    loading: false,
    error: null,

    fetchTestimonial: async () => {
        try {
            set({ loading: true, error: null });

            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}/api/testimonials/all`
            );


            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            set({
                testimonial: data?.testimonials,
                loading: false,
            });
        } catch (err) {
            set({
                error: err.message || "Failed to load testimonials",
                loading: false,
            });
        }
    },
}));
