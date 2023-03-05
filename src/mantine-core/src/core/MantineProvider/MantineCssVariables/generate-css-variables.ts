import { MantineTheme } from '../theme.types';
import { keys } from '../../utils';
import { getPrimaryShade, rgba } from '../color-functions';

function getColorSchemeCssVariables(selector: string) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}

function getVariantsCssVariables(theme: MantineTheme, selector: string) {
  const darkPrimaryShade = getPrimaryShade(theme, 'dark');
  const lightPrimaryShade = getPrimaryShade(theme, 'light');

  const lightDefaultVariant = `
    --mantine-color-default: ${theme.white};
    --mantine-color-default-hover: ${theme.colors.gray[0]};
    --mantine-color-default-color: ${theme.black};
    --mantine-color-default-border: ${theme.colors.gray[4]};
  `;

  const darkDefaultVariant = `
    --mantine-color-default: ${theme.colors.dark[6]};
    --mantine-color-default-hover: ${theme.colors.dark[5]};
    --mantine-color-default-color: ${theme.white};
    --mantine-color-default-border: ${theme.colors.dark[4]};
  `;

  const colors = keys(theme.colors).reduce<{ light: string; dark: string }>(
    (acc, color) => {
      const lightFilledHover =
        lightPrimaryShade === 9
          ? theme.colors[color][8]
          : theme.colors[color][lightPrimaryShade + 1];

      const darkFilledHover =
        darkPrimaryShade === 9 ? theme.colors[color][8] : theme.colors[color][darkPrimaryShade + 1];

      acc.light = `${acc.light}
      --mantine-color-${color}-filled: ${theme.colors[color][lightPrimaryShade]};
      --mantine-color-${color}-filled-hover: ${lightFilledHover};
      --mantine-color-${color}-light: ${rgba(theme.colors[color][lightPrimaryShade], 0.1)};
      --mantine-color-${color}-light-hover: ${rgba(theme.colors[color][lightPrimaryShade], 0.12)};
      --mantine-color-${color}-light-color: ${theme.colors[color][lightPrimaryShade]};
      --mantine-color-${color}-outline: ${theme.colors[color][lightPrimaryShade]};
      --mantine-color-${color}-outline-hover: ${rgba(theme.colors[color][lightPrimaryShade], 0.05)};
      `;

      acc.dark = `${acc.dark}
      --mantine-color-${color}-filled: ${theme.colors[color][darkPrimaryShade]};
      --mantine-color-${color}-filled-hover: ${darkFilledHover};
      --mantine-color-${color}-light: ${rgba(theme.colors[color][darkPrimaryShade], 0.1)};
      --mantine-color-${color}-light-hover: ${rgba(theme.colors[color][darkPrimaryShade], 0.12)};
      --mantine-color-${color}-light-color: ${theme.colors[color][Math.min(darkPrimaryShade, 6)]};
      --mantine-color-${color}-outline: ${theme.colors[color][Math.min(darkPrimaryShade, 6)]};
      --mantine-color-${color}-outline-hover: ${rgba(
        theme.colors[color][Math.min(darkPrimaryShade, 6)],
        0.05
      )};
      `;

      return acc;
    },
    { light: lightDefaultVariant, dark: darkDefaultVariant }
  );

  return `
  ${selector}[data-mantine-color-scheme="dark"] {${colors.dark}}
  ${selector}[data-mantine-color-scheme="light"] {${colors.light}}
  @media (prefers-color-scheme: dark) { ${selector} {${colors.dark}} }
  @media (prefers-color-scheme: light) { ${selector} {${colors.light}} }`;
}

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}

function getThemeCssVariables(theme: MantineTheme) {
  const variables: Record<string, string> = {
    '--mantine-webkit-font-smoothing': theme.fontSmoothing ? 'antialiased' : 'unset',
    '--mantine-color-scheme': 'light dark',
    '--mantine-moz-font-smoothing': theme.fontSmoothing ? 'grayscale' : 'unset',
    '--mantine-color-white': theme.white,
    '--mantine-color-black': theme.black,
    '--mantine-line-height': theme.lineHeight,
    '--mantine-font-family': theme.fontFamily,
    '--mantine-font-family-monospace': theme.fontFamilyMonospace,
    '--mantine-font-family-headings': theme.headings.fontFamily,
    '--mantine-heading-font-weight': theme.headings.fontWeight,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');

  keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--mantine-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  keys(headings).forEach((heading) => {
    variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    variables[`--mantine-${heading}-font-weight`] =
      headings[heading].fontWeight || theme.headings.fontWeight;
  });

  return keys(variables)
    .reduce((acc, variable) => `${acc}${variable}: ${variables[variable]};\n`, '')
    .trim();
}

export function generateCssVariables(theme: MantineTheme, cssVariablesSelector: string) {
  return `${cssVariablesSelector}{${getThemeCssVariables(theme)}} ${getColorSchemeCssVariables(
    cssVariablesSelector
  )} ${getVariantsCssVariables(theme, cssVariablesSelector)}`;
}
