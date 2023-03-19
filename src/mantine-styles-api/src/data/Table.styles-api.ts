import type { TableFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TableStylesApi: StylesApiData<TableFactory> = {
  selectors: {
    table: 'Table root element',
    thead: 'thead element (Table.Thead component)',
    tbody: 'tbody element (Table.Tbody component)',
    tfoot: 'tfoot element (Table.Tfoot component)',
    tr: 'tr element (Table.Tr component)',
    th: 'th element (Table.Th component)',
    td: 'td element (Table.Td component)',
    caption: 'caption element (Table.Caption component)',
  },

  vars: {
    '--table-layout': 'Controls table-layout of table element, auto by default',
    '--table-caption-side': 'Controls caption-side of table element, bottom by default',
    '--table-horizontal-spacing': 'Controls padding-left and padding-right of td and th elements',
    '--table-vertical-spacing': 'Controls padding-top and padding-bottom of td and th elements',
    '--table-striped-color': 'Background color of even/odd tr elements',
    '--table-highlight-on-hover-color': 'Background color of tr elements when hovered',
  },

  params: [
    'borderColor',
    'captionSide',
    'horizontalSpacing',
    'verticalSpacing',
    'stripedColor',
    'highlightOnHoverColor',
    'layout',
  ],

  modifiers: [
    {
      modifier: 'data-with-table-border',
      selector: 'table',
      condition: 'withTableBorder prop is set on Table component',
    },
    {
      modifier: 'data-with-column-border',
      selector: ['th', 'td'],
      condition: 'withColumnsBorder prop is set on Table component',
    },
    {
      modifier: 'data-with-row-border',
      selector: 'tr',
      condition: 'withRowsBorder prop is set on Table component',
    },
    {
      modifier: 'data-striped',
      selector: 'tr',
      value: 'odd | even',
      condition: 'striped prop is set on Table component',
    },
    {
      modifier: 'data-hover',
      selector: 'tr',
      condition: 'highlightOnHover prop is set on Table component',
    },
    {
      modifier: 'data-size',
      selector: 'tr',
      value: 'value of captionSize prop on Table component',
    },
  ],
};
