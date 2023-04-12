import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  useVars,
  MantineSize,
  getFontSize,
  rem,
  createVarsResolver,
  Factory,
} from '../../../core';
import classes from './InputDescription.module.css';

export type InputDescriptionStylesNames = 'description';
export type InputDescriptionVariant = string;
export type InputDescriptionCssVariables = '--input-description-size';

export interface InputDescriptionProps
  extends BoxProps,
    StylesApiProps<InputDescriptionFactory>,
    ElementProps<'div'> {
  __staticSelector?: string;

  /** Controls description `font-size`, `'sm'` by default */
  size?: MantineSize | (string & {});
}

export type InputDescriptionFactory = Factory<{
  props: InputDescriptionProps;
  ref: HTMLParagraphElement;
  stylesNames: InputDescriptionStylesNames;
  vars: InputDescriptionCssVariables;
  variant: InputDescriptionVariant;
}>;

const defaultProps: Partial<InputDescriptionProps> = {
  size: 'sm',
};

const varsResolver = createVarsResolver<InputDescriptionFactory>((_, { size }) => ({
  '--input-description-size': `calc(${getFontSize(size)} - ${rem(2)})`,
}));

export const InputDescription = factory<InputDescriptionFactory>((_props, ref) => {
  const props = useProps('InputDescription', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    variant,
    ...others
  } = useProps('InputDescription', defaultProps, props);

  const getStyles = useStyles<InputDescriptionFactory>({
    name: ['InputWrapper', __staticSelector],
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: 'description',
  });

  const _vars = useVars<InputDescriptionFactory>({
    name: 'InputDescription',
    resolver: varsResolver,
    props,
    vars,
  });

  return (
    <Box
      component="p"
      ref={ref}
      variant={variant}
      size={size}
      {...getStyles('description')}
      vars={_vars}
      {...others}
    />
  );
});

InputDescription.displayName = '@mantine/core/InputDescription';
