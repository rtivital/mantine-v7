import React, { forwardRef } from 'react';
import { ElementProps, useProps, Input, InputProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightSearchProps extends InputProps, ElementProps<'input', 'size'> {}

const defaultProps: Partial<SpotlightSearchProps> = {
  size: 'lg',
};

export const SpotlightSearch = forwardRef<HTMLInputElement, SpotlightSearchProps>((props, ref) => {
  const { classNames, ...others } = useProps('SpotlightSearch', defaultProps, props);
  const ctx = useSpotlightContext();
  return (
    <Input
      ref={ref}
      {...ctx.getStyles('search')}
      classNames={[{ input: ctx.getStyles('search').className }, classNames] as any}
      {...others}
    />
  );
});
