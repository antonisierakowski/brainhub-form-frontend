import { Error, Done, Info, Close } from '@material-ui/icons';
import React from 'react';
import { Card, Typography } from '@material-ui/core';
import './styles.css';
import { NotificationType } from '../../../store/notifications/model';
import { useNotification } from './hook';

type Props = {
  id: string;
};

export const Notification: React.FC<Props> = ({ id }) => {
  const { notification, onClose } = useNotification(id);

  return (
    <Card className="notification" elevation={3} data-testid={id}>
      <div className="notificationBody">
        {getIconType(notification.notificationType)}
        <Typography variant="subtitle2">{notification.textContent}</Typography>
      </div>
      <Close
        className="closeIcon"
        onClick={onClose}
        data-testid={`closeIcon_${id}`}
      />
    </Card>
  );
};

const getIconType = (notificationType: NotificationType) => {
  switch (notificationType) {
    case NotificationType.SUCCESS: {
      return <Done />;
    }
    case NotificationType.FAILURE: {
      return <Error />;
    }
    default: {
      return <Info />;
    }
  }
};
