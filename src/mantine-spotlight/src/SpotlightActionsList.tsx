import React, { forwardRef, useEffect, useId } from 'react';
import { BoxProps, ElementProps, useProps, ScrollArea } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { setListId } from './spotlight.store';

export interface SpotlightActionsListProps extends BoxProps, ElementProps<'div'> {}

const defaultProps: Partial<SpotlightActionsListProps> = {};

export const SpotlightActionsList = forwardRef<HTMLDivElement, SpotlightActionsListProps>(
  (props, ref) => {
    const { className, style, id, children, ...others } = useProps(
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

    return (
      <ScrollArea.Autosize {...ctx.getStyles('actionsList')} ref={ref} {...others}>
        <div id={listId} {...ctx.getStyles('actionsListInner')}>
          {children}
        </div>
      </ScrollArea.Autosize>
    );
  }
);

SpotlightActionsList.displayName = '@mantine/spotlight/SpotlightActionsList';
