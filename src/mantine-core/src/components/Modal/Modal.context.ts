import { createSafeContext, MantineRadius } from '../../core';

export type ScrollAreaComponent = React.FC<any>;

interface ModalContext {
  yOffset: string | number;
  radius: MantineRadius | (string & {}) | number;
  scrollAreaComponent: ScrollAreaComponent;
}

export const [ModalProvider, useModalContext] = createSafeContext<ModalContext>(
  'Modal component was not found in tree'
);
