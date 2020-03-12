import * as authService from "../services/auth.service";
import * as ipsService from "../services/ips.service";

export interface InjectionModel {
  authService: typeof authService;
  ipsService: typeof ipsService;
}

export const injectionModel: InjectionModel = {
  authService,
  ipsService
};
