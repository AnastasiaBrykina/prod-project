import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { Button, ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Тест',
  },
};

export const Clear: Story = {
  args: {
    children: 'Тест',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Тест',
    theme: ThemeButton.OUTLINE,
  },
};
