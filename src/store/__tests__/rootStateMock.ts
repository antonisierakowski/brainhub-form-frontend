import { RootState } from '../index';
import { mockNotificationState } from '../notifications/__tests__/mockNotificationState';

export const rootStateMock: RootState = {
  notificationsState: mockNotificationState,
};
