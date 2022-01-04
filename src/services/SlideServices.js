import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/emaferr/Rent-To_Buy",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getSlides() {
    return apiClient.get("/slides");
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getLessor() {
    return apiClient.get("/lessor");
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getLessee() {
    return apiClient.get("/lessor");
  },
};
