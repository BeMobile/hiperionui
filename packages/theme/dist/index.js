import {
  button
} from "./chunk-S7LWYB3U.js";
import "./chunk-TNRXDD7P.js";
import {
  borderRadius
} from "./chunk-SWORYXIK.js";
import {
  boxShadow
} from "./chunk-2T72OWJC.js";
import {
  colors_exports
} from "./chunk-WMZDTDVC.js";
import {
  spacing
} from "./chunk-4UBFZBXO.js";
import "./chunk-TOTFP7JZ.js";
import "./chunk-ULJTHSS2.js";
import "./chunk-UICA3PK6.js";

// lib/index.ts
var theme = {
  colors: colors_exports,
  borderRadius,
  boxShadow,
  spacing
};
var _plugins = {
  button
};
var plugins = {
  select: (...pluginsToSetup) => {
    const pluginsSet = new Set(pluginsToSetup);
    return Array.from(pluginsSet).map((plugin) => _plugins[plugin]());
  },
  all: () => Object.values(_plugins).map((plugin) => plugin())
};
export {
  plugins,
  theme
};
