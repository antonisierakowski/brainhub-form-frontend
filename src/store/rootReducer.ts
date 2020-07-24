import { combineReducers } from 'redux';
import { notificationsReducer } from './domain/notifications/reducer';

export const rootReducer = combineReducers({
  notificationsState: notificationsReducer,
});
