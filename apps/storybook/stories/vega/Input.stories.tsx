import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@crazyone/ui-vega";

const meta: Meta<typeof Input> = {
  title: "Vega/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium">Email</label>
      <Input type="email" id="email" placeholder="email@example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: "Disabled input", disabled: true },
};
