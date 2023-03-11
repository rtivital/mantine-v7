import React from 'react';
import cx from 'clsx';
import {
  Text,
  TextProps,
  TextCssVariables,
  TextStylesNames,
  TextStylesParams,
  TextVariant,
} from '../Text';
import { polymorphicFactory, useComponentDefaultProps } from '../../core';
import classes from './Anchor.module.css';

export type AnchorStylesNames = TextStylesNames;
export type AnchorVariant = TextVariant;
export type AnchorCssVariables = TextCssVariables;
export type AnchorStylesParams = TextStylesParams;

export interface AnchorProps extends TextProps {
  /** Determines in which cases link should have `text-decoration: underline` styles, `hover` by default */
  underline?: 'always' | 'hover' | 'never';
}

export interface AnchorFactory {
  props: AnchorProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
  stylesNames: AnchorStylesNames;
  vars: AnchorCssVariables;
  variant: AnchorVariant;
  stylesParams: AnchorStylesParams;
}

const defaultProps: Partial<AnchorProps> = {
  underline: 'hover',
};

export const Anchor = polymorphicFactory<AnchorFactory>((props, ref) => {
  const { underline, className, ...others } = useComponentDefaultProps(
    'Anchor',
    defaultProps,
    props
  );
  return (
    <Text
      component="a"
      ref={ref}
      data-underline={underline}
      className={cx(classes.root, className)}
      {...others}
    />
  );
});

Anchor.displayName = '@mantine/core/Anchor';
