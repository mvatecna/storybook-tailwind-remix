import type { Meta, StoryObj } from '@storybook/react';

import IconsPositionInscription from '../app/components/IconsPositionInscription';
import { BrowserRouter } from "react-router-dom"; 

const meta: Meta<typeof IconsPositionInscription> = {
  title: 'Icons Position Inscription',
  component: IconsPositionInscription,
};

export default meta;
type StoryIconsPositionInscription = StoryObj<typeof IconsPositionInscription>;

export const UnView : StoryIconsPositionInscription = {
  render: (args) => (
    <BrowserRouter>
      <IconsPositionInscription />
    </BrowserRouter>
    ),
}
export const View : StoryIconsPositionInscription = {
  render: (args) => (
    <BrowserRouter>
      <IconsPositionInscription />
    </BrowserRouter>
    ),
}
export const Error : StoryIconsPositionInscription = {
  render: (args) => (
    <BrowserRouter>
      <IconsPositionInscription />
    </BrowserRouter>
    ),
}