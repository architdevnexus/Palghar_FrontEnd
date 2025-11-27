import { instance } from "./index.js"
import { endPoints } from "./endpoints.jsx";

export const auth = {
  login: (body) => {
    return instance.post(endPoints.auth.loginUser, body)
  },
  signup: (body) => {
    return instance.post(endPoints.auth.signupUser, body)
  }
}


export const main = {
  allData: (body) => {
    return instance.get(endPoints.main.allData, body)
  },
  enquiry: (body) => {
    return instance.post(endPoints.main.enquiry, body)
  }
}