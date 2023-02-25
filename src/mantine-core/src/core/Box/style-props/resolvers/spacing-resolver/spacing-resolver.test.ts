import { spacingResolver } from './spacing-resolver';
import { DEFAULT_THEME } from '../../../../MantineProvider';

describe('@mantine/core/Box/spacing-resolver', () => {
  it('resolves number correctly', () => {
    expect(spacingResolver(10, DEFAULT_THEME)).toBe('0.625rem');
    expect(spacingResolver(-10, DEFAULT_THEME)).toBe('-0.625rem');
    expect(spacingResolver(1.5, DEFAULT_THEME)).toBe('0.09375rem');
    expect(spacingResolver(0, DEFAULT_THEME)).toBe('0rem');
  });

  it('resolves theme value correctly', () => {
    expect(spacingResolver('xs', DEFAULT_THEME)).toBe('var(--mantine-spacing-xs)');
    expect(spacingResolver('-md', DEFAULT_THEME)).toBe('calc(var(--mantine-spacing-md) * -1)');
  });

  it('resolves string correctly', () => {
    expect(spacingResolver('10px', DEFAULT_THEME)).toBe('10px');
    expect(spacingResolver('-10px', DEFAULT_THEME)).toBe('-10px');
  });
});
