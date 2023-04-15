import React from 'react';
import { Box, rem } from '@mantine/core';
import classes from './DemoArea.module.css';

export interface DemoAreaProps {
  children?: React.ReactNode;
  withPadding?: boolean;
  centered?: boolean;
  maxWidth?: number;
}

export function DemoArea({ withPadding = true, centered, maxWidth, children }: DemoAreaProps) {
  return (
    <Box
      className={classes.demo}
      mod={{ 'with-padding': withPadding, centered: centered && !maxWidth }}
      __vars={{
        '--demo-max-width': maxWidth ? rem(maxWidth) : undefined,
        '--demo-margin-y': maxWidth && centered ? 'auto' : undefined,
      }}
    >
      <div className={classes.demoInner}>{children}</div>
    </Box>
  );
}
