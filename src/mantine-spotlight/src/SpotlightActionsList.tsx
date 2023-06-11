import React, { useEffect, useId } from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  ScrollArea,
} from '@mantine/core';
import classes from './Spotlight.module.css';
import { useSpotlightContext } from './Spotlight.context';
import { spotlightActions } from './spotlight.store';

export type SpotlightActionsListStylesNames = 'actionsList' | 'actionsListInner';

export interface SpotlightActionsListProps
  extends BoxProps,
    StylesApiProps<SpotlightActionsListFactory>,
    ElementProps<'div'> {}

export type SpotlightActionsListFactory = Factory<{
  props: SpotlightActionsListProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightActionsListStylesNames;
  compound: true;
}>;

const defaultProps: Partial<SpotlightActionsListProps> = {};

export const SpotlightActionsList = factory<SpotlightActionsListFactory>((props, ref) => {
  const { className, style, id, children, vars, classNames, styles, ...others } = useProps(
    'SpotlightActionsList',
    defaultProps,
    props
  );
  const ctx = useSpotlightContext();
  const generatedId = `mantine-${useId().replaceAll(':', '')}`;
  const listId = id || generatedId;

  useEffect(() => {
    spotlightActions.setListId(listId, ctx.store);
    return () => spotlightActions.setListId('', ctx.store);
  }, []);

  return (
    <ScrollArea
      {...ctx.getStyles('actionsList', { className, style, classNames, styles })}
      ref={ref}
      type="scroll"
      {...others}
    >
      <div id={listId} {...ctx.getStyles('actionsListInner', { classNames, styles })}>
        {children}
      </div>
    </ScrollArea>
  );
});

SpotlightActionsList.classes = classes;
SpotlightActionsList.displayName = '@mantine/spotlight/SpotlightActionsList';
