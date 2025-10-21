import type { Preview } from '@storybook/react-webpack5';
import {
  StyleDecorator,
  ThemeDecorator,
  I18nextDecorator,
  RouterDecorator,
} from '../../src/shared/config';
import { Theme } from '../../src/shared/lib';

const preview: Preview = {
  decorators: [
    StyleDecorator,
    ThemeDecorator,
    I18nextDecorator,
    RouterDecorator,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [Theme.LIGHT, Theme.DARK],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: Theme.LIGHT,
  },
};

export default preview;
