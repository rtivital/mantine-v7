import React, { useEffect, useRef, useState } from 'react';
import { UseMovePosition, clampUseMovePosition, useMove } from '@mantine/hooks';
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
} from '../../../core';
import { HsvaColor } from '../ColorPicker.types';
import { convertHsvaTo } from '../converters';
import classes from './Saturation.module.css';
import { Thumb } from '../Thumb/Thumb';

export type SaturationStylesNames = 'saturation' | 'thumb' | 'saturationOverlay';
export type SaturationVariant = string;
export type SaturationCssVariables = '--test';

export interface SaturationStylesParams {}

export interface SaturationProps
  extends BoxProps,
    StylesApiProps<SaturationStylesNames, SaturationVariant, SaturationCssVariables>,
    ElementProps<'div', 'onChange'> {
  __staticSelector: string;
  value: HsvaColor;
  onChange(color: Partial<HsvaColor>): void;
  onChangeEnd(color: Partial<HsvaColor>): void;
  saturationLabel?: string;
  size: MantineSize | (string & {});
  color: string;
  focusable?: boolean;
}

export interface SaturationFactory {
  props: SaturationProps;
  ref: HTMLDivElement;
  stylesNames: SaturationStylesNames;
  vars: SaturationCssVariables;
  stylesParams: SaturationStylesParams;
}

const defaultProps: Partial<SaturationProps> = {
  __staticSelector: 'Saturation',
  focusable: true,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Saturation = factory<SaturationFactory>((props, _ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onChange,
    onChangeEnd,
    value,
    saturationLabel,
    focusable,
    __staticSelector,
    size,
    color,
    ...others
  } = useProps('Saturation', defaultProps, props);

  const getStyles = useStyles({
    name: __staticSelector,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const [position, setPosition] = useState({ x: value.s / 100, y: 1 - value.v / 100 });
  const positionRef = useRef(position);

  const { ref } = useMove(
    ({ x, y }) => {
      positionRef.current = { x, y };
      onChange({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
    },
    {
      onScrubEnd: () => {
        const { x, y } = positionRef.current;
        onChangeEnd({ s: Math.round(x * 100), v: Math.round((1 - y) * 100) });
      },
    }
  );

  useEffect(() => {
    setPosition({ x: value.s / 100, y: 1 - value.v / 100 });
  }, [value.s, value.v]);

  const handleArrow = (event: React.KeyboardEvent<HTMLDivElement>, pos: UseMovePosition) => {
    event.preventDefault();
    const _position = clampUseMovePosition(pos);
    onChange({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
    onChangeEnd({ s: Math.round(_position.x * 100), v: Math.round((1 - _position.y) * 100) });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp': {
        handleArrow(event, { y: position.y - 0.05, x: position.x });
        break;
      }

      case 'ArrowDown': {
        handleArrow(event, { y: position.y + 0.05, x: position.x });
        break;
      }

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

  return (
    <Box
      {...getStyles('saturation')}
      ref={ref as any}
      {...others}
      role="slider"
      aria-label={saturationLabel}
      aria-valuenow={position.x}
      aria-valuetext={convertHsvaTo('rgba', value)}
      tabIndex={focusable ? 0 : -1}
      onKeyDown={handleKeyDown}
      vars={{
        '--saturation-height': getSize(size, 'saturation-height'),
        '--thumb-size': getSize(size, 'thumb-size'),
      }}
    >
      <div
        {...getStyles('saturationOverlay', {
          style: { backgroundColor: `hsl(${value.h}, 100%, 50%)` },
        })}
      />

      <div
        {...getStyles('saturationOverlay', {
          style: { backgroundImage: 'linear-gradient(90deg, #fff, transparent)' },
        })}
      />

      <div
        {...getStyles('saturationOverlay', {
          style: { backgroundImage: 'linear-gradient(0deg, #000, transparent)' },
        })}
      />

      <Thumb
        __staticSelector={__staticSelector!}
        classNames={classNames}
        styles={styles}
        position={position}
        size={size}
        {...getStyles('thumb')}
        style={{ backgroundColor: color }}
      />
    </Box>
  );
});

Saturation.displayName = '@mantine/core/Saturation';
