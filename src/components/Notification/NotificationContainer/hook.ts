import { useSelector } from 'react-redux';
import { selectNotifications } from '../../../store/notifications/selectors';
import { Notification } from '../../../store/notifications/model';

export const useNotifications = (): Notification[] => {
  const notifications = useSelector(selectNotifications);
  return notifications;
};
