import React, { forwardRef } from 'react';
import { ElementProps, useProps, Input, InputProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightSearchProps
  extends InputProps,
    ElementProps<'input', 'size' | 'value' | 'onChange'> {}

const defaultProps: Partial<SpotlightSearchProps> = {
  size: 'lg',
};

export const SpotlightSearch = forwardRef<HTMLInputElement, SpotlightSearchProps>((props, ref) => {
  const { classNames, styles, ...others } = useProps('SpotlightSearch', defaultProps, props);
  const ctx = useSpotlightContext();
  const inputStyles = ctx.getStyles('search');

  return (
    <Input
      ref={ref}
      classNames={[{ input: inputStyles.className }, classNames] as any}
      styles={[{ input: inputStyles.style }, styles] as any}
      value={ctx.query}
      onChange={(event) => ctx.setQuery(event.currentTarget.value)}
      {...others}
    />
  );
});
