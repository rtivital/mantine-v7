import React, { forwardRef } from 'react';
import { Box, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightActionsListProps extends BoxProps, ElementProps<'div'> {}

const defaultProps: Partial<SpotlightActionsListProps> = {};

export const SpotlightActionsList = forwardRef<HTMLDivElement, SpotlightActionsListProps>(
  (props, ref) => {
    const { className, style, ...others } = useProps('SpotlightActionsList', defaultProps, props);
    const ctx = useSpotlightContext();

    return <Box {...ctx.getStyles('actionsList')} ref={ref} {...others} />;
  }
);

SpotlightActionsList.displayName = '@mantine/spotlight/SpotlightActionsList';
