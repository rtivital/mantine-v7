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
import { useModalBaseContext } from '../ModalBase.context';

export type ModalBaseHeaderStylesNames = 'root';

export interface ModalBaseHeaderProps
  extends BoxProps,
    StylesApiProps<ModalBaseHeaderFactory>,
    ElementProps<'div'> {}

export type ModalBaseHeaderFactory = Factory<{
  props: ModalBaseHeaderProps;
  ref: HTMLDivElement;
  stylesNames: ModalBaseHeaderStylesNames;
}>;

const defaultProps: Partial<ModalBaseHeaderProps> = {};

export const ModalBaseHeader = factory<ModalBaseHeaderFactory>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, classNames, styles, style, ...others } = useProps(
    `${ctx.__staticSelector}Header`,
    defaultProps,
    props
  );

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('header', { className, style, classNames, styles })}
      {...others}
    />
  );
});

ModalBaseHeader.displayName = '@mantine/core/ModalBaseHeader';
