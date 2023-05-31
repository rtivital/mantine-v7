import React from 'react';
import { BoxProps, StylesApiProps, factory, ElementProps, useProps, Factory } from '../../../core';
import { Overlay } from '../../Overlay';
import { Transition, TransitionOverride } from '../../Transition';
import { useModalBaseContext } from '../ModalBase.context';

export type ModalBaseOverlayStylesNames = 'overlay';

export interface ModalBaseOverlayProps
  extends BoxProps,
    StylesApiProps<ModalBaseOverlayFactory>,
    ElementProps<'div'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;
}

export type ModalBaseOverlayFactory = Factory<{
  props: ModalBaseOverlayProps;
  ref: HTMLDivElement;
  stylesNames: ModalBaseOverlayStylesNames;
}>;

const defaultProps: Partial<ModalBaseOverlayProps> = {};

export const ModalBaseOverlay = factory<ModalBaseOverlayFactory>((props, ref) => {
  const ctx = useModalBaseContext();

  const { onClick, transitionProps, style, className, classNames, styles, vars, ...others } =
    useProps(`${ctx.__staticSelector}Overlay`, defaultProps, props);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    ctx.closeOnClickOutside && ctx.onClose();
  };

  return (
    <Transition
      mounted={ctx.opened}
      {...ctx.transitionProps}
      {...transitionProps}
      transition="fade"
    >
      {(transitionStyles) => (
        <Overlay
          ref={ref}
          onClick={handleClick}
          fixed
          {...ctx.getStyles('overlay', {
            className,
            classNames,
            styles,
            style: [style, transitionStyles],
          })}
          zIndex={ctx.zIndex}
          {...others}
        />
      )}
    </Transition>
  );
});

ModalBaseOverlay.displayName = '@mantine/core/ModalBaseOverlay';
