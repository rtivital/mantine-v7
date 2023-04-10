import React, { useEffect, useRef, useState } from 'react';
import { useMove, useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  MantineColor,
  MantineRadius,
  MantineSize,
  useDirection,
} from '../../../core';
import { MantineTransition } from '../../Transition';
import { SliderStylesNames } from '../Slider/Slider';
import {
  SliderCssVariables,
  SliderRoot,
  SliderStylesParams,
  SliderVariant,
} from '../SliderRoot/SliderRoot';
import { Track } from '../Track/Track';
import { Thumb } from '../Thumb/Thumb';
import { getPosition } from '../utils/get-position/get-position';
import { getChangeValue } from '../utils/get-change-value/get-change-value';
import { getClientPosition } from '../utils/get-client-position/get-client-position';

export type RangeSliderValue = [number, number];

export interface RangeSliderProps
  extends BoxProps,
    StylesApiProps<SliderStylesNames, SliderVariant, SliderCssVariables, SliderStylesParams>,
    Omit<ElementProps<'div'>, 'onChange' | 'value' | 'defaultValue'> {
  /** Key of `theme.colors` or any valid CSS color, controls color of track and thumb, `theme.primaryColor` by default */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem (1rem = 16px), `'xl'` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Controls size of the track, `'md'` by default */
  size?: MantineSize | (string & {}) | number;

  /** Minimal possible value, `0` by default */
  min?: number;

  /** Maximum possible value, `100` by default */
  max?: number;

  /** Number by which value will be incremented/decremented with thumb drag and arrows, `1` by default */
  step?: number;

  /** Number of significant digits after the decimal point */
  precision?: number;

  /** Controlled component value */
  value?: RangeSliderValue;

  /** Uncontrolled component default value */
  defaultValue?: RangeSliderValue;

  /** Called when value changes */
  onChange?(value: RangeSliderValue): void;

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: RangeSliderValue): void;

  /** Hidden input name, use with uncontrolled component */
  name?: string;

  /** Marks which will be placed on the track */
  marks?: { value: number; label?: React.ReactNode }[];

  /** Function to generate label or any react node to render instead, set to null to disable label */
  label?: React.ReactNode | ((value: number) => React.ReactNode);

  /** Label appear/disappear transition, `'skew-down'` by default */
  labelTransition?: MantineTransition;

  /** Label appear/disappear transition duration in ms, `0` by default */
  labelTransitionDuration?: number;

  /** Label appear/disappear transition timing function, `'ease'` by default */
  labelTransitionTimingFunction?: string;

  /** Determines whether label should be visible when slider is not being dragged or hovered, `false` by default */
  labelAlwaysOn?: boolean;

  /** Determines whether thumb label should be displayed when slider is hovered, `true` by default */
  showLabelOnHover?: boolean;

  /** Content rendered inside thumb */
  thumbChildren?: React.ReactNode;

  /** Disables slider */
  disabled?: boolean;

  /** Thumb width and height, by default value is computed based on `size` */
  thumbSize?: number | string;

  /** A transformation function, to change the scale of the slider */
  scale?(value: number): number;

  /** Determines whether track value should be inverted, `false` by default */
  inverted?: boolean;

  /** Minimal range interval, `10` by default */
  minRange?: number;

  /** Maximum range interval, `Infinity` by default */
  maxRange?: number;

  /** First thumb `aria-label` */
  thumbFromLabel?: string;

  /** Second thumb `aria-label` */
  thumbToLabel?: string;
}

export interface RangeSliderFactory {
  props: RangeSliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  stylesParams: SliderStylesParams;
}

const defaultProps: Partial<RangeSliderProps> = {
  size: 'md',
  radius: 'xl',
  min: 0,
  max: 100,
  minRange: 10,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransition: 'skew-down',
  labelTransitionDuration: 0,
  labelAlwaysOn: false,
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v,
};

