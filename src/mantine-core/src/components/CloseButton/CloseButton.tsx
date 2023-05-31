import React from 'react';
import { polymorphicFactory, useProps, rem, PolymorphicFactory } from '../../core';
import {
  ActionIcon,
  ActionIconProps,
  ActionIconVariant,
  ActionIconStylesNames,
} from '../ActionIcon';
import { CloseIcon } from './CloseIcon';

export type CloseButtonVariant = ActionIconVariant;
export type CloseButtonStylesNames = ActionIconStylesNames;

export interface CloseButtonProps extends ActionIconProps {
  /** `X` icon `width` and `height`, `80%` by default */
  iconSize?: number | string;
}

export type CloseButtonFactory = PolymorphicFactory<{
  props: CloseButtonProps;
  defaultComponent: 'button';
  defaultRef: HTMLButtonElement;
  stylesNames: CloseButtonStylesNames;
  variant: CloseButtonVariant;
}>;

const defaultProps: Partial<CloseButtonProps> = {
  iconSize: '70%',
  variant: 'subtle',
  color: 'gray',
};

export const CloseButton = polymorphicFactory<CloseButtonFactory>((_props, ref) => {
  const props = useProps('CloseButton', defaultProps, _props);
  const { iconSize, children, vars, ...others } = props;
  return (
    <ActionIcon
      ref={ref}
      {...others}
      __vars={{ '--cb-icon-size': rem(iconSize) }}
      __staticSelector="CloseButton"
    >
      <CloseIcon />
      {children}
    </ActionIcon>
  );
});

CloseButton.classes = ActionIcon.classes;
CloseButton.displayName = '@mantine/core/CloseButton';
