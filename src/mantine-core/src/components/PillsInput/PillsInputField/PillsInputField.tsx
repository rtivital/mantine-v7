import React from 'react';
import { useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineSize,
  getSize,
  getFontSize,
} from '../../../core';
import { usePillsInputContext } from '../PillsInput.context';
import classes from './PillsInputField.module.css';

export type PillsInputFieldStylesNames = 'root';
export type PillsInputFieldCssVariables = {
  root: '--pif-height' | '--pif-width' | '--pif-fz';
};

export interface PillsInputFieldProps
  extends BoxProps,
    StylesApiProps<PillsInputFieldFactory>,
    ElementProps<'input', 'type'> {
  /** Controls input styles when focused. If `auto` the input is hidden when not focused. If `visible` the input will always remain visible. `'visible'` by default  */
  type?: 'auto' | 'visible';
}

export type PillsInputFieldFactory = Factory<{
  props: PillsInputFieldProps;
  ref: HTMLInputElement;
  stylesNames: PillsInputFieldStylesNames;
  vars: PillsInputFieldCssVariables;
  ctx: {
    size: MantineSize | (string & {});
  };
}>;

const defaultProps: Partial<PillsInputFieldProps> = {
  type: 'visible',
};

const varsResolver = createVarsResolver<PillsInputFieldFactory>((_, __, { size }) => ({
  root: {
    '--pif-height': getSize(size, 'pif-height'),
    '--pif-width': getSize(size, 'pif-width'),
    '--pif-fz': getFontSize(size),
  },
}));

export const PillsInputField = factory<PillsInputFieldFactory>((_props, ref) => {
  const props = useProps('PillsInputField', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, type, ...others } = props;
  const ctx = usePillsInputContext();

  const getStyles = useStyles<PillsInputFieldFactory>({
    name: 'PillsInputField',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
    stylesCtx: { size: ctx.size },
  });

  return (
    <Box
      component="input"
      ref={useMergedRef(ref, ctx.fieldRef)}
      data-type={type}
      {...getStyles('root')}
      {...others}
    />
  );
});

PillsInputField.classes = classes;
PillsInputField.displayName = '@mantine/core/PillsInputField';
