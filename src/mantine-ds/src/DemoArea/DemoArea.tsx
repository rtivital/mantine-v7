import React from 'react';
import { Box, rem } from '@mantine/core';
import classes from './DemoArea.module.css';

export interface DemoAreaProps {
  children?: React.ReactNode;
  withPadding?: boolean;
  centered?: boolean;
  maxWidth?: number;
  minHeight?: number;
  dimmed?: boolean;
}

export function DemoArea({
  withPadding = true,
  centered,
  maxWidth,
  minHeight,
  children,
  dimmed,
}: DemoAreaProps) {
  return (
    <Box
      className={classes.demo}
      mod={{ 'with-padding': withPadding, centered: centered && !maxWidth, dimmed }}
      __vars={{
        '--demo-max-width': maxWidth ? rem(maxWidth) : undefined,
        '--demo-min-height': minHeight ? rem(minHeight) : undefined,
        '--demo-margin-y': maxWidth && centered ? 'auto' : undefined,
      }}
    >
      <div className={classes.demoInner}>{children}</div>
    </Box>
  );
}
