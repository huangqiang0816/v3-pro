import axios from "axios";

const instance = axios.create({
  timeout: 60 * 1000,
  baseURL: "localhost:3000",
});

instance.interceptors.request.use(
  (requset) => {
    return requset;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (reponse) => {
    return reponse;
  },
  (error) => {
    return error;
  }
);

export default instance;
