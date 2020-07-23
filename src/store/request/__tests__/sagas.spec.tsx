import { createFailureNotification, handleRequestError, onSubmitEvent } from '../sagas';
import { SUBMIT_EVENT_FORM } from '../constants';
import { exampleDateAsString, validEventFixture } from '../../../components/EventForm/validationSchema.spec';
import httpClient from '../../../services/httpClient';
import { call, put } from 'redux-saga/effects';
import { createNotification } from '../../notifications/actions';
import { NotificationType } from '../../notifications/model';
import * as notificationMessages from '../../../constants/notificationMessages';
import * as exceptions from '../../../services/httpClient/exceptions';

describe('onSubmitEvent saga', () => {
  const action = {
    type: SUBMIT_EVENT_FORM,
    payload: validEventFixture,
  };
  const gen = onSubmitEvent(action);

  it('should format the date and call httpClient submitEvent method', () => {
    expect(
      gen.next().value,
    ).toEqual(
      call(httpClient.submitEvent, {
        ...validEventFixture,
        date: exampleDateAsString,
      }),
    );
  });
  it('should dispatch createNotification if successful', () => {
    expect(
      gen.next().value,
    ).toEqual(
      put(createNotification({
        notificationType: NotificationType.SUCCESS,
        textContent: notificationMessages.succesfulSubmitMsg,
      })),
    );

    expect(gen.next().done).toBeTruthy();
  });

  it('should call handleRequestError if httpClient throws', () => {
    const action = {
      type: SUBMIT_EVENT_FORM,
      payload: validEventFixture,
    };
    const error = new Error();
    const gen = onSubmitEvent(action);
    gen.next();

    expect(
      gen.throw(error).value,
    ).toEqual(
      handleRequestError(error),
    );

    expect(gen.next().done).toBeTruthy();
  });
});

describe('handleRequestError function', () => {
  it('should dispatch notification with appropriate message if ApiValidationError is thrown', () => {
    const gen = handleRequestError(new exceptions.ApiValidationError());

    expect(
      gen.next().value,
    ).toEqual(
      call(createFailureNotification, notificationMessages.submitFailureMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message if NoApiResponseError is thrown', () => {
    const gen = handleRequestError(new exceptions.NoApiResponseError());

    expect(
      gen.next().value,
    ).toEqual(
      call(createFailureNotification, notificationMessages.noConnectionMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message if ApiInternalError is thrown', () => {
    const gen = handleRequestError(new exceptions.ApiInternalError());

    expect(
      gen.next().value,
    ).toEqual(
      call(createFailureNotification, notificationMessages.internalErrorMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
  it('should dispatch notification with appropriate message otherwise', () => {
    const gen = handleRequestError(new Error());

    expect(
      gen.next().value,
    ).toEqual(
      call(createFailureNotification, notificationMessages.internalErrorMsg),
    );

    expect(gen.next().done).toBeTruthy();
  });
});
