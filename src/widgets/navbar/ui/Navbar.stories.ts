import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ContetPageDecorator } from 'shared/config';
import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ContetPageDecorator];
