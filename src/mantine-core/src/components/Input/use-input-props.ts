import { useId } from '@mantine/hooks';
import { extractStyleProps, useProps, BoxProps, StylesApiProps } from '../../core';
import { __BaseInputProps } from './Input';

interface BaseProps
  extends __BaseInputProps,
    BoxProps,
    StylesApiProps<{ props: any; stylesNames: string }> {
  __staticSelector?: string;
  id?: string;
}

export function useInputProps<T extends BaseProps, U extends Partial<T>>(
  component: string,
  defaultProps: U,
  props: T
) {
  const {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    ...others
  } = useProps<T>(component, defaultProps, props);

  const uid = useId(id);

  const { styleProps, rest } = extractStyleProps(others);

  const wrapperProps = {
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    id: uid,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    ..._wrapperProps,
  };

  return {
    ...rest,
    classNames,
    styles,
    unstyled,
    wrapperProps: { ...wrapperProps, ...styleProps } as typeof wrapperProps & BoxProps,
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      id: uid,
      size,
      __staticSelector,
      error,
      variant,
    },
  };
}
