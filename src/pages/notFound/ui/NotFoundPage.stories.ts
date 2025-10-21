import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ContetPageDecorator } from 'shared/config';
import { NotFoundPage } from '..';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ContetPageDecorator];
