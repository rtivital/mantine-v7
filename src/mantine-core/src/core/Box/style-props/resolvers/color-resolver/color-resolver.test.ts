import { colorResolver } from './color-resolver';
import { DEFAULT_THEME } from '../../../../MantineProvider';

describe('@mantine/core/Box/color-resolver', () => {
  it('resolves theme color', () => {
    expect(colorResolver('red', DEFAULT_THEME, 'light')).toBe('var(--mantine-color-red-filled)');
    expect(colorResolver('red', DEFAULT_THEME, 'dark')).toBe('var(--mantine-color-red-filled)');
    expect(colorResolver('red', DEFAULT_THEME, 'auto')).toBe('var(--mantine-color-red-filled)');
    expect(colorResolver('red.5', DEFAULT_THEME, 'light')).toBe('var(--mantine-color-red-5)');
    expect(colorResolver('red.5', DEFAULT_THEME, 'dark')).toBe('var(--mantine-color-red-5)');
  });

  it('resolves non theme color', () => {
    expect(colorResolver('#FEFEFE', DEFAULT_THEME, 'light')).toBe('#FEFEFE');
    expect(colorResolver('#FEFEFE', DEFAULT_THEME, 'dark')).toBe('#FEFEFE');
  });

  it('throws error if color is not string', () => {
    expect(() => colorResolver(1 as any, DEFAULT_THEME, 'light')).toThrow();
  });

  it('resolves white and black colors', () => {
    expect(colorResolver('white', DEFAULT_THEME, 'light')).toBe('var(--mantine-color-white)');
    expect(colorResolver('black', DEFAULT_THEME, 'light')).toBe('var(--mantine-color-black)');
  });

  it('resolves dimmed color', () => {
    expect(colorResolver('dimmed', DEFAULT_THEME, 'light')).toBe('var(--mantine-color-gray-6)');
    expect(colorResolver('dimmed', DEFAULT_THEME, 'dark')).toBe('var(--mantine-color-dark-2)');
  });
});
