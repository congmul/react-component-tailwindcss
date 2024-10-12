import React, { useState } from 'react';
import type { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
 
import Input from './Input';
import Button from '../Button';

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  args: {
      defaultValue: "Input Content",      
  },
  parameters: {
    docs: {
        source: {
            transform: (code: string, storyContext: StoryContext) => {
                const { args } = storyContext;
                return `
import React, { useState } from 'react';
import { Drawer, Button } from 'react-component-tailwindcss';

const SampleComponent = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <Button onCLick={() => setIsOpen(true)}>
            Open drawer
        </Button>
        <Drawer isOpen={isOpen} close={() => setIsOpen(false)}${args.className ? ` className="${args.className}"` : ''}
            ${args.title ? ` title="${args.title}"` : ''}${args.subtitle ? ` subtitle="${args.subtitle}"` : ''}
            ${args.size ? ` size="${args.size}"` : ''} closeOnMaskClick={${args.closeOnMaskClick === true}}${args.direction ? ` direction="${args.direction}"` : ''}
        >
            ${args.children}
        </Drawer>
    );
};`
            }
        }
    }
  }
};
 
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
    args: {
        defaultValue: 'Jehyun',
        placeholder: 'Email',
        className: 'w-52 m-4',
        onChange: () => {}
    }
}