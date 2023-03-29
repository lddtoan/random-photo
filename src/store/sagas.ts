import { Saga } from "redux-saga";
import { sagaMiddleware } from ".";

const sagas = {};

export const addSagas = (id: string, saga: Saga) => {
  if (!(id in sagas)) {
    const task = sagaMiddleware.run(saga);
    sagas[id] = task;
  }
};
