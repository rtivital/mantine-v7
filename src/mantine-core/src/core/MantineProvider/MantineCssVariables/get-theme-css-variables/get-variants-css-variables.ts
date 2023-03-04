import { keys } from '../../../utils';
import { MantineTheme } from '../../theme.types';
import { getPrimaryShade, rgba } from '../../color-functions';

export function getVariantsCssVariables(theme: MantineTheme, selector: string) {
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
