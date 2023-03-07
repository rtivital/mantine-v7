import React from 'react';
import {
  factory,
  Box,
  BoxProps,
  StylesApiProps,
  useComponentDefaultProps,
  useStylesApi,
} from '../../../core';
import classes from './ActionIconGroup.module.css';

export type ActionIconGroupStylesNames = 'root';
export type ActionIconGroupVariant = string;

export interface ActionIconGroupProps
  extends BoxProps,
    StylesApiProps<ActionIconGroupStylesNames, ActionIconGroupVariant> {
  /** <ActionIcon /> components only */
  children?: React.ReactNode;
}

export interface ActionIconGroupFactory {
  props: ActionIconGroupProps;
  ref: HTMLDivElement;
  stylesNames: ActionIconGroupStylesNames;
}

const defaultProps: Partial<ActionIconGroupProps> = {};

export const ActionIconGroup = factory<ActionIconGroupFactory>((props, ref) => {
  const { className, style, classNames, styles, unstyled, ...others } = useComponentDefaultProps(
    'ActionIconGroup',
    defaultProps,
    props
  );

  const getStyles = useStylesApi({
    name: 'ActionIconGroup',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  return <Box {...getStyles('root')} {...others} ref={ref} />;
});
