import { legacy_createStore as createStore } from "redux";
import { rootReducers } from "./reducers";

//Store: Attaché à React accessible depuis tous les Composants
export const store = createStore(rootReducers)