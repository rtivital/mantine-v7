import React, { forwardRef, useRef } from 'react';
import { randomId } from '@mantine/hooks';
import { UnstyledButton, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightActionProps extends BoxProps, ElementProps<'button'> {
  /** Action description, pass string to use in default filter */
  description?: React.ReactNode;
}

const defaultProps: Partial<SpotlightActionProps> = {};

export const SpotlightAction = forwardRef<HTMLButtonElement, SpotlightActionProps>((props, ref) => {
  const { className, style, id, description, children, ...others } = useProps(
    'SpotlightAction',
    defaultProps,
    props
  );

  const ctx = useSpotlightContext();
  const actionIdRef = useRef(id || randomId());
  const shouldRender = ctx.filter(props);
  const removeAction = ctx.registerAction(actionIdRef.current);

  if (!shouldRender) {
    removeAction();
    return null;
  }

  return (
    <UnstyledButton
      ref={ref}
      data-action
      {...ctx.getStyles('action', { className, style })}
      id={actionIdRef.current}
      {...others}
      tabIndex={-1}
    >
      <span>{children}</span>
      <span>{description}</span>
    </UnstyledButton>
  );
});
