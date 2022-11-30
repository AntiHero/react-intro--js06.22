import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Button from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MyButton',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof Button> = () => <Button />;

// export const Primary = Template.bind({});

export const Primary = () => <Button />;