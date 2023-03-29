import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { actions } from "./slice";
import { Image } from "./types";
import { imagesApi } from "../../../services/api";
import { addSagas } from "../../sagas";

function* getImages(action: PayloadAction<Date>) {
  try {
    const res: Image[] = yield call(imagesApi.getImagesPerDay, action.payload);
    yield put(actions.getImagesSuccess(res));
  } catch (e) {
    console.log(e);
    yield put(actions.getImagesFail());
  }
}

export function* watch() {
  yield all([takeLatest(actions.getImages.type, getImages)]);
}

addSagas("imageView", watch);
