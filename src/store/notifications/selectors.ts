import { RootState } from "../index";

export const selectNotifications = (state: RootState) => state
  .notificationsState
  .notifications
