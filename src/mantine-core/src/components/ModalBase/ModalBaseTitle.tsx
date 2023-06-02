import React, { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalTitle } from './use-modal-title-id';
import classes from './ModalBase.module.css';

export interface ModalBaseTitleProps extends BoxProps, ElementProps<'h2'> {}

export const ModalBaseTitle = forwardRef<HTMLHeadingElement, ModalBaseTitleProps>(
  ({ className, ...others }, ref) => {
    const id = useModalTitle();
    return (
      <Box component="h2" ref={ref} className={cx(classes.title, className)} {...others} id={id} />
    );
  }
);

ModalBaseTitle.displayName = '@mantine/core/ModalBaseTitle';
