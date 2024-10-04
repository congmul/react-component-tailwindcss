import React, { useState } from 'react';
import type { Meta, StoryObj, StoryFn } from '@storybook/react';
 
import Drawer from './Drawer';
import Button from '../Button';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryFn<typeof Drawer>;

export const Main: Story = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (<div className="p-4 min-h-80">
    <Button onClick={() => {setIsOpen(true);}}>Open drawer</Button>
    <Drawer  {...args} isOpen={isOpen || args.isOpen} close={() => {setIsOpen(false);}}>
        <div className="p-4">
            Drawer
        </div>
    </Drawer>
    </div>)
};