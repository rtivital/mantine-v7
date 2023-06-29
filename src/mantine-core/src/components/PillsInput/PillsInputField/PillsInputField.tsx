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
  Factory,
  MantineSize,
} from '../../../core';
import { usePillsInputContext } from '../PillsInput.context';
import classes from './PillsInputField.module.css';

export type PillsInputFieldStylesNames = 'root';

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
  ctx: {
    size: MantineSize | (string & {});
  };
}>;

const defaultProps: Partial<PillsInputFieldProps> = {
  type: 'visible',
};

export const PillsInputField = factory<PillsInputFieldFactory>((_props, ref) => {
  const props = useProps('PillsInputField', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, type, disabled, ...others } = props;
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
  });

  return (
    <Box
      component="input"
      ref={useMergedRef(ref, ctx.fieldRef)}
      data-type={type}
      disabled={disabled || ctx.disabled}
      {...getStyles('root')}
      {...others}
    />
  );
});

PillsInputField.classes = classes;
PillsInputField.displayName = '@mantine/core/PillsInputField';
