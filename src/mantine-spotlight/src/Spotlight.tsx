import React, { useRef, useState } from 'react';
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
import { useUncontrolled, useIsomorphicEffect } from '@mantine/hooks';
import { SpotlightProvider } from './Spotlight.context';
import {
  useSpotlight,
  SpotlightStore,
  spotlightStore,
  closeSpotlight,
  openSpotlight,
  toggleSpotlight,
  updateSpotlightState,
} from './spotlight.store';
import { SpotlightSearch } from './SpotlightSearch';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightAction, SpotlightActionProps } from './SpotlightAction';
import { SpotlightEmpty } from './SpotlightEmpty';
import { defaultSpotlightFilter } from './default-spotlight-filter';
import classes from './Spotlight.module.css';

export type SpotlightFilterFunction = (query: string, action: SpotlightActionProps) => boolean;

export type SpotlightStylesNames = ModalStylesNames | 'search' | 'actionsList' | 'action' | 'empty';
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
  overlayProps: { opacity: 0.2, blur: 7 },
  store: spotlightStore,
  filter: defaultSpotlightFilter,
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
    zIndex,
    overlayProps,
    store,
    children,
    query,
    onQueryChange,
    filter,
    ...others
  } = props;

  const { opened } = useSpotlight(store);
  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: '',
    finalValue: '',
    onChange: onQueryChange,
  });

  const [empty, setEmpty] = useState(false);
  const registeredActions = useRef<Set<string>>(new Set());
  const registerAction = (id: string) => {
    registeredActions.current.add(id);
    return () => registeredActions.current.delete(id);
  };

  useIsomorphicEffect(() => {
    _query.trim().length > 0 && setEmpty(registeredActions.current.size === 0);
  }, [_query]);

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
        registerAction,
        empty,
        filter: (actionProps) => filter!(_query, actionProps),
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
