import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export interface RootState {

}

export const store = createStore(rootReducer)
