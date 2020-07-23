import { selectNotification, selectNotifications } from '../selectors';
import { rootStateMock } from '../../__tests__/rootStateMock';
import { mockNotificationState } from './mockNotificationState';
import { NotificationType } from '../model';

describe('notifications selectors', () =>  {
  describe('selectNotifications', () => {
    it('should return notifications state', () => {
      expect(selectNotifications(
        rootStateMock,
      )).toEqual(mockNotificationState.notifications);
    });
  });
  describe('selectNotification', () => {
    it('should return notification with specified id', () => {
      const expectedResult = {
        id: '1',
        notificationType: NotificationType.SUCCESS,
        textContent: 'test1',
      };
      expect(selectNotification(
        rootStateMock, '1',
      )).toEqual(expectedResult);
    });
  });
});
