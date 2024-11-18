import type { Meta, StoryObj } from '@storybook/web-components';

import * as HeaderStories from './Header.stories';

// @ts-ignore because Intellij does not understand imports within Lerna monorepos
import { Page } from "@lit-storybook-boilerplate/lit/src/components/page/page";
import type { PageProps } from "@lit-storybook-boilerplate/lit/src/components/page/page";

const meta = {
  title: 'Example/Page',
  render: (args: PageProps) => Page(args),
} satisfies Meta<PageProps>;

export default meta;
type Story = StoryObj<PageProps>;

export const LoggedIn: Story = {
  args: {
    // More on composing args: https://storybook.js.org/docs/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
};

export const LoggedOut: Story = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
};
