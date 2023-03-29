import * as dayjs from "dayjs";
import { instance } from "./_axios";

export type PhotosResponse = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: {
    id: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    instagram_username: string;
    twitter_username: string;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
    };
  };
  current_user_collections: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
  };
};

export type SearchPhotosResponse = {
  total: number;
  total_pages: number;
  results: PhotosResponse[];
};

export const getImagesPerDay = async (day: Date) => {
  const url = "/search/photos";
  const response = await instance.get<SearchPhotosResponse>(url, {
    params: {
      query: "digital art",
      page: 2 + dayjs().diff(day, "day"),
      per_page: 9
    }
  });
  if (response.status === 200) {
    const data = response.data;
    return data.results.map((i) => ({ url: i.urls.small }));
  }
  return [];
};
