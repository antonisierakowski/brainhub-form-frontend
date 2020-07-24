import { put, takeEvery, call } from 'redux-saga/effects';
import { SUBMIT_EVENT_FORM } from './constants';
import { Action } from '../../types';
import { SubmitEventFormPayload } from './actions';
import httpClient from '../../../services/httpClient';
import { createNotification } from '../notifications/actions';
import * as exceptions from '../../../services/httpClient/exceptions';
import { NotificationType } from '../notifications/model';
import * as notificationMessages from '../../../constants/notificationMessages';
import { EventModel } from './model';
import { DATE_FORMAT } from '../../../constants';

export function* requestSagas() {
  yield takeEvery(SUBMIT_EVENT_FORM, onSubmitEvent);
}

export function* onSubmitEvent({ payload }: Action<SubmitEventFormPayload>) {
  try {
    const event: EventModel = {
      ...payload,
      date: payload.date.format(DATE_FORMAT),
    };
    yield call(httpClient.submitEvent, event);
    yield put(
      createNotification({
        notificationType: NotificationType.SUCCESS,
        textContent: notificationMessages.succesfulSubmitMsg,
      }),
    );
  } catch (error) {
    yield handleRequestError(error);
  }
}

export function* handleRequestError(error: Error) {
  switch (error.constructor) {
    case exceptions.ApiValidationError: {
      yield call(
        createFailureNotification,
        notificationMessages.submitFailureMsg,
      );
      break;
    }
    case exceptions.NoApiResponseError: {
      yield call(
        createFailureNotification,
        notificationMessages.noConnectionMsg,
      );
      break;
    }
    case exceptions.ApiInternalError:
    default: {
      yield call(
        createFailureNotification,
        notificationMessages.internalErrorMsg,
      );
    }
  }
}

export function* createFailureNotification(message: string) {
  yield put(
    createNotification({
      notificationType: NotificationType.FAILURE,
      textContent: message,
    }),
  );
}
