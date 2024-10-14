import React from 'react';
import type { Meta, StoryObj, StoryContext } from '@storybook/react';
 
import Input from './Input';

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
import React from 'react';
import { Input } from 'react-component-tailwindcss';

const SampleComponent = () => {
    function onChange(value: string, type: string){
        console.log({value, type});
    }
    return (
        <Input placeholder={'Email'} ${args.className ? ` className="${args.className}"` : ''} onChange={onChange}
            ${args.type ? ` type="${args.type}"` : ''}${args.defaultValue ? ` defaultValue="${args.defaultValue}"` : ''}${args.inputSize ? ` inputSize="${args.inputSize}"` : ''}${args.color ? ` color="${args.color}"` : ''}        
        />
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
        type: 'email',
        inputSize: 'base',
        color: 'sky',
        onChange: () => {}
    }
}