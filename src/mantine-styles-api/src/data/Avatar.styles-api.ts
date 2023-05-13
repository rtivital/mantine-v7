import type { AvatarFactory, AvatarGroupFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const AvatarStylesApi: StylesApiData<AvatarFactory> = {
  selectors: {
    root: 'Root element',
    image: 'img element',
    placeholder: 'Avatar placeholder, rendered when image cannot be loaded',
  },

  vars: {
    root: {
      '--avatar-bd': 'Controls placeholder border',
      '--avatar-bg': 'Controls placeholder background color',
      '--avatar-color': 'Controls placeholder text color',
      '--avatar-size': 'Controls width, min-width and height',
      '--avatar-radius': 'Controls border-radius',
    },
  },
};

export const AvatarGroupStylesApi: StylesApiData<AvatarGroupFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--ag-spacing': 'Controls negative spacing between avatars',
    },
  },
};
