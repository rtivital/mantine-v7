import React, { forwardRef, useEffect, useId } from 'react';
import { Box, BoxProps, ElementProps, useProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { setListId } from './spotlight.store';

export interface SpotlightActionsListProps extends BoxProps, ElementProps<'div'> {}

const defaultProps: Partial<SpotlightActionsListProps> = {};

export const SpotlightActionsList = forwardRef<HTMLDivElement, SpotlightActionsListProps>(
  (props, ref) => {
    const { className, style, id, ...others } = useProps(
      'SpotlightActionsList',
      defaultProps,
      props
    );
    const ctx = useSpotlightContext();
    const generatedId = `mantine-${useId().replaceAll(':', '')}`;
    const listId = id || generatedId;

    useEffect(() => {
      setListId(listId, ctx.store);
      return () => setListId('', ctx.store);
    }, []);

    return <Box {...ctx.getStyles('actionsList')} ref={ref} id={listId} {...others} />;
  }
);

SpotlightActionsList.displayName = '@mantine/spotlight/SpotlightActionsList';
