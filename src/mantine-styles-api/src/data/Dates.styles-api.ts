import type { MonthFactory } from '@mantine/dates';
import type { StylesApiData } from '../types';

export const MonthStylesApi: StylesApiData<MonthFactory> = {
  selectors: {
    monthThead: 'thead element of month table',
    monthRow: 'tr element of month table',
    monthTbody: 'tbody element of month table',
    monthCell: 'td element of month table',
    month: 'Month table element',
    weekdaysRow: 'Weekdays tr element',
    weekday: 'Weekday th element',
    day: 'Month day control',
  },

  vars: {
    month: {
      '--day-range-bg': 'Controls day `background` when it is in a range',
      '--day-range-bg-hover': 'Controls day hover `background` when it is in a range',
      '--day-selected-bg': 'Controls day `background` when it is selected',
      '--day-selected-bg-hover': 'Controls day hover `background` when it is selected',
      '--day-selected-color': 'Controls day `color` when it is selected',
      '--month-fz': 'Controls `font-size` of all month elements',
      '--month-spacing': 'Controls `padding` of various elements',
    },
  },

  modifiers: [
    {
      modifier: 'data-with-spacing',
      selector: 'monthCell',
      condition: '`withCellSpacing` prop is set',
    },

    { modifier: 'data-today', selector: 'day', condition: 'Date is the same as new Date()' },
    {
      modifier: 'data-hidden',
      selector: 'day',
      condition: 'Day is outside of current month and `hideOutsideDates` is set',
    },
    {
      modifier: 'data-disabled',
      selector: 'day',
      condition: 'Day disabled by one of the props (`excludeDate`, `getDayProps`, etc.)',
    },
    { modifier: 'data-weekend', selector: 'day', condition: 'Day is weekend' },
    { modifier: 'data-outside', selector: 'day', condition: 'Day is outside of the current month' },
    { modifier: 'data-selected', selector: 'day', condition: 'Day is selected' },
    { modifier: 'data-in-range', selector: 'day', condition: 'Day is in range selection' },
    {
      modifier: 'data-first-in-range',
      selector: 'day',
      condition: 'Day is first in range selection',
    },
    {
      modifier: 'data-last-in-range',
      selector: 'day',
      condition: 'Day is last in range selection',
    },
  ],
};
