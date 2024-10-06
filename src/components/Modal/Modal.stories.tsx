import React, { useState } from 'react';
import type { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
 
import Modal from './Modal';
import Button from '../Button';

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
  args: {
      isOpen: false,
      children: "Modal Content",     
  },
  parameters: {
    docs: {
        source: {
            transform: (code: string, storyContext: StoryContext) => {
                const { args } = storyContext;
                return `
import React, { useState } from 'react';
import { Modal, Button } from 'react-component-tailwindcss';

const SampleComponent = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <Button onCLick={() => setIsOpen(true)}>
            Open Modal
        </Button>
        <Modal isOpen={isOpen} close={() => setIsOpen(false)}${args.className ? ` className="${args.className}"` : ''}
        >
            ${args.children}
        </Modal>
    );
};`
            }
        }
    }
  }
};
 
export default meta;
type Story = StoryFn<typeof Modal>;

export const Main: Story = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
<div className="p-4 min-h-80">
    <Button onClick={() => {setIsOpen(true); }}>Open Modal</Button>
    <Modal  {...args} isOpen={isOpen || args.isOpen} close={() => {setIsOpen(false); }}>
        <div>
            {args.children}
            {args.isOpen && <div className="mt-3">* It always remains open when <span className="text-red-500">isOpen is true</span> in the Controls panel.</div>}
        </div>
    </Modal>
</div>)
};