import { all } from 'redux-saga/effects';
import { notificationSaga } from './domain/notifications/sagas';
import { requestSagas } from './domain/request/sagas';

export default function* rootSaga() {
  yield all([notificationSaga(), requestSagas()]);
}
