import { StoryContext, StoryFn } from '@storybook/react';
import { ThemeProvider } from 'app/ui';
import 'app/ui/styles/index.scss';
import { ThemedContainer } from './ThemedContainer';
import { Theme } from '../../lib/theme';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
  const globalTheme = context?.globals.theme ?? Theme.LIGHT;

  return (
    <ThemeProvider>
      <ThemedContainer globalTheme={globalTheme}>
        <Story />
      </ThemedContainer>
    </ThemeProvider>
  );
};
