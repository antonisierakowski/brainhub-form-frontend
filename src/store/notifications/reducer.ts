import { Reducer } from 'react';
import { Action } from '../types';
import { CREATE_NOTIFICATION_SUCCESS, REMOVE_NOTIFICATION } from './constants';
import { Notification } from './model';

export interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationsReducer: Reducer<NotificationState, Action> = (
  state: NotificationState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case CREATE_NOTIFICATION_SUCCESS: {
      return {
        notifications: [...state.notifications, { ...action.payload }],
      };
    }
    case REMOVE_NOTIFICATION: {
      const { id } = action.payload;
      const updatedNotifications = state.notifications.filter(
        notification => notification.id !== id,
      );
      return {
        notifications: updatedNotifications,
      };
    }
    default: {
      return state;
    }
  }
};
