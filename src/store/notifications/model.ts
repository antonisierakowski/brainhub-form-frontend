export enum NotificationType {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export interface Notification {
  notificationType: NotificationType;
  textContent: string;
  id: string;
}
