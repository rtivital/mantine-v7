import { CSSProperties } from 'react';
import cx from 'clsx';
import { MantineTheme, useMantineTheme, useMantineClassNamesPrefix } from '../../MantineProvider';
import type { MantineStyleProp } from '../../Box';
import { StylesRecord } from '../styles-api.types';

export type Styles<StylesNames extends string> =
  | StylesRecord<StylesNames, CSSProperties>
  | ((theme: MantineTheme) => StylesRecord<StylesNames, CSSProperties>);

export type ClassNames<StylesNames extends string> = Partial<Record<StylesNames, string>>;

export interface useStylesInput<StylesNames extends string> {
  name: string | (string | undefined)[];
  classes: Record<StylesNames, string>;
  className?: string;
  style?: MantineStyleProp;
  rootSelector?: StylesNames;
  unstyled?: boolean;
  classNames?: ClassNames<StylesNames>;
  styles?: Styles<StylesNames>;
}

export interface GetPropsOptions<StylesNames extends string> {
  className?: string;
  style?: MantineStyleProp;
  focusable?: boolean;
  active?: boolean;
  classNames?: Partial<Record<StylesNames, string>>;
  styles?: Styles<StylesNames>;
  variant?: string;
}

function resolveStyles<StylesNames extends string>(
  styles: Styles<StylesNames> | undefined,
  theme: MantineTheme
) {
  return typeof styles === 'function' ? styles(theme) : styles;
}

function resolveStyle(style: MantineStyleProp | undefined, theme: MantineTheme) {
  if (style == null) {
    return {};
  }

  const arrayStyle = Array.isArray(style) ? style : [style];
  return arrayStyle.reduce(
    (acc, val) => ({ ...acc, ...(typeof val === 'function' ? val(theme) : val) }),
    {}
  );
}

export type GetStylesApi<StylesNames extends string> = (
  selector: StylesNames,
  options?: GetPropsOptions<StylesNames>
) => {
  className: string;
  style: CSSProperties;
};

export function useStyles<StylesNames extends string>({
  name,
  className,
  classes,
  style,
  rootSelector = 'root' as StylesNames,
  unstyled,
  classNames,
  styles,
}: useStylesInput<StylesNames>): GetStylesApi<StylesNames> {
  const theme = useMantineTheme();
  const classNamesPrefix = useMantineClassNamesPrefix();
  const themeName = Array.isArray(name) ? (name.filter((n) => n) as string[]) : [name];
  const resolvedStyles = resolveStyles(styles, theme);
  const resolvedStyle = resolveStyle(style, theme);

  return (selector: StylesNames, options?: GetPropsOptions<StylesNames>) => {
    const themeClassNames = themeName
      .filter((n) => n)
      .map((n) => theme.components?.[n]?.classNames?.[selector]);
    const staticClassNames = themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
    const _className = cx(
      options?.focusable && !unstyled && theme.focusClassNames[theme.focusRing],
      options?.active && !unstyled && theme.activeClassName,
      themeClassNames,
      classNames?.[selector],
      options?.variant && classes[`${selector}--${options.variant}` as StylesNames],
      options?.classNames?.[selector],
      className && { [className]: rootSelector === selector },
      { [classes[selector]]: !unstyled },
      options?.className,
      staticClassNames
    );

    const themeStyles = themeName
      .map((n) => resolveStyles(theme.components?.[n]?.styles, theme)?.[selector])
      .reduce((acc, val) => ({ ...acc, ...val }), {});

    const componentStyles = resolveStyles(options?.styles, theme);

    const _style = {
      ...themeStyles,
      ...resolvedStyles?.[selector],
      ...componentStyles?.[selector],
      ...(rootSelector === selector ? resolvedStyle : {}),
      ...resolveStyle(options?.style, theme),
    } as CSSProperties;

    return { className: _className, style: _style };
  };
}
