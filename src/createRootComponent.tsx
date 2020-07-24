import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Store } from 'redux';

export const createRootComponent = (
  component: React.ReactElement,
  reduxStore: Store = store,
): React.ReactElement => (
  <Provider store={reduxStore}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {component}
    </MuiPickersUtilsProvider>
  </Provider>
);
