import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  Modal,
} from '@mantine/core';
import { SpotlightProvider } from './Spotlight.context';
import classes from './Spotlight.module.css';

export type SpotlightStylesNames = 'root';
export type SpotlightVariant = string;
export type SpotlightCssVariables = {
  root: '--test';
};

export interface SpotlightProps
  extends BoxProps,
    StylesApiProps<SpotlightFactory>,
    ElementProps<'div'> {}

export type SpotlightFactory = Factory<{
  props: SpotlightProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightStylesNames;
  vars: SpotlightCssVariables;
  variant: SpotlightVariant;
}>;

const defaultProps: Partial<SpotlightProps> = {};

const varsResolver = createVarsResolver<SpotlightFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const Spotlight = factory<SpotlightFactory>((_props, ref) => {
  const props = useProps('Spotlight', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

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
    <SpotlightProvider value={{ getStyles }}>
      <Modal
        ref={ref}
        {...getStyles('root')}
        withCloseButton={false}
        {...others}
        opened
        onClose={() => {}}
      >
        Spotlight
      </Modal>
    </SpotlightProvider>
  );
});

Spotlight.displayName = '@mantine/core/Spotlight';
