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

export type ModalBaseBodyStylesNames = 'body';

export interface ModalBaseBodyProps
  extends BoxProps,
    StylesApiProps<ModalBaseBodyFactory>,
    ElementProps<'div'> {}

export type ModalBaseBodyFactory = Factory<{
  props: ModalBaseBodyProps;
  ref: HTMLDivElement;
  stylesNames: ModalBaseBodyStylesNames;
}>;

const defaultProps: Partial<ModalBaseBodyProps> = {};

export const ModalBaseBody = factory<ModalBaseBodyFactory>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, classNames, styles, style, ...others } = useProps(
    `${ctx.__staticSelector}Body`,
    defaultProps,
    props
  );

  useEffect(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);

  return (
    <Box
      {...others}
      id={ctx.getBodyId()}
      {...ctx.getStyles('body', { className, style, styles, classNames })}
      ref={ref}
    />
  );
});

ModalBaseBody.displayName = '@mantine/core/ModalBaseBody';
