import { combineReducers } from "redux";
import { Reducer } from "react";

const dummyReducer: Reducer<any, any> = (state: any = {}, action: any) => {
  return state
}


export const rootReducer = combineReducers({
  dummyReducer
})
