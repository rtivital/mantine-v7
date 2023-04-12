import React from 'react';
import { factory, useProps, rem, Factory } from '../../../core';
import {
  ColorSlider,
  __ColorSliderProps,
  ColorSliderStylesNames,
} from '../ColorSlider/ColorSlider';
import { round } from '../converters/parsers';

export interface AlphaSliderProps extends __ColorSliderProps {
  color: string;
}

export type AlphaSliderFactory = Factory<{
  props: AlphaSliderProps;
  ref: HTMLDivElement;
  stylesNames: ColorSliderStylesNames;
}>;

const defaultProps: Partial<AlphaSliderProps> = {};

export const AlphaSlider = factory<AlphaSliderFactory>((props, ref) => {
  const { vars, value, onChange, onChangeEnd, color, __staticSelector, ...others } = useProps(
    'AlphaSlider',
    defaultProps,
    props
  );

  return (
    <ColorSlider
      {...others}
      ref={ref}
      value={value}
      onChange={(val) => onChange?.(round(val, 2))}
      onChangeEnd={(val) => onChangeEnd?.(round(val, 2))}
      maxValue={1}
      round={false}
      __staticSelector={__staticSelector || 'AlphaSlider'}
      data-alpha
      overlays={[
        {
          backgroundImage:
            'linear-gradient(45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--slider-checkers) 75%), linear-gradient(-45deg, var(--mantine-color-body) 75%, var(--slider-checkers) 75%)',
          backgroundSize: `${rem(8)} ${rem(8)}`,
          backgroundPosition: `0 0, 0 ${rem(4)}, ${rem(4)} -${rem(4)}, -${rem(4)} 0`,
        },
        {
          backgroundImage: `linear-gradient(90deg, transparent, ${color})`,
        },
        {
          boxShadow: `rgba(0, 0, 0, .1) 0 0 0 ${rem(1)} inset, rgb(0, 0, 0, .15) 0 0 ${rem(
            4
          )} inset`,
        },
      ]}
    />
  );
});

AlphaSlider.displayName = '@mantine/core/AlphaSlider';
