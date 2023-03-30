/**
 * @jest-environment jsdom
 */

import "../config/setup-test";
import { act, render, waitFor } from "@testing-library/react";
import dayjs from "dayjs";
import { getImages } from "../src/store/features/image-view/sagas";
import { actions } from "../src/store/features/image-view";
import { call } from "redux-saga/effects";
import { getImagesPerDay } from "../src/services/api/images";
import App from "../src/app";

test("Image View display probably", async () => {
  const { container } = await act(async () => render(<App />));
  await waitFor(() =>
    expect(container.getElementsByTagName("img").length).toEqual(9)
  );
});

test("Get Images saga run probably", () => {
  const params = {
    payload: dayjs().toDate(),
    type: actions.getImages.type
  };

  const saga = getImages(params);
  expect(saga.next().value).toEqual(call(getImagesPerDay, params.payload));
});
