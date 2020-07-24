import { all } from 'redux-saga/effects';
import { notificationSaga } from './notifications/sagas';
import { requestSagas } from './request/sagas';

export default function* rootSaga() {
  yield all([notificationSaga(), requestSagas()]);
}
