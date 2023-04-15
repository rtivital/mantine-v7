import { CSSProperties } from 'react';
import type { MantineTheme } from '../../../../MantineProvider';
import type { _Styles } from '../get-style';

export interface ResolveStylesInput {
  theme: MantineTheme;
  styles: _Styles;
  props: Record<string, any>;
  stylesCtx: Record<string, any> | undefined;
}

const emptyStyles: Record<string, CSSProperties> = {};

export function resolveStyles({ theme, styles, props, stylesCtx }: ResolveStylesInput) {
  return typeof styles === 'function' ? styles(theme, props, stylesCtx) : styles || emptyStyles;
}
