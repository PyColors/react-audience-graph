import { LocaleModel, localeModel } from "./locale.model";
import { AuthModel, authModel } from "./auth.model";
import { IpsModel, ipsModel } from "./ips.model";

export interface StoreModel {
  locale: LocaleModel;
  auth: AuthModel;
  ips: IpsModel;
}

export const storeModel: StoreModel = {
  locale: localeModel,
  auth: authModel,
  ips: ipsModel
};
