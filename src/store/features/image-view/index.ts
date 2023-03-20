import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ImageViewState, Image } from "./types";

const initialState: ImageViewState = {
  loading: false,
  images: []
};

export const slice = createSlice({
  name: "image-view",
  initialState,
  reducers: {
    getImages: (state) => {
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

export const actions = slice.actions;
