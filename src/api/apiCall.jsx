import { instance } from "./index.js";
import { endPoints } from "./endpoints.jsx";

// ------------- AUTH API CALLS -------------
export const auth = {
  login: async (body) => {
    try {
      const res = await instance.post(endPoints.auth.loginUser, body);
      return res;
    } catch (err) {
      console.error("LOGIN ERROR:", err?.response?.data || err.message);
      throw err;
    }
  },

  signup: async (body) => {
    try {
      const res = await instance.post(endPoints.auth.signupUser, body);
      return res;
    } catch (err) {
      console.error("SIGNUP ERROR:", err?.response?.data || err.message);
      throw err;
    }
  },
};


// ------------- MAIN API CALLS -------------
export const main = {
  // GET should use params, not body
  allData: async (params = {}) => {
    try {
      const res = await instance.get(endPoints.main.allData, { params });
      return res;
    } catch (err) {
      console.error("ALL DATA ERROR:", err?.response?.data || err.message);
      throw err;
    }
  },

  enquiry: async (body) => {
    try {
      const res = await instance.post(endPoints.main.enquiry, body);
      return res;
    } catch (err) {
      console.error("ENQUIRY ERROR:", err?.response?.data || err.message);
      throw err;
    }
  },
};
