import { all } from 'redux-saga/effects'
import { notificationSaga } from "./notifications/sagas";

export default function* rootSaga() {
  yield all([
    notificationSaga(),
  ])
}
