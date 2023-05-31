import React from 'react';
import { BoxProps, StylesApiProps, factory, ElementProps, useProps, Factory } from '../../../core';
import { CloseButton } from '../../CloseButton';
import { useModalBaseContext } from '../ModalBase.context';

export type ModalBaseCloseButtonStylesNames = 'close';

export interface ModalBaseCloseButtonProps
  extends BoxProps,
    StylesApiProps<ModalBaseCloseButtonFactory>,
    ElementProps<'button'> {}

export type ModalBaseCloseButtonFactory = Factory<{
  props: ModalBaseCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: ModalBaseCloseButtonStylesNames;
}>;

const defaultProps: Partial<ModalBaseCloseButtonProps> = {};

export const ModalBaseCloseButton = factory<ModalBaseCloseButtonFactory>((props, ref) => {
  const ctx = useModalBaseContext();

  const { className, style, classNames, styles, vars, ...others } = useProps(
    `${ctx.__staticSelector}CloseButton`,
    defaultProps,
    props
  );

  return (
    <CloseButton
      {...ctx.getStyles('close', { className, style, classNames, styles })}
      ref={ref}
      {...others}
      onClick={ctx.onClose}
    />
  );
});

ModalBaseCloseButton.displayName = '@mantine/core/ModalBaseCloseButton';
