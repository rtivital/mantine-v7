import React from 'react';
import {
  Box,
  MantineSize,
  StylesApiProps,
  factory,
  getSize,
  useStyles,
  Factory,
} from '../../../core';
import classes from './Thumb.module.css';

export type ThumbStylesNames = 'thumb';

export interface ThumbProps
  extends StylesApiProps<ThumbFactory>,
    React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  position: { x: number; y: number };
  size: MantineSize | (string & {});
  __staticSelector: string;
}

export type ThumbFactory = Factory<{
  props: ThumbProps;
  ref: HTMLDivElement;
  stylesNames: ThumbStylesNames;
}>;

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
  } = props;

  const getStyles = useStyles<ThumbFactory>({
    name: __staticSelector,
    props,
    classes,
    className,
    style,
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
