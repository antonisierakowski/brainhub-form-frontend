import { Notification } from '../../../store/domain/notifications/model';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotification } from '../../../store/domain/notifications/selectors';
import { RootState } from '../../../store';
import { removeNotification } from '../../../store/domain/notifications/actions';
import { useCallback } from 'react';

export interface UseNotification {
  notification: Notification;
  onClose: () => void;
}

export const useNotification = (id: string): UseNotification => {
  const notification = useSelector((state: RootState) =>
    selectNotification(state, id),
  );

  const dispatch = useDispatch();

  const onClose = useCallback(
    () => dispatch(removeNotification({ id: notification.id })),
    [dispatch, notification.id],
  );

  return {
    notification,
    onClose,
  };
};

removeNotification({ id: '123' });
