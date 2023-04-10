import React, { useCallback, useRef, useState } from 'react';
import { clamp, useMergedRef, useMove, useUncontrolled } from '@mantine/hooks';
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
import {
  SliderRoot,
  SliderCssVariables,
  SliderRootStylesNames,
  SliderStylesParams,
  SliderVariant,
} from '../SliderRoot/SliderRoot';
import { Track, TrackStylesNames } from '../Track/Track';
import { Thumb, ThumbStylesNames } from '../Thumb/Thumb';
import { MarksStylesNames } from '../Marks/Marks';
import { getPosition } from '../utils/get-position/get-position';
import { getChangeValue } from '../utils/get-change-value/get-change-value';

export type SliderStylesNames =
  | SliderRootStylesNames
  | ThumbStylesNames
  | TrackStylesNames
  | MarksStylesNames;

export interface SliderProps
  extends BoxProps,
    StylesApiProps<SliderStylesNames, SliderVariant, SliderCssVariables, SliderStylesParams>,
    Omit<ElementProps<'div'>, 'onChange'> {
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
  value?: number;

  /** Uncontrolled component default value */
  defaultValue?: number;

  /** Called when value changes */
  onChange?(value: number): void;

  /** Called when user stops dragging slider or changes value with arrows */
  onChangeEnd?(value: number): void;

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

  /** Thumb `aria-label` */
  thumbLabel?: string;

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
}

export interface SliderFactory {
  props: SliderProps;
  ref: HTMLDivElement;
  stylesNames: SliderStylesNames;
  vars: SliderCssVariables;
  stylesParams: SliderStylesParams;
}

const defaultProps: Partial<SliderProps> = {
  size: 'md',
  radius: 'xl',
  min: 0,
  max: 100,
  step: 1,
  marks: [],
  label: (f) => f,
  labelTransition: 'skew-down',
  labelTransitionDuration: 0,
  labelAlwaysOn: false,
  thumbLabel: '',
  showLabelOnHover: true,
  disabled: false,
  scale: (v) => v,
};

export const Slider = factory<SliderFactory>((props, ref) => {
  const {
    classNames,
    styles,
    value,
    onChange,
    onChangeEnd,
    size,
    min,
    max,
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
    thumbLabel,
    showLabelOnHover,
    thumbChildren,
    disabled,
    unstyled,
    scale,
    inverted,
    ...others
  } = useProps('Slider', defaultProps, props);

  const { dir } = useDirection();
  const [hovered, setHovered] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value: typeof value === 'number' ? clamp(value, min!, max!) : value,
    defaultValue: typeof defaultValue === 'number' ? clamp(defaultValue, min!, max!) : defaultValue,
    finalValue: clamp(0, min!, max!),
    onChange,
  });

  const valueRef = useRef(_value);
  const root = useRef<HTMLDivElement>();
  const thumb = useRef<HTMLDivElement>();
  const position = getPosition({ value: _value, min: min!, max: max! });
  const scaledValue = scale!(_value);
  const _label = typeof label === 'function' ? label(scaledValue) : label;

  const handleChange = useCallback(
    ({ x }: { x: number }) => {
      if (!disabled) {
        const nextValue = getChangeValue({
          value: x,
          min: min!,
          max: max!,
          step: step!,
          precision,
        });
        setValue(nextValue);
        valueRef.current = nextValue;
      }
    },
    [disabled, min, max, step, precision]
  );

  const { ref: container, active } = useMove(
    handleChange,
    { onScrubEnd: () => onChangeEnd?.(valueRef.current) },
    dir
  );

  const handleTrackKeydownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!disabled) {
      switch (event.key) {
        case 'ArrowUp': {
          event.preventDefault();
          thumb.current?.focus();
          const nextValue = Math.min(Math.max(_value + step!, min!), max!);
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowRight': {
          event.preventDefault();
          thumb.current?.focus();
          const nextValue = Math.min(
            Math.max(dir === 'rtl' ? _value - step! : _value + step!, min!),
            max!
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowDown': {
          event.preventDefault();
          thumb.current?.focus();
          const nextValue = Math.min(Math.max(_value - step!, min!), max!);
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'ArrowLeft': {
          event.preventDefault();
          thumb.current?.focus();
          const nextValue = Math.min(
            Math.max(dir === 'rtl' ? _value + step! : _value - step!, min!),
            max!
          );
          onChangeEnd?.(nextValue);
          setValue(nextValue);
          break;
        }

        case 'Home': {
          event.preventDefault();
          thumb.current?.focus();
          onChangeEnd?.(min!);
          setValue(min!);
          break;
        }

        case 'End': {
          event.preventDefault();
          thumb.current?.focus();
          onChangeEnd?.(max!);
          setValue(max!);
          break;
        }

        default: {
          break;
        }
      }
    }
  };

  return (
    <SliderRoot
      {...others}
      ref={useMergedRef<any>(ref, root)}
      onKeyDownCapture={handleTrackKeydownCapture}
      onMouseDownCapture={() => root.current?.focus()}
      size={size!}
      classNames={classNames}
      styles={styles}
      disabled={disabled}
      unstyled={unstyled}
    >
      <Track
        inverted={inverted}
        offset={0}
        filled={position}
        marks={marks}
        min={min!}
        max={max!}
        value={scaledValue}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        unstyled={unstyled}
        containerProps={{
          ref: container as any,
          onMouseEnter: showLabelOnHover ? () => setHovered(true) : undefined,
          onMouseLeave: showLabelOnHover ? () => setHovered(false) : undefined,
        }}
      >
        <Thumb
          max={max!}
          min={min!}
          value={scaledValue}
          position={position}
          dragging={active}
          label={_label}
          ref={thumb as any}
          labelTransition={labelTransition}
          labelTransitionDuration={labelTransitionDuration}
          labelTransitionTimingFunction={labelTransitionTimingFunction}
          labelAlwaysOn={labelAlwaysOn}
          classNames={classNames}
          styles={styles}
          thumbLabel={thumbLabel}
          showLabelOnHover={showLabelOnHover}
          isHovered={hovered}
          disabled={disabled}
          unstyled={unstyled}
        >
          {thumbChildren}
        </Thumb>
      </Track>

      <input type="hidden" name={name} value={scaledValue} />
    </SliderRoot>
  );
});

Slider.displayName = '@mantine/core/Slider';
