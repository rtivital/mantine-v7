import { useContext, useEffect, useRef } from 'react';
import { MantineContext } from '../Mantine.context';
import { MantineColorScheme } from '../theme.types';

function disableTransition() {
  const style = document.createElement('style');
  style.innerHTML = '* {transition: none !important;}';
  document.head.appendChild(style);
  const clear = () => {
    try {
      document.head.removeChild(style);
    } catch (e) {
      // Already removed
    }
  };
  return clear;
}

export function useMantineColorScheme() {
  const clearStylesRef = useRef<() => void>();
  const timeoutRef = useRef<number>();
  const ctx = useContext(MantineContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  const setColorScheme = (value: MantineColorScheme) => {
    ctx.setColorScheme(value);
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      clearStylesRef.current?.();
    }, 10);
  };

  const clearColorScheme = () => {
    ctx.clearColorScheme();
    clearStylesRef.current = disableTransition();
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      clearStylesRef.current?.();
    }, 10);
  };

  useEffect(
    () => () => {
      clearStylesRef.current?.();
      window.clearTimeout(timeoutRef.current);
    },
    []
  );

  return {
    colorScheme: ctx.colorScheme,
    setColorScheme,
    clearColorScheme,
  };
}
