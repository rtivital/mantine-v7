import React from 'react';
import { MantineColor, Box, StylesApiProps, useStyles } from '../../../core';
import { Marks, MarksStylesNames } from '../Marks/Marks';
import classes from './Track.module.css';

export type TrackStylesNames = 'trackContainer' | 'track' | 'bar' | MarksStylesNames;

export interface TrackProps extends StylesApiProps<TrackStylesNames> {
  filled: number;
  offset?: number;
  marksOffset?: number;
  marks: { value: number; label?: React.ReactNode }[];
  // size: MantineNumberSize;
  // radius: MantineNumberSize;
  color: MantineColor;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  onChange(value: number): void;
  disabled: boolean;
  inverted?: boolean;
  variant: string;
  containerProps?: React.PropsWithRef<React.ComponentProps<'div'>>;
}

export function Track({
  filled,
  // size,
  color,
  classNames,
  styles,
  // radius,
  children,
  offset,
  disabled,
  marksOffset,
  unstyled,
  inverted,
  variant,
  containerProps,
  ...others
}: TrackProps) {
  const getStyle = useStyles({
    name: 'Slider',
    classes,
    classNames,
    styles,
    unstyled,
  });

  return (
    <>
      <div {...getStyle('trackContainer')} {...containerProps}>
        <div {...getStyle('track')}>
          <Box
            {...getStyle('bar', {
              style: {
                left: `calc(${offset}% - var(--slider-size))`,
                width: `calc(${filled}% + var(--slider-size))`,
              },
            })}
          />

          {children}
        </div>
      </div>

      <Marks
        {...others}
        color={color}
        offset={marksOffset}
        classNames={classNames}
        styles={styles}
        disabled={disabled}
        unstyled={unstyled}
        inverted={inverted}
        variant={variant}
      />
    </>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
