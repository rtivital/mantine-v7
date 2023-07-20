import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '../../../core';
import { useMenuContext } from '../Menu.context';
import classes from '../Menu.module.css';

export type MenuLabelStylesNames = 'label';

export interface MenuLabelProps
  extends BoxProps,
    StylesApiProps<MenuLabelFactory>,
    ElementProps<'div'> {}

export type MenuLabelFactory = Factory<{
  props: MenuLabelProps;
  ref: HTMLDivElement;
  stylesNames: MenuLabelStylesNames;
  compound: true;
}>;

const defaultProps: Partial<MenuLabelProps> = {};

export const MenuLabel = factory<MenuLabelFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, ...others } = useProps(
    'MenuLabel',
    defaultProps,
    props
  );
  const ctx = useMenuContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('label', { className, style, styles, classNames })}
      {...others}
    />
  );
});

MenuLabel.classes = classes;
MenuLabel.displayName = '@mantine/core/MenuLabel';
