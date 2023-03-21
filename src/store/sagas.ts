import { Saga } from "redux-saga";
import { all } from "redux-saga/effects";
import { sagaMiddleware } from ".";

const sagas = [];

export const addSagas = (saga: Saga) => {
  sagas.push(saga());

  function* rootSaga() {
    yield all(sagas);
  }

  sagaMiddleware.run(rootSaga);
};
