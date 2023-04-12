import type { MantineTheme } from '../../MantineProvider';
import type { MantineStyleProp, CssVarsProp } from '../Box.types';

interface GetBoxStyleOptions {
  theme: MantineTheme;
  styleProps: React.CSSProperties;
  style?: MantineStyleProp;
  vars?: CssVarsProp;
}

function mergeStyles(
  styles: MantineStyleProp | CssVarsProp | undefined,
  theme: MantineTheme
): React.CSSProperties {
  const flat = Array.isArray(styles) ? styles : styles ? [styles] : [];
  return flat.reduce<React.CSSProperties>((acc, item) => {
    if (typeof item === 'function') {
      return { ...acc, ...item(theme, {}) };
    }

    return { ...acc, ...item };
  }, {});
}

export function getBoxStyle({
  theme,
  style,
  vars,
  styleProps,
}: GetBoxStyleOptions): React.CSSProperties {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}
