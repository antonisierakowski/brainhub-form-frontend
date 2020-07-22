import React from "react";
import App from "./components/App";
import { Provider } from 'react-redux'
import { store } from "./store";

export const RootComponent = (): React.ReactElement => (
  <React.StrictMode>
    <Provider
      store={store}
    >
      <App />
    </Provider>
  </React.StrictMode>
)
