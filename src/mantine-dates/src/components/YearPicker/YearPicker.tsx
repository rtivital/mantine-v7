import React from 'react';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  MantineComponentStaticProperties,
  useResolvedStylesApi,
} from '@mantine/core';
import { useDatesState } from '../../hooks';
import { DecadeLevelBaseSettings } from '../DecadeLevel';
import { PickerBaseProps, DatePickerType } from '../../types';
import { Calendar, CalendarBaseProps, CalendarStylesNames } from '../Calendar';

export type YearPickerStylesNames = CalendarStylesNames;

export interface YearPickerBaseProps<Type extends DatePickerType = 'default'>
  extends PickerBaseProps<Type>,
    DecadeLevelBaseSettings,
    Omit<CalendarBaseProps, 'onNextYear' | 'onPreviousYear' | 'onNextMonth' | 'onPreviousMonth'> {}

export interface YearPickerProps<Type extends DatePickerType = 'default'>
  extends BoxProps,
    YearPickerBaseProps<Type>,
    StylesApiProps<YearPickerFactory>,
    ElementProps<'div', 'onChange' | 'value' | 'defaultValue'> {
  /** Called when year is selected */
  onYearSelect?(date: Date): void;
}

export type YearPickerFactory = Factory<{
  props: YearPickerProps;
  ref: HTMLDivElement;
  stylesNames: YearPickerStylesNames;
}>;

const defaultProps: Partial<YearPickerProps> = {
  type: 'default',
};

type YearPickerComponent = (<Type extends DatePickerType = 'default'>(
  props: YearPickerProps<Type>
) => JSX.Element) & { displayName?: string } & MantineComponentStaticProperties<YearPickerFactory>;

export const YearPicker: YearPickerComponent = factory<YearPickerFactory>((_props, ref) => {
  const props = useProps('YearPicker', defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    type,
    defaultValue,
    value,
    onChange,
    __staticSelector,
    getYearControlProps,
    allowSingleDateInRange,
    allowDeselect,
    onMouseLeave,
    onYearSelect,
    __updateDateOnYearSelect,
    ...others
  } = props;

  const { onDateChange, onRootMouseLeave, onHoveredDateChange, getControlProps } = useDatesState({
    type: type as any,
    level: 'year',
    allowDeselect,
    allowSingleDateInRange,
    value,
    defaultValue,
    onChange,
    onMouseLeave,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<YearPickerFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <Calendar
      ref={ref}
      minLevel="decade"
      __updateDateOnYearSelect={__updateDateOnYearSelect ?? false}
      __staticSelector={__staticSelector || 'YearPicker'}
      onMouseLeave={onRootMouseLeave}
      onYearMouseEnter={(_event, date) => onHoveredDateChange(date)}
      onYearSelect={(date) => {
        onDateChange(date);
        onYearSelect?.(date);
      }}
      getYearControlProps={(date) => ({
        ...getControlProps(date),
        ...getYearControlProps?.(date),
      })}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      {...others}
    />
  );
}) as any;

YearPicker.classes = Calendar.classes;
YearPicker.displayName = '@mantine/dates/YearPicker';
