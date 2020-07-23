import { combineReducers } from 'redux';
import { notificationsReducer } from './notifications/reducer';

export const rootReducer = combineReducers({
  notificationsState: notificationsReducer,
});
