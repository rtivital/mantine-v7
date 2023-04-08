import React, { useState, forwardRef } from 'react';
import { Box, StylesApiProps, useStyles, useDirection } from '../../../core';
import { Transition, MantineTransition } from '../../Transition';
import classes from './Thumb.module.css';

export type ThumbStylesNames = 'label' | 'thumb';

export interface ThumbProps extends StylesApiProps<ThumbStylesNames> {
  max: number;
  min: number;
  value: number;
  position: number;
  dragging: boolean;
  label: React.ReactNode;
  onKeyDownCapture?(event: React.KeyboardEvent<HTMLDivElement>): void;
  onMouseDown?(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void;
  labelTransition: MantineTransition | undefined;
  labelTransitionDuration: number | undefined;
  labelTransitionTimingFunction: string | undefined;
  labelAlwaysOn: boolean | undefined;
  thumbLabel: string | undefined;
  onFocus?(): void;
  onBlur?(): void;
  showLabelOnHover: boolean | undefined;
  isHovered?: boolean;
  children?: React.ReactNode;
  disabled: boolean | undefined;
  className?: string;
  style?: React.CSSProperties;
}

export const Thumb = forwardRef<HTMLDivElement, ThumbProps>(
  (
    {
      max,
      min,
      value,
      position,
      label,
      dragging,
      onMouseDown,
      onKeyDownCapture,
      classNames,
      styles,
      className,
      style,
      labelTransition,
      labelTransitionDuration,
      labelTransitionTimingFunction,
      labelAlwaysOn,
      thumbLabel,
      onFocus,
      onBlur,
      showLabelOnHover,
      isHovered,
      children = null,
      disabled,
      unstyled,
    }: ThumbProps,
    ref
  ) => {
    const getStyles = useStyles({
      name: 'Slider',
      classes,
      className,
      style,
      classNames,
      styles,
      unstyled,
    });

    const [focused, setFocused] = useState(false);
    const { dir } = useDirection();

    const isVisible = labelAlwaysOn || dragging || focused || (showLabelOnHover && isHovered);

    return (
      <Box<'div'>
        tabIndex={0}
        role="slider"
        aria-label={thumbLabel}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={value}
        ref={ref}
        {...getStyles('thumb', {
          focusable: true,
          style: { [dir === 'rtl' ? 'right' : 'left']: `${position}%` },
        })}
        mod={{ dragging, disabled }}
        onFocus={() => {
          setFocused(true);
          typeof onFocus === 'function' && onFocus();
        }}
        onBlur={() => {
          setFocused(false);
          typeof onBlur === 'function' && onBlur();
        }}
        onTouchStart={onMouseDown}
        onMouseDown={onMouseDown}
        onKeyDownCapture={onKeyDownCapture}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
        <Transition
          mounted={label != null && !!isVisible}
          duration={labelTransitionDuration}
          transition={labelTransition || 'fade'}
          timingFunction={labelTransitionTimingFunction}
        >
          {(transitionStyles) => (
            <div style={transitionStyles} className={classes.label}>
              {label}
            </div>
          )}
        </Transition>
      </Box>
    );
  }
);

Thumb.displayName = '@mantine/core/SliderThumb';
