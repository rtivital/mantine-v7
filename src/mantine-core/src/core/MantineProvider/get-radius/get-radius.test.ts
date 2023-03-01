import { getRadius } from './get-radius';
import { DEFAULT_THEME } from '../default-theme';

describe('@mantine/core/get-radius', () => {
  it('returns CSS variable if value is in theme', () => {
    expect(getRadius(DEFAULT_THEME, 'xs')).toBe('var(--mantine-radius-xs)');
    expect(getRadius(DEFAULT_THEME, 'sm')).toBe('var(--mantine-radius-sm)');
    expect(getRadius(DEFAULT_THEME, 'md')).toBe('var(--mantine-radius-md)');
    expect(getRadius(DEFAULT_THEME, 'lg')).toBe('var(--mantine-radius-lg)');
    expect(getRadius(DEFAULT_THEME, 'xl')).toBe('var(--mantine-radius-xl)');
  });

  it('returns rem value if value is number', () => {
    expect(getRadius(DEFAULT_THEME, 1)).toBe('0.0625rem');
    expect(getRadius(DEFAULT_THEME, 10)).toBe('0.625rem');
    expect(getRadius(DEFAULT_THEME, 16)).toBe('1rem');
  });

  it('returns value as is if value is string', () => {
    expect(getRadius(DEFAULT_THEME, '1px')).toBe('1px');
    expect(getRadius(DEFAULT_THEME, '10%')).toBe('10%');
    expect(getRadius(DEFAULT_THEME, '16vh')).toBe('16vh');
  });

  it('returns default radius if value is not provided', () => {
    expect(getRadius(DEFAULT_THEME, undefined)).toBe(
      `var(--mantine-radius-${DEFAULT_THEME.defaultRadius})`
    );
    expect(getRadius(DEFAULT_THEME, null)).toBe(
      `var(--mantine-radius-${DEFAULT_THEME.defaultRadius})`
    );
  });
});
