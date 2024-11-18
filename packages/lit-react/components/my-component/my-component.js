import * as React from 'react';
import { createComponent } from '@lit/react';
import { MyComponent as MyComponentElement } from '@lit-storybook-boilerplate/lit/src/components/my-component/my-component.js';
export const MyComponent = createComponent({
    react: React,
    tagName: 'my-component',
    elementClass: MyComponentElement,
    events: {}
});
//# sourceMappingURL=my-component.js.map