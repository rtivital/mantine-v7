import type { PopoverDropdownStylesNames } from './PopoverDropdown/PopoverDropdown';

export type PopoverStylesNames = PopoverDropdownStylesNames;

export type PopoverWidth = 'target' | React.CSSProperties['width'];

export interface PopoverMiddlewares {
  shift: boolean;
  flip: boolean;
  inline?: boolean;
}
