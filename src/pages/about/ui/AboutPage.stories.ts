import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ContetPageDecorator } from 'shared/config';
import { AboutPage } from '..';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ContetPageDecorator];
