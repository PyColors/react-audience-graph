import { LocaleModel, localeModel } from "./locale.model";

export interface StoreModel {
  locale: LocaleModel;
}

export const storeModel: StoreModel = {
  locale: localeModel
};
