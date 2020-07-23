import { takeEvery } from "redux-saga/effects";
import { SUBMIT_EVENT_FORM } from "./constants";
import { Action } from "../types";
import { SubmitEventFormPayload } from "./actions";

export function* requestSagas() {
  yield takeEvery(SUBMIT_EVENT_FORM, onSubmitEvent);
}

function* onSubmitEvent(action: Action<SubmitEventFormPayload>) {
  console.log('saga')
  console.log('SUBMIT!!!')
}
