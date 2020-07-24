import { NotificationState } from '../domain/notifications/reducer';
import { NotificationType } from '../domain/notifications/model';

export const notificationStateFixture: NotificationState = {
  notifications: [
    {
      id: '1',
      notificationType: NotificationType.SUCCESS,
      textContent: 'test1',
    },
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

export const onlySuccessNotificationStateFixture: NotificationState = {
  notifications: [
    {
      id: '1',
      notificationType: NotificationType.SUCCESS,
      textContent: 'test1',
    },
  ],
};

export const onlyFailureNotificationStateFixture: NotificationState = {
  notifications: [
    {
      id: '1',
      notificationType: NotificationType.FAILURE,
      textContent: 'test1',
    },
  ],
};

export const onlyUnexpectedTypeNotificationStateFixture: NotificationState = {
  notifications: [
    {
      id: '1',
      notificationType: 'test' as NotificationType,
      textContent: 'test1',
    },
  ],
};
