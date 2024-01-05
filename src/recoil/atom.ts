import { atom } from "recoil";

export const activeMenuState = atom({
  key: "activeMenuState",
  default: "",
});

export const selectMenuState = atom({
  key: "selectMenuState",
  default: false,
});
