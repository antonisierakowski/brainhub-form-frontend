import { Reducer } from "react";
import { Action } from "../types";
import { CREATE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION } from "./constants";
import { omit } from 'lodash';

export interface NotificationState {
  notifications: Record<string, Notification>
}

const initialState: NotificationState = {
  notifications: {},
}

export const notificationsReducer: Reducer<NotificationState, Action> = (state: NotificationState = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_NOTIFICATION_SUCCESS: {
      const { notification } = action.payload;
      return {
        notifications: {
          ...state.notifications,
          [notification.id]: notification,
        },
      };
    }
    case REMOVE_NOTIFICATION: {
      const { id } = action.payload;
      const updatedNotifications = omit(state.notifications, id);
      return {
        notifications: updatedNotifications,
      }
    }
    default: {
      return state
    }
  }
}
