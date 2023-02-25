import { DEFAULT_THEME } from '../default-theme';
import { mergeMantineTheme, INVALID_PRIMARY_COLOR_ERROR } from './merge-mantine-theme';

describe('@mantine/core/merge-mantine-theme', () => {
  it('throws error when theme.primaryColor is invalid', () => {
    expect(() => mergeMantineTheme({ ...DEFAULT_THEME, primaryColor: 'unknown' })).toThrow(
      INVALID_PRIMARY_COLOR_ERROR
    );

    expect(() => mergeMantineTheme(DEFAULT_THEME, { primaryColor: 'unknown' })).toThrow(
      INVALID_PRIMARY_COLOR_ERROR
    );
  });

  it('merges theme and override correctly', () => {
    expect(
      mergeMantineTheme(DEFAULT_THEME, {
        primaryShade: 9,
        radius: {
          md: 'test-radius',
        },
        headings: {
          fontFamily: 'test-font-family',
          sizes: {
            h1: { fontSize: 'test-font-size' },
          },
        },
      })
    ).toStrictEqual({
      ...DEFAULT_THEME,
      primaryShade: 9,
      radius: {
        ...DEFAULT_THEME.radius,
        md: 'test-radius',
      },
      headings: {
        ...DEFAULT_THEME.headings,
        fontFamily: 'test-font-family',
        sizes: {
          ...DEFAULT_THEME.headings.sizes,
          h1: {
            ...DEFAULT_THEME.headings.sizes.h1,
            fontSize: 'test-font-size',
          },
        },
      },
    });
  });

  it('merges theme and override correctly when override is undefined', () => {
    expect(mergeMantineTheme(DEFAULT_THEME, undefined)).toBe(DEFAULT_THEME);
  });
});
