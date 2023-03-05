import { getSize } from './get-size';

describe('@mantine/core/get-size', () => {
  it('returns correct size', () => {
    expect(getSize(10)).toBe('0.625rem');
    expect(getSize('xs')).toBe('var(--size-xs)');
  });
});
