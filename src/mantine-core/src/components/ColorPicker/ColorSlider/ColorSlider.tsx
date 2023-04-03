import React, { useRef, useState } from 'react';
import {
  UseMovePosition,
  clampUseMovePosition,
  useDidUpdate,
  useMergedRef,
  useMove,
} from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  MantineSize,
  getSize,
  useMantineTheme,
  rem,
} from '../../../core';
import classes from './ColorSlider.module.css';
import { Thumb } from '../Thumb/Thumb';

export type ColorSliderStylesNames = 'slider' | 'sliderOverlay' | 'thumb';

export interface __ColorSliderProps
  extends BoxProps,
    StylesApiProps<ColorSliderStylesNames>,
    Omit<ElementProps<'div'>, 'onChange'> {
  value: number;
  onChange(value: number): void;
  onChangeEnd(value: number): void;
  size?: MantineSize | (string & {});
  focusable?: boolean;
  __staticSelector?: string;
}

export interface ColorSliderProps extends __ColorSliderProps {
  maxValue: number;
  overlays: React.CSSProperties[];
  round: boolean;
  thumbColor?: string;
}

export interface ColorSliderFactory {
  props: ColorSliderProps;
  ref: HTMLDivElement;
  stylesNames: ColorSliderStylesNames;
}

const defaultProps: Partial<ColorSliderProps> = {
  size: 'md',
  thumbColor: 'transparent',
  __staticSelector: 'ColorSlider',
  focusable: true,
};

export const ColorSlider = factory<ColorSliderFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onChange,
    onChangeEnd,
    maxValue,
    round,
    __staticSelector,
    size,
    focusable,
    value,
    overlays,
    thumbColor,
    ...others
  } = useProps('ColorSlider', defaultProps, props);

  const getStyles = useStyles({
    name: __staticSelector!,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const theme = useMantineTheme();
  const [position, setPosition] = useState({ y: 0, x: value / maxValue });
  const positionRef = useRef(position);
  const getChangeValue = (val: number) => (round ? Math.round(val * maxValue) : val * maxValue);
  const { ref: sliderRef } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange(getChangeValue(x));
    },
    {
      onScrubEnd: () => {
        const { x } = positionRef.current;
        onChangeEnd(getChangeValue(x));
      },
    }
  );

  useDidUpdate(() => {
    setPosition({ y: 0, x: value / maxValue });
  }, [value]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange(getChangeValue(_position.x));
    onChangeEnd(getChangeValue(_position.x));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowRight': {
        handleArrow(event, { x: position.x + 0.05, y: position.y });
        break;
      }

      case 'ArrowLeft': {
        handleArrow(event, { x: position.x - 0.05, y: position.y });
        break;
      }
    }
  };

  const layers = overlays.map((overlay, index) => (
    <div {...getStyles('sliderOverlay')} style={overlay} key={index} />
  ));

  return (
    <Box
      {...others}
      ref={useMergedRef<any>(sliderRef, ref)}
      {...getStyles('slider')}
      role="slider"
      aria-valuenow={value}
      aria-valuemax={maxValue}
      aria-valuemin={0}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
      vars={{ '--thumb-size': getSize(size, 'thumb-size'), '--thumb-bg': thumbColor }}
      data-focus-ring={theme.focusRing}
    >
      {layers}

      <Thumb
        __staticSelector={__staticSelector!}
        classNames={classNames}
        styles={styles}
        position={position}
        size={size!}
        {...getStyles('thumb')}
        style={{ top: rem(1) }}
      />
    </Box>
  );
});

ColorSlider.displayName = '@mantine/core/ColorSlider';
