import type { MantineTheme } from '../../MantineProvider';
import type { MantineStyleProp } from '../Box.types';

export function getStyleObject(
  style: MantineStyleProp | undefined,
  theme: MantineTheme
): React.CSSProperties {
  if (Array.isArray(style)) {
    return style.reduce<React.CSSProperties>(
      (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
      {}
    );
  }

  if (typeof style === 'function') {
    return style(theme);
  }

  return style || {};
}
