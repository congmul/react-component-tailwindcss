import type { Meta, StoryContext, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Spinner from './Spinner';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',

    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext) => {
          const { args } = storyContext;
          return `
import React from 'react';
import { Spinner } from 'react-component-tailwindcss';

const SampleComponent = () => {
  return (
    <Spinner${args.size ? ` size="${args.size}"` : ''}${args.color ? ` color="${args.color}"` : ''} />
  );
};`
        },
        type: 'dynamic', // or 'code' for manual rendering
      },
    }
  }, // HERE!
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     color: { control: 'color' },
//   },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
//     args: {
//         children: 'Spinner'
//     }
}
