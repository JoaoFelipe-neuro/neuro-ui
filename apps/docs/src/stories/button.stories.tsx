import type { StoryObj, Meta } from "@storybook/react";
import type { ButtonProps } from "@neuro-ui/ui";
import { Button } from "@neuro-ui/ui";

export default {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Send",
    variation: "primary",
    disabled: false,
    disabledType: "whitest",
    asChild: false,
  },
  argTypes: {
    variation: {
      options: ["primary", "secondary", "ghost"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    disabledType: {
      options: ["whitest", "darkest"],
      control: {
        type: "inline-radio",
      },
      if: {
        arg: "disabled",
      },
    },
    asChild: {
      options: [true, false],
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const PrimaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variation: "secondary",
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    variation: "secondary",
    disabled: true,
  },
};

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variation: "ghost",
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const GhostDisabled: StoryObj<ButtonProps> = {
  args: {
    variation: "ghost",
    disabled: true,
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export const AsChild: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a href="/">Home</a>,
  },
};
