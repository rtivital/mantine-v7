import { createContext, useContext } from 'react';

interface SwitchGroupContextValue {
  value: string[];
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SwitchGroupContext = createContext<SwitchGroupContextValue | null>(null);
export const SwitchGroupProvider = SwitchGroupContext.Provider;
export const useSwitchGroupContext = () => useContext(SwitchGroupContext);
