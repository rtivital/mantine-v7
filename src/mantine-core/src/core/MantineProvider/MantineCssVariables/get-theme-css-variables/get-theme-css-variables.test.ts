import { getThemeCssVariables } from './get-theme-css-variables';
import { DEFAULT_THEME } from '../../default-theme';

const result = `
--mantine-webkit-font-smoothing: antialiased;
--mantine-moz-font-smoothing: grayscale;
--mantine-color-scheme: light dark;
--mantine-color-white: ${DEFAULT_THEME.white};
--mantine-color-black: ${DEFAULT_THEME.black};
--mantine-line-height: ${DEFAULT_THEME.lineHeight};
--mantine-font-family: ${DEFAULT_THEME.fontFamily};
--mantine-font-family-monospace: ${DEFAULT_THEME.fontFamilyMonospace};
--mantine-font-family-headings: ${DEFAULT_THEME.headings.fontFamily};
--mantine-heading-font-weight: ${DEFAULT_THEME.headings.fontWeight};
--mantine-shadow-xs: ${DEFAULT_THEME.shadows.xs};
--mantine-shadow-sm: ${DEFAULT_THEME.shadows.sm};
--mantine-shadow-md: ${DEFAULT_THEME.shadows.md};
--mantine-shadow-lg: ${DEFAULT_THEME.shadows.lg};
--mantine-shadow-xl: ${DEFAULT_THEME.shadows.xl};
--mantine-font-size-xs: ${DEFAULT_THEME.fontSizes.xs};
--mantine-font-size-sm: ${DEFAULT_THEME.fontSizes.sm};
--mantine-font-size-md: ${DEFAULT_THEME.fontSizes.md};
--mantine-font-size-lg: ${DEFAULT_THEME.fontSizes.lg};
--mantine-font-size-xl: ${DEFAULT_THEME.fontSizes.xl};
--mantine-radius-xs: ${DEFAULT_THEME.radius.xs};
--mantine-radius-sm: ${DEFAULT_THEME.radius.sm};
--mantine-radius-md: ${DEFAULT_THEME.radius.md};
--mantine-radius-lg: ${DEFAULT_THEME.radius.lg};
--mantine-radius-xl: ${DEFAULT_THEME.radius.xl};
--mantine-spacing-xs: ${DEFAULT_THEME.spacing.xs};
--mantine-spacing-sm: ${DEFAULT_THEME.spacing.sm};
--mantine-spacing-md: ${DEFAULT_THEME.spacing.md};
--mantine-spacing-lg: ${DEFAULT_THEME.spacing.lg};
--mantine-spacing-xl: ${DEFAULT_THEME.spacing.xl};
--mantine-color-blue-0: ${DEFAULT_THEME.colors.blue[0]};
--mantine-color-blue-1: ${DEFAULT_THEME.colors.blue[1]};
--mantine-color-blue-2: ${DEFAULT_THEME.colors.blue[2]};
--mantine-color-blue-3: ${DEFAULT_THEME.colors.blue[3]};
--mantine-color-blue-4: ${DEFAULT_THEME.colors.blue[4]};
--mantine-color-blue-5: ${DEFAULT_THEME.colors.blue[5]};
--mantine-color-blue-6: ${DEFAULT_THEME.colors.blue[6]};
--mantine-color-blue-7: ${DEFAULT_THEME.colors.blue[7]};
--mantine-color-blue-8: ${DEFAULT_THEME.colors.blue[8]};
--mantine-color-blue-9: ${DEFAULT_THEME.colors.blue[9]};
--mantine-h1-font-size: ${DEFAULT_THEME.headings.sizes.h1.fontSize};
--mantine-h1-line-height: ${DEFAULT_THEME.headings.sizes.h1.lineHeight};
--mantine-h1-font-weight: ${DEFAULT_THEME.headings.fontWeight};
--mantine-h2-font-size: ${DEFAULT_THEME.headings.sizes.h2.fontSize};
--mantine-h2-line-height: ${DEFAULT_THEME.headings.sizes.h2.lineHeight};
--mantine-h2-font-weight: ${DEFAULT_THEME.headings.fontWeight};
--mantine-h3-font-size: ${DEFAULT_THEME.headings.sizes.h3.fontSize};
--mantine-h3-line-height: ${DEFAULT_THEME.headings.sizes.h3.lineHeight};
--mantine-h3-font-weight: ${DEFAULT_THEME.headings.fontWeight};
--mantine-h4-font-size: ${DEFAULT_THEME.headings.sizes.h4.fontSize};
--mantine-h4-line-height: ${DEFAULT_THEME.headings.sizes.h4.lineHeight};
--mantine-h4-font-weight: ${DEFAULT_THEME.headings.fontWeight};
--mantine-h5-font-size: ${DEFAULT_THEME.headings.sizes.h5.fontSize};
--mantine-h5-line-height: ${DEFAULT_THEME.headings.sizes.h5.lineHeight};
--mantine-h5-font-weight: ${DEFAULT_THEME.headings.fontWeight};
--mantine-h6-font-size: ${DEFAULT_THEME.headings.sizes.h6.fontSize};
--mantine-h6-line-height: ${DEFAULT_THEME.headings.sizes.h6.lineHeight};
--mantine-h6-font-weight: ${DEFAULT_THEME.headings.fontWeight};
`.trim();

describe('@mantine/core/get-theme-css-variables', () => {
  it('returns correct css variables for given theme', () => {
    expect(
      getThemeCssVariables(
        { ...DEFAULT_THEME, colors: { blue: DEFAULT_THEME.colors.blue } } as any,
        'auto'
      )
    ).toBe(result);
  });
});
