import { createContext, useContext } from 'react';
import { GetStylesApi } from '../../core';
import type { InputWrapperFactory } from './InputWrapper/InputWrapper';

interface InputWrapperContextValue {
  offsetTop: boolean;
  offsetBottom: boolean;
  describedBy: string | undefined;
  getStyles: GetStylesApi<InputWrapperFactory> | null;
}

const InputWrapperContext = createContext<InputWrapperContextValue>({
  offsetBottom: false,
  offsetTop: false,
  describedBy: undefined,
  getStyles: null,
});

export const InputWrapperProvider = InputWrapperContext.Provider;
export const useInputWrapperContext = () => useContext(InputWrapperContext);
