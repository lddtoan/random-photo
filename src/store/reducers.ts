import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { store, reducers } from ".";

export const addReducer = (id: string, newReducer: Reducer) => {
  const newReducers = {
    ...reducers,
    [`${id}`]: newReducer
  };
  const rootReducer = combineReducers(newReducers);
  Object.keys(reducers).forEach((key) => delete reducers[key]);
  Object.keys(newReducers).forEach((key) => (reducers[key] = newReducers[key]));
  store.replaceReducer(rootReducer);
};
