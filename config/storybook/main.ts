import type { StorybookConfig } from '@storybook/react-webpack5';

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
};

export default config;
