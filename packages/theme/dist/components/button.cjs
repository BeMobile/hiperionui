"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/components/button.ts
var button_exports = {};
__export(button_exports, {
  button: () => button
});
module.exports = __toCommonJS(button_exports);

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

// lib/components/button.ts
var import_plugin = __toESM(require("tailwindcss/plugin"), 1);
function button() {
  return (0, import_plugin.default)(({ addComponents }) => {
    addComponents(
      addPrefix({
        btn: {
          "@apply rounded-pill cursor-pointer": {}
        },
        "btn-solid": {
          "@apply text-white border-[3px] border-solid border-transparent": {},
          transition: `background ${defaultHoverDuration} linear, color ${defaultHoverDuration} linear, border-color ${defaultHoverDuration} ease-in-out`,
          "&-main": {
            "@apply bg-main-500 hover:bg-main-600 hover:border-main-100": {}
          },
          "&-secondary": {
            "@apply bg-secondary-500": {}
          }
        },
        "btn-big": {
          "@apply px-10 py-[14px] text-lg font-medium": {}
        },
        "btn-medium": {
          "@apply px-8 py-[14px]": {}
        },
        "btn-small": {
          "@apply px-4 py-2": {}
        },
        "btn-outlined": {
          "@apply bg-transparent border-solid border-2": {},
          "&-main": {
            "@apply border-main-500 text-main-500": {}
          },
          "&-secondary": {
            "@apply border-secondary-500 text-secondary-500": {}
          }
        }
      })
    );
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  button
});
