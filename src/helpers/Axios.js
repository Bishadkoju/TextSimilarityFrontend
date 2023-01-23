import axios from "axios";
import { statusActions } from "../actions/statusActions";

import store from "../store";

const status = store.getState().status;

export const baseURL = "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    //console.log("interceptor ", error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  function (response) {
    console.log(response);
      store.dispatch(statusActions.changeStatus("connected"));
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    console.log(error.response);
    if (error.response && error.response.status === 503) {
        store.dispatch(statusActions.changeStatus("loading"));
    } else {
      store.dispatch(statusActions.changeStatus("disconnected"));
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
