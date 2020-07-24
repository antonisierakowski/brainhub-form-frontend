import { notificationsReducer, NotificationState } from '../reducer';
import { NotificationType } from '../model';
import { CREATE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION } from '../constants';
import { mockNotificationState } from './mockNotificationState';

describe('notificationsReducer', () => {
  it('should add notification on CREATE_NOTIFICATION_SUCCESS', () => {
    const action = {
      type: CREATE_NOTIFICATION_SUCCESS,
      payload: {
        test: 'test',
      },
    };

    const expectedResult = {
      notifications: [...mockNotificationState.notifications, { test: 'test' }],
    };

    expect(notificationsReducer(mockNotificationState, action)).toEqual(
      expectedResult,
    );
  });

  it('should remove notification on REMOVE_NOTIFICATION', () => {
    const action = {
      type: REMOVE_NOTIFICATION,
      payload: {
        id: '1',
      },
    };
    const expectedResult: NotificationState = {
      notifications: [
        {
          id: '2',
          notificationType: NotificationType.FAILURE,
          textContent: 'test2',
        },
        {
          id: '3',
          notificationType: NotificationType.FAILURE,
          textContent: 'test3',
        },
      ],
    };
    expect(notificationsReducer(mockNotificationState, action)).toEqual(
      expectedResult,
    );
  });

  it('should return input state otherwise', () => {
    const action = {
      type: 'TEST',
    };

    expect(notificationsReducer(mockNotificationState, action)).toEqual(
      mockNotificationState,
    );
  });
});
