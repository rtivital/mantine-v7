import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@mantine/hooks';
import { useComponentDefaultProps } from '../../core';

export interface PortalProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;

  /** Root element className */
  className?: string;

  /** Root element ref */
  innerRef?: React.MutableRefObject<HTMLDivElement>;
}

const defaultProps: Partial<PortalProps> = {};

export function Portal(props: PortalProps) {
  const { children, target, className, innerRef, ...others } = useComponentDefaultProps(
    'Portal',
    defaultProps,
    props
  );

  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target
      ? document.createElement('div')
      : typeof target === 'string'
      ? document.querySelector(target)
      : target;

    if (!target && ref.current) {
      document.body.appendChild(ref.current);
    }

    return () => {
      if (!target && ref.current) {
        document.body.removeChild(ref.current);
      }
    };
  }, [target]);

  if (!mounted || !ref.current) {
    return null;
  }

  return createPortal(
    <div className={className} ref={innerRef} {...others}>
      {children}
    </div>,
    ref.current
  );
}

Portal.displayName = '@mantine/core/Portal';
