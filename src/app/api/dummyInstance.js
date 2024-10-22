import axios from "axios";

const axiosConfig = {
  baseURL: "https://reqres.in/api",
};

const instance = axios.create(axiosConfig);

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // const token = cookieStore.get("token"); // Get token from localStorage
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`; // Set token in headers
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
