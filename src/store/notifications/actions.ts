import { NotificationType } from "./model";
import { CREATE_NOTIFICATION, CREATE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION } from "./constants";
import { Action } from "../types";
import { createAction } from "../utils";

export interface CreateNotificationPayload {
  notificationType: NotificationType,
  textContent: string,
}

export const createNotification = (
  { notificationType, textContent }: CreateNotificationPayload
): Action<CreateNotificationPayload> => createAction(
  CREATE_NOTIFICATION,
  { notificationType, textContent },
)

export interface CreateNotificationSuccessPayload {
  notificationType: NotificationType,
  textContent: string,
  id: string,
}

export const createNotificationSuccess = (
  {notificationType, textContent, id}: CreateNotificationSuccessPayload
): Action<CreateNotificationSuccessPayload> => createAction(
  CREATE_NOTIFICATION_SUCCESS, {
    notificationType,
    textContent,
    id,
  }
);

export interface RemoveNotificationPayload {
  id: string,
}

export const removeNotification = (
  { id }: RemoveNotificationPayload
): Action<RemoveNotificationPayload> => createAction(
  REMOVE_NOTIFICATION,
  { id }
)
