import React from 'react';
import {
  Box,
  MantineSize,
  StylesApiProps,
  factory,
  getSize,
  useProps,
  useStyles,
} from '../../../core';
import classes from './Thumb.module.css';

export type ThumbStylesNames = 'thumb';

export interface ThumbProps
  extends StylesApiProps<ThumbStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  position: { x: number; y: number };
  size: MantineSize | (string & {});
  __staticSelector: string;
}

export interface ThumbFactory {
  props: ThumbProps;
  ref: HTMLDivElement;
  stylesNames: ThumbStylesNames;
}

const defaultProps: Partial<ThumbProps> = {};

export const Thumb = factory<ThumbFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    size,
    position,
    ...others
  } = useProps('ColorPickerThumb', defaultProps, props);

  const getStyles = useStyles({
    name: __staticSelector,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
    rootSelector: 'thumb',
  });

  return (
    <Box
      ref={ref}
      {...getStyles('thumb')}
      vars={{
        '--thumb-size': getSize(size, 'thumb-size'),
        '--thumb-y-offset': `${position.y * 100}%`,
        '--thumb-x-offset': `${position.x * 100}%`,
      }}
      {...others}
    />
  );
});

Thumb.displayName = '@mantine/core/ColorPickerThumb';
