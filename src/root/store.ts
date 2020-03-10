import { createStore } from "easy-peasy";

import { injectionModel } from "../models/injection.model";
import { storeModel } from "../models/store.model";

const store = createStore(storeModel, { injections: injectionModel });

export default store;
