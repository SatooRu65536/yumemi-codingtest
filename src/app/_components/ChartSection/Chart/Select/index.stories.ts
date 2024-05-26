import type { Meta, StoryObj } from '@storybook/react';
import PopulationTypeSelector from '.';

const meta = {
  title: 'ChartSection/Selector',
  component: PopulationTypeSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof PopulationTypeSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
