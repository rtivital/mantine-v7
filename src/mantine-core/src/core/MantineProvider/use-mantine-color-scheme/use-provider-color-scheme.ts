import { useCallback, useEffect, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import type { MantineColorSchemeManager } from '../color-scheme-managers';
import type { MantineColorScheme } from '../theme.types';

function setColorSchemeAttribute(
  colorScheme: MantineColorScheme,
  getRootElement: () => HTMLElement | undefined
) {
  getRootElement()?.setAttribute('data-color-scheme', colorScheme);
}

interface UseProviderColorSchemeOptions {
  manager: MantineColorSchemeManager;
  defaultColorScheme: MantineColorScheme;
  getRootElement(): HTMLElement | undefined;
}

export function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
}: UseProviderColorSchemeOptions) {
  const [value, setValue] = useState(() => manager.get(defaultColorScheme));

  const setColorScheme = useCallback(
    (colorScheme: MantineColorScheme) => {
      setValue(colorScheme);
      setColorSchemeAttribute(colorScheme, getRootElement);
      manager.set(colorScheme);
    },
    [manager.set, value]
  );

  const clearColorScheme = useCallback(() => {
    setValue(defaultColorScheme);
    manager.clear();
  }, [manager.clear]);

  useEffect(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);

  useIsomorphicEffect(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);

  return { colorScheme: value, setColorScheme, clearColorScheme };
}
