import React, { forwardRef } from 'react';
import { ElementProps, useProps, Input, InputProps } from '@mantine/core';
import { useSpotlightContext } from './Spotlight.context';
import { spotlight } from './spotlight.store';

export interface SpotlightSearchProps
  extends InputProps,
    ElementProps<'input', 'size' | 'value' | 'onChange'> {}

const defaultProps: Partial<SpotlightSearchProps> = {
  size: 'lg',
};

export const SpotlightSearch = forwardRef<HTMLInputElement, SpotlightSearchProps>((props, ref) => {
  const { classNames, styles, onKeyDown, ...others } = useProps(
    'SpotlightSearch',
    defaultProps,
    props
  );
  const ctx = useSpotlightContext();
  const inputStyles = ctx.getStyles('search');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.nativeEvent.code === 'ArrowDown') {
      event.preventDefault();
      spotlight.selectNextAction(ctx.store);
    }

    if (event.nativeEvent.code === 'ArrowUp') {
      event.preventDefault();
      spotlight.selectPreviousAction(ctx.store);
    }

    if (event.nativeEvent.code === 'Enter') {
      event.preventDefault();
      spotlight.triggerSelectedAction(ctx.store);
    }
  };

  return (
    <Input
      ref={ref}
      classNames={[{ input: inputStyles.className }, classNames] as any}
      styles={[{ input: inputStyles.style }, styles] as any}
      value={ctx.query}
      onChange={(event) => {
        ctx.setQuery(event.currentTarget.value);
        spotlight.selectAction(0);
      }}
      {...others}
      onKeyDown={handleKeyDown}
    />
  );
});

SpotlightSearch.displayName = '@mantine/spotlight/SpotlightSearch';
