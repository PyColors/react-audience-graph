import { ApiResponse } from "./api-response";

export interface ApiResponseDetail<T> extends ApiResponse {
  data: T;
}
