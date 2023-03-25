import type { GroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const GroupStylesApi: StylesApiData<GroupFactory> = {
  selectors: {
    root: 'Root element',
  },

  params: ['align', 'gap', 'justify', 'childrenCount', 'preventGrowOverflow', 'grow'],

  vars: {
    '--group-align': 'Controls align-items property',
    '--group-justify': 'Controls justify-content property',
    '--group-gap': 'Controls gap property',
    '--group-wrap': 'Controls flex-wrap property',
    '--group-child-width':
      'max-width of each child element, applied when grow prop is set and preventGrowOverflow is false',
  },

  modifiers: [{ modifier: 'data-grow', selector: 'root', condition: 'grow prop is set' }],
};
