import React from 'react';
import {
  Box,
  StylesApiProps,
  useStyles,
  MantineColor,
  getThemeColor,
  useMantineTheme,
} from '../../../core';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';
import classes from './Marks.module.css';

export type MarksStylesNames = 'markWrapper' | 'mark' | 'markLabel';

export interface MarksProps extends StylesApiProps<MarksStylesNames> {
  marks: { value: number; label?: React.ReactNode }[];
  color: MantineColor;
  min: number;
  max: number;
  value: number;
  onChange(value: number): void;
  offset?: number;
  disabled: boolean;
  inverted?: boolean;
}

export function Marks({
  classNames,
  styles,
  unstyled,
  marks,
  min,
  max,
  disabled,
  onChange,
  value,
  offset,
  inverted,
  color,
}: MarksProps) {
  const getStyles = useStyles({
    name: 'Slider',
    classes,
    classNames,
    styles,
    unstyled,
  });

  const theme = useMantineTheme();

  const items = marks.map((mark, index) => (
    <Box
      {...getStyles('markWrapper')}
      vars={{ '--mark-offset': `${getPosition({ value: mark.value, min, max })}%` }}
      key={index}
    >
      <Box
        {...getStyles('mark')}
        mod={{ filled: isMarkFilled({ mark, value, offset, inverted }), disabled }}
      />
      {mark.label && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          {...getStyles('markLabel')}
          onMouseDown={(event) => {
            event.stopPropagation();
            !disabled && onChange(mark.value);
          }}
          onTouchStart={(event) => {
            event.stopPropagation();
            !disabled && onChange(mark.value);
          }}
        >
          {mark.label}
        </div>
      )}
    </Box>
  ));

  return <Box vars={{ '--mark-color': getThemeColor(color, theme) }}>{items}</Box>;
}

Marks.displayName = '@mantine/core/Marks';
