import type { MantineTheme } from '../../theme.types';
import { keys } from '../../../utils';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<string, string>,
  name: string
) {
  keys(sizes).forEach((size) =>
    Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}

export function getThemeCssVariables(theme: MantineTheme) {
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
