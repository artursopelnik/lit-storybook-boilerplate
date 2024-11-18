import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from 'lit';
import "@lit-storybook-boilerplate/lit/src/components/my-component/my-component.ts";
import type {MyComponentProps} from "@lit-storybook-boilerplate/lit/src/components/my-component/my-component.ts";

const meta = {
    title: 'Components/MyComponent',
    component: 'my-component',
    args: {
        first: 'John',
        middle: '',
        last: 'Doe'
    },
    argTypes: {
        first: {
            type: {
                name: 'string',
                required: true,
            }
        }
    }
} satisfies Meta<MyComponentProps>

export default meta

export const Default = {
    render: ({first, middle, last}) => html`
        <my-component first=${first} middle=${middle} last=${last} />`
} satisfies StoryObj<MyComponentProps>
