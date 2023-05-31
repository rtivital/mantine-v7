import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
} from '../../core';
import classes from './Fieldset.module.css';

export type FieldsetStylesNames = 'root' | 'legend';
export type FieldsetVariant = 'default' | 'filled' | 'unstyled';

export interface FieldsetProps
  extends BoxProps,
    StylesApiProps<FieldsetFactory>,
    ElementProps<'fieldset'> {
  /** Fieldset legend */
  legend?: React.ReactNode;
}

export type FieldsetFactory = Factory<{
  props: FieldsetProps;
  ref: HTMLFieldSetElement;
  stylesNames: FieldsetStylesNames;
  variant: FieldsetVariant;
}>;

const defaultProps: Partial<FieldsetProps> = {
  variant: 'default',
};

const varsResolver = createVarsResolver<FieldsetFactory>(() => ({
  root: {
    '--test': 'test',
  },
}));

export const Fieldset = factory<FieldsetFactory>((_props, ref) => {
  const props = useProps('Fieldset', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    legend,
    variant,
    children,
    ...others
  } = props;

  const getStyles = useStyles<FieldsetFactory>({
    name: 'Fieldset',
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
    <Box
      component="fieldset"
      ref={ref}
      variant={variant}
      {...getStyles('root', { variant })}
      {...others}
    >
      {legend && <legend {...getStyles('legend')}>{legend}</legend>}
      {children}
    </Box>
  );
});

Fieldset.classes = classes;
Fieldset.displayName = '@mantine/core/Fieldset';
