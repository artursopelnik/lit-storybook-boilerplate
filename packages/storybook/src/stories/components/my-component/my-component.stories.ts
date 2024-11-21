import type {Meta, StoryObj} from "@storybook/web-components";
import {html} from 'lit';
import "@lit-storybook-boilerplate/lit/src/components/my-component/my-component.ts";
import type {MyComponentProps} from "@lit-storybook-boilerplate/lit/src/components/my-component/my-component.ts";
import {fn} from "@storybook/test";

const meta = {
    title: 'Components/MyComponent',
    component: 'my-component',
    args: {
        first: 'John',
        middle: '',
        last: 'Doe',
        onClick: () => fn()
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
    render: ({first, middle, last, onClick}) => html`
        <my-component first=${first} middle=${middle} last=${last} @onClick=${onClick} />`
} satisfies StoryObj<MyComponentProps>
