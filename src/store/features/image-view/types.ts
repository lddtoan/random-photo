export type Image = {
  url: string;
};

export interface ImageViewState {
  loading: boolean;
  images: Image[];
}
