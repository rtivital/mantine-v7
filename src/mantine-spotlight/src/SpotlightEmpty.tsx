import React, { forwardRef } from 'react';
import { Box, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightEmptyProps extends BoxProps, ElementProps<'div'> {}

const defaultProps: Partial<SpotlightEmptyProps> = {};

export const SpotlightEmpty = forwardRef<HTMLDivElement, SpotlightEmptyProps>((props, ref) => {
  const { className, style, ...others } = useProps('SpotlightEmpty', defaultProps, props);
  const ctx = useSpotlightContext();

  if (!ctx.empty) {
    return null;
  }

  return <Box ref={ref} {...ctx.getStyles('empty')} {...others} />;
});

SpotlightEmpty.displayName = '@mantine/spotlight/SpotlightEmpty';
