import React from 'react';
import {
  StylesApiProps,
  factory,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  Modal,
  ModalProps,
  ModalStylesNames,
  getDefaultZIndex,
} from '@mantine/core';
import { SpotlightProvider } from './Spotlight.context';
import {
  useSpotlight,
  SpotlightStore,
  spotlightStore,
  closeSpotlight,
  openSpotlight,
  toggleSpotlight,
  updateSpotlightState,
  spotlight,
} from './spotlight.store';
import { SpotlightSearch } from './SpotlightSearch';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightAction, SpotlightActionProps } from './SpotlightAction';
import { SpotlightEmpty } from './SpotlightEmpty';
import { defaultSpotlightFilter } from './default-spotlight-filter';
import classes from './Spotlight.module.css';

export type SpotlightFilterFunction = (query: string, action: SpotlightActionProps) => boolean;

export type SpotlightStylesNames =
  | ModalStylesNames
  | 'search'
  | 'actionsList'
  | 'action'
  | 'empty'
  | 'actionsListInner';
export type SpotlightVariant = string;
export type SpotlightCssVariables = {
  root: '--test';
};

export interface SpotlightProps
  extends StylesApiProps<SpotlightFactory>,
    Omit<ModalProps, 'styles' | 'classNames' | 'vars' | 'opened' | 'onClose'> {
  /** Spotlight store, can be used to create multiple instances of spotlight */
  store?: SpotlightStore;

  /** Controlled Spotlight search query */
  query?: string;

  /** Called when query changes */
  onQueryChange?(query: string): void;

  /** Function based on which `Spotlight.Action` determines whether it should render its content. By default, actions are filtered by `children` and `description` if these values are strings. */
  filter?: SpotlightFilterFunction;

  /** Determines whether the search query should be cleared when the spotlight is closed, `true` by default */
  clearQueryOnClose?: boolean;
}

export type SpotlightFactory = Factory<{
  props: SpotlightProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightStylesNames;
  vars: SpotlightCssVariables;
  variant: SpotlightVariant;
  staticComponents: {
    Search: typeof SpotlightSearch;
    ActionsList: typeof SpotlightActionsList;
    Action: typeof SpotlightAction;
    Empty: typeof SpotlightEmpty;
    open: typeof openSpotlight;
    close: typeof closeSpotlight;
    toggle: typeof toggleSpotlight;
    updateState: typeof updateSpotlightState;
  };
}>;

const defaultProps: Partial<SpotlightProps> = {
  size: 600,
  yOffset: 120,
  zIndex: getDefaultZIndex('max'),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: 'pop' },
  store: spotlightStore,
  filter: defaultSpotlightFilter,
  clearQueryOnClose: true,
};

const varsResolver = createVarsResolver<SpotlightFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const Spotlight = factory<SpotlightFactory>((_props, ref) => {
  const props = useProps('Spotlight', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    store,
    children,
    query,
    onQueryChange,
    filter,
    transitionProps,
    clearQueryOnClose,
    ...others
  } = props;

  const { opened, query: storeQuery, empty } = useSpotlight(store);
  const _query = query || storeQuery;
  const setQuery = (q: string) => {
    onQueryChange?.(q);
    spotlight.setQuery(q, store);
  };

  const getStyles = useStyles<SpotlightFactory>({
    name: 'Spotlight',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <SpotlightProvider
      value={{
        getStyles,
        query: _query,
        setQuery,
        empty,
        filter: (actionProps) => filter!(_query, actionProps),
        store: store!,
      }}
    >
      <Modal
        ref={ref}
        {...getStyles('root')}
        {...others}
        withCloseButton={false}
        opened={opened}
        padding={0}
        onClose={() => closeSpotlight(store)}
        transitionProps={{
          ...transitionProps,
          onExited: () => {
            spotlight.clearSpotlightState({ clearQuery: clearQueryOnClose }, store);
            transitionProps?.onExited?.();
          },
        }}
      >
        {children}
      </Modal>
    </SpotlightProvider>
  );
});

Spotlight.classes = classes;
Spotlight.displayName = '@mantine/core/Spotlight';
Spotlight.Search = SpotlightSearch;
Spotlight.ActionsList = SpotlightActionsList;
Spotlight.Action = SpotlightAction;
Spotlight.Empty = SpotlightEmpty;
Spotlight.open = openSpotlight;
Spotlight.close = closeSpotlight;
Spotlight.toggle = toggleSpotlight;
Spotlight.updateState = updateSpotlightState;
