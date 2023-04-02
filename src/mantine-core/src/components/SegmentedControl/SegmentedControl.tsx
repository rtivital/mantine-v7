import React, { useEffect, useRef, useState } from 'react';
import {
  useId,
  useIsomorphicEffect,
  useMergedRef,
  useReducedMotion,
  useResizeObserver,
  useUncontrolled,
} from '@mantine/hooks';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineColor,
  MantineSize,
  MantineRadius,
  useMantineTheme,
  getRadius,
  getThemeColor,
  getSize,
  getFontSize,
  useDirection,
} from '../../core';
import classes from './SegmentedControl.module.css';

const WRAPPER_PADDING = 4;

export type SegmentedControlStylesNames = 'root' | 'input' | 'label' | 'control' | 'indicator';
export type SegmentedControlVariant = string;
export type SegmentedControlCssVariables =
  | '--sc-radius'
  | '--sc-color'
  | '--sc-font-size'
  | '--sc-padding'
  | '--sc-shadow'
  | '--sc-transition-duration'
  | '--sc-transition-timing-function';

export interface SegmentedControlStylesParams {
  radius: MantineRadius | (string & {}) | number | undefined;
  color: MantineColor | undefined;
  transitionDuration: number | undefined;
  transitionTimingFunction: string | undefined;
  size: MantineSize | (string & {}) | undefined;
  variant: SegmentedControlVariant | undefined;
}

