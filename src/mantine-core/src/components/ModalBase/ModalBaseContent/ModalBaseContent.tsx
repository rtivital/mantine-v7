import React from 'react';
import { BoxProps, StylesApiProps, factory, ElementProps, useProps, Factory } from '../../../core';
import { TransitionOverride, Transition } from '../../Transition/Transition';
import { FocusTrap } from '../../FocusTrap/FocusTrap';
import { Paper } from '../../Paper/Paper';
import { useModalBaseContext } from '../ModalBase.context';

export type ModalBaseContentStylesNames = 'inner' | 'content';

export interface ModalBaseContentProps
  extends BoxProps,
    StylesApiProps<ModalBaseContentFactory>,
    ElementProps<'div'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;
}

export type ModalBaseContentFactory = Factory<{
  props: ModalBaseContentProps;
  ref: HTMLDivElement;
  stylesNames: ModalBaseContentStylesNames;
}>;

const defaultProps: Partial<ModalBaseContentProps> = {};

export const ModalBaseContent = factory<ModalBaseContentFactory>((props, ref) => {
  const ctx = useModalBaseContext();
  const { className, transitionProps, style, onKeyDown, classNames, vars, styles, ...others } =
    useProps(`${ctx.__staticSelector}Content`, defaultProps, props);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const shouldTrigger =
      (event.target as HTMLElement)?.getAttribute('data-mantine-stop-propagation') !== 'true';
    shouldTrigger && event.key === 'Escape' && ctx.closeOnEscape && ctx.onClose();
    onKeyDown?.(event);
  };

  return (
    <Transition mounted={ctx.opened} transition="pop" {...ctx.transitionProps} {...transitionProps}>
      {(transitionStyles) => (
        <div {...ctx.getStyles('inner', { style, className, classNames, styles })}>
          <FocusTrap active={ctx.opened && ctx.trapFocus}>
            <Paper
              {...others}
              component="section"
              role="dialog"
              tabIndex={-1}
              aria-modal
              aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
              aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
              onKeyDown={handleKeyDown}
              ref={ref}
              {...ctx.getStyles('content', {
                style: transitionStyles,
                className,
                classNames,
                styles,
              })}
            >
              {others.children}
            </Paper>
          </FocusTrap>
        </div>
      )}
    </Transition>
  );
});

ModalBaseContent.displayName = '@mantine/core/ModalBaseContent';
