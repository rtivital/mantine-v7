import React, { forwardRef, useRef, useEffect } from 'react';
import { randomId } from '@mantine/hooks';
import { UnstyledButton, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightActionProps extends BoxProps, ElementProps<'button'> {}

const defaultProps: Partial<SpotlightActionProps> = {};

export const SpotlightAction = forwardRef<HTMLButtonElement, SpotlightActionProps>((props, ref) => {
  const { className, style, id, ...others } = useProps('SpotlightAction', defaultProps, props);
  const ctx = useSpotlightContext();
  const actionIdRef = useRef(id || randomId());
  const removeAction = ctx.registerAction(actionIdRef.current);

  useEffect(() => removeAction, []);

  return (
    <UnstyledButton ref={ref} {...ctx.getStyles('action', { className, style })} {...others} />
  );
});
