import type { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Slot } from "../Slot";
import type { AsChildProps } from "../types";

const baseButton = tv({
  base: "py-2.5 px-5 rounded-md text-white font-heading font-medium",
  variants: {
    variation: {
      primary: "bg-secondary-blue enabled:hover:opacity-80",
      secondary: "bg-gray-bg text-gray-600 enabled:hover:bg-gray-contour",
      ghost:
        "border border-gray-contour text-secondary-blue enabled:hover:bg-gray-bg",
    },
    disabled: {
      true: "cursor-not-allowed",
    },
    disabledType: { whitest: "", darkest: "" },
  },
  compoundVariants: [
    {
      variation: ["primary", "secondary"],
      disabled: true,
      disabledType: "whitest",
      class: "bg-gray-bg text-gray-300",
    },
    {
      variation: ["primary", "secondary"],
      disabled: true,
      disabledType: "darkest",
      class: "bg-gray-300 text-gray-500",
    },
    {
      variation: "ghost",
      disabled: true,
      class: "text-gray-300",
    },
  ],
  defaultVariants: {
    variation: "primary",
    disabledType: "whitest",
  },
});

type ButtonVariants = VariantProps<typeof baseButton>;

export type ButtonProps = AsChildProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  ButtonVariants
> & {
  disabled?: boolean;
};

export function Button({
  variation = "primary",
  disabled,
  disabledType = "whitest",
  asChild = false,
  ...rest
}: ButtonProps) {
  const Tag = asChild ? Slot : "button";

  return (
    <Tag
      {...rest}
      className={baseButton({ variation, disabled, disabledType })}
      disabled={disabled}
    />
  );
}
