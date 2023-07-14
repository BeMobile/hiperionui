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

// lib/theme/boxShadow.ts
var boxShadow_exports = {};
__export(boxShadow_exports, {
  boxShadow: () => boxShadow
});
module.exports = __toCommonJS(boxShadow_exports);
var boxShadow = {
  e1: "box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);",
  e2: "box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);",
  e3: "box-shadow: 0px 1.5px 9px 0px rgba(0, 0, 0, 0.25);",
  e4: "box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);",
  e5: "box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.15);"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  boxShadow
});
