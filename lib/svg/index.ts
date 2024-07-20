/// <reference types="vite-plugin-svgr/client" />

import alert from "./alert";
import arrow from "./arrow";
import bell from "./bell";
import calendar from "./calendar";
import chart from "./chart";
import chevron from "./chevron";
import circle from "./circle";
import file from "./file";
import general from "./general";
import location from "./location";
import user from "./user";

export default {
  ...alert,
  ...arrow,
  ...bell,
  ...calendar,
  ...chart,
  ...chevron,
  ...circle,
  ...file,
  ...general,
  ...location,
  ...user
}

export * from "./alert";
export * from "./arrow";
export * from "./bell";
export * from "./calendar";
export * from "./chart";
export * from "./chevron";
export * from "./circle";
export * from "./file";
export * from "./general";
export * from "./location";
export * from "./user";