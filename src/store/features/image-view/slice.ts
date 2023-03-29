import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ImageViewState, Image } from "./types";
import { addReducer } from "../../reducers";

const initialState: ImageViewState = {
  loading: false,
  images: []
};

export const slice = createSlice({
  name: "image-view",
  initialState,
  reducers: {
    getImages: (state, action: PayloadAction<Date>) => {
      console.log(action);
      state.loading = true;
    },
    getImagesSuccess: (state, action: PayloadAction<Image[]>) => {
      state.loading = false;
      state.images = action.payload;
    },
    getImagesFail: (state) => {
      state.loading = false;
    }
  }
});

addReducer("imageView", slice.reducer);

export const actions = slice.actions;
