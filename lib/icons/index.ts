/// <reference types="vite-plugin-svgr/client" />

import arrow from "./arrow";
import bell from "./bell";
import chevron from "./chevron";
import home from "./home";

export default {
  ...arrow,
  ...bell,
  ...chevron,
  ...home
}

export * from "./arrow";
export * from "./bell";
export * from "./chevron";
export * from "./home";