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
  MantineSize,
  getSize,
  MantineRadius,
  getRadius,
} from '../../core';
import { CloseButton } from '../CloseButton';
import { PillGroup } from './PillGroup/PillGroup';
import classes from './Pill.module.css';

export type PillStylesNames = 'root' | 'label' | 'remove';
export type PillVariant = 'default' | 'contrast';
export type PillCssVariables = {
  root: '--pill-fz' | '--pill-radius';
};

export interface PillProps extends BoxProps, StylesApiProps<PillFactory>, ElementProps<'div'> {
  /** Controls pill `font-size` and `padding`, `'sm'` by default */
  size?: MantineSize;

  /** Determines whether the remove button should be displayed, `false` by default */
  withRemoveButton?: boolean;

  /** Called when the remove button is clicked */
  onRemove?(): void;

  /** Props passed down to the remove button */
  removeButtonProps?: React.ComponentPropsWithoutRef<'button'>;

  /** Key of `theme.radius` or any valid CSS value to set border-radius. Numbers are converted to rem. `'xl'` by default. */
  radius?: MantineRadius | (string & {}) | number;
}

export type PillFactory = Factory<{
  props: PillProps;
  ref: HTMLDivElement;
  stylesNames: PillStylesNames;
  vars: PillCssVariables;
  variant: PillVariant;
  staticComponents: {
    Group: typeof PillGroup;
  };
}>;

const defaultProps: Partial<PillProps> = {
  size: 'sm',
  radius: 'xl',
  variant: 'default',
};

const varsResolver = createVarsResolver<PillFactory>((_, { size, radius }) => ({
  root: {
    '--pill-fz': getSize(size, 'pill-fz'),
    '--pill-radius': getRadius(radius),
  },
}));

export const Pill = factory<PillFactory>((_props, ref) => {
  const props = useProps('Pill', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    variant,
    children,
    withRemoveButton,
    onRemove,
    removeButtonProps,
    radius,
    ...others
  } = props;

  const getStyles = useStyles<PillFactory>({
    name: 'Pill',
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
    <Box
      component="span"
      ref={ref}
      variant={variant}
      {...getStyles('root', { variant })}
      mod={{ 'with-remove': withRemoveButton }}
      {...others}
    >
      <span {...getStyles('label')}>{children}</span>
      {withRemoveButton && (
        <CloseButton
          iconSize="70%"
          variant="transparent"
          radius={radius}
          tabIndex={-1}
          aria-hidden
          {...removeButtonProps}
          {...getStyles('remove', {
            className: removeButtonProps?.className,
            style: removeButtonProps?.style,
          })}
          onMouseDown={(event) => {
            event.preventDefault();
            removeButtonProps?.onMouseDown?.(event);
          }}
          onClick={(event) => {
            event.stopPropagation();
            onRemove?.();
            removeButtonProps?.onClick?.(event);
          }}
        />
      )}
    </Box>
  );
});

Pill.classes = classes;
Pill.displayName = '@mantine/core/Pill';
Pill.Group = PillGroup;
