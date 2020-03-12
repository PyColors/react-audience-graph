import Axios, { AxiosInstance } from "axios";

import { API_BASE_URL } from "../constants/constants";

const instance = (token?: string): AxiosInstance =>
  Axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

export default instance;
