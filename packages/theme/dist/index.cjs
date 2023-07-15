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

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  plugins: () => plugins,
  theme: () => theme
});
module.exports = __toCommonJS(lib_exports);

// lib/theme/colors.ts
var colors_exports = {};
__export(colors_exports, {
  beige: () => beige,
  black: () => black,
  blue: () => blue,
  gray: () => gray,
  green: () => green,
  main: () => main,
  oliveGreen: () => oliveGreen,
  orange: () => orange,
  purple: () => purple,
  red: () => red,
  secondary: () => secondary,
  veroneseGreen: () => veroneseGreen,
  yellow: () => yellow
});
var main = {
  100: "#B2CEF5",
  200: "#96B7E5",
  300: "#7DA3D9",
  400: "#6793D1",
  500: "#5984C0",
  600: "#4273B7",
  700: "#2F62AA",
  800: "#18509E",
  900: "#0C479A"
};
var secondary = {
  100: "#C4A1FF",
  200: "#B595ED",
  300: "#A386D6",
  400: "#9378C2",
  500: "#765DA3",
  600: "#6C509E",
  700: "#65479B",
  800: "#5F4095",
  900: "#53318F"
};
var blue = {
  100: "#B2CEF5",
  200: "#96B7E5",
  300: "#7DA3D9",
  400: "#6793D1",
  500: "#5984C0",
  600: "#4273B7",
  700: "#2F62AA",
  800: "#18509E",
  900: "#0C479A"
};
var gray = {
  100: "#FAFAFA",
  200: "#F5F5F5",
  300: "#EEEEEE",
  400: "#E0E0E0",
  500: "#BDBDBD",
  600: "#9E9E9E",
  700: "#757575",
  800: "#616161",
  900: "#424242",
  1e3: "#212121"
};
var veroneseGreen = {
  100: "#89D1C7",
  200: "#56C3B4",
  300: "#32B8A5",
  400: "#1BB59F",
  500: "#008F7C",
  600: "#028977",
  700: "#027C6C",
  800: "#017263",
  900: "#006255"
};
var beige = {
  100: "#FFB5A3",
  200: "#F6A793",
  300: "#EA9B87",
  400: "#DD8E7A",
  500: "#C47662",
  600: "#B96954",
  700: "#AF5A45",
  800: "#9F5846",
  900: "#95513F"
};
var purple = {
  100: "#C4A1FF",
  200: "#B595ED",
  300: "#A386D6",
  400: "#9378C2",
  500: "#765DA3",
  600: "#6C509E",
  700: "#65479B",
  800: "#5F4095",
  900: "#53318F"
};
var oliveGreen = {
  100: "#D4EA97",
  200: "#C5DD83",
  300: "#AECA60",
  400: "#92AF42",
  500: "#748F2B",
  600: "#6D8921",
  700: "#647D1E",
  800: "#5D751B",
  900: "#55681E"
};
var black = {
  100: "#4B4A4A",
  200: "#3C3C3C",
  300: "#2F2F2F",
  400: "#242424",
  500: "#141414",
  600: "#161515",
  700: "#181717",
  800: "#111010",
  900: "#000000"
};
var red = {
  100: "#FACBBF",
  200: "#F8AA97",
  300: "#F68A6E",
  400: "#F5704F",
  500: "#EA5230",
  600: "#DC4C2B",
  700: "#CE4528",
  800: "#B33A21",
  900: "#A83018"
};
var green = {
  100: "#C4E7D0",
  200: "#9FD8B3",
  300: "#77CA95",
  400: "#58BF7E",
  500: "#36B368",
  600: "#2EA45E",
  700: "#259151",
  800: "#1E8046",
  900: "#106132"
};
var orange = {
  100: "#FFEDB3",
  200: "#FFE182",
  300: "#FFD74F",
  400: "#FFCC26",
  500: "#FFC400",
  600: "#FFB500",
  700: "#FFA200",
  800: "#FFA200",
  900: "#FFA200"
};
var yellow = {
  100: "#FFF3B3",
  200: "#FFEF9C",
  300: "#FFEA7E",
  400: "#FFE667",
  500: "#FFE353",
  600: "#FFDD30",
  700: "#FFD703",
  800: "#F9D101",
  900: "#F0CA02"
};

// lib/theme/borderRadius.ts
var borderRadius = {
  circle: "100%",
  pill: "100px",
  "rounded-rectangle": "4px"
};

// lib/theme/boxShadow.ts
var boxShadow = {
  e1: "box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);",
  e2: "box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.05);",
  e3: "box-shadow: 0px 1.5px 9px 0px rgba(0, 0, 0, 0.25);",
  e4: "box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);",
  e5: "box-shadow: 0px 12px 20px 0px rgba(0, 0, 0, 0.15);"
};

// lib/theme/spacing.ts
var spacing = {};

// lib/components/button.ts
var import_plugin = __toESM(require("tailwindcss/plugin"), 1);

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
function button() {
  return (0, import_plugin.default)(({ addComponents }) => {
    addComponents(
      addPrefix({
        btn: {
          "@apply rounded-pill cursor-pointer": {}
        },
        "btn-solid": {
          "@apply text-white border-[3px] border-solid border-transparent disabled:bg-gray-400 disabled:cursor-not-allowed": {},
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
    return Array.from(pluginsSet).map((plugin2) => _plugins[plugin2]());
  },
  all: () => Object.values(_plugins).map((plugin2) => plugin2())
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  plugins,
  theme
});
