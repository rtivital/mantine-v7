import React from 'react';
import {
  factory,
  Box,
  BoxProps,
  StylesApiProps,
  useProps,
  useStyles,
  useVars,
  rem,
  createVarsResolver,
  Factory,
} from '../../../core';
import classes from './ActionIconGroup.module.css';

export type ActionIconGroupStylesNames = 'root';
export type ActionIconGroupVariant = string;
export type ActionIconGroupCssVariables = '--ai-border-width';

export interface ActionIconGroupProps extends BoxProps, StylesApiProps<ActionIconGroupFactory> {
  /** `<ActionIcon />` components */
  children?: React.ReactNode;

  /** Horizontal or vertical orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Controls border-width of child `<ActionIcon />` components. Default value in `1`. Numbers are converted to rem (1rem = 16px). */
  borderWidth?: number | string;
}

export type ActionIconGroupFactory = Factory<{
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  variant: ActionIconGroupVariant;
  stylesNames: ActionIconGroupStylesNames;
  vars: ActionIconGroupCssVariables;
}>;

const defaultProps: Partial<ActionIconGroupProps> = {
  orientation: 'horizontal',
  borderWidth: 1,
};

const varsResolver = createVarsResolver<ActionIconGroupFactory>((_, { borderWidth }) => ({
  '--ai-border-width': rem(borderWidth),
}));

export const ActionIconGroup = factory<ActionIconGroupFactory>((_props, ref) => {
  const props = useProps('ActionIconGroup', defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    ...others
  } = useProps('ActionIconGroup', defaultProps, _props);

  const _vars = useVars<ActionIconGroupFactory>({
    name: 'ActionIconGroup',
    props,
    resolver: varsResolver,
    vars,
  });

  const getStyles = useStyles<ActionIconGroupFactory>({
    name: 'ActionIconGroup',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  return (
    <Box
      {...getStyles('root')}
      ref={ref}
      variant={variant}
      mod={{ 'data-orientation': orientation }}
      vars={_vars}
      role="group"
      {...others}
    />
  );
});

ActionIconGroup.displayName = '@mantine/core/ActionIconGroup';
