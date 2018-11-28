import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootSaga from "../sagas/index";
import rootReducer from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const initializeStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, thunkMiddleware, loggerMiddleware)
  );

  sagaMiddleware.run(rootSaga, store.dispatch, store.getState);

  return store;
};

export default initializeStore;
