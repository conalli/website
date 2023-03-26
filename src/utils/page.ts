import { nanoid } from "nanoid";

export const toTitle = (title: string): string => {
  if (!title.length) return "conalli | home";
  return `conalli | ${title}`;
};

export const toSlug = (s: string): string => {
  const chars = s.match(/[A-Za-z0-9-_.~\s]/g);
  if (!chars) {
    return nanoid();
  }
  return chars.join("").replaceAll(" ", "_").toLowerCase();
};
