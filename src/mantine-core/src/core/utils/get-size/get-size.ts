import { isNumberLike } from '../is-number-like/is-number-like';
import { rem } from '../units-converters';

export function getSize(size: unknown, prefix = 'size') {
  return isNumberLike(size) ? rem(size) : `var(--${prefix}-${size})`;
}
