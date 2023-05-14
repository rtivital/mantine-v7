import React from 'react';
import {
  factory,
  Box,
  BoxProps,
  StylesApiProps,
  useProps,
  useStyles,
  rem,
  createVarsResolver,
  Factory,
} from '../../../core';
import classes from './ActionIconGroup.module.css';

export type ActionIconGroupStylesNames = 'root';
export type ActionIconGroupVariant = string;
export type ActionIconGroupCssVariables = {
  root: '--ai-border-width';
};

export interface ActionIconGroupProps extends BoxProps, StylesApiProps<ActionIconGroupFactory> {
  /** `ActionIcon` components only */
  children?: React.ReactNode;

  /** Controls group orientation, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';

  /** `border-width` of child `ActionIcon` components. Default value in `1` */
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
  root: { '--ai-border-width': rem(borderWidth) },
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

  const getStyles = useStyles<ActionIconGroupFactory>({
    name: 'ActionIconGroup',
    props,
    classes,
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
      {...getStyles('root')}
      ref={ref}
      variant={variant}
      mod={{ 'data-orientation': orientation }}
      role="group"
      {...others}
    />
  );
});

ActionIconGroup.displayName = '@mantine/core/ActionIconGroup';
