import Axios from "../config/axios";
import { IPS_API_URL } from "../constants/constants";
import { IpsResponse } from "../interfaces/api/ips-response.interface";

export const findAll = async (token: string): Promise<IpsResponse> => {
  const { data } = await Axios(token).post(IPS_API_URL);
  return data;
};
