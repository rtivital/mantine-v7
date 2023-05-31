import React, { useEffect } from 'react';
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

export type ModalBaseTitleStylesNames = 'title';

export interface ModalBaseTitleProps
  extends BoxProps,
    StylesApiProps<ModalBaseTitleFactory>,
    ElementProps<'div'> {}

export type ModalBaseTitleFactory = Factory<{
  props: ModalBaseTitleProps;
  ref: HTMLDivElement;
  stylesNames: ModalBaseTitleStylesNames;
}>;

const defaultProps: Partial<ModalBaseTitleProps> = {};

export const ModalBaseTitle = factory<ModalBaseTitleFactory>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, classNames, style, styles, ...others } = useProps(
    `${ctx.__staticSelector}Title`,
    defaultProps,
    props
  );

  useEffect(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);

  return (
    <Box
      component="h2"
      ref={ref}
      {...others}
      {...ctx.getStyles('title', { className, classNames, style, styles })}
      id={ctx.getTitleId()}
    />
  );
});

ModalBaseTitle.displayName = '@mantine/core/ModalBaseTitle';
