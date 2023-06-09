import React, { forwardRef } from 'react';
import { Box, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightFooterProps extends BoxProps, ElementProps<'div'> {}

const defaultProps: Partial<SpotlightFooterProps> = {};

export const SpotlightFooter = forwardRef<HTMLDivElement, SpotlightFooterProps>((props, ref) => {
  const { className, style, ...others } = useProps('SpotlightFooter', defaultProps, props);
  const ctx = useSpotlightContext();
  return <Box ref={ref} {...ctx.getStyles('footer')} {...others} />;
});

SpotlightFooter.displayName = '@mantine/spotlight/SpotlightFooter';
