import React, { useState } from 'react';
import type { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
 
import Drawer from './Drawer';
import Button from '../Button';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  tags: ['autodocs'],
  args: {
      isOpen: false,
      direction: 'right',
      title: 'Title',
      subtitle: 'subtitle',
      children: "Drawer Content",
      size: '50%',
      closeOnMaskClick: true        
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
type Story = StoryFn<typeof Drawer>;

export const Main: Story = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
<div className="p-4 min-h-80">
    <Button onClick={() => {setIsOpen(true); }}>Open Drawer</Button>
    <Drawer  {...args} isOpen={isOpen || args.isOpen} close={() => {setIsOpen(false); }}>
        <div>
            {args.children}
            {args.isOpen && <div className="mt-3">* It always remains open when <span className="text-red-500">isOpen is true</span> in the Controls panel.</div>}
        </div>
    </Drawer>
</div>)
};