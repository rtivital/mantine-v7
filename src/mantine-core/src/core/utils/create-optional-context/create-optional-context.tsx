import React, { createContext, useContext } from 'react';

export function createOptionalContext<ContextValue>() {
  const Context = createContext<ContextValue | null>(null);

  const useOptionalContext = () => useContext(Context);

  const Provider = ({ children, value }: { value: ContextValue; children: React.ReactNode }) => (
    <Context.Provider value={value}>{children}</Context.Provider>
  );

  return [Provider, useOptionalContext] as const;
}
