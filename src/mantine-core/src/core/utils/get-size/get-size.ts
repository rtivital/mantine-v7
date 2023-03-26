import { isNumberLike } from '../is-number-like/is-number-like';
import { rem } from '../units-converters';

export function getSize(size: unknown, prefix = 'size') {
  return isNumberLike(size) ? rem(size) : `var(--${prefix}-${size})`;
}

export function getSpacing(size: unknown) {
  return getSize(size, 'mantine-spacing');
}

export function getRadius(size: unknown) {
  if (size === undefined) {
    return 'var(--mantine-radius-default)';
  }

  return getSize(size, 'mantine-radius');
}

export function getFontSize(size: unknown) {
  return getSize(size, 'mantine-font-size');
}

export function getShadow(size: unknown) {
  if (!size) {
    return 'none';
  }

  return getSize(size, 'mantine-shadow');
}
