import React, { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import classes from './ModalBase.module.css';

export interface ModalBaseHeaderProps extends BoxProps, ElementProps<'div'> {}

export const ModalBaseHeader = forwardRef<HTMLDivElement, ModalBaseHeaderProps>(
  ({ className, ...others }, ref) => (
    <Box ref={ref} className={cx(classes.header, className)} {...others} />
  )
);

ModalBaseHeader.displayName = '@mantine/core/ModalBaseHeader';