export const RangeSlider = factory<RangeSliderFactory>((props, ref) => {
  const {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
    minRange,
    maxRange,
    step,
    precision,
    defaultValue,
    name,
    marks,
    label,
    labelTransition,
    labelTransitionDuration,
    labelTransitionTimingFunction,
    labelAlwaysOn,
    thumbFromLabel,
    thumbToLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    ...others
  } = useProps('RangeSlider', defaultProps, props);

  const { dir } = useDirection();
  const [focused, setFocused] = useState(-1);
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled<RangeSliderValue>({
    value,
    defaultValue,
    finalValue: [min!, max!],
    onChange,
  });
  const valueRef = useRef(_value);
  const thumbs = useRef<HTMLDivElement[]>([]);
  const thumbIndex = useRef<number | undefined>(undefined);
  const positions = [
    getPosition({ value: _value[0], min: min!, max: max! }),
    getPosition({ value: _value[1], min: min!, max: max! }),
  ];

  const _setValue = (val: RangeSliderValue) => {
    setValue(val);
    valueRef.current = val;
  };

  useEffect(
    () => {
      if (Array.isArray(value)) {
        valueRef.current = value;
      }
    },
    Array.isArray(value) ? [value[0], value[1]] : [null, null]
  );

  const setRangedValue = (val: number, index: number, triggerChangeEnd: boolean) => {
    const clone: RangeSliderValue = [...valueRef.current];
    clone[index] = val;

    if (index === 0) {
      if (val > clone[1] - (minRange! - 0.000000001)) {
        clone[1] = Math.min(val + minRange!, max!);
      }

      if (val > (max! - (minRange! - 0.000000001) || min!)) {
        clone[index] = valueRef.current[index];
      }

      if (clone[1] - val > maxRange!) {
        clone[1] = val + maxRange!;
      }
    }

    if (index === 1) {
      if (val < clone[0] + minRange!) {
        clone[0] = Math.max(val - minRange!, min!);
      }

      if (val < clone[0] + minRange!) {
        clone[index] = valueRef.current[index];
      }

      if (val - clone[0] > maxRange!) {
        clone[0] = val - maxRange!;
      }
    }

    _setValue(clone);

    if (triggerChangeEnd) {
      onChangeEnd?.(valueRef.current);
    }
  };

  const handleChange = (val: number) => {
    if (!disabled) {
      const nextValue = getChangeValue({
        value: val,
        min: min!,
        max: max!,
        step: step!,
        precision,
      });
      setRangedValue(nextValue, thumbIndex.current!, false);
    }
  };

  const { ref: container, active } = useMove(
    ({ x }) => handleChange(x),
    { onScrubEnd: () => onChangeEnd?.(valueRef.current) },
    dir
  );

  function handleThumbMouseDown(index: number) {
    thumbIndex.current = index;
  }

  const handleTrackMouseDownCapture = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    container.current!.focus();
    const rect = container.current!.getBoundingClientRect();
    const changePosition = getClientPosition(event.nativeEvent);
    const changeValue = getChangeValue({
      value: changePosition - rect.left,
      max: max!,
      min: min!,
      step: step!,
      containerWidth: rect.width,
    });

    const nearestHandle =
      Math.abs(_value[0] - changeValue) > Math.abs(_value[1] - changeValue) ? 1 : 0;
    const _nearestHandle = dir === 'ltr' ? nearestHandle : nearestHandle === 1 ? 0 : 1;

    thumbIndex.current = _nearestHandle;
  };

  const getFocusedThumbIndex = () => {
    if (focused !== 1 && focused !== 0) {
      setFocused(0);
      return 0;
    }

    return focused;
  };

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(Math.max(valueRef.current[focusedIndex] + step!, min!), max!),
            focusedIndex,
            true
          );
          break;
        }
        case 'ArrowRight': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(
                dir === 'rtl'
                  ? valueRef.current[focusedIndex] - step!
                  : valueRef.current[focusedIndex] + step!,
                min!
              ),
              max!
            ),
            focusedIndex,
            true
          );
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(Math.max(valueRef.current[focusedIndex] - step!, min!), max!),
            focusedIndex,
            true
          );
          break;
        }
        case 'ArrowLeft': {
          event.preventDefault();
          const focusedIndex = getFocusedThumbIndex();
          thumbs.current[focusedIndex].focus();
          setRangedValue(
            Math.min(
              Math.max(
                dir === 'rtl'
                  ? valueRef.current[focusedIndex] + step!
                  : valueRef.current[focusedIndex] - step!,
                min!
              ),
              max!
            ),
            focusedIndex,
            true
          );
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  const sharedThumbProps = {
    max: max!,
    min: min!,
    size,
    labelTransition,
    labelTransitionDuration,
    labelTransitionTimingFunction,
    labelAlwaysOn,
    onBlur: () => setFocused(-1),
    classNames,
    styles,
  };

  const hasArrayThumbChildren = Array.isArray(thumbChildren);

  return (
    <SliderRoot
      {...others}
      size={size!}
      ref={ref}
      styles={styles}
      classNames={classNames}
      disabled={disabled}
      unstyled={unstyled}
    >
      <Track
        offset={positions[0]}
        marksOffset={_value[0]}
        filled={positions[1] - positions[0]}
        marks={marks}
        inverted={inverted}
        min={min!}
        max={max!}
        value={_value[1]}
        styles={styles}
        classNames={classNames}
        disabled={disabled}
        unstyled={unstyled}
        containerProps={{
          ref: container as any,
          onMouseEnter: showLabelOnHover ? () => setHovered(true) : undefined,
          onMouseLeave: showLabelOnHover ? () => setHovered(false) : undefined,
          onTouchStartCapture: handleTrackMouseDownCapture,
          onTouchEndCapture: () => {
            thumbIndex.current = -1;
          },
          onMouseDownCapture: handleTrackMouseDownCapture,
          onMouseUpCapture: () => {
            thumbIndex.current = -1;
          },
          onKeyDownCapture: handleTrackKeydownCapture,
        }}
      >
        <Thumb
          {...sharedThumbProps}
          value={scale!(_value[0])}
          position={positions[0]}
          dragging={active}
          label={typeof label === 'function' ? label(scale!(_value[0])) : label}
          ref={(node) => {
            thumbs.current[0] = node!;
          }}
          thumbLabel={thumbFromLabel}
          onMouseDown={() => handleThumbMouseDown(0)}
          onFocus={() => setFocused(0)}
          showLabelOnHover={showLabelOnHover}
          isHovered={hovered}
          disabled={disabled}
          unstyled={unstyled}
        >
          {hasArrayThumbChildren ? thumbChildren[0] : thumbChildren}
        </Thumb>

        <Thumb
          {...sharedThumbProps}
          thumbLabel={thumbToLabel}
          value={scale!(_value[1])}
          position={positions[1]}
          dragging={active}
          label={typeof label === 'function' ? label(scale!(_value[1])) : label}
          ref={(node) => {
            thumbs.current[1] = node!;
          }}
          onMouseDown={() => handleThumbMouseDown(1)}
          onFocus={() => setFocused(1)}
          showLabelOnHover={showLabelOnHover}
          isHovered={hovered}
          disabled={disabled}
          unstyled={unstyled}
        >
          {hasArrayThumbChildren ? thumbChildren[1] : thumbChildren}
        </Thumb>
      </Track>

      <input type="hidden" name={`${name}_from`} value={_value[0]} />
      <input type="hidden" name={`${name}_to`} value={_value[1]} />
    </SliderRoot>
  );
});

RangeSlider.displayName = '@mantine/core/RangeSlider';
