import { Action, action, Computed, computed, Thunk, thunk } from "easy-peasy";
// eslint-disable-next-line @typescript-eslint/camelcase
import jwt_decode from "jwt-decode";

import { User } from "../interfaces/user.interface";
import { Auth } from "../interfaces/auth.interface";
import { InjectionModel } from "./injection.model";

export interface AuthModel {
  item: Auth | undefined;
  user: Computed<AuthModel, User | undefined>;
  token: Computed<AuthModel, string>;
  setItem: Action<AuthModel, Auth>;
  reset: Action<AuthModel, void>;
  fetch: Thunk<AuthModel, undefined, InjectionModel>;
}

export const defaultItem = undefined;
export const defaultToken = "";
export const defaultRoles = [];

export const authModel: AuthModel = {
  item: defaultItem,
  user: computed(state => state.item && jwt_decode(state.item.accessToken)),
  token: computed(state =>
    state.item ? state.item.accessToken : defaultToken
  ),
  setItem: action((state, auth) => {
    state.item = auth;
  }),
  reset: action(state => {
    state.item = defaultItem;
  }),
  fetch: thunk(async (actions, _void, { injections: { authService } }) => {
    try {
      const { data } = await authService.find();
      actions.setItem(data);
    } catch (e) {
      console.log(e);
    }
  })
};
