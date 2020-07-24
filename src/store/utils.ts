import { Action } from './types';

export function createAction<TPayload>(
  actionType: string,
  payload?: TPayload,
): Action<TPayload> {
  return {
    type: actionType,
    payload,
  };
}
