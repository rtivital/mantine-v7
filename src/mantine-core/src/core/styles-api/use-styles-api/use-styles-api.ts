import { CSSProperties } from 'react';
import cx from 'clsx';
import { MantineTheme, useMantineTheme, useMantineClassNamesPrefix } from '../../MantineProvider';
import type { MantineStyleProp } from '../../Box';
import { StylesRecord } from '../styles-api.types';
import { STATIC_CLASSES } from '../static-classes';

type Styles<StylesNames extends string> =
  | StylesRecord<StylesNames, CSSProperties>
  | ((theme: MantineTheme) => StylesRecord<StylesNames, CSSProperties>);

export interface UseStylesApiInput<StylesNames extends string> {
  name: string | (string | undefined)[];
  classes: Record<StylesNames, string>;
  className?: string;
  style?: MantineStyleProp;
  rootSelector?: StylesNames;
  unstyled?: boolean;
  classNames?: Partial<Record<StylesNames, string>>;
  styles?: Styles<StylesNames>;
}

export interface GetPropsOptions {
  focusable?: boolean;
  active?: boolean;
}

function resolveStyles<StylesNames extends string>(
  styles: Styles<StylesNames> | undefined,
  theme: MantineTheme
) {
  return typeof styles === 'function' ? styles(theme) : styles;
}

export type GetStylesApi<StylesNames extends string> = (
  selector: StylesNames,
  options?: GetPropsOptions
) => {
  className: string;
  style: CSSProperties;
};

export function useStylesApi<StylesNames extends string>({
  name,
  className,
  classes,
  style,
  rootSelector = 'root' as StylesNames,
  unstyled,
  classNames,
  styles,
}: UseStylesApiInput<StylesNames>): GetStylesApi<StylesNames> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = Array.isArray(name) ? (name.filter((n) => n) as string[]) : [name];
  const resolvedStyles = resolveStyles(styles, theme);
  const _resolvedStyle = Array.isArray(style) ? style : [style];
  const resolvedStyle = _resolvedStyle.reduce(
    (acc, val) => ({ ...acc, ...(typeof val === 'function' ? val(theme) : val) }),
    {}
  );

  return (selector: StylesNames, options?: GetPropsOptions) => {
    const themeClassNames = themeName
      .filter((n) => n)
      .map((n) => theme.components?.[n]?.classNames?.[selector]);
    const staticClassNames = themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
    const _className = cx(
      options?.focusable && !unstyled && STATIC_CLASSES.focus[theme.focusRing],
      options?.active && !unstyled && STATIC_CLASSES.active,
      themeClassNames,
      classNames?.[selector],
      className && { [className]: rootSelector === selector },
      { [classes[selector]]: !unstyled },
      staticClassNames
    );

    const themeStyles = themeName
      .map((n) => resolveStyles(theme.components?.[n]?.styles, theme)?.[selector])
      .reduce((acc, val) => ({ ...acc, ...val }), {});

    const _style = {
      ...themeStyles,
      ...resolvedStyles?.[selector],
      ...resolvedStyle,
    } as CSSProperties;

    return { className: _className, style: _style };
  };
}
