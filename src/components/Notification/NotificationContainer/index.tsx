import React from "react";
import { NotificationType } from "../Notification";
import { Notification } from '../Notification'
import "./styles.css"

export const NotificationContainer: React.FC = () => {

  return (
    <div className="notificationContainer">
      <Notification
        type={NotificationType.SUCCESS}
        textContent={"Your form has been submitted successfuly."}
      >
      </Notification>
    </div>
  )
}
