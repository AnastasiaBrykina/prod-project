import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Primary app link',
    to: '#',
  },
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
    children: 'Secondary app link',
    to: '#',
  },
};
