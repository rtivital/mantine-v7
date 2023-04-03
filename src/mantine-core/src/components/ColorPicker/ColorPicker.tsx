import React, { useRef, useState } from 'react';
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineSize,
  rem,
} from '../../core';
import { ColorSliderStylesNames } from './ColorSlider/ColorSlider';
import { AlphaSlider } from './AlphaSlider/AlphaSlider';
import { HueSlider } from './HueSlider/HueSlider';
import { Saturation, SaturationStylesNames } from './Saturation/Saturation';
import { ThumbStylesNames } from './Thumb/Thumb';
import { Swatches, SwatchesStylesNames } from './Swatches/Swatches';
import classes from './ColorPicker.module.css';
import { ColorFormat, HsvaColor } from './ColorPicker.types';
import { convertHsvaTo, isColorValid, parseColor } from './converters';
import { ColorSwatch } from '../ColorSwatch';

export type ColorPickerStylesNames =
  | 'wrapper'
  | 'preview'
  | 'body'
  | 'sliders'
  | ColorSliderStylesNames
  | SaturationStylesNames
  | ThumbStylesNames
  | SwatchesStylesNames;
export type ColorPickerVariant = string;
export type ColorPickerCssVariables = '--test';

export interface ColorPickerStylesParams {}

export interface __ColorPickerProps {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when color changes */
  onChange?(value: string): void;

  /** Called when user stops dragging thumb or changes value with arrow keys */
  onChangeEnd?(value: string): void;

  /** Color format, `'hex'` by default */
  format?: ColorFormat;

  /** Determines whether color picker should be displayed, `true` by default */
  withPicker?: boolean;

  /** Color swatches */
  swatches?: string[];

  /** Number of swatches displayed in one row, `10` by default */
  swatchesPerRow?: number;

  /** Controls size of elements */
  size?: MantineSize | (string & {});
}

export interface ColorPickerProps
  extends BoxProps,
    __ColorPickerProps,
    StylesApiProps<ColorPickerStylesNames, ColorPickerVariant, ColorPickerCssVariables>,
    Omit<ElementProps<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  __staticSelector?: string;

  /** Determines whether component should take 100% width of its container, `false` by default */
  fullWidth?: boolean;

  /** Determines whether interactive elements should be focusable, `true` by default */
  focusable?: boolean;

  /** Saturation slider aria-label */
  saturationLabel?: string;

  /** Hue slider aria-label */
  hueLabel?: string;

  /** Alpha slider aria-label */
  alphaLabel?: string;

  /** Called when color swatch is clicked */
  onColorSwatchClick?(color: string): void;
}

export interface ColorPickerFactory {
  props: ColorPickerProps;
  ref: HTMLDivElement;
  stylesNames: ColorPickerStylesNames;
  vars: ColorPickerCssVariables;
  stylesParams: ColorPickerStylesParams;
}

const defaultProps: Partial<ColorPickerProps> = {
  swatchesPerRow: 10,
  size: 'sm',
  withPicker: true,
  focusable: true,
  __staticSelector: 'ColorPicker',
};

export const ColorPicker = factory<ColorPickerFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    format,
    value,
    defaultValue,
    onChange,
    onChangeEnd,
    withPicker,
    size,
    saturationLabel,
    hueLabel,
    alphaLabel,
    focusable,
    swatches,
    swatchesPerRow,
    onColorSwatchClick,
    __staticSelector,
    ...others
  } = useProps('ColorPicker', defaultProps, props);

  const getStyles = useStyles({
    name: __staticSelector!,
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<ColorPickerStylesParams>('ColorPicker', vars, {});

  const formatRef = useRef(format);
  const valueRef = useRef<string>();
  const updateRef = useRef(true);
  const withAlpha = format === 'hexa' || format === 'rgba' || format === 'hsla';

  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '#FFFFFF',
    onChange,
  });

  const [parsed, setParsed] = useState<HsvaColor>(parseColor(_value));

  const handleChange = (color: Partial<HsvaColor>) => {
    updateRef.current = false;
    setParsed((current) => {
      const next = { ...current, ...color };
      valueRef.current = convertHsvaTo(formatRef.current, next);
      return next;
    });

    setValue(valueRef.current!);

    // Does not work any other way
    setTimeout(() => {
      updateRef.current = true;
    }, 0);
  };

  useDidUpdate(() => {
    if (isColorValid(value!) && updateRef.current) {
      setParsed(parseColor(value!));
      updateRef.current = true;
    }
  }, [value]);

  useDidUpdate(() => {
    formatRef.current = format;
    setValue(convertHsvaTo(format, parsed));
  }, [format]);

  return (
    <Box
      ref={ref}
      {...getStyles('wrapper')}
      vars={{
        ..._vars,
      }}
      {...others}
    >
      {withPicker && (
        <>
          <Saturation
            value={parsed}
            onChange={handleChange}
            onChangeEnd={({ s, v }) =>
              onChangeEnd?.(convertHsvaTo(formatRef.current, { ...parsed, s, v }))
            }
            color={_value}
            styles={styles}
            classNames={classNames}
            size={size!}
            focusable={focusable}
            saturationLabel={saturationLabel}
            __staticSelector={__staticSelector}
          />

          <div className={classes.body}>
            <div className={classes.sliders}>
              <HueSlider
                value={parsed.h}
                onChange={(h) => handleChange({ h })}
                onChangeEnd={(h) =>
                  onChangeEnd?.(convertHsvaTo(formatRef.current, { ...parsed, h }))
                }
                size={size}
                styles={styles}
                classNames={classNames}
                focusable={focusable}
                aria-label={hueLabel}
                __staticSelector={__staticSelector}
              />

              {withAlpha && (
                <AlphaSlider
                  value={parsed.a}
                  onChange={(a) => handleChange({ a })}
                  onChangeEnd={(a) => {
                    onChangeEnd?.(convertHsvaTo(formatRef.current, { ...parsed, a }));
                  }}
                  size={size}
                  color={convertHsvaTo('hex', parsed)}
                  style={{ marginTop: rem(6) }}
                  styles={styles}
                  classNames={classNames}
                  focusable={focusable}
                  aria-label={alphaLabel}
                  __staticSelector={__staticSelector}
                />
              )}
            </div>

            {withAlpha && (
              <ColorSwatch
                color={_value}
                radius="sm"
                size={getSize({ size, sizes: SWATCH_SIZES })}
                className={classes.preview}
              />
            )}
          </div>
        </>
      )}

      {Array.isArray(swatches) && (
        <Swatches
          data={swatches}
          style={{ marginTop: rem(5) }}
          swatchesPerRow={swatchesPerRow}
          focusable={focusable}
          classNames={classNames}
          styles={styles}
          __staticSelector={__staticSelector}
          setValue={setValue}
          onChangeEnd={(color) => {
            const convertedColor = convertHsvaTo(format, parseColor(color));
            onColorSwatchClick?.(convertedColor);
            onChangeEnd?.(convertedColor);
            if (!controlled) {
              setParsed(parseColor(color));
            }
          }}
        />
      )}
    </Box>
  );
});

ColorPicker.displayName = '@mantine/core/ColorPicker';
