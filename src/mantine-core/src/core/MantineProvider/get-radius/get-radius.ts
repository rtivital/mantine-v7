import type { MantineTheme, MantineRadius } from '../theme.types';
import { rem } from '../../utils';

export function getRadius(
  theme: MantineTheme,
  value: MantineRadius | number | string | undefined | null
) {
  const _value = value === null || value === undefined ? theme.defaultRadius : value;

  if (_value in theme.radius) {
    return `var(--mantine-radius-${_value})`;
  }

  if (typeof _value === 'number') {
    return rem(_value);
  }

  return _value;
}
