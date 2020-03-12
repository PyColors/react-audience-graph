import { Action, action, Thunk, thunk } from "easy-peasy";

import { Ips } from "../interfaces/ips.interface";
import { InjectionModel } from "./injection.model";
import { StoreModel } from "./store.model";

export interface IpsModel {
  isLoading: boolean;
  setIsLoading: Action<IpsModel, boolean>;
  items: Ips[];
  setItems: Action<IpsModel, Ips[]>;
  discuss: Thunk<IpsModel, void, InjectionModel, StoreModel>;
  reset: Action<IpsModel, void>;
}

export const defaultItem = [];
export const loadingStatus = false;

export const ipsModel: IpsModel = {
  items: defaultItem,
  isLoading: loadingStatus,

  setIsLoading: action(state => {
    state.isLoading = !state.isLoading;
  }),

  setItems: action((state, items) => {
    state.items = items;
  }),

  reset: action(state => {
    state.items = defaultItem;
  }),

  discuss: thunk(
    async (actions, _void, { injections: { ipsService }, getStoreState }) => {
      actions.setIsLoading(loadingStatus);
      const token = getStoreState().auth.token;

      try {
        const { data } = await ipsService.findAll(token);
        actions.setItems(data);
      } catch (e) {
        console.log(e);
      }
      actions.setIsLoading(loadingStatus);
    }
  )
};
