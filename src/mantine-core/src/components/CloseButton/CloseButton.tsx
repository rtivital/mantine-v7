import React from 'react';
import { polymorphicFactory, useComponentDefaultProps, rem, StylesApiProps } from '../../core';
import {
  ActionIcon,
  ActionIconProps,
  ActionIconCssVariables,
  ActionIconVariant,
  ActionIconStylesNames,
  ActionIconStylesParams,
} from '../ActionIcon';
import { CloseIcon } from './CloseIcon';

export type CloseButtonCssVariables = ActionIconCssVariables | '--icon-size';
export type CloseButtonVariant = ActionIconVariant;
export type CloseButtonStylesNames = ActionIconStylesNames;
export type CloseButtonStylesParams = ActionIconStylesParams;

export interface CloseButtonProps
  extends Omit<ActionIconProps, 'vars'>,
    StylesApiProps<
      CloseButtonStylesNames,
      CloseButtonVariant,
      CloseButtonCssVariables,
      CloseButtonStylesParams
    > {
  /** X icon width and height, 80% by default */
  iconsSize?: number | string;
}

export interface CloseButtonFactory {
  props: CloseButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
  variant: CloseButtonVariant;
  vars: CloseButtonCssVariables;
  stylesParams: CloseButtonStylesParams;
}

const defaultProps: Partial<CloseButtonProps> = {
  iconsSize: '70%',
  variant: 'subtle',
  color: 'gray',
};

export const CloseButton = polymorphicFactory<CloseButtonFactory>((props, ref) => {
  const { iconsSize, children, vars, ...others } = useComponentDefaultProps(
    'CloseButton',
    defaultProps,
    props
  );

  return (
    <ActionIcon
      ref={ref}
      {...others}
      vars={{ '--cb-icon-size': rem(iconsSize), ...vars }}
      __staticSelector="CloseButton"
    >
      {children || <CloseIcon />}
    </ActionIcon>
  );
});

CloseButton.displayName = '@mantine/core/CloseButton';
