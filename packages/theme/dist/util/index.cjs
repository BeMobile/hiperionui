"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/util/index.ts
var util_exports = {};
__export(util_exports, {
  addPrefix: () => addPrefix,
  defaultHoverDuration: () => defaultHoverDuration
});
module.exports = __toCommonJS(util_exports);

// lib/util/addPrefix.ts
function addPrefix(object) {
  const objectEntries = Object.entries(object).map(([key, value]) => {
    let newKey = key;
    if (!key.includes("hiperion-")) {
      const [oldKey] = key.split(".");
      newKey = `.hiperion-${oldKey}`;
    }
    return { [newKey]: value };
  });
  return objectEntries.reduce((acc, value) => {
    return { ...acc, ...value };
  }, {});
}

// lib/util/animation.ts
var defaultHoverDuration = "150ms";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addPrefix,
  defaultHoverDuration
});
