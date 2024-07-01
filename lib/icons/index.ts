/// <reference types="vite-plugin-svgr/client" />

import arrow from "./arrow";
import bell from "./bell";
import calendar from "./calendar";
import chevron from "./chevron";
import code from "./code";
import home from "./general";
import user from "./user";

export default {
  ...arrow,
  ...bell,
  ...calendar,
  ...chevron,
  ...code,
  ...home,
  ...user
}

export * from "./arrow";
export * from "./bell";
export * from "./calendar";
export * from "./chevron";
export * from "./code";
export * from "./general";
export * from "./user";