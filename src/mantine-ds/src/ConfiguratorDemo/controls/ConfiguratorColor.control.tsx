import React from 'react';
import {
  ColorSwatch,
  Input,
  BoxProps,
  ElementProps,
  useMantineTheme,
  CheckIcon,
  Group,
} from '@mantine/core';
import { getControlLabel } from './get-control-label';
import { ConfiguratorControl } from './types';
import classes from './ConfiguratorColor.control.module.css';

export type ConfiguratorColorControlOptions = ConfiguratorControl<
  'color',
  { initialValue: string }
>;

export interface ConfiguratorColorControlProps
  extends BoxProps,
    Omit<ElementProps<'div'>, 'onChange' | 'value' | 'size'> {
  value: string;
  onChange(value: string): void;
  prop: string;
}

export function ConfiguratorColorControl({
  value,
  onChange,
  prop,
  ...others
}: ConfiguratorColorControlProps) {
  const theme = useMantineTheme();
  const colors = Object.keys(theme.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <ColorSwatch
        color={`var(--mantine-color-${color}-filled)`}
        component="button"
        key={color}
        onClick={() => onChange(color)}
        radius="sm"
        className={classes.swatch}
      >
        {value === color && <CheckIcon className={classes.check} />}
      </ColorSwatch>
    ));

  return (
    <Input.Wrapper labelElement="div" label={getControlLabel(prop)} {...others}>
      <Group gap={2} mt={5} wrap="wrap">
        {colors}
      </Group>
    </Input.Wrapper>
  );
}
