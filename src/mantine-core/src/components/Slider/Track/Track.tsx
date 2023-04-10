import React from 'react';
import { Box, StylesApiProps, useStyles } from '../../../core';
import { Marks, MarksStylesNames } from '../Marks/Marks';
import classes from './Track.module.css';

export type TrackStylesNames = 'trackContainer' | 'track' | 'bar' | MarksStylesNames;

export interface TrackProps extends StylesApiProps<TrackStylesNames> {
  filled: number;
  offset?: number;
  marksOffset?: number;
  marks: { value: number; label?: React.ReactNode }[] | undefined;
  min: number;
  max: number;
  value: number;
  children: React.ReactNode;
  disabled: boolean | undefined;
  inverted: boolean | undefined;
  containerProps?: React.PropsWithRef<React.ComponentProps<'div'>>;
}

export function Track({
  filled,
  classNames,
  styles,
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
      <Box {...getStyle('trackContainer')} mod={{ disabled }} {...containerProps}>
        <Box {...getStyle('track')} mod={{ inverted, disabled }}>
          <Box
            mod={{ inverted, disabled }}
            vars={{
              '--slider-bar-width': `calc(${filled}% + var(--slider-size))`,
              '--slider-bar-offset': `calc(${offset}% - var(--slider-size))`,
            }}
            {...getStyle('bar')}
          />

          {children}

          <Marks
            {...others}
            offset={marksOffset}
            classNames={classNames}
            styles={styles}
            disabled={disabled}
            unstyled={unstyled}
            inverted={inverted}
            variant={variant}
          />
        </Box>
      </Box>
    </>
  );
}

Track.displayName = '@mantine/core/SliderTrack';
