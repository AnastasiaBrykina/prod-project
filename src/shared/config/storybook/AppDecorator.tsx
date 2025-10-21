import { Decorator } from '@storybook/react';
import 'app/ui/styles/index.scss';
import { useTheme } from 'shared/lib';

export const AppDecorator: Decorator = (Story) => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
