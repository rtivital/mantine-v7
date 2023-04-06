import { cssVariablesObjectToString, CSSVariables } from './css-variables-object-to-string';
import { wrapWithSelector } from './wrap-with-selector';

export interface ConvertCSSVariablesInput {
  /** Shared CSS variables that should be accessible independent from color scheme */
  variables: CSSVariables;

  /** CSS variables available only in dark color scheme */
  dark: CSSVariables;

  /** CSS variables available only in light color scheme */
  light: CSSVariables;

  /** CSS selector that will be used to set variables */
  selector: string;
}

export function convertCssVariables(input: ConvertCSSVariablesInput) {
  const shared = wrapWithSelector(input.selector, cssVariablesObjectToString(input.variables));

  const dark = cssVariablesObjectToString(input.dark);
  const darkMedia = wrapWithSelector([input.selector, '@media (prefers-color-scheme: dark)'], dark);
  const darkForced = wrapWithSelector(`${input.selector}[data-mantine-color-scheme="dark"]`, dark);

  const light = cssVariablesObjectToString(input.light);
  const lightMedia = wrapWithSelector(
    [input.selector, '@media (prefers-color-scheme: light)'],
    light
  );
  const lightForced = wrapWithSelector(
    `${input.selector}[data-mantine-color-scheme="light"]`,
    light
  );

  return `${shared}${darkMedia}${darkForced}${lightMedia}${lightForced}`;
}
