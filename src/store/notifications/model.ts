export enum NotificationType {
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export interface Notification {
  type: NotificationType,
  textContent: string,
  id: string,
}
