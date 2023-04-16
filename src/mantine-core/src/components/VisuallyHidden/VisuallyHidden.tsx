import React from 'react';
import cx from 'clsx';
import classes from './VisuallyHidden.module.css';

export interface VisuallyHiddenProps extends React.ComponentPropsWithoutRef<'span'> {}

export function VisuallyHidden({ className, ...others }: VisuallyHiddenProps) {
  return <span className={cx(classes.root, className)} {...others} />;
}

VisuallyHidden.displayName = '@mantine/core/VisuallyHidden';
