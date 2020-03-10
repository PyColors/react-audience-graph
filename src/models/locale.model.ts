import { Action, action } from "easy-peasy";

import { getUserLocale } from "../lang/locale";

export interface LocaleModel {
  item: string;
  setItem: Action<LocaleModel, string>;
}

export const defaultItem = getUserLocale();

export const localeModel: LocaleModel = {
  item: defaultItem,
  setItem: action((state, item) => {
    state.item = item;
  })
};
