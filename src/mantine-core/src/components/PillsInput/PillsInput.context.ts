import React from 'react';
import { MantineSize, createSafeContext } from '../../core';

export interface PillsInputContextValue {
  fieldRef: React.MutableRefObject<HTMLInputElement | undefined>;
  size: MantineSize | (string & {});
  disabled: boolean | undefined;
  hasError: boolean | undefined;
}

export const [PillsInputProvider, usePillsInputContext] = createSafeContext<PillsInputContextValue>(
  'PillsInput was not found in tree'
);
