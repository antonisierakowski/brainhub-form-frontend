import React from 'react';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import './index.css';

export const RootComponent = (): React.ReactElement => (
  <React.StrictMode>
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </Provider>
  </React.StrictMode>
);
