import { useSelector } from 'react-redux';
import { selectNotifications } from '../../../store/domain/notifications/selectors';
import { Notification } from '../../../store/domain/notifications/model';

export const useNotifications = (): Notification[] => {
  const notifications = useSelector(selectNotifications);
  return notifications;
};
