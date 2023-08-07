import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  MantineSize,
} from '@mantine/core';
import type { DayOfWeek } from '../../../types';
import { useDatesContext } from '../../DatesProvider';
import { useMonthContext } from '../Month.context';
import { getWeekdayNames } from './get-weekdays-names/get-weekdays-names';

export interface WeekdaysRowProps
  extends BoxProps,
    StylesApiProps<WeekdaysRowFactory>,
    ElementProps<'tr'> {
  /** Controls size */
  size?: MantineSize;

  /** dayjs locale, defaults to value defined in DatesProvider */
  locale?: string;

  /** number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday */
  firstDayOfWeek?: DayOfWeek;

  /** dayjs format to get weekday name, defaults to "dd" */
  weekdayFormat?: string | ((date: Date) => React.ReactNode);

  /** Choose cell type that will be used to render weekdays, defaults to th */
  cellComponent?: 'td' | 'th';
}

export type WeekdaysRowFactory = Factory<{
  props: WeekdaysRowProps;
  ref: HTMLTableRowElement;
  compound: true;
}>;

const defaultProps: Partial<WeekdaysRowProps> = {
  weekdayFormat: 'dd',
  cellComponent: 'th',
  size: 'sm',
};

export const WeekdaysRow = factory<WeekdaysRowFactory>((_props, ref) => {
  const props = useProps('WeekdaysRow', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    locale,
    firstDayOfWeek,
    weekdayFormat,
    cellComponent: CellComponent = 'th',
    variant,
    size,
    ...others
  } = props;

  const datesCtx = useDatesContext();
  const ctx = useMonthContext();

  const weekdays = getWeekdayNames({
    locale: datesCtx.getLocale(locale),
    format: weekdayFormat,
    firstDayOfWeek: datesCtx.getFirstDayOfWeek(firstDayOfWeek),
  }).map((weekday, index) => (
    <CellComponent key={index} {...ctx.getStyles('weekday')}>
      {weekday}
    </CellComponent>
  ));

  return (
    <Box component="tr" ref={ref} {...ctx.getStyles('weekdaysRow')} {...others}>
      {weekdays}
    </Box>
  );
});

WeekdaysRow.displayName = '@mantine/core/WeekdaysRow';
