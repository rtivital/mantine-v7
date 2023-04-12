import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useStyles,
  Factory,
} from '../../../core';
import { ColorSwatch } from '../../ColorSwatch';
import classes from './Swatches.module.css';

export type SwatchesStylesNames = 'swatches' | 'swatch';

export interface SwatchesProps
  extends BoxProps,
    StylesApiProps<SwatchesFactory>,
    ElementProps<'div'> {
  size?: string | number;
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: string) => void;
  __staticSelector: string;
  setValue(value: string): void;
}

export type SwatchesFactory = Factory<{
  props: SwatchesProps;
  ref: HTMLDivElement;
  stylesNames: SwatchesStylesNames;
}>;

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
  } = props;

  const getStyles = useStyles<SwatchesFactory>({
    name: __staticSelector,
    props,
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
