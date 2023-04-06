import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
} from '../../../core';
import { ColorSwatch } from '../../ColorSwatch';
import classes from './Swatches.module.css';

export type SwatchesStylesNames = 'swatches' | 'swatch';

export interface SwatchesProps
  extends BoxProps,
    StylesApiProps<SwatchesStylesNames>,
    ElementProps<'div'> {
  size?: string | number;
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: string) => void;
  __staticSelector: string;
  setValue(value: string): void;
}

export interface SwatchesFactory {
  props: SwatchesProps;
  ref: HTMLDivElement;
  stylesNames: SwatchesStylesNames;
}

const defaultProps: Partial<SwatchesProps> = {};

export const Swatches = factory<SwatchesFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    datatype,
    setValue,
    onChangeEnd,
    size,
    focusable,
    data,
    swatchesPerRow,
    __staticSelector,
    ...others
  } = useProps('Swatches', defaultProps, props);

  const getStyles = useStyles<SwatchesStylesNames>({
    name: __staticSelector,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const colors = data.map((color, index) => (
    <ColorSwatch
      {...getStyles('swatch')}
      component="button"
      type="button"
      color={color}
      key={index}
      radius="sm"
      onClick={() => {
        setValue(color);
        onChangeEnd?.(color);
      }}
      aria-label={color}
      tabIndex={focusable ? 0 : -1}
      data-swatch
    />
  ));

  return (
    <Box
      {...getStyles('swatches')}
      ref={ref}
      vars={{ '--swatch-size': `${100 / swatchesPerRow!}%` }}
      {...others}
    >
      {colors}
    </Box>
  );
});

Swatches.displayName = '@mantine/core/Swatches';
