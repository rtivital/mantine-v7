import React from 'react';
import { Box, Factory, StylesApiProps, useStyles } from '../../../core';
import { getPosition } from '../utils/get-position/get-position';
import { isMarkFilled } from './is-mark-filled';
import classes from './Marks.module.css';

export type MarksStylesNames = 'markWrapper' | 'mark' | 'markLabel';

export interface MarksProps extends StylesApiProps<MarksFactory> {
  marks: { value: number; label?: React.ReactNode }[] | undefined;
  min: number;
  max: number;
  value: number;
  offset: number | undefined;
  disabled: boolean | undefined;
  inverted: boolean | undefined;
}

type MarksFactory = Factory<{
  props: any;
  stylesNames: MarksStylesNames;
}>;

export function Marks({
  classNames,
  styles,
  unstyled,
  marks,
  min,
  max,
  disabled,
  value,
  offset,
  inverted,
}: MarksProps) {
  const getStyles = useStyles<MarksFactory>({
    name: 'Slider',
    props: {},
    classes,
    classNames,
    styles,
    unstyled,
  });

  if (!marks) {
    return null;
  }

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
        <div {...getStyles('markLabel')}>{mark.label}</div>
      )}
    </Box>
  ));

  return <div>{items}</div>;
}

Marks.displayName = '@mantine/core/SliderMarks';
