import * as tailwindcss from 'tailwindcss';
import * as tailwindcss_types_config from 'tailwindcss/types/config';

declare function button(): {
    handler: tailwindcss_types_config.PluginCreator;
    config?: Partial<tailwindcss.Config> | undefined;
};

export { button };
