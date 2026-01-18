import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@crazyone/ui-vega";

const meta: Meta<typeof Card> = {
  title: "Vega/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content area for any elements.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p>A simple card with just content.</p>
    </Card>
  ),
};

export const WithForm: Story = {
  name: "With Form Elements",
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Enter your details to get started.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create Account</Button>
      </CardFooter>
    </Card>
  ),
};
