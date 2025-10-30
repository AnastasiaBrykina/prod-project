import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-docs'],
  staticDirs: ['../../public'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  env: (config) => ({
    ...config,
    __IS_DEV__: 'true',
  }),
  webpackFinal: async (config) => {
    if (config && config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'shared/lib': path.resolve(__dirname, '../../src/shared/lib'),
      };
      return config;
    }

    return config;
  },
};

export default config;
