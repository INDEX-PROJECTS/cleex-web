import { env } from "./env.config";

export const __API__ = env.BASE_URL;

export const __IS_DEV__ = env.MODE === "development" ? true : false;

export const USER_LOCALSTORAGE_KEY = "user";
