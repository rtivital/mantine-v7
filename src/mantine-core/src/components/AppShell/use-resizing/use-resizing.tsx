import { useState, useRef } from 'react';
import { useWindowEvent } from '@mantine/hooks';

export function useResizing() {
  const [resizing, setResizing] = useState(false);
  const timeout = useRef<number>();

  useWindowEvent('resize', () => {
    setResizing(true);
    clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setResizing(false), 200);
  });

  return resizing;
}
