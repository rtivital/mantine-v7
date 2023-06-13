import React from 'react';
import { factory, useProps, Factory, getDefaultZIndex } from '@mantine/core';
import { spotlightStore, spotlight } from './spotlight.store';
import { SpotlightSearch } from './SpotlightSearch';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightAction, SpotlightActionProps } from './SpotlightAction';
import { SpotlightEmpty } from './SpotlightEmpty';
import { SpotlightFooter } from './SpotlightFooter';
import { SpotlightActionsGroup } from './SpotlightActionsGroup';
import { SpotlightRoot, SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot';
import classes from './Spotlight.module.css';

export type SpotlightFilterFunction = (query: string, action: SpotlightActionProps) => boolean;

export type SpotlightStylesNames = SpotlightRootStylesNames;

export interface SpotlightProps extends SpotlightRootProps {}

export type SpotlightFactory = Factory<{
  props: SpotlightProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightStylesNames;
  staticComponents: {
    Search: typeof SpotlightSearch;
    ActionsList: typeof SpotlightActionsList;
    Action: typeof SpotlightAction;
    Empty: typeof SpotlightEmpty;
    Footer: typeof SpotlightFooter;
    ActionsGroup: typeof SpotlightActionsGroup;
    Root: typeof SpotlightRoot;
    open: typeof spotlight.open;
    close: typeof spotlight.close;
    toggle: typeof spotlight.toggle;
  };
}>;

const defaultProps: Partial<SpotlightProps> = {
  size: 600,
  yOffset: 80,
  zIndex: getDefaultZIndex('max'),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: 'pop' },
  store: spotlightStore,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: 'mod + K',
};

export const Spotlight = factory<SpotlightFactory>((_props, ref) => {
  const props = useProps('Spotlight', defaultProps, _props);
  const { ...others } = props;

  return <SpotlightRoot {...others} ref={ref} />;
});

Spotlight.classes = classes;
Spotlight.displayName = '@mantine/spotlight/Spotlight';
Spotlight.Search = SpotlightSearch;
Spotlight.ActionsList = SpotlightActionsList;
Spotlight.Action = SpotlightAction;
Spotlight.Empty = SpotlightEmpty;
Spotlight.ActionsGroup = SpotlightActionsGroup;
Spotlight.Footer = SpotlightFooter;
Spotlight.Root = SpotlightRoot;
Spotlight.open = spotlight.open;
Spotlight.close = spotlight.close;
Spotlight.toggle = spotlight.toggle;
