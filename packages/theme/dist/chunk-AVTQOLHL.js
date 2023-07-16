import {
  addPrefix
} from "./chunk-TOTFP7JZ.js";
import {
  defaultHoverDuration
} from "./chunk-ULJTHSS2.js";

// lib/components/button.ts
import plugin from "tailwindcss/plugin";
function button() {
  return plugin(({ addComponents }) => {
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
        "btn-outlined": {
          "@apply bg-transparent border-solid border": {},
          "&-main": {
            "@apply border-main-500 text-main-500": {}
          },
          "&-secondary": {
            "@apply border-secondary-500 text-secondary-500": {}
          }
        },
        "btn-big": {
          "@apply px-10 py-[14px] text-lg font-medium leading-[19.2px]": {}
        },
        "btn-medium": {
          "@apply px-8 py-[14px] text-lg font-medium leading-[19.2px]": {}
        },
        "btn-small": {
          "@apply px-4 py-2 text-base font-medium leading-[24px] tracking-[0.2px]": {}
        }
      })
    );
  });
}

export {
  button
};
