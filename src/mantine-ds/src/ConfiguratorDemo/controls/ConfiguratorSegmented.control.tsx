import React from 'react';
import { SegmentedControl, Input, BoxProps, ElementProps } from '@mantine/core';
import { transformSelectData, SelectData } from './transform-select-data';
import { getControlLabel } from './get-control-label';

export interface ConfiguratorSegmentedControlOptions {
  type: 'segmented';
  data: SelectData;
  label: string;
  initialValue: string;
}

export interface ConfiguratorSegmentedControlProps
  extends BoxProps,
    Omit<ElementProps<'div'>, 'onChange'> {
  data: SelectData;
  value: string;
  onChange(value: string): void;
  label: string;
}

export function ConfiguratorSegmentedControl({
  data,
  value,
  onChange,
  label,
  ...others
}: ConfiguratorSegmentedControlProps) {
  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(label)} {...others}>
      <SegmentedControl
        data={transformSelectData(data)}
        value={value}
        onChange={onChange}
        fullWidth
        transitionDuration={150}
      />
    </Input.Wrapper>
  );
}
