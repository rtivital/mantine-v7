import React, { useRef, useEffect, useState } from 'react';
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
import { useUncontrolled } from '@mantine/hooks';
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
import { SpotlightAction } from './SpotlightAction';
import { SpotlightEmpty } from './SpotlightEmpty';
import classes from './Spotlight.module.css';

export type SpotlightStylesNames = ModalStylesNames | 'search' | 'actionsList' | 'action';
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
    ...others
  } = props;

  const { opened } = useSpotlight(store);
  const [empty, setEmpty] = useState(false);
  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: '',
    finalValue: '',
    onChange: onQueryChange,
  });

  const registeredActions = useRef<Set<string>>(new Set());
  const registerAction = (id: string) => {
    registeredActions.current.add(id);
    return () => registeredActions.current.delete(id);
  };

  useEffect(() => {
    setTimeout(() => {
      setEmpty(registeredActions.current.size === 0);
    }, 1);
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
    <SpotlightProvider value={{ getStyles, query: _query, setQuery, registerAction, empty }}>
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
