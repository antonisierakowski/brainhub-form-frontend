import { Action } from './types';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import React from 'react';

export function createAction<TPayload>(
  actionType: string,
  payload?: TPayload,
): Action<TPayload> {
  return {
    type: actionType,
    payload,
  };
}

export const provideStore = (
  component: React.ReactElement,
  store: Store,
): React.ReactElement => <Provider store={store} children={component} />;
