import { StoryFn } from '@storybook/react';
import 'app/ui/styles/index.scss';

export const ContetPageDecorator = (Story: StoryFn) => {
  return (
    <div className="content-page">
      <Story />
    </div>
  );
};
