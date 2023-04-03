import { ButtonBase } from "./base";

import * as React from 'react';
import Link, { LinkProps } from "next/link";


interface NavigateButtonProps extends React.PropsWithChildren, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>, LinkProps {}

export function NavigateButton({ children, ...linkProps }: NavigateButtonProps) {
  
  return (
    <ButtonBase>
      <Link {...linkProps}>{children}</Link>
    </ButtonBase>
  )
}