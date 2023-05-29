import React from 'react';
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
  getDefaultZIndex,
  rem,
} from '../../core';
import { OptionalPortal, PortalProps } from '../Portal';
import classes from './Affix.module.css';

export type AffixStylesNames = 'root';
export type AffixVariant = string;
export type AffixCssVariables = {
  root: '--affix-z-index' | '--affix-top' | '--affix-left' | '--affix-bottom' | '--affix-right';
};

export interface AffixProps extends BoxProps, StylesApiProps<AffixFactory>, ElementProps<'div'> {
  /** Root element `z-index` property, `200` by default */
  zIndex?: React.CSSProperties['zIndex'];

  /** Determines whether component should be rendered within portal, `true` by default */
  withinPortal?: boolean;

  /** Props to pass down to the `Portal` component when `withinPortal` is set */
  portalProps?: Omit<PortalProps, 'children'>;

  /** Affix position on screen, defaults value is `{ bottom: 0, right: 0 }` */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

export type AffixFactory = Factory<{
  props: AffixProps;
  ref: HTMLDivElement;
  stylesNames: AffixStylesNames;
  vars: AffixCssVariables;
  variant: AffixVariant;
}>;

const defaultProps: Partial<AffixProps> = {
  position: { bottom: 0, right: 0 },
  zIndex: getDefaultZIndex('modal'),
  withinPortal: true,
};

const varsResolver = createVarsResolver<AffixFactory>((_, { zIndex, position }) => ({
  root: {
    '--affix-z-index': zIndex?.toString(),
    '--affix-top': rem(position?.top),
    '--affix-left': rem(position?.left),
    '--affix-bottom': rem(position?.bottom),
    '--affix-right': rem(position?.right),
  },
}));

export const Affix = factory<AffixFactory>((_props, ref) => {
  const props = useProps('Affix', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    portalProps,
    zIndex,
    withinPortal,
    ...others
  } = props;

  const getStyles = useStyles<AffixFactory>({
    name: 'Affix',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <OptionalPortal {...portalProps} withinPortal={withinPortal}>
      <Box ref={ref} {...getStyles('root')} {...others} />
    </OptionalPortal>
  );
});

Affix.classes = classes;
Affix.displayName = '@mantine/core/Affix';
