import type { TabsFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TabsStylesApi: StylesApiData<TabsFactory> = {
  selectors: {
    root: 'Root element (Tabs component)',
    list: 'List of tabs (Tabs.List component)',
    panel: 'Panel with tab content (Tabs.Panel component)',
    tab: 'Tab button (Tabs.Tab component)',
    tabLabel: 'Label of Tabs.Tab, controlled by children prop',
    tabLeftSection: 'Left section of Tabs.Tab, controlled by leftSection prop',
    tabRightSection: 'Right section of Tabs.Tab, controlled by rightSection prop',
  },

  params: ['color', 'radius', 'variant'],

  vars: {
    '--tabs-color':
      'Value of color prop, used by Tabs.Tab, can be overridden by Tabs.Tab color prop',
    '--tabs-radius': 'Value of radius prop, used by Tabs.Tab',
  },

  modifiers: [
    {
      modifier: 'data-variant',
      selector: ['root', 'tab', 'list'],
      value: 'Value of variant prop',
    },
    {
      modifier: 'data-orientation',
      selector: ['root', 'tab', 'list', 'panel'],
      value: 'Value of orientation prop',
    },
    {
      modifier: 'data-placement',
      selector: ['root', 'tab', 'list'],
      value: 'Value of placement prop',
      condition: 'Value of orientation prop is "vertical" on Tabs component',
    },
    {
      modifier: 'data-inverted',
      selector: ['tab', 'list'],
      condition: 'inverted prop is set on Tabs component',
    },
    {
      modifier: 'data-grow',
      selector: ['list'],
      condition: 'grow prop is set on Tabs.List component',
    },
    {
      modifier: 'data-hidden',
      selector: ['panel'],
      value: 'Associated tab is not active',
    },
  ],
};
