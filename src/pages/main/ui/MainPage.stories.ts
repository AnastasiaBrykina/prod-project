import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ContetPageDecorator } from 'shared/config';
import { MainPage } from '..';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ContetPageDecorator];
