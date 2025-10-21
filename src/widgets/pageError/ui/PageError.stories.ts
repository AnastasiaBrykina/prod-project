import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ContetPageDecorator } from 'shared/config';
import { PageError } from './PageError';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ContetPageDecorator];
