import React, { forwardRef } from 'react';
import {
  Box,
  BoxProps,
  useStyles,
  StylesApiProps,
  ElementProps,
  MantineSize,
  getFontSize,
  getSize,
} from '../../core';
import { Input } from '../Input';
import classes from './InlineInput.module.css';

export type InlineInputStylesNames =
  | 'root'
  | 'body'
  | 'labelWrapper'
  | 'label'
  | 'description'
  | 'error';

export interface InlineInputProps
  extends BoxProps,
    StylesApiProps<InlineInputStylesNames>,
    ElementProps<'div'> {
  __staticSelector: string;
  label: React.ReactNode;
  description: React.ReactNode;
  id: string;
  disabled: boolean | undefined;
  error: React.ReactNode;
  size: MantineSize | (string & {}) | number | undefined;
  labelPosition?: 'left' | 'right';
}

export const InlineInput = forwardRef<HTMLDivElement, InlineInputProps>(
  (
    {
      __staticSelector,
      className,
      classNames,
      styles,
      unstyled,
      children,
      label,
      description,
      id,
      disabled,
      error,
      size = 'sm',
      labelPosition = 'left',
      variant,
      style,
      vars,
      ...others
    },
    ref
  ) => {
    const getStyles = useStyles({
      name: __staticSelector,
      className,
      style,
      classes,
      classNames,
      styles,
      unstyled,
    });

    return (
      <Box
        {...getStyles('root')}
        ref={ref}
        vars={{
          '--label-fz': getFontSize(size),
          '--label-lh': getSize(size, 'label-lh'),
          ...vars,
        }}
        mod={{ 'label-position': labelPosition }}
        variant={variant}
        size={size}
        {...others}
      >
        <div {...getStyles('body')}>
          {children}

          <div {...getStyles('labelWrapper')}>
            {label && (
              <label {...getStyles('label')} data-disabled={disabled || undefined} htmlFor={id}>
                {label}
              </label>
            )}

            {description && (
              <Input.Description {...getStyles('description')}>{description}</Input.Description>
            )}

            {error && error !== 'boolean' && (
              <Input.Error {...getStyles('error')}>{error}</Input.Error>
            )}
          </div>
        </div>
      </Box>
    );
  }
);

InlineInput.displayName = '@mantine/core/InlineInput';
