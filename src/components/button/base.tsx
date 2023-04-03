import { css } from '@/lib/stitches.config';

import * as React from 'react';
import cx from 'classnames';

const Button = css({
  background: 'white',
  boxShadow: '$1',
  padding: '16px 32px',
  borderRadius: '5px'
})

export function ButtonBase({ children }: React.PropsWithChildren) {
  return <>
    {React.Children.map(children as JSX.Element, (child) => {
      return React.cloneElement(child, {
        className: cx(Button(), child.props.className),
      });
    })}
  </>
}