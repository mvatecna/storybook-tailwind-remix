import type { Meta } from '@storybook/react';

import IconsPositionInscription from '../app/components/IconsPositionInscription';
import { BrowserRouter } from "react-router-dom"; 

const meta: Meta<typeof IconsPositionInscription> = {
  title: 'Icons Position Inscription',
  component: IconsPositionInscription,
};

export default meta;

export const Primary = () => (
  <BrowserRouter>
    <IconsPositionInscription />
  </BrowserRouter>
);