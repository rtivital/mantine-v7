import cx from 'clsx';
import { GetStylesApiOptions } from '../../../styles-api.types';
import { MantineTheme } from '../../../../MantineProvider';

interface GetGlobalClassNamesOptions {
  theme: MantineTheme;
  unstyled: boolean | undefined;
  options: GetStylesApiOptions | undefined;
}

/** Returns classes that are defined globally (focus and active styles) based on options */
export function getGlobalClassNames({ theme, options, unstyled }: GetGlobalClassNamesOptions) {
  return cx(
    options?.focusable && !unstyled && theme.focusClassNames[theme.focusRing],
    options?.active && !unstyled && theme.activeClassName
  );
}
