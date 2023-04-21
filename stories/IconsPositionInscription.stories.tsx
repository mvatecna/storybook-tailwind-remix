import type { Meta, StoryObj } from "@storybook/react";
import IconsPositionInscription from "../app/components/IconsPositionInscription";
import { BrowserRouter } from "react-router-dom";

import ManLogo from "../public/svg/02-user.svg";
import InfoLogo from "../public/svg/42-info.svg";

const meta: Meta<typeof IconsPositionInscription> = {
  title: "Icons Position Inscription",
  component: IconsPositionInscription,
};

export default meta;
type StoryIconsPositionInscription = StoryObj<typeof IconsPositionInscription>;

export const UnView: StoryIconsPositionInscription = {
  render: (args) => (
    <BrowserRouter>
      <IconsPositionInscription logo={args.logo} />
    </BrowserRouter>
  ),
  args: {
    logo: ManLogo,
  },
};
export const View: StoryIconsPositionInscription = {
  render: (args) => (
    <BrowserRouter>
      <IconsPositionInscription logo={args.logo} />
    </BrowserRouter>
  ),
  args: {
    logo: InfoLogo,
  },
};
export const Error: StoryIconsPositionInscription = {
  render: (args) => (
    <BrowserRouter>
      <IconsPositionInscription logo={args.logo} />
    </BrowserRouter>
  ),
  args: {
    logo: InfoLogo,
  },
};
