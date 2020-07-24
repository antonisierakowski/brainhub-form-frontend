import { CREATE_NOTIFICATION } from '../constants';
import { onCreateNotification } from '../sagas';
import { NotificationType } from '../model';
import { put } from 'redux-saga/effects';
import { createNotificationSuccess } from '../actions';

jest.mock('shortid', () => ({
  __esModule: true,
  default: () => 'test_id',
}));

describe('onCreateNotification saga', () => {
  it('should generate id and dispatch createNotificationSuccess with it', () => {
    const action = {
      type: CREATE_NOTIFICATION,
      payload: {
        notificationType: NotificationType.FAILURE,
        textContent: 'test',
      },
    };
    const gen = onCreateNotification(action);
    expect(gen.next().value).toEqual(
      put(
        createNotificationSuccess({
          notificationType: NotificationType.FAILURE,
          textContent: 'test',
          id: 'test_id',
        }),
      ),
    );
    expect(gen.next().done).toBeTruthy();
  });
});
