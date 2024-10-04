import type { Meta, StoryContext, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext) => {
          const { args } = storyContext;
          return `
import React${args.loading ? `{ useState }`: ''} from 'react';
import { Button } from 'react-component-tailwindcss';
${args.loading ? `\nconst [ loading, setLoading ] = useState(${args.loading})\n`: ''}
const SampleComponent = () => {
  const clickFunc = (event: React.MouseEvent<HTMLButtonElement>) => {}
  return (
    <Button${args.className ? ` className="${args.className}"` : ''}${args.variant ? ` variant="${args.variant}"` : ''}${args.color ? ` color="${args.color}"` : ''}${args.type ? ` type="${args.type}"` : ''}${args.size ? ` size="${args.size}"` : ''}${args.loading ? ` loading={loading}` : ''}${args.rounded ? ` rounded={${args.rounded}}` : ''}${args.disabled ? ` disabled={${args.disabled}}` : ''} onClick={clickFunc}></Button>
  );
};`
        },
        type: 'dynamic', // or 'code' for manual rendering
      },
    },
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'radio' },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
    args: {
      children: 'Button',
      variant: "primary",
      color: "sky"
    }
}
