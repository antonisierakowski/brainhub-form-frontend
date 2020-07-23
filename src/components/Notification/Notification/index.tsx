import { Error, Done, Info, Close } from '@material-ui/icons';
import React from "react";
import { Card, Typography } from "@material-ui/core";
import "./styles.css"

export enum NotificationType {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

type Props = {
  type: NotificationType
  textContent: string
}

export const Notification: React.FC<Props> = ({ type, textContent }) => {

  return (
    <Card className="notification" elevation={3}>
      <div className="notificationBody">
        {getIconType(type)}
        <Typography variant="subtitle2">
          {textContent}
        </Typography>
      </div>
      <Close />
    </Card>
  )
}


const getIconType = (notificationType: NotificationType) => {
  switch (notificationType) {
    case NotificationType.SUCCESS: {
      return <Done />
    }
    case NotificationType.FAILURE: {
      return <Error />
    }
    default: {
      return <Info />
    }
  }
}
