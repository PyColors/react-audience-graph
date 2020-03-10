import { DEFAULT_LOCALE } from "../constants/constants";
import enMessages from "./locale-en.json";
import frMessages from "./locale-fr.json";

export const getUserLocale = (): string => {
  const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    DEFAULT_LOCALE;
  return language.toLowerCase().split(/[_-]+/)[0];
};

export const getMessagesForLocale = (
  locale: string
): { [key: string]: string } => {
  switch (locale) {
    case "fr":
      return frMessages;
    default:
      return enMessages;
  }
};
