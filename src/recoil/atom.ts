import { atom } from "recoil";

export const activeMenuState = atom({
  key: "activeMenuState",
  default: "",
});

export const selectBlogState = atom({
  key: "selectBlogState",
  default: false,
});

export const selectedMenuState = atom({
  key: "selectedMenuState",
  default: "",
});

export const clickProjectState = atom({
  key: "clickProjectState",
  default: false,
});
