import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    get: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
    }
  }
});
