import { createContext, useContext } from 'react';

interface InputWrapperContextValue {
  offsetTop: boolean;
  offsetBottom: boolean;
  descriptionId: string | undefined;
  errorId: string | undefined;
}

const InputWrapperContext = createContext<InputWrapperContextValue>({
  offsetBottom: false,
  offsetTop: false,
  descriptionId: undefined,
  errorId: undefined,
});

export const InputWrapperProvider = InputWrapperContext.Provider;
export const useInputWrapperContext = () => useContext(InputWrapperContext);
