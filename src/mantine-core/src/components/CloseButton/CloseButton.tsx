import React from 'react';
import {
  polymorphicFactory,
  useProps,
  rem,
  StylesApiProps,
  useVars,
  createVarsResolver,
  PolymorphicFactory,
} from '../../core';
import {
  ActionIcon,
  ActionIconProps,
  ActionIconVariant,
  ActionIconStylesNames,
} from '../ActionIcon';
import { CloseIcon } from './CloseIcon';

export type CloseButtonCssVariables = '--cb-icon-size';
export type CloseButtonVariant = ActionIconVariant;
export type CloseButtonStylesNames = ActionIconStylesNames;

export interface CloseButtonProps
  extends Omit<ActionIconProps, 'vars' | 'styles' | 'classNames'>,
    StylesApiProps<CloseButtonFactory> {
  /** X icon width and height, 80% by default */
  iconSize?: number | string;
}

export type CloseButtonFactory = PolymorphicFactory<{
  props: CloseButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
  variant: CloseButtonVariant;
  vars: CloseButtonCssVariables;
}>;

const defaultProps: Partial<CloseButtonProps> = {
  iconSize: '70%',
  variant: 'subtle',
  color: 'gray',
};

const varsResolver = createVarsResolver<CloseButtonFactory>((_, { iconSize }) => ({
  '--cb-icon-size': rem(iconSize),
}));

export const CloseButton = polymorphicFactory<CloseButtonFactory>((_props, ref) => {
  const props = useProps('CloseButton', defaultProps, _props);
  const { iconSize, children, vars, ...others } = props;
  const _vars = useVars<CloseButtonFactory>({
    name: 'CloseButton',
    resolver: varsResolver,
    props,
    vars,
  });

  return (
    <ActionIcon ref={ref} {...others} vars={_vars} __staticSelector="CloseButton">
      {children || <CloseIcon />}
    </ActionIcon>
  );
});

CloseButton.displayName = '@mantine/core/CloseButton';
