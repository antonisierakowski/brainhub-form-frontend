import { selectNotification, selectNotifications } from '../selectors';
import { rootStateFixture } from '../../../fixtures/rootStateFixture';
import { notificationStateFixture } from '../../../fixtures/notificationStateFixture';
import { NotificationType } from '../model';

describe('notifications selectors', () => {
  describe('selectNotifications', () => {
    it('should return notifications state', () => {
      expect(selectNotifications(rootStateFixture)).toEqual(
        notificationStateFixture.notifications,
      );
    });
  });
  describe('selectNotification', () => {
    it('should return notification with specified id', () => {
      const expectedResult = {
        id: '1',
        notificationType: NotificationType.SUCCESS,
        textContent: 'test1',
      };
      expect(selectNotification(rootStateFixture, '1')).toEqual(expectedResult);
    });
  });
});