export interface SegmentedControlItem {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends BoxProps,
    StylesApiProps<
      SegmentedControlStylesNames,
      SegmentedControlVariant,
      SegmentedControlCssVariables
    >,
    Omit<ElementProps<'div'>, 'onChange'> {
  /** Data based on which controls are rendered */
  data: (string | SegmentedControlItem)[];

  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when value changes */
  onChange?(value: string): void;

  /** Determines whether component is disabled */
  disabled?: boolean;

  /** Name of the radio group, by default random id is generated */
  name?: string;

  /** Determines whether the component should take 100% width of its parent, `false` by default */
  fullWidth?: boolean;

  /** Key of `theme.colors` or any valid CSS color, changes color of indicator, by default color is based on current color scheme */
  color?: MantineColor;

  /** Controls `font-size`, `padding` and `height` properties, `'sm'` by default */
  size?: MantineSize | (string & {});

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem (1rem = 16px), `theme.defaultRadius` by default */
  radius?: MantineRadius | (string & {}) | number;

  /** Indicator `transition-duration` in ms, set to 0 to turn off transitions, `200` by default */
  transitionDuration?: number;

  /** Indicator `transition-timing-function` property, `ease` by default */
  transitionTimingFunction?: string;

  /** Determines in which orientation component id displayed, `'horizontal'` by default */
  orientation?: 'vertical' | 'horizontal';

  /** Determines whether value can be changed */
  readOnly?: boolean;
}

export interface SegmentedControlFactory {
  props: SegmentedControlProps;
  ref: HTMLDivElement;
  stylesNames: SegmentedControlStylesNames;
  vars: SegmentedControlCssVariables;
  stylesParams: SegmentedControlStylesParams;
}

const defaultProps: Partial<SegmentedControlProps> = {
  size: 'sm',
  transitionDuration: 200,
  transitionTimingFunction: 'ease',
};

export const SegmentedControl = factory<SegmentedControlFactory>((props, ref) => {
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    value,
    defaultValue,
    onChange,
    size,
    name,
    disabled,
    readOnly,
    fullWidth,
    orientation,
    radius,
    color,
    transitionDuration,
    transitionTimingFunction,
    variant,
    ...others
  } = useProps('SegmentedControl', defaultProps, props);

  const getStyles = useStyles({
    name: 'SegmentedControl',
    className,
    style,
    classes,
    classNames,
    styles,
    unstyled,
  });

  const _vars = useVars<SegmentedControlStylesParams>('SegmentedControl', vars, {
    radius,
    color,
    transitionDuration,
    transitionTimingFunction,
    size,
    variant,
  });

  const { dir } = useDirection();
  const theme = useMantineTheme();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const mounted = useRef<Boolean>();

  const _data = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item
  );

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [_value, handleValueChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: Array.isArray(data)
      ? _data.find((item) => !item.disabled)?.value ?? (data[0] as any)?.value ?? null
      : null,
    onChange,
  });

  const [activePosition, setActivePosition] = useState({
    width: 0,
    height: 0,
    translate: [0, 0],
  });
  const uuid = useId(name);
  const refs = useRef<Record<string, HTMLLabelElement>>({});
  const [observerRef, containerRect] = useResizeObserver();

  useIsomorphicEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setShouldAnimate(false);
    } else {
      setShouldAnimate(true);
    }
  });

  useEffect(() => {
    if (_value in refs.current && observerRef.current) {
      const element = refs.current[_value];
      const elementRect = element.getBoundingClientRect();
      const scaledValue = element.offsetWidth / elementRect.width;
      const width = element.clientWidth * scaledValue || 0;
      const height = element.clientHeight * scaledValue || 0;

      const offsetRight =
        containerRect.width - element.parentElement!.offsetLeft + WRAPPER_PADDING - width;
      const offsetLeft = element.parentElement!.offsetLeft - WRAPPER_PADDING;

      setActivePosition({
        width,
        height,
        translate: [
          dir === 'rtl' ? offsetRight * -1 : offsetLeft,
          element.parentElement!.offsetTop - WRAPPER_PADDING,
        ],
      });
    }
  }, [_value, containerRect]);

  const controls = _data.map((item) => (
    <Box
      {...getStyles('control')}
      mod={{ active: _value === item.value, orientation }}
      key={item.value}
    >
      <input
        {...getStyles('input')}
        className={classes.input}
        disabled={disabled || item.disabled}
        type="radio"
        name={uuid}
        value={item.value}
        id={`${uuid}-${item.value}`}
        checked={_value === item.value}
        onChange={() => !readOnly && handleValueChange(item.value)}
        data-focus-ring={theme.focusRing}
      />

      <Box
        component="label"
        {...getStyles('label')}
        data-active={(_value === item.value && !(disabled || item.disabled)) || undefined}
        data-disabled={disabled || item.disabled || undefined}
        htmlFor={`${uuid}-${item.value}`}
        ref={(node) => {
          refs.current[item.value] = node!;
        }}
        vars={{
          '--sc-label-color': color !== undefined ? 'var(--mantine-color-white)' : undefined,
        }}
      >
        {item.label}
      </Box>
    </Box>
  ));

  const mergedRef = useMergedRef(observerRef, ref);

  if (data.length === 0) {
    return null;
  }

  return (
    <Box
      {...getStyles('root')}
      ref={mergedRef}
      mod={{ 'full-width': fullWidth, orientation }}
      vars={{
        '--sc-radius': getRadius(radius),
        '--sc-color': color ? getThemeColor(color, theme) : undefined,
        '--sc-shadow': color ? undefined : 'var(--mantine-shadow-xs)',
        '--sc-transition-duration':
          reduceMotion || !shouldAnimate ? '0ms' : `${transitionDuration}ms`,
        '--sc-transition-timing-function': transitionTimingFunction,
        '--sc-padding': getSize(size, 'sc-padding'),
        '--sc-font-size': getFontSize(size),
        ..._vars,
      }}
      {...others}
    >
      {typeof _value === 'string' && shouldAnimate && (
        <Box
          component="span"
          {...getStyles('indicator')}
          vars={{
            '--sc-indicator-width': `${activePosition.width}px`,
            '--sc-indicator-height': `${activePosition.height}px`,
            '--sc-indicator-transform': `translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px)`,
          }}
        />
      )}

      {controls}
    </Box>
  );
});

SegmentedControl.displayName = '@mantine/core/SegmentedControl';
