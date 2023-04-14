import { MantineTheme } from '../../../../MantineProvider';
import type { _ClassNames } from '../get-class-name';

export interface ResolveClassNamesInput {
  theme: MantineTheme;
  classNames: _ClassNames;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}

const EMPTY_CLASS_NAMES: Record<string, string> = {};

export function resolveClassNames({ theme, classNames, props, stylesCtx }: ResolveClassNamesInput) {
  return typeof classNames === 'function'
    ? classNames(theme, props, stylesCtx)
    : classNames || EMPTY_CLASS_NAMES;
}
