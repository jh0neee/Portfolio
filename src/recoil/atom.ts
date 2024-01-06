import { atom } from "recoil";

export const activeMenuState = atom({
  key: "activeMenuState",
  default: "",
});

export const selectBlogState = atom({
  key: "selectBlogState",
  default: false,
});
