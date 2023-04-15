import { CSSProperties } from 'react';
import { MantineStyleProp } from '../../../../Box';
import { MantineTheme } from '../../../../MantineProvider';

interface ResolveStyleInput {
  style: MantineStyleProp | undefined;
  theme: MantineTheme;
}

export function resolveStyle({ style, theme }: ResolveStyleInput): CSSProperties {
  if (style === undefined) {
    return {};
  }

  const arrayStyle = Array.isArray(style) ? style : [style];
  return arrayStyle.reduce<CSSProperties>(
    (acc, val) => ({ ...acc, ...(typeof val === 'function' ? val(theme) : val) }),
    {}
  );
}
