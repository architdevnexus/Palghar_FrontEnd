import { instance } from "./index.js";
import { endPoints } from "./endpoints.jsx";

// ------------- AUTH API CALLS -------------
export const auth = {

  getinTouch: async (body) => {
    try {
      const res = await instance.post(endPoints.auth.getinTouch, body)
      return res;
    } catch (error) {
      console.error("getinTouch", error?.response?.data || error.message)
    }
  },
 
  newsLetter: async (body) => {
    try {
      const res = await instance.post(endPoints.auth.newLetter, body)
      return res;
    } catch (error) {
      console.error("NewsLetter", error?.response?.data || error.message)
    }
  }

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
  testimonial:async(body) =>{
    try {
      const res = await instance.post(endPoints.main.testimonial, body);
      return res;
    } catch (error) {
      console.error("testimonial" , err?.response?.data || err.message)
    }
  }
};
