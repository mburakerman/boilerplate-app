import { createGlobalState } from "react-use";

export type Language = "tr" | "en";

export const DEFAULT_LANGUAGE: Language = "en";
export const LANGUAGE_LOCAL_STORAGE_KEY = "lang";

export const useSelectedLanguage = createGlobalState<Language>(
  (localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY) as Language) ??
    DEFAULT_LANGUAGE,
);
