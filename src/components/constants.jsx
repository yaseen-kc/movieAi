export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w200/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "zh", name: "Chinese" },
  { identifier: "ml", name: "Malayalam" },
];

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;
