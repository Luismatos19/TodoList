import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import persistedReducers from "./modules/reduxPersist";

import rootReducer from "./modules/rootReducer"; //import todos os reducers
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducers(rootReducer), //aplica persit em todos os reducers
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
export const persistor = persistStore(store);
