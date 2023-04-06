import { cssVariablesObjectToString, CSSVariables } from './css-variables-object-to-string';
import { wrapWithSelector } from './wrap-with-selector';

export interface ConvertCSSVariablesInput {
  /** Shared CSS variables that should be accessible independent from color scheme */
  variables: CSSVariables;

  /** CSS variables available only in dark color scheme */
  dark: CSSVariables;

  /** CSS variables available only in light color scheme */
  light: CSSVariables;
}

export function convertCssVariables(input: ConvertCSSVariablesInput, selector: string) {
  const shared = wrapWithSelector(selector, cssVariablesObjectToString(input.variables));

  const dark = cssVariablesObjectToString(input.dark);
  const darkMedia = wrapWithSelector([selector, '@media (prefers-color-scheme: dark)'], dark);
  const darkForced = wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark);

  const light = cssVariablesObjectToString(input.light);
  const lightMedia = wrapWithSelector([selector, '@media (prefers-color-scheme: light)'], light);
  const lightForced = wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light);

  return `${shared}${darkMedia}${darkForced}${lightMedia}${lightForced}`;
}
