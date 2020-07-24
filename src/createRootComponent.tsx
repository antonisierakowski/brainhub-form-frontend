import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './index.css';

export const createRootComponent = (
  component: React.ReactElement,
): React.ReactElement => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      {component}
    </MuiPickersUtilsProvider>
  </Provider>
);
