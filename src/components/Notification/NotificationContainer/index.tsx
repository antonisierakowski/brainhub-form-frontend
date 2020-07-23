import React from "react";
import { Notification } from '../Notification'
import "./styles.css"
import { NotificationType } from "../../../store/notifications/model";

export const NotificationContainer: React.FC = () => {

  return (
    <div className="notificationContainer">
      <Notification
        type={NotificationType.SUCCESS}
        textContent={"Your form has been submitted successfuly."}
      />
      <Notification
        type={NotificationType.FAILURE}
        textContent={"There was an error."}
      />
    </div>
  )
}
