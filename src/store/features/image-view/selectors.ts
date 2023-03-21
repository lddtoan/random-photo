import { RootState } from "../..";
import { ImageViewState } from "./types";

export const selector = (state: RootState) => {
  return state.imageView as ImageViewState;
};
