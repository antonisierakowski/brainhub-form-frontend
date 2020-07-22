import { createStore, applyMiddleware, Store } from "redux";
import { rootReducer } from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface RootState {

}

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);

export const store: Store<RootState> = createStore(
  rootReducer,
  middleware,
)
