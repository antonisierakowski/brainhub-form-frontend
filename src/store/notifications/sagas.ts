import { CREATE_NOTIFICATION, CREATE_NOTIFICATION_SUCCESS } from "./constants";
import { Action } from "../types";
import { createNotification, CreateNotificationPayload, createNotificationSuccess } from "./actions";
import shortid from 'shortid'
import { takeEvery, put } from "redux-saga/effects";

export function* notificationSaga() {
  yield takeEvery(CREATE_NOTIFICATION, onCreateNotification);
}

function* onCreateNotification(action: Action<CreateNotificationPayload>) {
  const id = shortid()

  yield put(createNotificationSuccess({
    ...action.payload,
    id,
  }))
}
