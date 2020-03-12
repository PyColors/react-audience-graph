import Axios from "../config/axios";
import { AuthResponse } from "../interfaces/api/auth-response.interface";
import { API_AUTH } from "../constants/constants";

export const find = async (): Promise<AuthResponse> => {
  const { data } = await Axios().get(API_AUTH);
  return data;
};
