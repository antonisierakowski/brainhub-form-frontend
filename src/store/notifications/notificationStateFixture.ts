import { NotificationState } from './reducer';
import { NotificationType } from './model';

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
