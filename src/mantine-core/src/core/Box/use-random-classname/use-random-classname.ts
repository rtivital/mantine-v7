import { useId } from 'react';

export function useRandomClassName() {
  const id = useId().replace(/:/g, '');
  return `mantine-${id}`;
}
