import type { Meta, StoryObj } from '@storybook/react';
// import { BrowserRouter } from "react-router-dom"; 
import TextInputGen from '../app/components/TextInputGen';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof TextInputGen> = {
  title: 'Text Input General',
  component: TextInputGen,
};

export default meta;
type Story = StoryObj<typeof TextInputGen>;

export const Primary: Story = {
  render: (args) => (
    <BrowserRouter>
      <TextInputGen placeholder={args.placeholder} />
    </BrowserRouter>
  ),
}

export const Secondary: Story = {
  render: (args) => (
    <BrowserRouter>
     <TextInputGen placeholder={args.placeholder} />
    </BrowserRouter>
  ),
  args: {
    placeholder: 'Built with Storybook',
  },
}