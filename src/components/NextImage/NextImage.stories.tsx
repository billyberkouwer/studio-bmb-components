import type { Meta, StoryObj } from '@storybook/react';

import NextImage from './NextImage';

const meta = {
  component: NextImage,
} satisfies Meta<typeof NextImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "/"
  }
};