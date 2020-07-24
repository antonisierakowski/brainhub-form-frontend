import { NotificationType } from './model';
import {
  CREATE_NOTIFICATION,
  CREATE_NOTIFICATION_SUCCESS,
  REMOVE_NOTIFICATION,
} from './constants';
import { Action } from '../types';
import { createAction } from '../utils';

export interface CreateNotificationPayload {
  notificationType: NotificationType;
  textContent: string;
}

export const createNotification = (
  payload: CreateNotificationPayload,
): Action<CreateNotificationPayload> =>
  createAction(CREATE_NOTIFICATION, payload);

export interface CreateNotificationSuccessPayload {
  notificationType: NotificationType;
  textContent: string;
  id: string;
}

export const createNotificationSuccess = (
  payload: CreateNotificationSuccessPayload,
): Action<CreateNotificationSuccessPayload> =>
  createAction(CREATE_NOTIFICATION_SUCCESS, payload);

export interface RemoveNotificationPayload {
  id: string;
}

export const removeNotification = (
  payload: RemoveNotificationPayload,
): Action<RemoveNotificationPayload> =>
  createAction(REMOVE_NOTIFICATION, payload);
