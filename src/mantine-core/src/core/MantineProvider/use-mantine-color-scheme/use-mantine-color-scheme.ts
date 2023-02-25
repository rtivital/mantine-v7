import { useContext } from 'react';
import { MantineContext } from '../Mantine.context';

export function useMantineColorScheme() {
  const ctx = useContext(MantineContext);

  if (!ctx) {
    throw new Error('[@mantine/core] MantineProvider was not found in tree');
  }

  return {
    colorScheme: ctx.colorScheme,
    setColorScheme: ctx.setColorScheme,
    clearColorScheme: ctx.clearColorScheme,
  };
}
