import React, { forwardRef } from 'react';
import { Box, ElementProps } from '../../../core';
import { ColorSwatch } from '../../ColorSwatch';
import { useColorPickerContext } from '../ColorPicker.context';

export interface SwatchesProps extends ElementProps<'div'> {
  size?: string | number;
  data: string[];
  swatchesPerRow?: number;
  focusable?: boolean;
  onChangeEnd?: (color: string) => void;
  setValue(value: string): void;
}

export const Swatches = forwardRef<HTMLDivElement, SwatchesProps>(
  (
    {
      className,
      datatype,
      setValue,
      onChangeEnd,
      size,
      focusable,
      data,
      swatchesPerRow,
      ...others
    },
    ref
  ) => {
    const { getStyles } = useColorPickerContext();

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
  }
);

Swatches.displayName = '@mantine/core/Swatches';
