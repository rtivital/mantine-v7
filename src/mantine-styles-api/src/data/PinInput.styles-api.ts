import { PinInputFactory } from '@mantine/core/src/components/PinInput/PinInput';
import type { StylesApiData } from '../types';

export const PinInputStylesApi: StylesApiData<PinInputFactory> = {
  selectors: {
    root: 'Root element',
    pinInput: 'PinInput element',
    input: 'Item input, hidden by default',
  },

  vars: {
    root: {
      '--pininput-size': 'Controls star icon width and height',
    },
  },

  modifiers: [],
};
