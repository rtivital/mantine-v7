import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { factory, useProps, Factory, getDefaultZIndex } from '@mantine/core';
import { spotlightStore, spotlight } from './spotlight.store';
import { SpotlightSearch, SpotlightSearchProps } from './SpotlightSearch';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightAction, SpotlightActionProps } from './SpotlightAction';
import { SpotlightEmpty } from './SpotlightEmpty';
import { SpotlightFooter } from './SpotlightFooter';
import { SpotlightActionsGroup } from './SpotlightActionsGroup';
import { SpotlightRoot, SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot';
import classes from './Spotlight.module.css';
import { defaultSpotlightFilter } from './default-spotlight-filter';

export type SpotlightFilterFunction = (
  query: string,
  actions: SpotlightActionData[]
) => SpotlightActionData[];

export interface SpotlightActionData extends SpotlightActionProps {
  id: string;
}

export type SpotlightStylesNames = SpotlightRootStylesNames;

export interface SpotlightProps extends SpotlightRootProps {
  /** Props passed down to the `Spotlight.Search` */
  searchProps?: SpotlightSearchProps;

  /** Actions data, passed down to `Spotlight.Action` component */
  actions: SpotlightActionData[];

  /** Function to filter actions data based on search query, by default actions are filtered by title, description and keywords */
  filter?(query: string, actions: SpotlightActionData[]): SpotlightActionData[];

  /** Message displayed when none of the actions match given `filter` */
  nothingFound?: React.ReactNode;

  /** Determines whether search query should be highlighted in action label, `false` by default */
  highlightQuery?: boolean;
}

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
  filter: defaultSpotlightFilter,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: 'mod + K',
  highlightQuery: false,
};

export const Spotlight = factory<SpotlightFactory>((_props, ref) => {
  const props = useProps('Spotlight', defaultProps, _props);
  const {
    searchProps,
    filter,
    query,
    onQueryChange,
    actions,
    nothingFound,
    highlightQuery,
    ...others
  } = props;

  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: '',
    finalValue: '',
    onChange: onQueryChange,
  });

  const filteredActions = filter!(_query, actions).map(({ id, ...actionData }) => (
    <SpotlightAction key={id} highlightQuery={highlightQuery} {...actionData} />
  ));

  return (
    <SpotlightRoot {...others} query={_query} onQueryChange={setQuery} ref={ref}>
      <SpotlightSearch {...searchProps} />
      <SpotlightActionsList>
        {filteredActions}
        {filteredActions.length === 0 && nothingFound && (
          <SpotlightEmpty>{nothingFound}</SpotlightEmpty>
        )}
      </SpotlightActionsList>
    </SpotlightRoot>
  );
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
