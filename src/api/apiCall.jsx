// src/api/api.js
import { instance } from "./axios";
import { endPoints } from "./endpoints";

/* ===========================
   AUTH API CALLS
=========================== */

export const auth = {
  getInTouch: (body) =>
    instance.post(endPoints.auth.getInTouch, body),

  newsLetter: (body) =>
    instance.post(endPoints.auth.newsLetter, body),
};

/* ===========================
   MAIN API CALLS
=========================== */

export const main = {
  allData: (params = {}) =>
    instance.get(endPoints.main.allData, { params }),

  enquiry: (body) =>
    instance.post(endPoints.auth.enquiry, body),

  testimonial: (params = {}) =>
    instance.get(endPoints.main.testimonial, { params }),
};
