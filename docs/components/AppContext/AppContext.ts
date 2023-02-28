import { createContext, useContext } from 'react';
import { NavbarData } from '@/types';

interface AppContextValue {
  navbarData: NavbarData;
}

export const AppContext = createContext<AppContextValue>({
  navbarData: { items: [] },
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = AppContext.Provider;
