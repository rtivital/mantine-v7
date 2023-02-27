import { parseThemeColor } from './parse-theme-color';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/core/parse-theme-color', () => {
  it('parses theme color correctly', () => {
    expect(parseThemeColor({ color: 'red', theme: DEFAULT_THEME })).toEqual({
      color: 'red',
      shade: undefined,
      variable: '--mantine-color-red-filled',
    });
  });

  it('parses theme color with shade correctly', () => {
    expect(parseThemeColor({ color: 'orange.5', theme: DEFAULT_THEME })).toEqual({
      color: 'orange',
      shade: 5,
      variable: '--mantine-color-orange-5',
    });
  });

  it('parses non theme color correctly', () => {
    expect(parseThemeColor({ color: '#FEFEFE', theme: DEFAULT_THEME })).toEqual({
      color: '#FEFEFE',
      shade: undefined,
      variable: undefined,
    });
  });

  it('throws error if color is not string', () => {
    expect(() => parseThemeColor({ color: 1, theme: DEFAULT_THEME })).toThrow();
  });
});
