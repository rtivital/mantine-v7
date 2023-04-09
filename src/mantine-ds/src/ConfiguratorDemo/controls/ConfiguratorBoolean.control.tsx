import React from 'react';
import { Switch, BoxProps, ElementProps } from '@mantine/core';
import { getControlLabel } from './get-control-label';

export interface ConfiguratorBooleanControlOptions {
  type: 'boolean';
  label: string;
  initialValue: boolean;
}

export interface ConfiguratorBooleanControlProps
  extends BoxProps,
    Omit<ElementProps<'input'>, 'onChange' | 'value' | 'size'> {
  value: boolean;
  onChange(value: boolean): void;
  label: string;
}

export function ConfiguratorBooleanControl({
  value,
  onChange,
  label,
  ...others
}: ConfiguratorBooleanControlProps) {
  return (
    <Switch
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      label={getControlLabel(label)}
      {...others}
    />
  );
}
