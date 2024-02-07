import React from "react";

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

export function Slot({ children, ...props }: SlotProps) {
  if (React.isValidElement(children)) {
    const mergedProps = {
      ...props,
      ...children.props,
    };

    return React.cloneElement(children, mergedProps);
  }

  const moreThanOneChildren = React.Children.count(children) > 1;

  if (moreThanOneChildren) {
    React.Children.only(null);
  }

  return null;
}
