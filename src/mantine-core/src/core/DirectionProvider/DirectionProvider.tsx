import React, { createContext, useContext, useState, useEffect } from 'react';

export type Direction = 'ltr' | 'rtl';

export interface DirectionContextValue {
  dir: Direction;
  toggleDirection(): void;
  setDirection(dir: Direction): void;
}

export const DirectionContext = createContext<DirectionContextValue>({
  dir: 'ltr',
  toggleDirection: () => {},
  setDirection: () => {},
});

export function useDirection() {
  return useContext(DirectionContext);
}

export interface DirectionProviderProps {
  /** Your application */
  children: React.ReactNode;

  /** Direction set as a default value, `ltr` by default */
  initialDirection?: Direction;

  /** Determines whether direction should be updated on mount based on `dir` attribute set on root element (usually html element), `false by` default  */
  detectDirection?: boolean;
}

export function DirectionProvider({
  children,
  initialDirection = 'ltr',
  detectDirection,
}: DirectionProviderProps) {
  const [dir, setDir] = useState<Direction>(initialDirection);

  const setDirection = (direction: Direction) => {
    setDir(direction);
    document.documentElement.setAttribute('dir', direction);
  };

  const toggleDirection = () => setDirection(dir === 'ltr' ? 'rtl' : 'ltr');

  useEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute('dir');
      if (direction === 'rtl' || direction === 'ltr') {
        setDirection(direction);
      }
    }
  }, []);

  return (
    <DirectionContext.Provider value={{ dir, toggleDirection, setDirection }}>
      {children}
    </DirectionContext.Provider>
  );
}
