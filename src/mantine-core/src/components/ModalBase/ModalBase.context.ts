import { createSafeContext, GetStylesApi } from '../../core';
import { TransitionOverride } from '../Transition';
import type { ModalBaseFactory } from './ModalBase';

interface ModalBaseContext {
  __staticSelector: string;
  opened: boolean;
  onClose(): void;
  closeOnClickOutside: boolean | undefined;
  transitionProps: TransitionOverride;
  id: string;
  getTitleId(): string;
  getBodyId(): string;
  titleMounted: boolean;
  bodyMounted: boolean;
  setTitleMounted(mounted: boolean): void;
  setBodyMounted(mounted: boolean): void;
  trapFocus: boolean | undefined;
  closeOnEscape: boolean | undefined;
  getStyles: GetStylesApi<ModalBaseFactory>;
  zIndex: React.CSSProperties['zIndex'] | undefined;
}

export const [ModalBaseProvider, useModalBaseContext] = createSafeContext<ModalBaseContext>(
  'ModalBase component was not found in tree'
);
