import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Sidebar } from './Sidebar';
import { ContetPageDecorator } from 'shared/config';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ContetPageDecorator];
