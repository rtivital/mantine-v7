import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  MantineSpacing,
  getSpacing,
  useVars,
  createVarsResolver,
  Factory,
} from '../../core';
import { filterFalsyChildren } from './filter-falsy-children/filter-falsy-children';
import classes from './Group.module.css';

export type GroupStylesNames = 'root';
export type GroupVariant = string;
export type GroupCssVariables =
  | '--group-gap'
  | '--group-align'
  | '--group-justify'
  | '--group-wrap'
  | '--group-child-width';

export interface GroupStylesCtx {
  childWidth: string;
}

export interface GroupProps extends BoxProps, StylesApiProps<GroupFactory>, ElementProps<'div'> {
  /** Controls `justify-content` CSS property, `'flex-start'` by default */
  justify?: React.CSSProperties['justifyContent'];

  /** Controls `align-items` CSS property, `'center'` by default */
  align?: React.CSSProperties['alignItems'];

  /** Controls `flex-wrap` CSS property, `'nowrap'` by default */
  wrap?: React.CSSProperties['flexWrap'];

  /** Key of `theme.spacing` or any valid CSS value for `gap`, numbers are converted to rem (1rem = 16px), `'md'` by default */
  gap?: MantineSpacing | (string & {}) | number;

  /** Determines whether each child element should have `flex-grow: 1` style, `false` by default */
  grow?: boolean;

  /** Determines whether children should take only dedicated amount of space (`max-width` style is set based on the number of children), `true` by default */
  preventGrowOverflow?: boolean;
}

export type GroupFactory = Factory<{
  props: GroupProps;
  ref: HTMLDivElement;
  stylesNames: GroupStylesNames;
  vars: GroupCssVariables;
  ctx: GroupStylesCtx;
  variant: GroupVariant;
}>;

const defaultProps: Partial<GroupProps> = {
  justify: 'flex-start',
  align: 'center',
  gap: 'md',
  preventGrowOverflow: true,
};

const varsResolver = createVarsResolver<GroupFactory>(
  (_, { grow, preventGrowOverflow, gap, align, justify, wrap }, { childWidth }) => ({
    '--group-child-width': grow && preventGrowOverflow ? childWidth : undefined,
    '--group-gap': getSpacing(gap),
    '--group-align': align,
    '--group-justify': justify,
    '--group-wrap': wrap,
  })
);

export const Group = factory<GroupFactory>((_props, ref) => {
  const props = useProps('Group', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    children,
    gap,
    align,
    justify,
    wrap,
    grow,
    preventGrowOverflow,
    vars,
    variant,
    ...others
  } = props;

  const filteredChildren = filterFalsyChildren(children);
  const childrenCount = filteredChildren.length;
  const childWidth = `calc(${100 / childrenCount}% - (${getSpacing(gap)} - ${getSpacing(
    gap
  )} / ${childrenCount}))`;

  const stylesCtx: GroupStylesCtx = { childWidth };

  const getStyles = useStyles<GroupFactory>({
    name: 'Group',
    props,
    stylesCtx,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<GroupFactory>({
    name: 'Group',
    resolver: varsResolver,
    props,
    stylesCtx,
    vars,
  });

  return (
    <Box {...getStyles('root')} ref={ref} variant={variant} mod={{ grow }} vars={_vars} {...others}>
      {filteredChildren}
    </Box>
  );
});

Group.displayName = '@mantine/core/Group';
