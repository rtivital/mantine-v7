import { getSize, getSpacing } from './get-size';

describe('@mantine/core/get-size', () => {
  it('returns correct size for numbers and number like values', () => {
    expect(getSize(10)).toBe('0.625rem');
    expect(getSize('10')).toBe('0.625rem');
    expect(getSize('10px')).toBe('0.625rem');
    expect(getSize('10rem')).toBe('10rem');
    expect(getSize('10%')).toBe('10%');
  });

  it('returns correct size with custom prefix', () => {
    expect(getSize('xs', 'test')).toBe('var(--test-xs)');
    expect(getSize('md', 'test')).toBe('var(--test-md)');
    expect(getSize(10, 'test')).toBe('0.625rem');
  });

  it('returns correct size for default prefix', () => {
    expect(getSize('xs')).toBe('var(--size-xs)');
    expect(getSize('md')).toBe('var(--size-md)');
  });
});

describe('@mantine/core/get-spacing', () => {
  it('returns correct values', () => {
    expect(getSpacing(10)).toBe('0.625rem');
    expect(getSpacing('10')).toBe('0.625rem');
    expect(getSpacing('10px')).toBe('0.625rem');
    expect(getSpacing('10rem')).toBe('10rem');
    expect(getSpacing('10%')).toBe('10%');
    expect(getSpacing('xs')).toBe('var(--mantine-spacing-xs)');
    expect(getSpacing('md')).toBe('var(--mantine-spacing-md)');
  });
});
