import Axios from "axios";

const axios = Axios.create({
  //Create key VITE_BASE_URL in file .env before development
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 12000000,
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (typeof error !== undefined) {
      if (error.hasOwnProperty("response")) {
        if (error.response.status === 401 || error.response.status === 403) {
          const router = useRouter();
          router.push({
            path: "/login",
          });
        }
      }
    }

    return Promise.reject(error);
  }
);
export default axios;
