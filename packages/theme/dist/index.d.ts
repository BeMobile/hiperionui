import * as tailwindcss from 'tailwindcss';
import * as tailwindcss_types_config from 'tailwindcss/types/config';
import { c as colors } from './colors-a815603b.js';
import { button } from './components/button.js';

declare const theme: {
    colors: typeof colors;
    borderRadius: {
        circle: string;
        pill: string;
        'rounded-rectangle': string;
    };
    boxShadow: {
        e1: string;
        e2: string;
        e3: string;
        e4: string;
        e5: string;
    };
    spacing: {};
};
declare const _plugins: {
    button: typeof button;
};
type Plugin = keyof typeof _plugins;
declare const plugins: {
    select: (...pluginsToSetup: Array<Plugin>) => {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss.Config> | undefined;
    }[];
    all: () => {
        handler: tailwindcss_types_config.PluginCreator;
        config?: Partial<tailwindcss.Config> | undefined;
    }[];
};

export { plugins, theme };
