import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/web-components';

// @ts-ignore because Intellij does not understand imports within Lerna monorepos
import { Header } from "@lit-storybook-boilerplate/lit/src/components/header/header";
import type { HeaderProps } from "@lit-storybook-boilerplate/lit/src/components/header/header";

const meta = {
  title: 'Example/Header',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  render: (args: HeaderProps) => Header(args),
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<HeaderProps>;

export default meta;
type Story = StoryObj<HeaderProps>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
