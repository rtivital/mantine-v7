import React, { forwardRef, useEffect, useId } from 'react';
import { UnstyledButton, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { spotlight } from './spotlight.store';

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
  const generatedId = useId();
  const actionId = id || generatedId;
  const shouldRender = ctx.filter(props);
  const removeAction = spotlight.registerAction(actionId);

  useEffect(
    () => () => {
      removeAction();
    },
    []
  );

  if (!shouldRender) {
    removeAction();
    return null;
  }

  return (
    <UnstyledButton
      ref={ref}
      data-action
      {...ctx.getStyles('action', { className, style })}
      id={actionId}
      {...others}
      tabIndex={-1}
    >
      <span>{children}</span>
      <span>{description}</span>
    </UnstyledButton>
  );
});
