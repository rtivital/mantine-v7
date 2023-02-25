import { getPrimaryShade } from '../get-primary-shade/get-primary-shade';
import { parseThemeColor } from './parse-theme-color';
import { DEFAULT_THEME } from '../../default-theme';

describe('@mantine/core/parse-theme-color', () => {
  it('parses theme color correctly', () => {
    expect(parseThemeColor({ color: 'red', colorScheme: 'light', theme: DEFAULT_THEME })).toEqual({
      color: 'red',
      shade: getPrimaryShade(DEFAULT_THEME, 'light'),
      variable: `--mantine-color-red-${getPrimaryShade(DEFAULT_THEME, 'light')}`,
    });

    expect(parseThemeColor({ color: 'red', colorScheme: 'dark', theme: DEFAULT_THEME })).toEqual({
      color: 'red',
      shade: getPrimaryShade(DEFAULT_THEME, 'dark'),
      variable: `--mantine-color-red-${getPrimaryShade(DEFAULT_THEME, 'dark')}`,
    });
  });

  it('parses theme color with shade correctly', () => {
    expect(
      parseThemeColor({ color: 'orange.5', colorScheme: 'light', theme: DEFAULT_THEME })
    ).toEqual({
      color: 'orange',
      shade: 5,
      variable: '--mantine-color-orange-5',
    });

    expect(
      parseThemeColor({ color: 'orange.5', colorScheme: 'dark', theme: DEFAULT_THEME })
    ).toEqual({
      color: 'orange',
      shade: 5,
      variable: '--mantine-color-orange-5',
    });
  });

  it('parses non theme color correctly', () => {
    expect(
      parseThemeColor({ color: '#FEFEFE', colorScheme: 'light', theme: DEFAULT_THEME })
    ).toEqual({
      color: '#FEFEFE',
      shade: getPrimaryShade(DEFAULT_THEME, 'light'),
      variable: undefined,
    });
  });

  it('throws error if color is not string', () => {
    expect(() =>
      parseThemeColor({ color: 1, colorScheme: 'light', theme: DEFAULT_THEME })
    ).toThrow();
  });
});
